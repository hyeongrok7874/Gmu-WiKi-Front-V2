import React from "react";
import * as C from "../../components";

export default function Inquiry() {
  return (
    <>
      <C.RecentModified />
      <C.Header />
      <C.PageContainer title="문의" sort="문의"></C.PageContainer>
      <C.ScrollButton />
      <C.Footer />
    </>
  );
}
