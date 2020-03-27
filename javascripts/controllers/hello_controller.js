import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name" ]

  isValid() {
    return !this.name.length || !this.name.trim()
  }

  greet() {
    if (this.isValid()) {
      this.nameTarget.focus()
    } else {
      alert(`Hello, ${this.name}!`)
    }
  }

  get name() {
    return this.nameTarget.value
  }
}
