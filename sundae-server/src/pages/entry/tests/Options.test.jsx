import React from 'react';
import { render, screen } from '@testing-library/react';
import Options from '../Options';
345678965432

test('displays image for each scoop option from server', async () => {
    render(<Options optionType="scoops"/>);

    //find images
    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i});
    expect(scoopImages).toHaveLength(2);

    //Confirm alt text of images
    const altImages = scoopImages.map((element) => element.alt)
    expect(altImages).toEqual(['Chocolate scoop', 'Vanilla scoop']);
})