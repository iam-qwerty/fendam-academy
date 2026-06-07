import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { SecureFileLink } from '@/components/secure-file-link'

describe('SecureFileLink', () => {
  it('renders the signed href it receives', () => {
    const markup = renderToStaticMarkup(
      <SecureFileLink
        href="https://signed.example/documents/file.pdf"
        label="Open file"
      />,
    )

    expect(markup).toContain('https://signed.example/documents/file.pdf')
    expect(markup).toContain('Open file')
  })

  it('opens links in a new tab with noopener noreferrer', () => {
    const markup = renderToStaticMarkup(
      <SecureFileLink href="https://example.com/doc.pdf" label="Download" />,
    )

    expect(markup).toContain('target="_blank"')
    expect(markup).toContain('noopener')
    expect(markup).toContain('noreferrer')
  })
})
