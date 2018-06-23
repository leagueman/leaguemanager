const fixtures = require('../fixtures');

describe('fixture list generation',()=>{

    let teams = ['Team A','Team B','Team C', 'Team D']
    test('returns a valid 4 team 1-leg fixture list', () => {
        expect( fixtures.createFixtureList(teams, {two_legs:false, random:false}) ).toEqual(  
            expect.arrayContaining([
                expect.objectContaining({home:'Team A', away:'Team C'}),
                expect.objectContaining({home:'Team B', away:'Team D'}),
                expect.objectContaining({home:'Team D', away:'Team A'}),
                expect.objectContaining({home:'Team B', away:'Team C'}),
                expect.objectContaining({home:'Team A', away:'Team B'}),
                expect.objectContaining({home:'Team D', away:'Team C'})
            ])
        );
    })
    test('returns a valid 4 team 2-leg fixture list', () => {
        expect( fixtures.createFixtureList(teams, {two_legs:true}) ).toEqual(  
            expect.arrayContaining([
                expect.objectContaining({home: 'Team A', away:'Team B'}),
                expect.objectContaining({home: 'Team B', away:'Team A'}),
                expect.objectContaining({home: 'Team C', away:'Team D'}),
                expect.objectContaining({home: 'Team D', away:'Team C'}),
                expect.objectContaining({home: 'Team A', away:'Team D'}),
                expect.objectContaining({home: 'Team D', away:'Team A'}),
                expect.objectContaining({home: 'Team B', away:'Team C'}),
                expect.objectContaining({home: 'Team C', away:'Team B'}),
                expect.objectContaining({home: 'Team C', away:'Team A'}),
                expect.objectContaining({home: 'Team A', away:'Team C'}),
                expect.objectContaining({home: 'Team B', away:'Team D'}),
                expect.objectContaining({home: 'Team D', away:'Team B'})
            ])
        );
    })
})