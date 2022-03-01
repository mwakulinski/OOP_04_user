class Validator {
  static checkIfString(item) {
    if (typeof item !== "string" || item.length === 0) {
      throw new Error("value must be a string");
    }
  }

  static throwIfNotProperInstance(instance, classType) {
    if (!(instance instanceof classType)) {
      throw new Error(`${instance} must be of type ${classType.name}`);
    }
  }
}

module.exports = Validator;
