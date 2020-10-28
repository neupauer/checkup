import { cloneElement, useMemo } from "react";
import isFunction from "lodash/isFunction";
import { useRouter } from "next/router";
import BaseLink from "next/link";

function Link({ children, href, prefixMatch }) {
  const { asPath } = useRouter();
  const active = prefixMatch ? asPath.startsWith(href) : asPath === href;
  const child = isFunction(children) ? children({ active }) : children;
  return <BaseLink href={href}>{cloneElement(child, { ...(active ? { "aria-current": "page" } : {}) })}</BaseLink>;
}

export default Link;
