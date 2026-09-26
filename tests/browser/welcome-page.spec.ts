import { expect, test } from '@playwright/test';

test('homepage matches the lighting reference and stays responsive', async ({
    page,
}) => {
    await page.setViewportSize({ width: 940, height: 900 });
    await page.goto(
        new URL('/', process.env.APP_URL ?? 'http://127.0.0.1:8000').href,
    );

    await expect(
        page.getByRole('heading', { name: 'Illuminate Your Space' }),
    ).toBeVisible();
    await expect(
        page.getByRole('heading', { name: 'Shop by Category' }),
    ).toBeVisible();
    await expect(page.locator('a.group')).toHaveCount(5);
    await expect(
        page
            .getByRole('heading', { name: 'Featured Lighting' })
            .locator('xpath=ancestor::section[1]')
            .locator('article'),
    ).toHaveCount(5);
    const featuredGrid = page
        .getByRole('heading', { name: 'Featured Lighting' })
        .locator('xpath=ancestor::section[1]')
        .locator('article')
        .first()
        .locator('xpath=..');
    expect(
        await featuredGrid.evaluate(
            (element) =>
                getComputedStyle(element).gridTemplateColumns.split(' ').length,
        ),
    ).toBe(5);
    await expect(
        page
            .getByRole('heading', { name: 'New Arrivals' })
            .locator('xpath=ancestor::section[1]')
            .locator('article'),
    ).toHaveCount(3);
    await expect(
        page
            .getByRole('heading', { name: 'Best Sellers' })
            .locator('xpath=ancestor::section[1]')
            .locator('article'),
    ).toHaveCount(3);
    await expect(
        page
            .getByRole('heading', { name: 'Inspiration for a Brighter Home' })
            .locator('xpath=ancestor::section[1]')
            .locator('article'),
    ).toHaveCount(3);

    const desktopHasNoOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
    );
    expect(desktopHasNoOverflow).toBe(true);

    await page
        .getByRole('heading', { name: 'Featured Lighting' })
        .locator('xpath=ancestor::section[1]')
        .getByRole('button', { name: 'Add Astra Pendant Light to wishlist' })
        .click();
    await expect(
        page.getByRole('button', {
            name: 'Remove Astra Pendant Light from wishlist',
        }),
    ).toHaveAttribute('aria-pressed', 'true');

    await page
        .getByRole('searchbox', {
            name: 'Search products, collections, or inspiration',
        })
        .fill('pendant');
    await page.getByRole('searchbox').press('Enter');
    await expect(page.getByRole('status')).toContainText('Preview only');
    await page.getByLabel('Email address').fill('lighting@example.com');
    await page.getByRole('button', { name: 'Subscribe' }).click();
    await expect(
        page.getByText('Preview only — no email was sent.'),
    ).toBeVisible();

    await page.setViewportSize({ width: 390, height: 844 });
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeVisible();
    await page.getByRole('button', { name: 'Open menu' }).click();
    await expect(
        page.getByRole('navigation', { name: 'Mobile navigation' }),
    ).toBeVisible();
    expect(
        await page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
    ).toBe(true);
});
