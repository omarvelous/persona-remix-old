import { Outlet } from "@remix-run/react";

export default function Component() {
  return (
    <div>
      _site.$siteSubdomain.$pageSlug._index
      <Outlet/>
    </div>
  );
}