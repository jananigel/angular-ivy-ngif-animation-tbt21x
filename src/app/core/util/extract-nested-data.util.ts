export function ExtractNestedData<T>(
  data: T[],
  conditionKey: string,
  nestedKey: string
): T[] {
  const filterData = data.filter(value => !!value[conditionKey]);
  filterData.forEach(value => {
    if (value[nestedKey]) {
      value[nestedKey] = this.ExtractNestedData(
        value[nestedKey],
        conditionKey,
        nestedKey
      );
    }
  });
  return filterData;
}
