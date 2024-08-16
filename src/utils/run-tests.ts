import { Question } from "@/dumby_data/questions";
import path from "node:path";
import fs from "node:fs"
import { execSync } from "node:child_process";


export async function runTests(codeSolution: string, question: Question){

  const codeSolutionFile = path.join('tmp', `${question.slug}.ts`)
  const codeTestFile = path.join('tmp', `${question.slug}.spec.ts`)

  try{
    fs.writeFileSync(codeSolutionFile, codeSolution)
    fs.writeFileSync(codeTestFile, question.codeTest)

    const result = execSync(`npx vitest run ${codeTestFile} --reporter=json`, {encoding: 'utf-8'})

    console.log(JSON.parse(result))

    return result
  }catch(error: any){
    const errorResult = JSON.parse(error.stdout)
    console.log(errorResult.testResults[0])
  }finally{
    fs.unlinkSync(codeSolutionFile)
    fs.unlinkSync(codeTestFile)
  }


}