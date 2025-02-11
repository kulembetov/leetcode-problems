interface AuthData {
  token: string;
  userId: string;
  username: string;
  expiredAt: number;
}

function asyncAuth(
  callback: (error: Error | null, data: AuthData | null) => void
): void {
  setTimeout(() => {
    const shouldSucced = Math.random() > 0.3;

    if (shouldSucced) {
      const authData: AuthData = {
        token: 'token',
        userId: 'userId',
        username: 'username',
        expiredAt: Date.now() + 1000 * 60 * 60,
      };

      callback(null, authData);
    } else {
      const error = new Error('Auth failed');
      callback(error, null);
    }
  }, 1000);
}

function auth(): Promise<AuthData> {
  return new Promise((resolve, reject) => {
    asyncAuth((error, data) => {
      if (error) {
        reject(error);
      } else if (!data) {
        reject(new Error('No data'));
      } else {
        resolve(data);
      }
    });
  });
}

async function main() {
  try {
    const data = await auth();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

main();

auth()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
