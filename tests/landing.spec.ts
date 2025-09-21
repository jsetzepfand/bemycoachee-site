import { test, expect } from '@playwright/test'

test('Landing page UI basics', async ({ page }) => {
  await page.goto('/')
  const headline = await page.locator('h1').first()
  await expect(headline).toContainText(/coach/i)
  // Button or link with accessible name 'Book a Session', case-insensitive
  const book = page.getByRole(/button|link/, { name: /book a session/i })
  await expect(book).toBeVisible()
})
