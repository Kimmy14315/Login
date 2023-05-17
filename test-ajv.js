import Ajv from "ajv"
import addFormats from "ajv-formats"

const ajv = new Ajv()
addFormats(ajv)
const schema = {
  type: "boolean",
  const: true
}
const validate = ajv.compile(schema)

console.log(validate(false))
