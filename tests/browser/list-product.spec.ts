import { expect, test } from '@playwright/test';

test('catalog layout and local filters', async ({ page }) => {
    await page.setViewportSize({ width: 1584, height: 1024 });
    await page.goto(
        new URL('/list', process.env.APP_URL ?? 'http://127.0.0.1:8000').href,
    );

    await expect(
        page.getByRole('heading', { name: 'Illuminate Your Space' }),
    ).toBeVisible();
    await expect(page.locator('.shop-products article')).toHaveCount(4);

    await page.getByRole('button', { name: 'Product Type' }).click();
    await page.getByRole('checkbox', { name: 'Wall Lighting' }).check();

    await expect(page.locator('.shop-products article')).toHaveCount(1);
    await expect(page.locator('.shop-products article')).toContainText(
        'Niko Wall Sconce',
    );

    await page.setViewportSize({ width: 390, height: 844 });
    await expect(page.getByRole('button', { name: 'Filter' })).toBeVisible();
    await page.getByRole('button', { name: 'Filter' }).click();
    await expect(
        page.getByRole('complementary', { name: 'Product filters' }),
    ).toBeVisible();
    await page.getByRole('button', { name: 'Close filters' }).last().click();
    await expect(
        page.getByRole('complementary', { name: 'Product filters' }),
    ).toBeHidden();
    expect(
        await page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
    ).toBe(true);
});
