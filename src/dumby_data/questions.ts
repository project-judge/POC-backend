export interface Question {
  id: number
  title: string
  slug: string
  description: string
  codeSnippet: string
  codeTest: string
}

export const questions: Question[] = [
  {
    id: 1,
    title: 'Hello World',
    slug: 'hello-world',
    description: "Execute a function that returns the value 'Hello World!'",
    codeSnippet: `
      export default function helloWorld(){
        // write your code here
      }
    `,
    codeTest: `
      import helloWorld from './hello-world'
      import {describe, it, expect} from 'vitest'

      describe('helloWorld question', ()=>{
        it('should be able to return Hello World', ()=>{
          expect(helloWorld()).toBe('Hello World!')
        })
      })
    `,
  },
  {
    id: 2,
    title: 'Basic sum',
    slug: 'basic-sum',
    description: 'Execute a function that returns the sum of two numbers',
    codeSnippet: `
      export default function basicSum(num1, num2){
        // write your code here
      }
    `,
    codeTest: `
      import basicSum from './basic-sum'
      import {describe, it, expect} from 'vitest'

      describe('basic sum question', ()=>{
        it('should be able to return the sum of two numbers', ()=>{
          expect(basicSum(2,3)).toBe(5)
        })
      })
    `,
  },
  {
    id: 3,
    title: 'Binary Search',
    slug: 'binary-search',
    description: `<div class="prose dark:prose-invert prose-sm"><p>Implement a function that performs binary search on an array of numbers. The function should take in a sorted array of integers and a target integer to find. It returns the index of the target element or -1, if the target element doesn't exist in the array.</p>
<h2 class="group scroll-mt-28">Examples</h2>
<div><div class="relative"><pre class="prism-code language-js" style="color: rgb(248, 248, 242); background-color: rgb(40, 42, 54);"><div class="token-line" style="color: rgb(248, 248, 242);"><span class="token function" style="color: rgb(80, 250, 123);">binarySearch</span><span class="token punctuation" style="color: rgb(248, 248, 242);">(</span><span class="token punctuation" style="color: rgb(248, 248, 242);">[</span><span class="token number">1</span><span class="token punctuation" style="color: rgb(248, 248, 242);">,</span><span class="token plain"> </span><span class="token number">2</span><span class="token punctuation" style="color: rgb(248, 248, 242);">,</span><span class="token plain"> </span><span class="token number">3</span><span class="token punctuation" style="color: rgb(248, 248, 242);">,</span><span class="token plain"> </span><span class="token number">6</span><span class="token punctuation" style="color: rgb(248, 248, 242);">,</span><span class="token plain"> </span><span class="token number">9</span><span class="token punctuation" style="color: rgb(248, 248, 242);">,</span><span class="token plain"> </span><span class="token number">11</span><span class="token punctuation" style="color: rgb(248, 248, 242);">]</span><span class="token punctuation" style="color: rgb(248, 248, 242);">,</span><span class="token plain"> </span><span class="token number">6</span><span class="token punctuation" style="color: rgb(248, 248, 242);">)</span><span class="token punctuation" style="color: rgb(248, 248, 242);">;</span><span class="token plain"> </span><span class="token comment" style="color: rgb(98, 114, 164);">// 3</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(248, 248, 242);"><span class="token plain"></span><span class="token function" style="color: rgb(80, 250, 123);">binarySearch</span><span class="token punctuation" style="color: rgb(248, 248, 242);">(</span><span class="token punctuation" style="color: rgb(248, 248, 242);">[</span><span class="token number">1</span><span class="token punctuation" style="color: rgb(248, 248, 242);">,</span><span class="token plain"> </span><span class="token number">2</span><span class="token punctuation" style="color: rgb(248, 248, 242);">,</span><span class="token plain"> </span><span class="token number">3</span><span class="token punctuation" style="color: rgb(248, 248, 242);">,</span><span class="token plain"> </span><span class="token number">12</span><span class="token punctuation" style="color: rgb(248, 248, 242);">,</span><span class="token plain"> </span><span class="token number">14</span><span class="token punctuation" style="color: rgb(248, 248, 242);">,</span><span class="token plain"> </span><span class="token number">16</span><span class="token punctuation" style="color: rgb(248, 248, 242);">]</span><span class="token punctuation" style="color: rgb(248, 248, 242);">,</span><span class="token plain"> </span><span class="token number">5</span><span class="token punctuation" style="color: rgb(248, 248, 242);">)</span><span class="token punctuation" style="color: rgb(248, 248, 242);">;</span><span class="token plain"> </span><span class="token comment" style="color: rgb(98, 114, 164);">// -1</span></div></pre></div></div>
<h2 class="group scroll-mt-28">Recap</h2>
<p>Binary search is a search algorithm that can efficiently determine if a sorted array of integers contain a specific number. The algorithm repeatedly divides the input array into half until the target element is found, thereby decreasing the search space by half each step. It is a significant improvement versus linear search.</p>
<p>Here is a quick explanation of how binary search works on an array that is already sorted:</p>
<ol>
<li>Calculate the middle index of the array and retrieve the middle element.</li>
<li>If the target element is greater than the middle element, search the right half of the array (ignore the left half).</li>
<li>If the target element is lesser than the middle element, search the left half of the array.</li>
<li>If the target element is equal to the middle element, return the index of the element.</li>
<li>Repeat the steps above until we complete the search. Return -1 if the target was not found.</li>
</ol></div>`,
    codeSnippet: `
export default function binarySearch(array, target){
  // write your code here
}
    `,
    codeTest: `
import binarySearch from './binary-search';
import {describe, it, expect} from 'vitest'

describe('binarySearch', () => {
  it('target value', () => {
    expect(binarySearch([1, 2, 3, 10, 11, 20], 2)).toBe(1);
  });

  it('boundary value', () => {
    expect(binarySearch([1, 2, 3, 10, 11, 20], 20)).toBe(5);
  });

  it('non-existent value', () => {
    expect(binarySearch([1, 2, 3, 10, 11, 20], 9)).toBe(-1);
  });
});
    `,
  },
]
