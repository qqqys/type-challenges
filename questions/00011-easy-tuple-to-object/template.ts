type TupleToObject<T extends readonly (string | symbol | number)[]> = {
    [k in T[number]]: k
}
