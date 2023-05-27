import { load as loadObject} from "load-object"

export const load =
  async () => await loadObject("./cakebase.yaml")
