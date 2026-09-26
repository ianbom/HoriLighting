import { expect, test } from '@playwright/test';

test('product detail layout and local controls', async ({ page }) => {
    await page.setViewportSize({ width: 1536, height: 960 });
    await page.goto(
        new URL('/detail', process.env.APP_URL ?? 'http://127.0.0.1:8000').href,
    );

    await expect(
        page.getByRole('heading', { name: 'Astra Pendant Light', level: 1 }),
    ).toBeVisible();
    await expect(
        page.getByRole('heading', { name: 'Specifications' }),
    ).toBeVisible();
    await expect(
        page.getByRole('button', { name: 'View product image 1' }),
    ).toHaveAttribute('aria-pressed', 'true');

    await page.getByRole('button', { name: 'View product image 2' }).click();
    await expect(
        page.getByRole('img', {
            name: 'Astra Pendant Light illuminating a modern interior',
        }),
    ).toBeVisible();
    await page.getByRole('button', { name: 'Soft White' }).click();
    await expect(
        page.getByRole('button', { name: 'Soft White' }),
    ).toHaveAttribute('aria-pressed', 'true');
    await page.getByRole('button', { name: /Small/ }).click();
    await expect(page.getByRole('button', { name: /Small/ })).toHaveAttribute(
        'aria-pressed',
        'true',
    );
    await page.getByRole('button', { name: 'Increase quantity' }).click();
    await expect(page.locator('span[aria-live="polite"]')).toHaveText('2');

    await page.setViewportSize({ width: 390, height: 844 });
    expect(
        await page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
    ).toBe(true);
});
