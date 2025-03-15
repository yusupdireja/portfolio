export class AtomsButtonType {
  static OUTLINE = 'outline'
  static ELEVATED = 'elevated'

  static getEnumValues(): string[] {
    return Object.values(AtomsButtonType)
  }

  static getEnumKeyByValue(value: string): string | undefined {
    return Object.keys(AtomsButtonType).find((key) => (AtomsButtonType as any)[key] === value)
  }

  static getEnumValueByKey(key: string): string | undefined {
    return (AtomsButtonType as any)[key]
  }
}
