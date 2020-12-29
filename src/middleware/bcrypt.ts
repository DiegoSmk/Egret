import bcrypt from 'bcrypt'

export class Auth {
  public static hashPassword(
    password: string,
    callback: (error: Error, hash: string) => void
  ): void {
    const rounds = 10
    bcrypt.hash(password, rounds, (error, hash) => {
      callback(error, hash)
    })
  }

  public static compare(password: string, dbHash: string): Promise<boolean> {
    return new Promise((resolve, reject) =>
      bcrypt.compare(password, dbHash, (err: Error, match: boolean) => {
        if (err) {
          // passwords match
          reject(err)
        } else {
          // passwords do not match
          resolve(match)
        }
      })
    )
  }
}
