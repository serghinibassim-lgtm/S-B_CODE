import axios from 'axios'

const PISTON_URL = "https://emkc.org/api/v2/piston/execute";

 export const executeCode = async () => {
 
 
   

    try {
      const response = await axios.post(
        "https://emkc.org/api/v2/piston/execute",
        {
        "language": "python",
        "version": "3.10.0",
        "files": [
    {
      "name": "main.py",
      "content": "print(5*7)"
    }
  ]},
        {
          headers: { "Content-Type": "application/json" }
        }
      );

      const result=response.data;
      console.log(response)
if (result.run) {
 return {
    stdout: result.run.stdout,
    stderr: result.run.stderr,
    output: result.run.output,
    exitCode: result.run.code
  }
} else {
  return  "pas de resultat depui piston ";
}

   

    } catch (error) {
      return "Erreur API : " + error.message
    }

}

console.log(executeCode());
