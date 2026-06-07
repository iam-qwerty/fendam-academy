import { describe, expect, it } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { SecureFileLink } from "@/components/secure-file-link";

describe("SecureFileLink", () => {
  it("renders the signed href it receives", () => {
    const markup = renderToStaticMarkup(
      <SecureFileLink
        href="https://signed.example/documents/file.pdf"
        label="Open file"
      />,
    );

    expect(markup).toContain("https://signed.example/documents/file.pdf");
    expect(markup).toContain("Open file");
  });
});
