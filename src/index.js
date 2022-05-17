import './styles.css'
import codegen from 'codegen.macro'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

codegen`module.exports = require('@kentcdodds/react-workshop-app/codegen')`
