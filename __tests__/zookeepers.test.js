const fs = require('fs');
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper
} = require('../lib/zookeepers');
const { zookeepers } = require('../data/zookeepers.json');

jest.mock('fs');

test('create zookeeper object', () => {
    const zookeeper = createNewZookeeper( { name: 'Darlene', id: 'jhgdja3ng2' }, zookeepers);
    expect(zookeeper.name).toBe('Darlene');
    expect(zookeeper.id).toBe('jhgdja3ng2');
})

test('filter by query', () => {
    const startingZookeepers = [
        {
            name: 'Zoe',
            age: 37,
            favoriteAnimal: 'Jillian'
        },
        {
            name: 'Miles',
            age: 30,
            favoriteAnimal: 'Jeffe'
        }
    ]

    const filteredZookeepers = filterByQuery({ age: 30 }, startingZookeepers);

    expect(filteredZookeepers.length).toEqual(1);
});

test('find by id', () => {
    const startingZookeepers = [
        {
            name: 'Zoe',
            age: 37,
            favoriteAnimal: 'Jillian',
            id: '3'
        },
        {
            name: 'Miles',
            age: 30,
            favoriteAnimal: 'Jeffe',
            id: '12'
        }
    ]

    const result = findById('12', startingZookeepers);

    expect(result.name).toBe('Miles');
});

test('validate zookeeper', () => {
    const zookeeper = {
        name: 'Miles',
        age: 30,
        favoriteAnimal: 'Jeffe'
    };

    const invalidZookeeper = {
        name: 'Zoe',
        age: '37'
    };

    const validResult = validateZookeeper(zookeeper);
    const invalidResult = validateZookeeper(invalidZookeeper);

    expect(validResult).toBe(true);
    expect(invalidResult).toBe(false);
});