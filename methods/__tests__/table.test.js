const {createTable} = require('../table.js')

describe('correct table gets returned', ()=>{
    
    let fixtures = [
            { home_team:'xxx', away_team:'zzz', score:{home_score:3, away_score:3} },
            { home_team:'zzz', away_team:'xxx', score:{home_score:1, away_score:3} },
        ]

    let mock_fixtures = [
        { home_team:'xxx', away_team:'zzz', score:{home_score:3, away_score:3} },
        { home_team:'zzz', away_team:'xxx', score:{home_score:1, away_score:3} },        
        { home_team:'yyy', away_team:'xxx', score:{home_score:4, away_score:2} },
        { home_team:'zzz', away_team:'yyy', score:{home_score:2, away_score:1} },
        { home_team:'xxx', away_team:'zzz', score:{home_score:0, away_score:3} },
    ]

    let fixturesBroken = [
            { home_team:'xxx', away_team:'zzz', score:{home_score:null, away_score:3} },
            { home_team:'zzz', away_team:'xxx', score:{home_score:1, away_score:3} },
        ]

    test('returns a correct league table', ()=>{
        expect(createTable(fixtures)).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    team: 'xxx',p: 2,w: 1,d: 1,l: 0,f: 6,a: 4,gd: 2,pts: 4,hp: 1,ap: 1,hw: 0,aw: 1,hd: 1,ad: 0,hl: 0,al: 0,hf: 3,af: 3,ha: 3,aa: 1,hgd: 0,agd: 2,hpts: 1,apts: 3,form: '13',hform: '1',aform: '3' 
                }),                
                expect.objectContaining({
                    team: 'zzz',p: 2,w: 0,d: 1,l:1,f:4,a:6,gd:-2,pts:1,hp: 1,ap: 1,hw: 0,aw: 0,hd: 0,ad: 1,hl: 1,al: 0,hf: 1,af: 3,ha: 3,aa: 3,hgd: -2,agd: 0,hpts: 0,apts: 1,form: '10',hform: '0',aform: '1'
                })
            ])
        )
    })

    test('returns a correct league table', ()=>{
        expect(createTable(fixturesBroken)).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    team: 'xxx',p:1,w:1,d:0,l:0,f:3,a:1,gd:2,pts:3,hp:0,ap:1,hw:0,aw:1,hd:0,ad:0,hl:0,al:0,hf:0,af:3,ha:0,aa:1,hgd:0,agd:2,hpts:0,apts:3,form:'3',hform:'',aform:'3' 
                }),  
                expect.objectContaining({
                    team: 'zzz',p:1,w:0,d:0,l:1,f:1,a:3,gd:-2,pts:0,hp:1,ap:0,hw:0,aw:0,hd:0,ad:0,hl:1,al:0,hf:1,af:0,ha:3,aa:0,hgd:-2,agd:0,hpts:0,apts:0,form:'0',hform:'0',aform:''
                })
            ])
        )
    })
})
