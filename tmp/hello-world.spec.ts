
      import helloWorld from './hello-world'
      import {describe, it, expect} from 'vitest'

      describe('helloWorld question', ()=>{
        it('should be able to return Hello World', ()=>{
          expect(helloWorld()).toBe('Hello World!')
        })
      })
    