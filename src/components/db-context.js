import _ from "lodash";
import { createContext, useEffect, useReducer } from "react";

import db from "~/integrations/pouchdb";

const initialState = { docs: [], collection: {} };

function reducer(state, action) {
  switch (action.type) {
    case "change":
      const docs = _.flow([
        _.partialRight(_.uniqBy, "_id"),
        _.partialRight(_.orderBy, "_id"),
        _.partialRight(_.filter, (o) => !o?._deleted),
        _.partialRight(_.sortBy, "timestamp"),
        _.partialRight(_.reverse),
      ])([action.payload, ...state.docs]);

      return {
        docs: docs,
        collection: _.groupBy(docs, "type"),
        document: _.keyBy(docs, "_id"),
      };
    default:
      throw new Error("Invalid action type");
  }
}

const DbContext = createContext();

function DbProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const connectionString =
      process.env.NEXT_PUBLIC_DOCKER == "1" ? "http://admin:admin@couchdb/checkup" : process.env.NEXT_PUBLIC_DB;

    const sync = db.sync(connectionString, { live: true, retry: true }).on("error", console.error);

    const changes = db
      .changes({ since: 0, live: true, include_docs: true })
      .on("change", (change) => {
        dispatch({ type: "change", payload: change.doc });
      })
      .on("error", console.error);

    return () => {
      sync.cancel();
      changes.cancel();
    };
  }, []);

  const value = { state, dispatch };

  return <DbContext.Provider value={value}>{children}</DbContext.Provider>;
}

export { DbContext, DbProvider };
