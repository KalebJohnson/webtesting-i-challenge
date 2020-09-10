const enhancer = require('./enhancer.js')

describe('repair', function () {
     // test data
     const testRepair = {
          name: 'test',
          enhancement: 13,
          durability: 40,
     }
     it('should repair/update durability to 100', function () {
          expect(testRepair.durability).toBe(40)
          expect(enhancer.repair(testRepair)).toBeTruthy()
          expect(enhancer.repair(testRepair)).toEqual({
               ...testRepair,
               durability: 100,
          })
     })
})


describe('success', function () {

     const testWork = {
          name: 'player1',
          enhancement: 16,
          durability: 50
     }

     const testWork2 = {
          name: 'player2',
          enhancement: 20,
          durability: 50
     }

     it('should add 1 to enhancement if less than 20', function () {
          expect(testWork.enhancement).toBe(16)
          expect(enhancer.success(testWork))
               .toEqual({
                    ...testWork,
                    enhancement: 17,
               })
     })
     it('should NOT add anything if enhancement is 20', function () {
          expect(testWork2.enhancement).toBe(20)
          expect(enhancer.success(testWork2))
               .toEqual({
                    ...testWork2,
                    //Make sure enhacement does not pass cap (20)
                    enhancement: 20,
               })
     })
})

describe('fail', function () {
     // test data
     const testFail1 = {
          name: 'player3',
          enhancement: 14,
          durability: 60
     }

     const testFail2 = {
          name: 'player4',
          enhancement: 19,
          durability: 75
     }

     const testFail3 = {
          name: 'player1',
          enhancement: 16,
          durability: 50
     }

     it('should decrease durability by 5 IF enhancement < 15', function () {
          expect(testFail1.enhancement).toBe(14)
          expect(enhancer.fail(testFail1))
               .toEqual({
                    ...testFail1,
                    durability: 55
               })
     })

     it('should decrease durability by 10 IF enhancement >= 15', function () {
          expect(testFail3.enhancement).toBe(16)
          expect(enhancer.fail(testFail3))
               .toEqual({
                    ...testFail3,
                    durability: 40
               })
     })
     it('should decrease enhancement level by 1 if it is greater than 16', function () {
          // change the durability from 75 to 65
          expect(testFail2.enhancement).toBe(19)
          expect(enhancer.fail(testFail2))
               .toEqual({
                    ...testFail2,
                    enhancement: 18,
                    durability: 65
               })
     })
})

