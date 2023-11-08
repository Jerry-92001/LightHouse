import{expect, test} from '@playwright/test'
import {URL} from '../src/TestData/Domain.json';

URL.forEach((data, idx)=>{

    test('Meta and Description'+(idx), async({page})=>{

        await page.goto(data.slug);
        await expect(page).toHaveTitle(data.title);
        const metaDescription = page.locator('meta[name="description"]');
        await expect(metaDescription).toHaveAttribute('content', data.description);
    
    })
});
