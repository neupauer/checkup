import { useContext } from "react";

import { DbContext } from "~/components/db-context";

function TestScreen() {
  const context = useContext(DbContext);

  return (
    <div>
      <pre>{JSON.stringify(context, null, 2)}</pre>
    </div>
  );
}

export default TestScreen;
