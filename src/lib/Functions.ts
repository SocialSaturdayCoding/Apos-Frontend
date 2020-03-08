
export default class Functions{
    static generateID(prefix: string, length: number = 6) {
        return prefix + (Math.random() + 1).toString(36).substring(2, length + 2)
    }
}
