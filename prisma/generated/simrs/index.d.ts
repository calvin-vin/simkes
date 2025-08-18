
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PaymentMethod
 * 
 */
export type PaymentMethod = $Result.DefaultSelection<Prisma.$PaymentMethodPayload>
/**
 * Model TempatTidur
 * 
 */
export type TempatTidur = $Result.DefaultSelection<Prisma.$TempatTidurPayload>
/**
 * Model Kamar
 * 
 */
export type Kamar = $Result.DefaultSelection<Prisma.$KamarPayload>
/**
 * Model Ruangan
 * 
 */
export type Ruangan = $Result.DefaultSelection<Prisma.$RuanganPayload>
/**
 * Model StatusBed
 * 
 */
export type StatusBed = $Result.DefaultSelection<Prisma.$StatusBedPayload>
/**
 * Model Kelas
 * 
 */
export type Kelas = $Result.DefaultSelection<Prisma.$KelasPayload>
/**
 * Model Departemen
 * 
 */
export type Departemen = $Result.DefaultSelection<Prisma.$DepartemenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PaymentMethods
 * const paymentMethods = await prisma.paymentMethod.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PaymentMethods
   * const paymentMethods = await prisma.paymentMethod.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.paymentMethod`: Exposes CRUD operations for the **PaymentMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentMethods
    * const paymentMethods = await prisma.paymentMethod.findMany()
    * ```
    */
  get paymentMethod(): Prisma.PaymentMethodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tempatTidur`: Exposes CRUD operations for the **TempatTidur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TempatTidurs
    * const tempatTidurs = await prisma.tempatTidur.findMany()
    * ```
    */
  get tempatTidur(): Prisma.TempatTidurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kamar`: Exposes CRUD operations for the **Kamar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kamars
    * const kamars = await prisma.kamar.findMany()
    * ```
    */
  get kamar(): Prisma.KamarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ruangan`: Exposes CRUD operations for the **Ruangan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ruangans
    * const ruangans = await prisma.ruangan.findMany()
    * ```
    */
  get ruangan(): Prisma.RuanganDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statusBed`: Exposes CRUD operations for the **StatusBed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatusBeds
    * const statusBeds = await prisma.statusBed.findMany()
    * ```
    */
  get statusBed(): Prisma.StatusBedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kelas`: Exposes CRUD operations for the **Kelas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kelas
    * const kelas = await prisma.kelas.findMany()
    * ```
    */
  get kelas(): Prisma.KelasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.departemen`: Exposes CRUD operations for the **Departemen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departemen
    * const departemen = await prisma.departemen.findMany()
    * ```
    */
  get departemen(): Prisma.DepartemenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PaymentMethod: 'PaymentMethod',
    TempatTidur: 'TempatTidur',
    Kamar: 'Kamar',
    Ruangan: 'Ruangan',
    StatusBed: 'StatusBed',
    Kelas: 'Kelas',
    Departemen: 'Departemen'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "paymentMethod" | "tempatTidur" | "kamar" | "ruangan" | "statusBed" | "kelas" | "departemen"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PaymentMethod: {
        payload: Prisma.$PaymentMethodPayload<ExtArgs>
        fields: Prisma.PaymentMethodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentMethodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentMethodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findFirst: {
            args: Prisma.PaymentMethodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentMethodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findMany: {
            args: Prisma.PaymentMethodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          create: {
            args: Prisma.PaymentMethodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          createMany: {
            args: Prisma.PaymentMethodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentMethodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          delete: {
            args: Prisma.PaymentMethodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          update: {
            args: Prisma.PaymentMethodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          deleteMany: {
            args: Prisma.PaymentMethodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentMethodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentMethodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          upsert: {
            args: Prisma.PaymentMethodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          aggregate: {
            args: Prisma.PaymentMethodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentMethod>
          }
          groupBy: {
            args: Prisma.PaymentMethodGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentMethodCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodCountAggregateOutputType> | number
          }
        }
      }
      TempatTidur: {
        payload: Prisma.$TempatTidurPayload<ExtArgs>
        fields: Prisma.TempatTidurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TempatTidurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempatTidurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TempatTidurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempatTidurPayload>
          }
          findFirst: {
            args: Prisma.TempatTidurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempatTidurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TempatTidurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempatTidurPayload>
          }
          findMany: {
            args: Prisma.TempatTidurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempatTidurPayload>[]
          }
          create: {
            args: Prisma.TempatTidurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempatTidurPayload>
          }
          createMany: {
            args: Prisma.TempatTidurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TempatTidurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempatTidurPayload>[]
          }
          delete: {
            args: Prisma.TempatTidurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempatTidurPayload>
          }
          update: {
            args: Prisma.TempatTidurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempatTidurPayload>
          }
          deleteMany: {
            args: Prisma.TempatTidurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TempatTidurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TempatTidurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempatTidurPayload>[]
          }
          upsert: {
            args: Prisma.TempatTidurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TempatTidurPayload>
          }
          aggregate: {
            args: Prisma.TempatTidurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTempatTidur>
          }
          groupBy: {
            args: Prisma.TempatTidurGroupByArgs<ExtArgs>
            result: $Utils.Optional<TempatTidurGroupByOutputType>[]
          }
          count: {
            args: Prisma.TempatTidurCountArgs<ExtArgs>
            result: $Utils.Optional<TempatTidurCountAggregateOutputType> | number
          }
        }
      }
      Kamar: {
        payload: Prisma.$KamarPayload<ExtArgs>
        fields: Prisma.KamarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KamarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KamarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>
          }
          findFirst: {
            args: Prisma.KamarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KamarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>
          }
          findMany: {
            args: Prisma.KamarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>[]
          }
          create: {
            args: Prisma.KamarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>
          }
          createMany: {
            args: Prisma.KamarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KamarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>[]
          }
          delete: {
            args: Prisma.KamarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>
          }
          update: {
            args: Prisma.KamarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>
          }
          deleteMany: {
            args: Prisma.KamarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KamarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KamarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>[]
          }
          upsert: {
            args: Prisma.KamarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>
          }
          aggregate: {
            args: Prisma.KamarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKamar>
          }
          groupBy: {
            args: Prisma.KamarGroupByArgs<ExtArgs>
            result: $Utils.Optional<KamarGroupByOutputType>[]
          }
          count: {
            args: Prisma.KamarCountArgs<ExtArgs>
            result: $Utils.Optional<KamarCountAggregateOutputType> | number
          }
        }
      }
      Ruangan: {
        payload: Prisma.$RuanganPayload<ExtArgs>
        fields: Prisma.RuanganFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RuanganFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RuanganFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          findFirst: {
            args: Prisma.RuanganFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RuanganFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          findMany: {
            args: Prisma.RuanganFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>[]
          }
          create: {
            args: Prisma.RuanganCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          createMany: {
            args: Prisma.RuanganCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RuanganCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>[]
          }
          delete: {
            args: Prisma.RuanganDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          update: {
            args: Prisma.RuanganUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          deleteMany: {
            args: Prisma.RuanganDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RuanganUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RuanganUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>[]
          }
          upsert: {
            args: Prisma.RuanganUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          aggregate: {
            args: Prisma.RuanganAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRuangan>
          }
          groupBy: {
            args: Prisma.RuanganGroupByArgs<ExtArgs>
            result: $Utils.Optional<RuanganGroupByOutputType>[]
          }
          count: {
            args: Prisma.RuanganCountArgs<ExtArgs>
            result: $Utils.Optional<RuanganCountAggregateOutputType> | number
          }
        }
      }
      StatusBed: {
        payload: Prisma.$StatusBedPayload<ExtArgs>
        fields: Prisma.StatusBedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusBedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusBedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusBedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusBedPayload>
          }
          findFirst: {
            args: Prisma.StatusBedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusBedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusBedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusBedPayload>
          }
          findMany: {
            args: Prisma.StatusBedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusBedPayload>[]
          }
          create: {
            args: Prisma.StatusBedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusBedPayload>
          }
          createMany: {
            args: Prisma.StatusBedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatusBedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusBedPayload>[]
          }
          delete: {
            args: Prisma.StatusBedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusBedPayload>
          }
          update: {
            args: Prisma.StatusBedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusBedPayload>
          }
          deleteMany: {
            args: Prisma.StatusBedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusBedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatusBedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusBedPayload>[]
          }
          upsert: {
            args: Prisma.StatusBedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusBedPayload>
          }
          aggregate: {
            args: Prisma.StatusBedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatusBed>
          }
          groupBy: {
            args: Prisma.StatusBedGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusBedGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusBedCountArgs<ExtArgs>
            result: $Utils.Optional<StatusBedCountAggregateOutputType> | number
          }
        }
      }
      Kelas: {
        payload: Prisma.$KelasPayload<ExtArgs>
        fields: Prisma.KelasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KelasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KelasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          findFirst: {
            args: Prisma.KelasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KelasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          findMany: {
            args: Prisma.KelasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>[]
          }
          create: {
            args: Prisma.KelasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          createMany: {
            args: Prisma.KelasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KelasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>[]
          }
          delete: {
            args: Prisma.KelasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          update: {
            args: Prisma.KelasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          deleteMany: {
            args: Prisma.KelasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KelasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KelasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>[]
          }
          upsert: {
            args: Prisma.KelasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          aggregate: {
            args: Prisma.KelasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKelas>
          }
          groupBy: {
            args: Prisma.KelasGroupByArgs<ExtArgs>
            result: $Utils.Optional<KelasGroupByOutputType>[]
          }
          count: {
            args: Prisma.KelasCountArgs<ExtArgs>
            result: $Utils.Optional<KelasCountAggregateOutputType> | number
          }
        }
      }
      Departemen: {
        payload: Prisma.$DepartemenPayload<ExtArgs>
        fields: Prisma.DepartemenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartemenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartemenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>
          }
          findFirst: {
            args: Prisma.DepartemenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartemenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>
          }
          findMany: {
            args: Prisma.DepartemenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>[]
          }
          create: {
            args: Prisma.DepartemenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>
          }
          createMany: {
            args: Prisma.DepartemenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartemenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>[]
          }
          delete: {
            args: Prisma.DepartemenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>
          }
          update: {
            args: Prisma.DepartemenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>
          }
          deleteMany: {
            args: Prisma.DepartemenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartemenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartemenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>[]
          }
          upsert: {
            args: Prisma.DepartemenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>
          }
          aggregate: {
            args: Prisma.DepartemenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartemen>
          }
          groupBy: {
            args: Prisma.DepartemenGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartemenGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartemenCountArgs<ExtArgs>
            result: $Utils.Optional<DepartemenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    paymentMethod?: PaymentMethodOmit
    tempatTidur?: TempatTidurOmit
    kamar?: KamarOmit
    ruangan?: RuanganOmit
    statusBed?: StatusBedOmit
    kelas?: KelasOmit
    departemen?: DepartemenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type KamarCountOutputType
   */

  export type KamarCountOutputType = {
    tempatTidur: number
  }

  export type KamarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tempatTidur?: boolean | KamarCountOutputTypeCountTempatTidurArgs
  }

  // Custom InputTypes
  /**
   * KamarCountOutputType without action
   */
  export type KamarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KamarCountOutputType
     */
    select?: KamarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KamarCountOutputType without action
   */
  export type KamarCountOutputTypeCountTempatTidurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TempatTidurWhereInput
  }


  /**
   * Count Type RuanganCountOutputType
   */

  export type RuanganCountOutputType = {
    kamars: number
  }

  export type RuanganCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kamars?: boolean | RuanganCountOutputTypeCountKamarsArgs
  }

  // Custom InputTypes
  /**
   * RuanganCountOutputType without action
   */
  export type RuanganCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuanganCountOutputType
     */
    select?: RuanganCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RuanganCountOutputType without action
   */
  export type RuanganCountOutputTypeCountKamarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KamarWhereInput
  }


  /**
   * Count Type StatusBedCountOutputType
   */

  export type StatusBedCountOutputType = {
    tempatTidur: number
  }

  export type StatusBedCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tempatTidur?: boolean | StatusBedCountOutputTypeCountTempatTidurArgs
  }

  // Custom InputTypes
  /**
   * StatusBedCountOutputType without action
   */
  export type StatusBedCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusBedCountOutputType
     */
    select?: StatusBedCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatusBedCountOutputType without action
   */
  export type StatusBedCountOutputTypeCountTempatTidurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TempatTidurWhereInput
  }


  /**
   * Count Type KelasCountOutputType
   */

  export type KelasCountOutputType = {
    kamars: number
  }

  export type KelasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kamars?: boolean | KelasCountOutputTypeCountKamarsArgs
  }

  // Custom InputTypes
  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KelasCountOutputType
     */
    select?: KelasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeCountKamarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KamarWhereInput
  }


  /**
   * Count Type DepartemenCountOutputType
   */

  export type DepartemenCountOutputType = {
    ruangans: number
  }

  export type DepartemenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ruangans?: boolean | DepartemenCountOutputTypeCountRuangansArgs
  }

  // Custom InputTypes
  /**
   * DepartemenCountOutputType without action
   */
  export type DepartemenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartemenCountOutputType
     */
    select?: DepartemenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartemenCountOutputType without action
   */
  export type DepartemenCountOutputTypeCountRuangansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuanganWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PaymentMethod
   */

  export type AggregatePaymentMethod = {
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  export type PaymentMethodAvgAggregateOutputType = {
    id: number | null
  }

  export type PaymentMethodSumAggregateOutputType = {
    id: number | null
  }

  export type PaymentMethodMinAggregateOutputType = {
    id: number | null
    statusenabled: boolean | null
    reportdisplay: string | null
  }

  export type PaymentMethodMaxAggregateOutputType = {
    id: number | null
    statusenabled: boolean | null
    reportdisplay: string | null
  }

  export type PaymentMethodCountAggregateOutputType = {
    id: number
    statusenabled: number
    reportdisplay: number
    _all: number
  }


  export type PaymentMethodAvgAggregateInputType = {
    id?: true
  }

  export type PaymentMethodSumAggregateInputType = {
    id?: true
  }

  export type PaymentMethodMinAggregateInputType = {
    id?: true
    statusenabled?: true
    reportdisplay?: true
  }

  export type PaymentMethodMaxAggregateInputType = {
    id?: true
    statusenabled?: true
    reportdisplay?: true
  }

  export type PaymentMethodCountAggregateInputType = {
    id?: true
    statusenabled?: true
    reportdisplay?: true
    _all?: true
  }

  export type PaymentMethodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethod to aggregate.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentMethods
    **/
    _count?: true | PaymentMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentMethodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentMethodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type GetPaymentMethodAggregateType<T extends PaymentMethodAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentMethod[P]>
      : GetScalarType<T[P], AggregatePaymentMethod[P]>
  }




  export type PaymentMethodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodWhereInput
    orderBy?: PaymentMethodOrderByWithAggregationInput | PaymentMethodOrderByWithAggregationInput[]
    by: PaymentMethodScalarFieldEnum[] | PaymentMethodScalarFieldEnum
    having?: PaymentMethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentMethodCountAggregateInputType | true
    _avg?: PaymentMethodAvgAggregateInputType
    _sum?: PaymentMethodSumAggregateInputType
    _min?: PaymentMethodMinAggregateInputType
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type PaymentMethodGroupByOutputType = {
    id: number
    statusenabled: boolean
    reportdisplay: string
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  type GetPaymentMethodGroupByPayload<T extends PaymentMethodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
        }
      >
    >


  export type PaymentMethodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statusenabled?: boolean
    reportdisplay?: boolean
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statusenabled?: boolean
    reportdisplay?: boolean
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statusenabled?: boolean
    reportdisplay?: boolean
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectScalar = {
    id?: boolean
    statusenabled?: boolean
    reportdisplay?: boolean
  }

  export type PaymentMethodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "statusenabled" | "reportdisplay", ExtArgs["result"]["paymentMethod"]>

  export type $PaymentMethodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentMethod"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      statusenabled: boolean
      reportdisplay: string
    }, ExtArgs["result"]["paymentMethod"]>
    composites: {}
  }

  type PaymentMethodGetPayload<S extends boolean | null | undefined | PaymentMethodDefaultArgs> = $Result.GetResult<Prisma.$PaymentMethodPayload, S>

  type PaymentMethodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentMethodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentMethodCountAggregateInputType | true
    }

  export interface PaymentMethodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentMethod'], meta: { name: 'PaymentMethod' } }
    /**
     * Find zero or one PaymentMethod that matches the filter.
     * @param {PaymentMethodFindUniqueArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentMethodFindUniqueArgs>(args: SelectSubset<T, PaymentMethodFindUniqueArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentMethod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentMethodFindUniqueOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentMethodFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentMethodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentMethodFindFirstArgs>(args?: SelectSubset<T, PaymentMethodFindFirstArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentMethodFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentMethodFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany()
     * 
     * // Get first 10 PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentMethodFindManyArgs>(args?: SelectSubset<T, PaymentMethodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentMethod.
     * @param {PaymentMethodCreateArgs} args - Arguments to create a PaymentMethod.
     * @example
     * // Create one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.create({
     *   data: {
     *     // ... data to create a PaymentMethod
     *   }
     * })
     * 
     */
    create<T extends PaymentMethodCreateArgs>(args: SelectSubset<T, PaymentMethodCreateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentMethods.
     * @param {PaymentMethodCreateManyArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentMethodCreateManyArgs>(args?: SelectSubset<T, PaymentMethodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentMethods and returns the data saved in the database.
     * @param {PaymentMethodCreateManyAndReturnArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentMethods and only return the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentMethodCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentMethodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentMethod.
     * @param {PaymentMethodDeleteArgs} args - Arguments to delete one PaymentMethod.
     * @example
     * // Delete one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.delete({
     *   where: {
     *     // ... filter to delete one PaymentMethod
     *   }
     * })
     * 
     */
    delete<T extends PaymentMethodDeleteArgs>(args: SelectSubset<T, PaymentMethodDeleteArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentMethod.
     * @param {PaymentMethodUpdateArgs} args - Arguments to update one PaymentMethod.
     * @example
     * // Update one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentMethodUpdateArgs>(args: SelectSubset<T, PaymentMethodUpdateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentMethods.
     * @param {PaymentMethodDeleteManyArgs} args - Arguments to filter PaymentMethods to delete.
     * @example
     * // Delete a few PaymentMethods
     * const { count } = await prisma.paymentMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentMethodDeleteManyArgs>(args?: SelectSubset<T, PaymentMethodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentMethodUpdateManyArgs>(args: SelectSubset<T, PaymentMethodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods and returns the data updated in the database.
     * @param {PaymentMethodUpdateManyAndReturnArgs} args - Arguments to update many PaymentMethods.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentMethods and only return the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentMethodUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentMethodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentMethod.
     * @param {PaymentMethodUpsertArgs} args - Arguments to update or create a PaymentMethod.
     * @example
     * // Update or create a PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.upsert({
     *   create: {
     *     // ... data to create a PaymentMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentMethod we want to update
     *   }
     * })
     */
    upsert<T extends PaymentMethodUpsertArgs>(args: SelectSubset<T, PaymentMethodUpsertArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodCountArgs} args - Arguments to filter PaymentMethods to count.
     * @example
     * // Count the number of PaymentMethods
     * const count = await prisma.paymentMethod.count({
     *   where: {
     *     // ... the filter for the PaymentMethods we want to count
     *   }
     * })
    **/
    count<T extends PaymentMethodCountArgs>(
      args?: Subset<T, PaymentMethodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentMethodAggregateArgs>(args: Subset<T, PaymentMethodAggregateArgs>): Prisma.PrismaPromise<GetPaymentMethodAggregateType<T>>

    /**
     * Group by PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentMethodGroupByArgs['orderBy'] }
        : { orderBy?: PaymentMethodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentMethod model
   */
  readonly fields: PaymentMethodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentMethodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentMethod model
   */
  interface PaymentMethodFieldRefs {
    readonly id: FieldRef<"PaymentMethod", 'Int'>
    readonly statusenabled: FieldRef<"PaymentMethod", 'Boolean'>
    readonly reportdisplay: FieldRef<"PaymentMethod", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PaymentMethod findUnique
   */
  export type PaymentMethodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findUniqueOrThrow
   */
  export type PaymentMethodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findFirst
   */
  export type PaymentMethodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findFirstOrThrow
   */
  export type PaymentMethodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findMany
   */
  export type PaymentMethodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod create
   */
  export type PaymentMethodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * The data needed to create a PaymentMethod.
     */
    data: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
  }

  /**
   * PaymentMethod createMany
   */
  export type PaymentMethodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentMethod createManyAndReturn
   */
  export type PaymentMethodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentMethod update
   */
  export type PaymentMethodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * The data needed to update a PaymentMethod.
     */
    data: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
    /**
     * Choose, which PaymentMethod to update.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod updateMany
   */
  export type PaymentMethodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to update.
     */
    limit?: number
  }

  /**
   * PaymentMethod updateManyAndReturn
   */
  export type PaymentMethodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to update.
     */
    limit?: number
  }

  /**
   * PaymentMethod upsert
   */
  export type PaymentMethodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * The filter to search for the PaymentMethod to update in case it exists.
     */
    where: PaymentMethodWhereUniqueInput
    /**
     * In case the PaymentMethod found by the `where` argument doesn't exist, create a new PaymentMethod with this data.
     */
    create: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
    /**
     * In case the PaymentMethod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
  }

  /**
   * PaymentMethod delete
   */
  export type PaymentMethodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Filter which PaymentMethod to delete.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod deleteMany
   */
  export type PaymentMethodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethods to delete
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to delete.
     */
    limit?: number
  }

  /**
   * PaymentMethod without action
   */
  export type PaymentMethodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
  }


  /**
   * Model TempatTidur
   */

  export type AggregateTempatTidur = {
    _count: TempatTidurCountAggregateOutputType | null
    _avg: TempatTidurAvgAggregateOutputType | null
    _sum: TempatTidurSumAggregateOutputType | null
    _min: TempatTidurMinAggregateOutputType | null
    _max: TempatTidurMaxAggregateOutputType | null
  }

  export type TempatTidurAvgAggregateOutputType = {
    id: number | null
    nomorbed: number | null
    objectkamarfk: number | null
    objectstatusbedfk: number | null
  }

  export type TempatTidurSumAggregateOutputType = {
    id: number | null
    nomorbed: number | null
    objectkamarfk: number | null
    objectstatusbedfk: number | null
  }

  export type TempatTidurMinAggregateOutputType = {
    id: number | null
    reportdisplay: string | null
    nomorbed: number | null
    statusenabled: boolean | null
    objectkamarfk: number | null
    objectstatusbedfk: number | null
  }

  export type TempatTidurMaxAggregateOutputType = {
    id: number | null
    reportdisplay: string | null
    nomorbed: number | null
    statusenabled: boolean | null
    objectkamarfk: number | null
    objectstatusbedfk: number | null
  }

  export type TempatTidurCountAggregateOutputType = {
    id: number
    reportdisplay: number
    nomorbed: number
    statusenabled: number
    objectkamarfk: number
    objectstatusbedfk: number
    _all: number
  }


  export type TempatTidurAvgAggregateInputType = {
    id?: true
    nomorbed?: true
    objectkamarfk?: true
    objectstatusbedfk?: true
  }

  export type TempatTidurSumAggregateInputType = {
    id?: true
    nomorbed?: true
    objectkamarfk?: true
    objectstatusbedfk?: true
  }

  export type TempatTidurMinAggregateInputType = {
    id?: true
    reportdisplay?: true
    nomorbed?: true
    statusenabled?: true
    objectkamarfk?: true
    objectstatusbedfk?: true
  }

  export type TempatTidurMaxAggregateInputType = {
    id?: true
    reportdisplay?: true
    nomorbed?: true
    statusenabled?: true
    objectkamarfk?: true
    objectstatusbedfk?: true
  }

  export type TempatTidurCountAggregateInputType = {
    id?: true
    reportdisplay?: true
    nomorbed?: true
    statusenabled?: true
    objectkamarfk?: true
    objectstatusbedfk?: true
    _all?: true
  }

  export type TempatTidurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TempatTidur to aggregate.
     */
    where?: TempatTidurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempatTidurs to fetch.
     */
    orderBy?: TempatTidurOrderByWithRelationInput | TempatTidurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TempatTidurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempatTidurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempatTidurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TempatTidurs
    **/
    _count?: true | TempatTidurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TempatTidurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TempatTidurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TempatTidurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TempatTidurMaxAggregateInputType
  }

  export type GetTempatTidurAggregateType<T extends TempatTidurAggregateArgs> = {
        [P in keyof T & keyof AggregateTempatTidur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTempatTidur[P]>
      : GetScalarType<T[P], AggregateTempatTidur[P]>
  }




  export type TempatTidurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TempatTidurWhereInput
    orderBy?: TempatTidurOrderByWithAggregationInput | TempatTidurOrderByWithAggregationInput[]
    by: TempatTidurScalarFieldEnum[] | TempatTidurScalarFieldEnum
    having?: TempatTidurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TempatTidurCountAggregateInputType | true
    _avg?: TempatTidurAvgAggregateInputType
    _sum?: TempatTidurSumAggregateInputType
    _min?: TempatTidurMinAggregateInputType
    _max?: TempatTidurMaxAggregateInputType
  }

  export type TempatTidurGroupByOutputType = {
    id: number
    reportdisplay: string
    nomorbed: number
    statusenabled: boolean
    objectkamarfk: number | null
    objectstatusbedfk: number | null
    _count: TempatTidurCountAggregateOutputType | null
    _avg: TempatTidurAvgAggregateOutputType | null
    _sum: TempatTidurSumAggregateOutputType | null
    _min: TempatTidurMinAggregateOutputType | null
    _max: TempatTidurMaxAggregateOutputType | null
  }

  type GetTempatTidurGroupByPayload<T extends TempatTidurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TempatTidurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TempatTidurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TempatTidurGroupByOutputType[P]>
            : GetScalarType<T[P], TempatTidurGroupByOutputType[P]>
        }
      >
    >


  export type TempatTidurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportdisplay?: boolean
    nomorbed?: boolean
    statusenabled?: boolean
    objectkamarfk?: boolean
    objectstatusbedfk?: boolean
    kamar?: boolean | TempatTidur$kamarArgs<ExtArgs>
    status?: boolean | TempatTidur$statusArgs<ExtArgs>
  }, ExtArgs["result"]["tempatTidur"]>

  export type TempatTidurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportdisplay?: boolean
    nomorbed?: boolean
    statusenabled?: boolean
    objectkamarfk?: boolean
    objectstatusbedfk?: boolean
    kamar?: boolean | TempatTidur$kamarArgs<ExtArgs>
    status?: boolean | TempatTidur$statusArgs<ExtArgs>
  }, ExtArgs["result"]["tempatTidur"]>

  export type TempatTidurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportdisplay?: boolean
    nomorbed?: boolean
    statusenabled?: boolean
    objectkamarfk?: boolean
    objectstatusbedfk?: boolean
    kamar?: boolean | TempatTidur$kamarArgs<ExtArgs>
    status?: boolean | TempatTidur$statusArgs<ExtArgs>
  }, ExtArgs["result"]["tempatTidur"]>

  export type TempatTidurSelectScalar = {
    id?: boolean
    reportdisplay?: boolean
    nomorbed?: boolean
    statusenabled?: boolean
    objectkamarfk?: boolean
    objectstatusbedfk?: boolean
  }

  export type TempatTidurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reportdisplay" | "nomorbed" | "statusenabled" | "objectkamarfk" | "objectstatusbedfk", ExtArgs["result"]["tempatTidur"]>
  export type TempatTidurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kamar?: boolean | TempatTidur$kamarArgs<ExtArgs>
    status?: boolean | TempatTidur$statusArgs<ExtArgs>
  }
  export type TempatTidurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kamar?: boolean | TempatTidur$kamarArgs<ExtArgs>
    status?: boolean | TempatTidur$statusArgs<ExtArgs>
  }
  export type TempatTidurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kamar?: boolean | TempatTidur$kamarArgs<ExtArgs>
    status?: boolean | TempatTidur$statusArgs<ExtArgs>
  }

  export type $TempatTidurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TempatTidur"
    objects: {
      kamar: Prisma.$KamarPayload<ExtArgs> | null
      status: Prisma.$StatusBedPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reportdisplay: string
      nomorbed: number
      statusenabled: boolean
      objectkamarfk: number | null
      objectstatusbedfk: number | null
    }, ExtArgs["result"]["tempatTidur"]>
    composites: {}
  }

  type TempatTidurGetPayload<S extends boolean | null | undefined | TempatTidurDefaultArgs> = $Result.GetResult<Prisma.$TempatTidurPayload, S>

  type TempatTidurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TempatTidurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TempatTidurCountAggregateInputType | true
    }

  export interface TempatTidurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TempatTidur'], meta: { name: 'TempatTidur' } }
    /**
     * Find zero or one TempatTidur that matches the filter.
     * @param {TempatTidurFindUniqueArgs} args - Arguments to find a TempatTidur
     * @example
     * // Get one TempatTidur
     * const tempatTidur = await prisma.tempatTidur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TempatTidurFindUniqueArgs>(args: SelectSubset<T, TempatTidurFindUniqueArgs<ExtArgs>>): Prisma__TempatTidurClient<$Result.GetResult<Prisma.$TempatTidurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TempatTidur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TempatTidurFindUniqueOrThrowArgs} args - Arguments to find a TempatTidur
     * @example
     * // Get one TempatTidur
     * const tempatTidur = await prisma.tempatTidur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TempatTidurFindUniqueOrThrowArgs>(args: SelectSubset<T, TempatTidurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TempatTidurClient<$Result.GetResult<Prisma.$TempatTidurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TempatTidur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempatTidurFindFirstArgs} args - Arguments to find a TempatTidur
     * @example
     * // Get one TempatTidur
     * const tempatTidur = await prisma.tempatTidur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TempatTidurFindFirstArgs>(args?: SelectSubset<T, TempatTidurFindFirstArgs<ExtArgs>>): Prisma__TempatTidurClient<$Result.GetResult<Prisma.$TempatTidurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TempatTidur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempatTidurFindFirstOrThrowArgs} args - Arguments to find a TempatTidur
     * @example
     * // Get one TempatTidur
     * const tempatTidur = await prisma.tempatTidur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TempatTidurFindFirstOrThrowArgs>(args?: SelectSubset<T, TempatTidurFindFirstOrThrowArgs<ExtArgs>>): Prisma__TempatTidurClient<$Result.GetResult<Prisma.$TempatTidurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TempatTidurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempatTidurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TempatTidurs
     * const tempatTidurs = await prisma.tempatTidur.findMany()
     * 
     * // Get first 10 TempatTidurs
     * const tempatTidurs = await prisma.tempatTidur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tempatTidurWithIdOnly = await prisma.tempatTidur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TempatTidurFindManyArgs>(args?: SelectSubset<T, TempatTidurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempatTidurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TempatTidur.
     * @param {TempatTidurCreateArgs} args - Arguments to create a TempatTidur.
     * @example
     * // Create one TempatTidur
     * const TempatTidur = await prisma.tempatTidur.create({
     *   data: {
     *     // ... data to create a TempatTidur
     *   }
     * })
     * 
     */
    create<T extends TempatTidurCreateArgs>(args: SelectSubset<T, TempatTidurCreateArgs<ExtArgs>>): Prisma__TempatTidurClient<$Result.GetResult<Prisma.$TempatTidurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TempatTidurs.
     * @param {TempatTidurCreateManyArgs} args - Arguments to create many TempatTidurs.
     * @example
     * // Create many TempatTidurs
     * const tempatTidur = await prisma.tempatTidur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TempatTidurCreateManyArgs>(args?: SelectSubset<T, TempatTidurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TempatTidurs and returns the data saved in the database.
     * @param {TempatTidurCreateManyAndReturnArgs} args - Arguments to create many TempatTidurs.
     * @example
     * // Create many TempatTidurs
     * const tempatTidur = await prisma.tempatTidur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TempatTidurs and only return the `id`
     * const tempatTidurWithIdOnly = await prisma.tempatTidur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TempatTidurCreateManyAndReturnArgs>(args?: SelectSubset<T, TempatTidurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempatTidurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TempatTidur.
     * @param {TempatTidurDeleteArgs} args - Arguments to delete one TempatTidur.
     * @example
     * // Delete one TempatTidur
     * const TempatTidur = await prisma.tempatTidur.delete({
     *   where: {
     *     // ... filter to delete one TempatTidur
     *   }
     * })
     * 
     */
    delete<T extends TempatTidurDeleteArgs>(args: SelectSubset<T, TempatTidurDeleteArgs<ExtArgs>>): Prisma__TempatTidurClient<$Result.GetResult<Prisma.$TempatTidurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TempatTidur.
     * @param {TempatTidurUpdateArgs} args - Arguments to update one TempatTidur.
     * @example
     * // Update one TempatTidur
     * const tempatTidur = await prisma.tempatTidur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TempatTidurUpdateArgs>(args: SelectSubset<T, TempatTidurUpdateArgs<ExtArgs>>): Prisma__TempatTidurClient<$Result.GetResult<Prisma.$TempatTidurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TempatTidurs.
     * @param {TempatTidurDeleteManyArgs} args - Arguments to filter TempatTidurs to delete.
     * @example
     * // Delete a few TempatTidurs
     * const { count } = await prisma.tempatTidur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TempatTidurDeleteManyArgs>(args?: SelectSubset<T, TempatTidurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TempatTidurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempatTidurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TempatTidurs
     * const tempatTidur = await prisma.tempatTidur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TempatTidurUpdateManyArgs>(args: SelectSubset<T, TempatTidurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TempatTidurs and returns the data updated in the database.
     * @param {TempatTidurUpdateManyAndReturnArgs} args - Arguments to update many TempatTidurs.
     * @example
     * // Update many TempatTidurs
     * const tempatTidur = await prisma.tempatTidur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TempatTidurs and only return the `id`
     * const tempatTidurWithIdOnly = await prisma.tempatTidur.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TempatTidurUpdateManyAndReturnArgs>(args: SelectSubset<T, TempatTidurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempatTidurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TempatTidur.
     * @param {TempatTidurUpsertArgs} args - Arguments to update or create a TempatTidur.
     * @example
     * // Update or create a TempatTidur
     * const tempatTidur = await prisma.tempatTidur.upsert({
     *   create: {
     *     // ... data to create a TempatTidur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TempatTidur we want to update
     *   }
     * })
     */
    upsert<T extends TempatTidurUpsertArgs>(args: SelectSubset<T, TempatTidurUpsertArgs<ExtArgs>>): Prisma__TempatTidurClient<$Result.GetResult<Prisma.$TempatTidurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TempatTidurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempatTidurCountArgs} args - Arguments to filter TempatTidurs to count.
     * @example
     * // Count the number of TempatTidurs
     * const count = await prisma.tempatTidur.count({
     *   where: {
     *     // ... the filter for the TempatTidurs we want to count
     *   }
     * })
    **/
    count<T extends TempatTidurCountArgs>(
      args?: Subset<T, TempatTidurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TempatTidurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TempatTidur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempatTidurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TempatTidurAggregateArgs>(args: Subset<T, TempatTidurAggregateArgs>): Prisma.PrismaPromise<GetTempatTidurAggregateType<T>>

    /**
     * Group by TempatTidur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempatTidurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TempatTidurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TempatTidurGroupByArgs['orderBy'] }
        : { orderBy?: TempatTidurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TempatTidurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTempatTidurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TempatTidur model
   */
  readonly fields: TempatTidurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TempatTidur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TempatTidurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kamar<T extends TempatTidur$kamarArgs<ExtArgs> = {}>(args?: Subset<T, TempatTidur$kamarArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    status<T extends TempatTidur$statusArgs<ExtArgs> = {}>(args?: Subset<T, TempatTidur$statusArgs<ExtArgs>>): Prisma__StatusBedClient<$Result.GetResult<Prisma.$StatusBedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TempatTidur model
   */
  interface TempatTidurFieldRefs {
    readonly id: FieldRef<"TempatTidur", 'Int'>
    readonly reportdisplay: FieldRef<"TempatTidur", 'String'>
    readonly nomorbed: FieldRef<"TempatTidur", 'Int'>
    readonly statusenabled: FieldRef<"TempatTidur", 'Boolean'>
    readonly objectkamarfk: FieldRef<"TempatTidur", 'Int'>
    readonly objectstatusbedfk: FieldRef<"TempatTidur", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TempatTidur findUnique
   */
  export type TempatTidurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempatTidur
     */
    select?: TempatTidurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempatTidur
     */
    omit?: TempatTidurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempatTidurInclude<ExtArgs> | null
    /**
     * Filter, which TempatTidur to fetch.
     */
    where: TempatTidurWhereUniqueInput
  }

  /**
   * TempatTidur findUniqueOrThrow
   */
  export type TempatTidurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempatTidur
     */
    select?: TempatTidurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempatTidur
     */
    omit?: TempatTidurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempatTidurInclude<ExtArgs> | null
    /**
     * Filter, which TempatTidur to fetch.
     */
    where: TempatTidurWhereUniqueInput
  }

  /**
   * TempatTidur findFirst
   */
  export type TempatTidurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempatTidur
     */
    select?: TempatTidurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempatTidur
     */
    omit?: TempatTidurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempatTidurInclude<ExtArgs> | null
    /**
     * Filter, which TempatTidur to fetch.
     */
    where?: TempatTidurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempatTidurs to fetch.
     */
    orderBy?: TempatTidurOrderByWithRelationInput | TempatTidurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TempatTidurs.
     */
    cursor?: TempatTidurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempatTidurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempatTidurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TempatTidurs.
     */
    distinct?: TempatTidurScalarFieldEnum | TempatTidurScalarFieldEnum[]
  }

  /**
   * TempatTidur findFirstOrThrow
   */
  export type TempatTidurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempatTidur
     */
    select?: TempatTidurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempatTidur
     */
    omit?: TempatTidurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempatTidurInclude<ExtArgs> | null
    /**
     * Filter, which TempatTidur to fetch.
     */
    where?: TempatTidurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempatTidurs to fetch.
     */
    orderBy?: TempatTidurOrderByWithRelationInput | TempatTidurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TempatTidurs.
     */
    cursor?: TempatTidurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempatTidurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempatTidurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TempatTidurs.
     */
    distinct?: TempatTidurScalarFieldEnum | TempatTidurScalarFieldEnum[]
  }

  /**
   * TempatTidur findMany
   */
  export type TempatTidurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempatTidur
     */
    select?: TempatTidurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempatTidur
     */
    omit?: TempatTidurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempatTidurInclude<ExtArgs> | null
    /**
     * Filter, which TempatTidurs to fetch.
     */
    where?: TempatTidurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempatTidurs to fetch.
     */
    orderBy?: TempatTidurOrderByWithRelationInput | TempatTidurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TempatTidurs.
     */
    cursor?: TempatTidurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempatTidurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempatTidurs.
     */
    skip?: number
    distinct?: TempatTidurScalarFieldEnum | TempatTidurScalarFieldEnum[]
  }

  /**
   * TempatTidur create
   */
  export type TempatTidurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempatTidur
     */
    select?: TempatTidurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempatTidur
     */
    omit?: TempatTidurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempatTidurInclude<ExtArgs> | null
    /**
     * The data needed to create a TempatTidur.
     */
    data: XOR<TempatTidurCreateInput, TempatTidurUncheckedCreateInput>
  }

  /**
   * TempatTidur createMany
   */
  export type TempatTidurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TempatTidurs.
     */
    data: TempatTidurCreateManyInput | TempatTidurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TempatTidur createManyAndReturn
   */
  export type TempatTidurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempatTidur
     */
    select?: TempatTidurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TempatTidur
     */
    omit?: TempatTidurOmit<ExtArgs> | null
    /**
     * The data used to create many TempatTidurs.
     */
    data: TempatTidurCreateManyInput | TempatTidurCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempatTidurIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TempatTidur update
   */
  export type TempatTidurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempatTidur
     */
    select?: TempatTidurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempatTidur
     */
    omit?: TempatTidurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempatTidurInclude<ExtArgs> | null
    /**
     * The data needed to update a TempatTidur.
     */
    data: XOR<TempatTidurUpdateInput, TempatTidurUncheckedUpdateInput>
    /**
     * Choose, which TempatTidur to update.
     */
    where: TempatTidurWhereUniqueInput
  }

  /**
   * TempatTidur updateMany
   */
  export type TempatTidurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TempatTidurs.
     */
    data: XOR<TempatTidurUpdateManyMutationInput, TempatTidurUncheckedUpdateManyInput>
    /**
     * Filter which TempatTidurs to update
     */
    where?: TempatTidurWhereInput
    /**
     * Limit how many TempatTidurs to update.
     */
    limit?: number
  }

  /**
   * TempatTidur updateManyAndReturn
   */
  export type TempatTidurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempatTidur
     */
    select?: TempatTidurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TempatTidur
     */
    omit?: TempatTidurOmit<ExtArgs> | null
    /**
     * The data used to update TempatTidurs.
     */
    data: XOR<TempatTidurUpdateManyMutationInput, TempatTidurUncheckedUpdateManyInput>
    /**
     * Filter which TempatTidurs to update
     */
    where?: TempatTidurWhereInput
    /**
     * Limit how many TempatTidurs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempatTidurIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TempatTidur upsert
   */
  export type TempatTidurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempatTidur
     */
    select?: TempatTidurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempatTidur
     */
    omit?: TempatTidurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempatTidurInclude<ExtArgs> | null
    /**
     * The filter to search for the TempatTidur to update in case it exists.
     */
    where: TempatTidurWhereUniqueInput
    /**
     * In case the TempatTidur found by the `where` argument doesn't exist, create a new TempatTidur with this data.
     */
    create: XOR<TempatTidurCreateInput, TempatTidurUncheckedCreateInput>
    /**
     * In case the TempatTidur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TempatTidurUpdateInput, TempatTidurUncheckedUpdateInput>
  }

  /**
   * TempatTidur delete
   */
  export type TempatTidurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempatTidur
     */
    select?: TempatTidurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempatTidur
     */
    omit?: TempatTidurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempatTidurInclude<ExtArgs> | null
    /**
     * Filter which TempatTidur to delete.
     */
    where: TempatTidurWhereUniqueInput
  }

  /**
   * TempatTidur deleteMany
   */
  export type TempatTidurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TempatTidurs to delete
     */
    where?: TempatTidurWhereInput
    /**
     * Limit how many TempatTidurs to delete.
     */
    limit?: number
  }

  /**
   * TempatTidur.kamar
   */
  export type TempatTidur$kamarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    where?: KamarWhereInput
  }

  /**
   * TempatTidur.status
   */
  export type TempatTidur$statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusBed
     */
    select?: StatusBedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusBed
     */
    omit?: StatusBedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusBedInclude<ExtArgs> | null
    where?: StatusBedWhereInput
  }

  /**
   * TempatTidur without action
   */
  export type TempatTidurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempatTidur
     */
    select?: TempatTidurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempatTidur
     */
    omit?: TempatTidurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempatTidurInclude<ExtArgs> | null
  }


  /**
   * Model Kamar
   */

  export type AggregateKamar = {
    _count: KamarCountAggregateOutputType | null
    _avg: KamarAvgAggregateOutputType | null
    _sum: KamarSumAggregateOutputType | null
    _min: KamarMinAggregateOutputType | null
    _max: KamarMaxAggregateOutputType | null
  }

  export type KamarAvgAggregateOutputType = {
    id: number | null
    objectruanganfk: number | null
    objectkelasfk: number | null
  }

  export type KamarSumAggregateOutputType = {
    id: number | null
    objectruanganfk: number | null
    objectkelasfk: number | null
  }

  export type KamarMinAggregateOutputType = {
    id: number | null
    namakamar: string | null
    statusenabled: boolean | null
    objectruanganfk: number | null
    objectkelasfk: number | null
  }

  export type KamarMaxAggregateOutputType = {
    id: number | null
    namakamar: string | null
    statusenabled: boolean | null
    objectruanganfk: number | null
    objectkelasfk: number | null
  }

  export type KamarCountAggregateOutputType = {
    id: number
    namakamar: number
    statusenabled: number
    objectruanganfk: number
    objectkelasfk: number
    _all: number
  }


  export type KamarAvgAggregateInputType = {
    id?: true
    objectruanganfk?: true
    objectkelasfk?: true
  }

  export type KamarSumAggregateInputType = {
    id?: true
    objectruanganfk?: true
    objectkelasfk?: true
  }

  export type KamarMinAggregateInputType = {
    id?: true
    namakamar?: true
    statusenabled?: true
    objectruanganfk?: true
    objectkelasfk?: true
  }

  export type KamarMaxAggregateInputType = {
    id?: true
    namakamar?: true
    statusenabled?: true
    objectruanganfk?: true
    objectkelasfk?: true
  }

  export type KamarCountAggregateInputType = {
    id?: true
    namakamar?: true
    statusenabled?: true
    objectruanganfk?: true
    objectkelasfk?: true
    _all?: true
  }

  export type KamarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kamar to aggregate.
     */
    where?: KamarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kamars to fetch.
     */
    orderBy?: KamarOrderByWithRelationInput | KamarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KamarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kamars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kamars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kamars
    **/
    _count?: true | KamarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KamarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KamarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KamarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KamarMaxAggregateInputType
  }

  export type GetKamarAggregateType<T extends KamarAggregateArgs> = {
        [P in keyof T & keyof AggregateKamar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKamar[P]>
      : GetScalarType<T[P], AggregateKamar[P]>
  }




  export type KamarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KamarWhereInput
    orderBy?: KamarOrderByWithAggregationInput | KamarOrderByWithAggregationInput[]
    by: KamarScalarFieldEnum[] | KamarScalarFieldEnum
    having?: KamarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KamarCountAggregateInputType | true
    _avg?: KamarAvgAggregateInputType
    _sum?: KamarSumAggregateInputType
    _min?: KamarMinAggregateInputType
    _max?: KamarMaxAggregateInputType
  }

  export type KamarGroupByOutputType = {
    id: number
    namakamar: string
    statusenabled: boolean
    objectruanganfk: number | null
    objectkelasfk: number | null
    _count: KamarCountAggregateOutputType | null
    _avg: KamarAvgAggregateOutputType | null
    _sum: KamarSumAggregateOutputType | null
    _min: KamarMinAggregateOutputType | null
    _max: KamarMaxAggregateOutputType | null
  }

  type GetKamarGroupByPayload<T extends KamarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KamarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KamarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KamarGroupByOutputType[P]>
            : GetScalarType<T[P], KamarGroupByOutputType[P]>
        }
      >
    >


  export type KamarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namakamar?: boolean
    statusenabled?: boolean
    objectruanganfk?: boolean
    objectkelasfk?: boolean
    ruangan?: boolean | Kamar$ruanganArgs<ExtArgs>
    kelas?: boolean | Kamar$kelasArgs<ExtArgs>
    tempatTidur?: boolean | Kamar$tempatTidurArgs<ExtArgs>
    _count?: boolean | KamarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kamar"]>

  export type KamarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namakamar?: boolean
    statusenabled?: boolean
    objectruanganfk?: boolean
    objectkelasfk?: boolean
    ruangan?: boolean | Kamar$ruanganArgs<ExtArgs>
    kelas?: boolean | Kamar$kelasArgs<ExtArgs>
  }, ExtArgs["result"]["kamar"]>

  export type KamarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namakamar?: boolean
    statusenabled?: boolean
    objectruanganfk?: boolean
    objectkelasfk?: boolean
    ruangan?: boolean | Kamar$ruanganArgs<ExtArgs>
    kelas?: boolean | Kamar$kelasArgs<ExtArgs>
  }, ExtArgs["result"]["kamar"]>

  export type KamarSelectScalar = {
    id?: boolean
    namakamar?: boolean
    statusenabled?: boolean
    objectruanganfk?: boolean
    objectkelasfk?: boolean
  }

  export type KamarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namakamar" | "statusenabled" | "objectruanganfk" | "objectkelasfk", ExtArgs["result"]["kamar"]>
  export type KamarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ruangan?: boolean | Kamar$ruanganArgs<ExtArgs>
    kelas?: boolean | Kamar$kelasArgs<ExtArgs>
    tempatTidur?: boolean | Kamar$tempatTidurArgs<ExtArgs>
    _count?: boolean | KamarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KamarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ruangan?: boolean | Kamar$ruanganArgs<ExtArgs>
    kelas?: boolean | Kamar$kelasArgs<ExtArgs>
  }
  export type KamarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ruangan?: boolean | Kamar$ruanganArgs<ExtArgs>
    kelas?: boolean | Kamar$kelasArgs<ExtArgs>
  }

  export type $KamarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kamar"
    objects: {
      ruangan: Prisma.$RuanganPayload<ExtArgs> | null
      kelas: Prisma.$KelasPayload<ExtArgs> | null
      tempatTidur: Prisma.$TempatTidurPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      namakamar: string
      statusenabled: boolean
      objectruanganfk: number | null
      objectkelasfk: number | null
    }, ExtArgs["result"]["kamar"]>
    composites: {}
  }

  type KamarGetPayload<S extends boolean | null | undefined | KamarDefaultArgs> = $Result.GetResult<Prisma.$KamarPayload, S>

  type KamarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KamarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KamarCountAggregateInputType | true
    }

  export interface KamarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kamar'], meta: { name: 'Kamar' } }
    /**
     * Find zero or one Kamar that matches the filter.
     * @param {KamarFindUniqueArgs} args - Arguments to find a Kamar
     * @example
     * // Get one Kamar
     * const kamar = await prisma.kamar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KamarFindUniqueArgs>(args: SelectSubset<T, KamarFindUniqueArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kamar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KamarFindUniqueOrThrowArgs} args - Arguments to find a Kamar
     * @example
     * // Get one Kamar
     * const kamar = await prisma.kamar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KamarFindUniqueOrThrowArgs>(args: SelectSubset<T, KamarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kamar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KamarFindFirstArgs} args - Arguments to find a Kamar
     * @example
     * // Get one Kamar
     * const kamar = await prisma.kamar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KamarFindFirstArgs>(args?: SelectSubset<T, KamarFindFirstArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kamar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KamarFindFirstOrThrowArgs} args - Arguments to find a Kamar
     * @example
     * // Get one Kamar
     * const kamar = await prisma.kamar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KamarFindFirstOrThrowArgs>(args?: SelectSubset<T, KamarFindFirstOrThrowArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kamars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KamarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kamars
     * const kamars = await prisma.kamar.findMany()
     * 
     * // Get first 10 Kamars
     * const kamars = await prisma.kamar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kamarWithIdOnly = await prisma.kamar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KamarFindManyArgs>(args?: SelectSubset<T, KamarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kamar.
     * @param {KamarCreateArgs} args - Arguments to create a Kamar.
     * @example
     * // Create one Kamar
     * const Kamar = await prisma.kamar.create({
     *   data: {
     *     // ... data to create a Kamar
     *   }
     * })
     * 
     */
    create<T extends KamarCreateArgs>(args: SelectSubset<T, KamarCreateArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kamars.
     * @param {KamarCreateManyArgs} args - Arguments to create many Kamars.
     * @example
     * // Create many Kamars
     * const kamar = await prisma.kamar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KamarCreateManyArgs>(args?: SelectSubset<T, KamarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kamars and returns the data saved in the database.
     * @param {KamarCreateManyAndReturnArgs} args - Arguments to create many Kamars.
     * @example
     * // Create many Kamars
     * const kamar = await prisma.kamar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kamars and only return the `id`
     * const kamarWithIdOnly = await prisma.kamar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KamarCreateManyAndReturnArgs>(args?: SelectSubset<T, KamarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kamar.
     * @param {KamarDeleteArgs} args - Arguments to delete one Kamar.
     * @example
     * // Delete one Kamar
     * const Kamar = await prisma.kamar.delete({
     *   where: {
     *     // ... filter to delete one Kamar
     *   }
     * })
     * 
     */
    delete<T extends KamarDeleteArgs>(args: SelectSubset<T, KamarDeleteArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kamar.
     * @param {KamarUpdateArgs} args - Arguments to update one Kamar.
     * @example
     * // Update one Kamar
     * const kamar = await prisma.kamar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KamarUpdateArgs>(args: SelectSubset<T, KamarUpdateArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kamars.
     * @param {KamarDeleteManyArgs} args - Arguments to filter Kamars to delete.
     * @example
     * // Delete a few Kamars
     * const { count } = await prisma.kamar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KamarDeleteManyArgs>(args?: SelectSubset<T, KamarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kamars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KamarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kamars
     * const kamar = await prisma.kamar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KamarUpdateManyArgs>(args: SelectSubset<T, KamarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kamars and returns the data updated in the database.
     * @param {KamarUpdateManyAndReturnArgs} args - Arguments to update many Kamars.
     * @example
     * // Update many Kamars
     * const kamar = await prisma.kamar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kamars and only return the `id`
     * const kamarWithIdOnly = await prisma.kamar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KamarUpdateManyAndReturnArgs>(args: SelectSubset<T, KamarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kamar.
     * @param {KamarUpsertArgs} args - Arguments to update or create a Kamar.
     * @example
     * // Update or create a Kamar
     * const kamar = await prisma.kamar.upsert({
     *   create: {
     *     // ... data to create a Kamar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kamar we want to update
     *   }
     * })
     */
    upsert<T extends KamarUpsertArgs>(args: SelectSubset<T, KamarUpsertArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kamars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KamarCountArgs} args - Arguments to filter Kamars to count.
     * @example
     * // Count the number of Kamars
     * const count = await prisma.kamar.count({
     *   where: {
     *     // ... the filter for the Kamars we want to count
     *   }
     * })
    **/
    count<T extends KamarCountArgs>(
      args?: Subset<T, KamarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KamarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kamar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KamarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KamarAggregateArgs>(args: Subset<T, KamarAggregateArgs>): Prisma.PrismaPromise<GetKamarAggregateType<T>>

    /**
     * Group by Kamar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KamarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KamarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KamarGroupByArgs['orderBy'] }
        : { orderBy?: KamarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KamarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKamarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kamar model
   */
  readonly fields: KamarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kamar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KamarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ruangan<T extends Kamar$ruanganArgs<ExtArgs> = {}>(args?: Subset<T, Kamar$ruanganArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    kelas<T extends Kamar$kelasArgs<ExtArgs> = {}>(args?: Subset<T, Kamar$kelasArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tempatTidur<T extends Kamar$tempatTidurArgs<ExtArgs> = {}>(args?: Subset<T, Kamar$tempatTidurArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempatTidurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Kamar model
   */
  interface KamarFieldRefs {
    readonly id: FieldRef<"Kamar", 'Int'>
    readonly namakamar: FieldRef<"Kamar", 'String'>
    readonly statusenabled: FieldRef<"Kamar", 'Boolean'>
    readonly objectruanganfk: FieldRef<"Kamar", 'Int'>
    readonly objectkelasfk: FieldRef<"Kamar", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Kamar findUnique
   */
  export type KamarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    /**
     * Filter, which Kamar to fetch.
     */
    where: KamarWhereUniqueInput
  }

  /**
   * Kamar findUniqueOrThrow
   */
  export type KamarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    /**
     * Filter, which Kamar to fetch.
     */
    where: KamarWhereUniqueInput
  }

  /**
   * Kamar findFirst
   */
  export type KamarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    /**
     * Filter, which Kamar to fetch.
     */
    where?: KamarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kamars to fetch.
     */
    orderBy?: KamarOrderByWithRelationInput | KamarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kamars.
     */
    cursor?: KamarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kamars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kamars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kamars.
     */
    distinct?: KamarScalarFieldEnum | KamarScalarFieldEnum[]
  }

  /**
   * Kamar findFirstOrThrow
   */
  export type KamarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    /**
     * Filter, which Kamar to fetch.
     */
    where?: KamarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kamars to fetch.
     */
    orderBy?: KamarOrderByWithRelationInput | KamarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kamars.
     */
    cursor?: KamarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kamars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kamars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kamars.
     */
    distinct?: KamarScalarFieldEnum | KamarScalarFieldEnum[]
  }

  /**
   * Kamar findMany
   */
  export type KamarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    /**
     * Filter, which Kamars to fetch.
     */
    where?: KamarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kamars to fetch.
     */
    orderBy?: KamarOrderByWithRelationInput | KamarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kamars.
     */
    cursor?: KamarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kamars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kamars.
     */
    skip?: number
    distinct?: KamarScalarFieldEnum | KamarScalarFieldEnum[]
  }

  /**
   * Kamar create
   */
  export type KamarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    /**
     * The data needed to create a Kamar.
     */
    data: XOR<KamarCreateInput, KamarUncheckedCreateInput>
  }

  /**
   * Kamar createMany
   */
  export type KamarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kamars.
     */
    data: KamarCreateManyInput | KamarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kamar createManyAndReturn
   */
  export type KamarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * The data used to create many Kamars.
     */
    data: KamarCreateManyInput | KamarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kamar update
   */
  export type KamarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    /**
     * The data needed to update a Kamar.
     */
    data: XOR<KamarUpdateInput, KamarUncheckedUpdateInput>
    /**
     * Choose, which Kamar to update.
     */
    where: KamarWhereUniqueInput
  }

  /**
   * Kamar updateMany
   */
  export type KamarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kamars.
     */
    data: XOR<KamarUpdateManyMutationInput, KamarUncheckedUpdateManyInput>
    /**
     * Filter which Kamars to update
     */
    where?: KamarWhereInput
    /**
     * Limit how many Kamars to update.
     */
    limit?: number
  }

  /**
   * Kamar updateManyAndReturn
   */
  export type KamarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * The data used to update Kamars.
     */
    data: XOR<KamarUpdateManyMutationInput, KamarUncheckedUpdateManyInput>
    /**
     * Filter which Kamars to update
     */
    where?: KamarWhereInput
    /**
     * Limit how many Kamars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kamar upsert
   */
  export type KamarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    /**
     * The filter to search for the Kamar to update in case it exists.
     */
    where: KamarWhereUniqueInput
    /**
     * In case the Kamar found by the `where` argument doesn't exist, create a new Kamar with this data.
     */
    create: XOR<KamarCreateInput, KamarUncheckedCreateInput>
    /**
     * In case the Kamar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KamarUpdateInput, KamarUncheckedUpdateInput>
  }

  /**
   * Kamar delete
   */
  export type KamarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    /**
     * Filter which Kamar to delete.
     */
    where: KamarWhereUniqueInput
  }

  /**
   * Kamar deleteMany
   */
  export type KamarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kamars to delete
     */
    where?: KamarWhereInput
    /**
     * Limit how many Kamars to delete.
     */
    limit?: number
  }

  /**
   * Kamar.ruangan
   */
  export type Kamar$ruanganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    where?: RuanganWhereInput
  }

  /**
   * Kamar.kelas
   */
  export type Kamar$kelasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    where?: KelasWhereInput
  }

  /**
   * Kamar.tempatTidur
   */
  export type Kamar$tempatTidurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempatTidur
     */
    select?: TempatTidurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempatTidur
     */
    omit?: TempatTidurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempatTidurInclude<ExtArgs> | null
    where?: TempatTidurWhereInput
    orderBy?: TempatTidurOrderByWithRelationInput | TempatTidurOrderByWithRelationInput[]
    cursor?: TempatTidurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TempatTidurScalarFieldEnum | TempatTidurScalarFieldEnum[]
  }

  /**
   * Kamar without action
   */
  export type KamarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
  }


  /**
   * Model Ruangan
   */

  export type AggregateRuangan = {
    _count: RuanganCountAggregateOutputType | null
    _avg: RuanganAvgAggregateOutputType | null
    _sum: RuanganSumAggregateOutputType | null
    _min: RuanganMinAggregateOutputType | null
    _max: RuanganMaxAggregateOutputType | null
  }

  export type RuanganAvgAggregateOutputType = {
    id: number | null
    objectdepartemenfk: number | null
  }

  export type RuanganSumAggregateOutputType = {
    id: number | null
    objectdepartemenfk: number | null
  }

  export type RuanganMinAggregateOutputType = {
    id: number | null
    namaruangan: string | null
    statusenabled: boolean | null
    objectdepartemenfk: number | null
  }

  export type RuanganMaxAggregateOutputType = {
    id: number | null
    namaruangan: string | null
    statusenabled: boolean | null
    objectdepartemenfk: number | null
  }

  export type RuanganCountAggregateOutputType = {
    id: number
    namaruangan: number
    statusenabled: number
    objectdepartemenfk: number
    _all: number
  }


  export type RuanganAvgAggregateInputType = {
    id?: true
    objectdepartemenfk?: true
  }

  export type RuanganSumAggregateInputType = {
    id?: true
    objectdepartemenfk?: true
  }

  export type RuanganMinAggregateInputType = {
    id?: true
    namaruangan?: true
    statusenabled?: true
    objectdepartemenfk?: true
  }

  export type RuanganMaxAggregateInputType = {
    id?: true
    namaruangan?: true
    statusenabled?: true
    objectdepartemenfk?: true
  }

  export type RuanganCountAggregateInputType = {
    id?: true
    namaruangan?: true
    statusenabled?: true
    objectdepartemenfk?: true
    _all?: true
  }

  export type RuanganAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ruangan to aggregate.
     */
    where?: RuanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ruangans to fetch.
     */
    orderBy?: RuanganOrderByWithRelationInput | RuanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RuanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ruangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ruangans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ruangans
    **/
    _count?: true | RuanganCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RuanganAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RuanganSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RuanganMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RuanganMaxAggregateInputType
  }

  export type GetRuanganAggregateType<T extends RuanganAggregateArgs> = {
        [P in keyof T & keyof AggregateRuangan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRuangan[P]>
      : GetScalarType<T[P], AggregateRuangan[P]>
  }




  export type RuanganGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuanganWhereInput
    orderBy?: RuanganOrderByWithAggregationInput | RuanganOrderByWithAggregationInput[]
    by: RuanganScalarFieldEnum[] | RuanganScalarFieldEnum
    having?: RuanganScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RuanganCountAggregateInputType | true
    _avg?: RuanganAvgAggregateInputType
    _sum?: RuanganSumAggregateInputType
    _min?: RuanganMinAggregateInputType
    _max?: RuanganMaxAggregateInputType
  }

  export type RuanganGroupByOutputType = {
    id: number
    namaruangan: string
    statusenabled: boolean
    objectdepartemenfk: number | null
    _count: RuanganCountAggregateOutputType | null
    _avg: RuanganAvgAggregateOutputType | null
    _sum: RuanganSumAggregateOutputType | null
    _min: RuanganMinAggregateOutputType | null
    _max: RuanganMaxAggregateOutputType | null
  }

  type GetRuanganGroupByPayload<T extends RuanganGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RuanganGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RuanganGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RuanganGroupByOutputType[P]>
            : GetScalarType<T[P], RuanganGroupByOutputType[P]>
        }
      >
    >


  export type RuanganSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaruangan?: boolean
    statusenabled?: boolean
    objectdepartemenfk?: boolean
    kamars?: boolean | Ruangan$kamarsArgs<ExtArgs>
    departemen?: boolean | Ruangan$departemenArgs<ExtArgs>
    _count?: boolean | RuanganCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ruangan"]>

  export type RuanganSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaruangan?: boolean
    statusenabled?: boolean
    objectdepartemenfk?: boolean
    departemen?: boolean | Ruangan$departemenArgs<ExtArgs>
  }, ExtArgs["result"]["ruangan"]>

  export type RuanganSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaruangan?: boolean
    statusenabled?: boolean
    objectdepartemenfk?: boolean
    departemen?: boolean | Ruangan$departemenArgs<ExtArgs>
  }, ExtArgs["result"]["ruangan"]>

  export type RuanganSelectScalar = {
    id?: boolean
    namaruangan?: boolean
    statusenabled?: boolean
    objectdepartemenfk?: boolean
  }

  export type RuanganOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaruangan" | "statusenabled" | "objectdepartemenfk", ExtArgs["result"]["ruangan"]>
  export type RuanganInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kamars?: boolean | Ruangan$kamarsArgs<ExtArgs>
    departemen?: boolean | Ruangan$departemenArgs<ExtArgs>
    _count?: boolean | RuanganCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RuanganIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departemen?: boolean | Ruangan$departemenArgs<ExtArgs>
  }
  export type RuanganIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departemen?: boolean | Ruangan$departemenArgs<ExtArgs>
  }

  export type $RuanganPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ruangan"
    objects: {
      kamars: Prisma.$KamarPayload<ExtArgs>[]
      departemen: Prisma.$DepartemenPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      namaruangan: string
      statusenabled: boolean
      objectdepartemenfk: number | null
    }, ExtArgs["result"]["ruangan"]>
    composites: {}
  }

  type RuanganGetPayload<S extends boolean | null | undefined | RuanganDefaultArgs> = $Result.GetResult<Prisma.$RuanganPayload, S>

  type RuanganCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RuanganFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RuanganCountAggregateInputType | true
    }

  export interface RuanganDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ruangan'], meta: { name: 'Ruangan' } }
    /**
     * Find zero or one Ruangan that matches the filter.
     * @param {RuanganFindUniqueArgs} args - Arguments to find a Ruangan
     * @example
     * // Get one Ruangan
     * const ruangan = await prisma.ruangan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RuanganFindUniqueArgs>(args: SelectSubset<T, RuanganFindUniqueArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ruangan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RuanganFindUniqueOrThrowArgs} args - Arguments to find a Ruangan
     * @example
     * // Get one Ruangan
     * const ruangan = await prisma.ruangan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RuanganFindUniqueOrThrowArgs>(args: SelectSubset<T, RuanganFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ruangan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganFindFirstArgs} args - Arguments to find a Ruangan
     * @example
     * // Get one Ruangan
     * const ruangan = await prisma.ruangan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RuanganFindFirstArgs>(args?: SelectSubset<T, RuanganFindFirstArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ruangan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganFindFirstOrThrowArgs} args - Arguments to find a Ruangan
     * @example
     * // Get one Ruangan
     * const ruangan = await prisma.ruangan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RuanganFindFirstOrThrowArgs>(args?: SelectSubset<T, RuanganFindFirstOrThrowArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ruangans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ruangans
     * const ruangans = await prisma.ruangan.findMany()
     * 
     * // Get first 10 Ruangans
     * const ruangans = await prisma.ruangan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ruanganWithIdOnly = await prisma.ruangan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RuanganFindManyArgs>(args?: SelectSubset<T, RuanganFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ruangan.
     * @param {RuanganCreateArgs} args - Arguments to create a Ruangan.
     * @example
     * // Create one Ruangan
     * const Ruangan = await prisma.ruangan.create({
     *   data: {
     *     // ... data to create a Ruangan
     *   }
     * })
     * 
     */
    create<T extends RuanganCreateArgs>(args: SelectSubset<T, RuanganCreateArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ruangans.
     * @param {RuanganCreateManyArgs} args - Arguments to create many Ruangans.
     * @example
     * // Create many Ruangans
     * const ruangan = await prisma.ruangan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RuanganCreateManyArgs>(args?: SelectSubset<T, RuanganCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ruangans and returns the data saved in the database.
     * @param {RuanganCreateManyAndReturnArgs} args - Arguments to create many Ruangans.
     * @example
     * // Create many Ruangans
     * const ruangan = await prisma.ruangan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ruangans and only return the `id`
     * const ruanganWithIdOnly = await prisma.ruangan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RuanganCreateManyAndReturnArgs>(args?: SelectSubset<T, RuanganCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ruangan.
     * @param {RuanganDeleteArgs} args - Arguments to delete one Ruangan.
     * @example
     * // Delete one Ruangan
     * const Ruangan = await prisma.ruangan.delete({
     *   where: {
     *     // ... filter to delete one Ruangan
     *   }
     * })
     * 
     */
    delete<T extends RuanganDeleteArgs>(args: SelectSubset<T, RuanganDeleteArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ruangan.
     * @param {RuanganUpdateArgs} args - Arguments to update one Ruangan.
     * @example
     * // Update one Ruangan
     * const ruangan = await prisma.ruangan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RuanganUpdateArgs>(args: SelectSubset<T, RuanganUpdateArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ruangans.
     * @param {RuanganDeleteManyArgs} args - Arguments to filter Ruangans to delete.
     * @example
     * // Delete a few Ruangans
     * const { count } = await prisma.ruangan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RuanganDeleteManyArgs>(args?: SelectSubset<T, RuanganDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ruangans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ruangans
     * const ruangan = await prisma.ruangan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RuanganUpdateManyArgs>(args: SelectSubset<T, RuanganUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ruangans and returns the data updated in the database.
     * @param {RuanganUpdateManyAndReturnArgs} args - Arguments to update many Ruangans.
     * @example
     * // Update many Ruangans
     * const ruangan = await prisma.ruangan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ruangans and only return the `id`
     * const ruanganWithIdOnly = await prisma.ruangan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RuanganUpdateManyAndReturnArgs>(args: SelectSubset<T, RuanganUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ruangan.
     * @param {RuanganUpsertArgs} args - Arguments to update or create a Ruangan.
     * @example
     * // Update or create a Ruangan
     * const ruangan = await prisma.ruangan.upsert({
     *   create: {
     *     // ... data to create a Ruangan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ruangan we want to update
     *   }
     * })
     */
    upsert<T extends RuanganUpsertArgs>(args: SelectSubset<T, RuanganUpsertArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ruangans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganCountArgs} args - Arguments to filter Ruangans to count.
     * @example
     * // Count the number of Ruangans
     * const count = await prisma.ruangan.count({
     *   where: {
     *     // ... the filter for the Ruangans we want to count
     *   }
     * })
    **/
    count<T extends RuanganCountArgs>(
      args?: Subset<T, RuanganCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RuanganCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ruangan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RuanganAggregateArgs>(args: Subset<T, RuanganAggregateArgs>): Prisma.PrismaPromise<GetRuanganAggregateType<T>>

    /**
     * Group by Ruangan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RuanganGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RuanganGroupByArgs['orderBy'] }
        : { orderBy?: RuanganGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RuanganGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRuanganGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ruangan model
   */
  readonly fields: RuanganFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ruangan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RuanganClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kamars<T extends Ruangan$kamarsArgs<ExtArgs> = {}>(args?: Subset<T, Ruangan$kamarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    departemen<T extends Ruangan$departemenArgs<ExtArgs> = {}>(args?: Subset<T, Ruangan$departemenArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ruangan model
   */
  interface RuanganFieldRefs {
    readonly id: FieldRef<"Ruangan", 'Int'>
    readonly namaruangan: FieldRef<"Ruangan", 'String'>
    readonly statusenabled: FieldRef<"Ruangan", 'Boolean'>
    readonly objectdepartemenfk: FieldRef<"Ruangan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ruangan findUnique
   */
  export type RuanganFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter, which Ruangan to fetch.
     */
    where: RuanganWhereUniqueInput
  }

  /**
   * Ruangan findUniqueOrThrow
   */
  export type RuanganFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter, which Ruangan to fetch.
     */
    where: RuanganWhereUniqueInput
  }

  /**
   * Ruangan findFirst
   */
  export type RuanganFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter, which Ruangan to fetch.
     */
    where?: RuanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ruangans to fetch.
     */
    orderBy?: RuanganOrderByWithRelationInput | RuanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ruangans.
     */
    cursor?: RuanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ruangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ruangans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ruangans.
     */
    distinct?: RuanganScalarFieldEnum | RuanganScalarFieldEnum[]
  }

  /**
   * Ruangan findFirstOrThrow
   */
  export type RuanganFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter, which Ruangan to fetch.
     */
    where?: RuanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ruangans to fetch.
     */
    orderBy?: RuanganOrderByWithRelationInput | RuanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ruangans.
     */
    cursor?: RuanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ruangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ruangans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ruangans.
     */
    distinct?: RuanganScalarFieldEnum | RuanganScalarFieldEnum[]
  }

  /**
   * Ruangan findMany
   */
  export type RuanganFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter, which Ruangans to fetch.
     */
    where?: RuanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ruangans to fetch.
     */
    orderBy?: RuanganOrderByWithRelationInput | RuanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ruangans.
     */
    cursor?: RuanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ruangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ruangans.
     */
    skip?: number
    distinct?: RuanganScalarFieldEnum | RuanganScalarFieldEnum[]
  }

  /**
   * Ruangan create
   */
  export type RuanganCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * The data needed to create a Ruangan.
     */
    data: XOR<RuanganCreateInput, RuanganUncheckedCreateInput>
  }

  /**
   * Ruangan createMany
   */
  export type RuanganCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ruangans.
     */
    data: RuanganCreateManyInput | RuanganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ruangan createManyAndReturn
   */
  export type RuanganCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * The data used to create many Ruangans.
     */
    data: RuanganCreateManyInput | RuanganCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ruangan update
   */
  export type RuanganUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * The data needed to update a Ruangan.
     */
    data: XOR<RuanganUpdateInput, RuanganUncheckedUpdateInput>
    /**
     * Choose, which Ruangan to update.
     */
    where: RuanganWhereUniqueInput
  }

  /**
   * Ruangan updateMany
   */
  export type RuanganUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ruangans.
     */
    data: XOR<RuanganUpdateManyMutationInput, RuanganUncheckedUpdateManyInput>
    /**
     * Filter which Ruangans to update
     */
    where?: RuanganWhereInput
    /**
     * Limit how many Ruangans to update.
     */
    limit?: number
  }

  /**
   * Ruangan updateManyAndReturn
   */
  export type RuanganUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * The data used to update Ruangans.
     */
    data: XOR<RuanganUpdateManyMutationInput, RuanganUncheckedUpdateManyInput>
    /**
     * Filter which Ruangans to update
     */
    where?: RuanganWhereInput
    /**
     * Limit how many Ruangans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ruangan upsert
   */
  export type RuanganUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * The filter to search for the Ruangan to update in case it exists.
     */
    where: RuanganWhereUniqueInput
    /**
     * In case the Ruangan found by the `where` argument doesn't exist, create a new Ruangan with this data.
     */
    create: XOR<RuanganCreateInput, RuanganUncheckedCreateInput>
    /**
     * In case the Ruangan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RuanganUpdateInput, RuanganUncheckedUpdateInput>
  }

  /**
   * Ruangan delete
   */
  export type RuanganDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter which Ruangan to delete.
     */
    where: RuanganWhereUniqueInput
  }

  /**
   * Ruangan deleteMany
   */
  export type RuanganDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ruangans to delete
     */
    where?: RuanganWhereInput
    /**
     * Limit how many Ruangans to delete.
     */
    limit?: number
  }

  /**
   * Ruangan.kamars
   */
  export type Ruangan$kamarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    where?: KamarWhereInput
    orderBy?: KamarOrderByWithRelationInput | KamarOrderByWithRelationInput[]
    cursor?: KamarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KamarScalarFieldEnum | KamarScalarFieldEnum[]
  }

  /**
   * Ruangan.departemen
   */
  export type Ruangan$departemenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    where?: DepartemenWhereInput
  }

  /**
   * Ruangan without action
   */
  export type RuanganDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
  }


  /**
   * Model StatusBed
   */

  export type AggregateStatusBed = {
    _count: StatusBedCountAggregateOutputType | null
    _avg: StatusBedAvgAggregateOutputType | null
    _sum: StatusBedSumAggregateOutputType | null
    _min: StatusBedMinAggregateOutputType | null
    _max: StatusBedMaxAggregateOutputType | null
  }

  export type StatusBedAvgAggregateOutputType = {
    id: number | null
  }

  export type StatusBedSumAggregateOutputType = {
    id: number | null
  }

  export type StatusBedMinAggregateOutputType = {
    id: number | null
    statusbed: string | null
    statusenabled: boolean | null
  }

  export type StatusBedMaxAggregateOutputType = {
    id: number | null
    statusbed: string | null
    statusenabled: boolean | null
  }

  export type StatusBedCountAggregateOutputType = {
    id: number
    statusbed: number
    statusenabled: number
    _all: number
  }


  export type StatusBedAvgAggregateInputType = {
    id?: true
  }

  export type StatusBedSumAggregateInputType = {
    id?: true
  }

  export type StatusBedMinAggregateInputType = {
    id?: true
    statusbed?: true
    statusenabled?: true
  }

  export type StatusBedMaxAggregateInputType = {
    id?: true
    statusbed?: true
    statusenabled?: true
  }

  export type StatusBedCountAggregateInputType = {
    id?: true
    statusbed?: true
    statusenabled?: true
    _all?: true
  }

  export type StatusBedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusBed to aggregate.
     */
    where?: StatusBedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusBeds to fetch.
     */
    orderBy?: StatusBedOrderByWithRelationInput | StatusBedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusBedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusBeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusBeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatusBeds
    **/
    _count?: true | StatusBedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusBedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusBedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusBedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusBedMaxAggregateInputType
  }

  export type GetStatusBedAggregateType<T extends StatusBedAggregateArgs> = {
        [P in keyof T & keyof AggregateStatusBed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatusBed[P]>
      : GetScalarType<T[P], AggregateStatusBed[P]>
  }




  export type StatusBedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusBedWhereInput
    orderBy?: StatusBedOrderByWithAggregationInput | StatusBedOrderByWithAggregationInput[]
    by: StatusBedScalarFieldEnum[] | StatusBedScalarFieldEnum
    having?: StatusBedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusBedCountAggregateInputType | true
    _avg?: StatusBedAvgAggregateInputType
    _sum?: StatusBedSumAggregateInputType
    _min?: StatusBedMinAggregateInputType
    _max?: StatusBedMaxAggregateInputType
  }

  export type StatusBedGroupByOutputType = {
    id: number
    statusbed: string
    statusenabled: boolean
    _count: StatusBedCountAggregateOutputType | null
    _avg: StatusBedAvgAggregateOutputType | null
    _sum: StatusBedSumAggregateOutputType | null
    _min: StatusBedMinAggregateOutputType | null
    _max: StatusBedMaxAggregateOutputType | null
  }

  type GetStatusBedGroupByPayload<T extends StatusBedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusBedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusBedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusBedGroupByOutputType[P]>
            : GetScalarType<T[P], StatusBedGroupByOutputType[P]>
        }
      >
    >


  export type StatusBedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statusbed?: boolean
    statusenabled?: boolean
    tempatTidur?: boolean | StatusBed$tempatTidurArgs<ExtArgs>
    _count?: boolean | StatusBedCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusBed"]>

  export type StatusBedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statusbed?: boolean
    statusenabled?: boolean
  }, ExtArgs["result"]["statusBed"]>

  export type StatusBedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statusbed?: boolean
    statusenabled?: boolean
  }, ExtArgs["result"]["statusBed"]>

  export type StatusBedSelectScalar = {
    id?: boolean
    statusbed?: boolean
    statusenabled?: boolean
  }

  export type StatusBedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "statusbed" | "statusenabled", ExtArgs["result"]["statusBed"]>
  export type StatusBedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tempatTidur?: boolean | StatusBed$tempatTidurArgs<ExtArgs>
    _count?: boolean | StatusBedCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StatusBedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StatusBedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StatusBedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatusBed"
    objects: {
      tempatTidur: Prisma.$TempatTidurPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      statusbed: string
      statusenabled: boolean
    }, ExtArgs["result"]["statusBed"]>
    composites: {}
  }

  type StatusBedGetPayload<S extends boolean | null | undefined | StatusBedDefaultArgs> = $Result.GetResult<Prisma.$StatusBedPayload, S>

  type StatusBedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusBedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusBedCountAggregateInputType | true
    }

  export interface StatusBedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatusBed'], meta: { name: 'StatusBed' } }
    /**
     * Find zero or one StatusBed that matches the filter.
     * @param {StatusBedFindUniqueArgs} args - Arguments to find a StatusBed
     * @example
     * // Get one StatusBed
     * const statusBed = await prisma.statusBed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusBedFindUniqueArgs>(args: SelectSubset<T, StatusBedFindUniqueArgs<ExtArgs>>): Prisma__StatusBedClient<$Result.GetResult<Prisma.$StatusBedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StatusBed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusBedFindUniqueOrThrowArgs} args - Arguments to find a StatusBed
     * @example
     * // Get one StatusBed
     * const statusBed = await prisma.statusBed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusBedFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusBedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusBedClient<$Result.GetResult<Prisma.$StatusBedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusBed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusBedFindFirstArgs} args - Arguments to find a StatusBed
     * @example
     * // Get one StatusBed
     * const statusBed = await prisma.statusBed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusBedFindFirstArgs>(args?: SelectSubset<T, StatusBedFindFirstArgs<ExtArgs>>): Prisma__StatusBedClient<$Result.GetResult<Prisma.$StatusBedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusBed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusBedFindFirstOrThrowArgs} args - Arguments to find a StatusBed
     * @example
     * // Get one StatusBed
     * const statusBed = await prisma.statusBed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusBedFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusBedFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusBedClient<$Result.GetResult<Prisma.$StatusBedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StatusBeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusBedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatusBeds
     * const statusBeds = await prisma.statusBed.findMany()
     * 
     * // Get first 10 StatusBeds
     * const statusBeds = await prisma.statusBed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusBedWithIdOnly = await prisma.statusBed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusBedFindManyArgs>(args?: SelectSubset<T, StatusBedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusBedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StatusBed.
     * @param {StatusBedCreateArgs} args - Arguments to create a StatusBed.
     * @example
     * // Create one StatusBed
     * const StatusBed = await prisma.statusBed.create({
     *   data: {
     *     // ... data to create a StatusBed
     *   }
     * })
     * 
     */
    create<T extends StatusBedCreateArgs>(args: SelectSubset<T, StatusBedCreateArgs<ExtArgs>>): Prisma__StatusBedClient<$Result.GetResult<Prisma.$StatusBedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StatusBeds.
     * @param {StatusBedCreateManyArgs} args - Arguments to create many StatusBeds.
     * @example
     * // Create many StatusBeds
     * const statusBed = await prisma.statusBed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusBedCreateManyArgs>(args?: SelectSubset<T, StatusBedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StatusBeds and returns the data saved in the database.
     * @param {StatusBedCreateManyAndReturnArgs} args - Arguments to create many StatusBeds.
     * @example
     * // Create many StatusBeds
     * const statusBed = await prisma.statusBed.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StatusBeds and only return the `id`
     * const statusBedWithIdOnly = await prisma.statusBed.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatusBedCreateManyAndReturnArgs>(args?: SelectSubset<T, StatusBedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusBedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StatusBed.
     * @param {StatusBedDeleteArgs} args - Arguments to delete one StatusBed.
     * @example
     * // Delete one StatusBed
     * const StatusBed = await prisma.statusBed.delete({
     *   where: {
     *     // ... filter to delete one StatusBed
     *   }
     * })
     * 
     */
    delete<T extends StatusBedDeleteArgs>(args: SelectSubset<T, StatusBedDeleteArgs<ExtArgs>>): Prisma__StatusBedClient<$Result.GetResult<Prisma.$StatusBedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StatusBed.
     * @param {StatusBedUpdateArgs} args - Arguments to update one StatusBed.
     * @example
     * // Update one StatusBed
     * const statusBed = await prisma.statusBed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusBedUpdateArgs>(args: SelectSubset<T, StatusBedUpdateArgs<ExtArgs>>): Prisma__StatusBedClient<$Result.GetResult<Prisma.$StatusBedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StatusBeds.
     * @param {StatusBedDeleteManyArgs} args - Arguments to filter StatusBeds to delete.
     * @example
     * // Delete a few StatusBeds
     * const { count } = await prisma.statusBed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusBedDeleteManyArgs>(args?: SelectSubset<T, StatusBedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusBeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusBedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatusBeds
     * const statusBed = await prisma.statusBed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusBedUpdateManyArgs>(args: SelectSubset<T, StatusBedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusBeds and returns the data updated in the database.
     * @param {StatusBedUpdateManyAndReturnArgs} args - Arguments to update many StatusBeds.
     * @example
     * // Update many StatusBeds
     * const statusBed = await prisma.statusBed.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StatusBeds and only return the `id`
     * const statusBedWithIdOnly = await prisma.statusBed.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StatusBedUpdateManyAndReturnArgs>(args: SelectSubset<T, StatusBedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusBedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StatusBed.
     * @param {StatusBedUpsertArgs} args - Arguments to update or create a StatusBed.
     * @example
     * // Update or create a StatusBed
     * const statusBed = await prisma.statusBed.upsert({
     *   create: {
     *     // ... data to create a StatusBed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatusBed we want to update
     *   }
     * })
     */
    upsert<T extends StatusBedUpsertArgs>(args: SelectSubset<T, StatusBedUpsertArgs<ExtArgs>>): Prisma__StatusBedClient<$Result.GetResult<Prisma.$StatusBedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StatusBeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusBedCountArgs} args - Arguments to filter StatusBeds to count.
     * @example
     * // Count the number of StatusBeds
     * const count = await prisma.statusBed.count({
     *   where: {
     *     // ... the filter for the StatusBeds we want to count
     *   }
     * })
    **/
    count<T extends StatusBedCountArgs>(
      args?: Subset<T, StatusBedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusBedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatusBed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusBedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusBedAggregateArgs>(args: Subset<T, StatusBedAggregateArgs>): Prisma.PrismaPromise<GetStatusBedAggregateType<T>>

    /**
     * Group by StatusBed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusBedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatusBedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusBedGroupByArgs['orderBy'] }
        : { orderBy?: StatusBedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatusBedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusBedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatusBed model
   */
  readonly fields: StatusBedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatusBed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusBedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tempatTidur<T extends StatusBed$tempatTidurArgs<ExtArgs> = {}>(args?: Subset<T, StatusBed$tempatTidurArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempatTidurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StatusBed model
   */
  interface StatusBedFieldRefs {
    readonly id: FieldRef<"StatusBed", 'Int'>
    readonly statusbed: FieldRef<"StatusBed", 'String'>
    readonly statusenabled: FieldRef<"StatusBed", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * StatusBed findUnique
   */
  export type StatusBedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusBed
     */
    select?: StatusBedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusBed
     */
    omit?: StatusBedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusBedInclude<ExtArgs> | null
    /**
     * Filter, which StatusBed to fetch.
     */
    where: StatusBedWhereUniqueInput
  }

  /**
   * StatusBed findUniqueOrThrow
   */
  export type StatusBedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusBed
     */
    select?: StatusBedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusBed
     */
    omit?: StatusBedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusBedInclude<ExtArgs> | null
    /**
     * Filter, which StatusBed to fetch.
     */
    where: StatusBedWhereUniqueInput
  }

  /**
   * StatusBed findFirst
   */
  export type StatusBedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusBed
     */
    select?: StatusBedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusBed
     */
    omit?: StatusBedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusBedInclude<ExtArgs> | null
    /**
     * Filter, which StatusBed to fetch.
     */
    where?: StatusBedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusBeds to fetch.
     */
    orderBy?: StatusBedOrderByWithRelationInput | StatusBedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusBeds.
     */
    cursor?: StatusBedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusBeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusBeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusBeds.
     */
    distinct?: StatusBedScalarFieldEnum | StatusBedScalarFieldEnum[]
  }

  /**
   * StatusBed findFirstOrThrow
   */
  export type StatusBedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusBed
     */
    select?: StatusBedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusBed
     */
    omit?: StatusBedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusBedInclude<ExtArgs> | null
    /**
     * Filter, which StatusBed to fetch.
     */
    where?: StatusBedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusBeds to fetch.
     */
    orderBy?: StatusBedOrderByWithRelationInput | StatusBedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusBeds.
     */
    cursor?: StatusBedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusBeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusBeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusBeds.
     */
    distinct?: StatusBedScalarFieldEnum | StatusBedScalarFieldEnum[]
  }

  /**
   * StatusBed findMany
   */
  export type StatusBedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusBed
     */
    select?: StatusBedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusBed
     */
    omit?: StatusBedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusBedInclude<ExtArgs> | null
    /**
     * Filter, which StatusBeds to fetch.
     */
    where?: StatusBedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusBeds to fetch.
     */
    orderBy?: StatusBedOrderByWithRelationInput | StatusBedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatusBeds.
     */
    cursor?: StatusBedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusBeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusBeds.
     */
    skip?: number
    distinct?: StatusBedScalarFieldEnum | StatusBedScalarFieldEnum[]
  }

  /**
   * StatusBed create
   */
  export type StatusBedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusBed
     */
    select?: StatusBedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusBed
     */
    omit?: StatusBedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusBedInclude<ExtArgs> | null
    /**
     * The data needed to create a StatusBed.
     */
    data: XOR<StatusBedCreateInput, StatusBedUncheckedCreateInput>
  }

  /**
   * StatusBed createMany
   */
  export type StatusBedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatusBeds.
     */
    data: StatusBedCreateManyInput | StatusBedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatusBed createManyAndReturn
   */
  export type StatusBedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusBed
     */
    select?: StatusBedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatusBed
     */
    omit?: StatusBedOmit<ExtArgs> | null
    /**
     * The data used to create many StatusBeds.
     */
    data: StatusBedCreateManyInput | StatusBedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatusBed update
   */
  export type StatusBedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusBed
     */
    select?: StatusBedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusBed
     */
    omit?: StatusBedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusBedInclude<ExtArgs> | null
    /**
     * The data needed to update a StatusBed.
     */
    data: XOR<StatusBedUpdateInput, StatusBedUncheckedUpdateInput>
    /**
     * Choose, which StatusBed to update.
     */
    where: StatusBedWhereUniqueInput
  }

  /**
   * StatusBed updateMany
   */
  export type StatusBedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatusBeds.
     */
    data: XOR<StatusBedUpdateManyMutationInput, StatusBedUncheckedUpdateManyInput>
    /**
     * Filter which StatusBeds to update
     */
    where?: StatusBedWhereInput
    /**
     * Limit how many StatusBeds to update.
     */
    limit?: number
  }

  /**
   * StatusBed updateManyAndReturn
   */
  export type StatusBedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusBed
     */
    select?: StatusBedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatusBed
     */
    omit?: StatusBedOmit<ExtArgs> | null
    /**
     * The data used to update StatusBeds.
     */
    data: XOR<StatusBedUpdateManyMutationInput, StatusBedUncheckedUpdateManyInput>
    /**
     * Filter which StatusBeds to update
     */
    where?: StatusBedWhereInput
    /**
     * Limit how many StatusBeds to update.
     */
    limit?: number
  }

  /**
   * StatusBed upsert
   */
  export type StatusBedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusBed
     */
    select?: StatusBedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusBed
     */
    omit?: StatusBedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusBedInclude<ExtArgs> | null
    /**
     * The filter to search for the StatusBed to update in case it exists.
     */
    where: StatusBedWhereUniqueInput
    /**
     * In case the StatusBed found by the `where` argument doesn't exist, create a new StatusBed with this data.
     */
    create: XOR<StatusBedCreateInput, StatusBedUncheckedCreateInput>
    /**
     * In case the StatusBed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusBedUpdateInput, StatusBedUncheckedUpdateInput>
  }

  /**
   * StatusBed delete
   */
  export type StatusBedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusBed
     */
    select?: StatusBedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusBed
     */
    omit?: StatusBedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusBedInclude<ExtArgs> | null
    /**
     * Filter which StatusBed to delete.
     */
    where: StatusBedWhereUniqueInput
  }

  /**
   * StatusBed deleteMany
   */
  export type StatusBedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusBeds to delete
     */
    where?: StatusBedWhereInput
    /**
     * Limit how many StatusBeds to delete.
     */
    limit?: number
  }

  /**
   * StatusBed.tempatTidur
   */
  export type StatusBed$tempatTidurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempatTidur
     */
    select?: TempatTidurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TempatTidur
     */
    omit?: TempatTidurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TempatTidurInclude<ExtArgs> | null
    where?: TempatTidurWhereInput
    orderBy?: TempatTidurOrderByWithRelationInput | TempatTidurOrderByWithRelationInput[]
    cursor?: TempatTidurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TempatTidurScalarFieldEnum | TempatTidurScalarFieldEnum[]
  }

  /**
   * StatusBed without action
   */
  export type StatusBedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusBed
     */
    select?: StatusBedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusBed
     */
    omit?: StatusBedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusBedInclude<ExtArgs> | null
  }


  /**
   * Model Kelas
   */

  export type AggregateKelas = {
    _count: KelasCountAggregateOutputType | null
    _avg: KelasAvgAggregateOutputType | null
    _sum: KelasSumAggregateOutputType | null
    _min: KelasMinAggregateOutputType | null
    _max: KelasMaxAggregateOutputType | null
  }

  export type KelasAvgAggregateOutputType = {
    id: number | null
  }

  export type KelasSumAggregateOutputType = {
    id: number | null
  }

  export type KelasMinAggregateOutputType = {
    id: number | null
    namakelas: string | null
    statusenabled: boolean | null
  }

  export type KelasMaxAggregateOutputType = {
    id: number | null
    namakelas: string | null
    statusenabled: boolean | null
  }

  export type KelasCountAggregateOutputType = {
    id: number
    namakelas: number
    statusenabled: number
    _all: number
  }


  export type KelasAvgAggregateInputType = {
    id?: true
  }

  export type KelasSumAggregateInputType = {
    id?: true
  }

  export type KelasMinAggregateInputType = {
    id?: true
    namakelas?: true
    statusenabled?: true
  }

  export type KelasMaxAggregateInputType = {
    id?: true
    namakelas?: true
    statusenabled?: true
  }

  export type KelasCountAggregateInputType = {
    id?: true
    namakelas?: true
    statusenabled?: true
    _all?: true
  }

  export type KelasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kelas to aggregate.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kelas
    **/
    _count?: true | KelasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KelasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KelasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KelasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KelasMaxAggregateInputType
  }

  export type GetKelasAggregateType<T extends KelasAggregateArgs> = {
        [P in keyof T & keyof AggregateKelas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKelas[P]>
      : GetScalarType<T[P], AggregateKelas[P]>
  }




  export type KelasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KelasWhereInput
    orderBy?: KelasOrderByWithAggregationInput | KelasOrderByWithAggregationInput[]
    by: KelasScalarFieldEnum[] | KelasScalarFieldEnum
    having?: KelasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KelasCountAggregateInputType | true
    _avg?: KelasAvgAggregateInputType
    _sum?: KelasSumAggregateInputType
    _min?: KelasMinAggregateInputType
    _max?: KelasMaxAggregateInputType
  }

  export type KelasGroupByOutputType = {
    id: number
    namakelas: string
    statusenabled: boolean
    _count: KelasCountAggregateOutputType | null
    _avg: KelasAvgAggregateOutputType | null
    _sum: KelasSumAggregateOutputType | null
    _min: KelasMinAggregateOutputType | null
    _max: KelasMaxAggregateOutputType | null
  }

  type GetKelasGroupByPayload<T extends KelasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KelasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KelasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KelasGroupByOutputType[P]>
            : GetScalarType<T[P], KelasGroupByOutputType[P]>
        }
      >
    >


  export type KelasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namakelas?: boolean
    statusenabled?: boolean
    kamars?: boolean | Kelas$kamarsArgs<ExtArgs>
    _count?: boolean | KelasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kelas"]>

  export type KelasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namakelas?: boolean
    statusenabled?: boolean
  }, ExtArgs["result"]["kelas"]>

  export type KelasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namakelas?: boolean
    statusenabled?: boolean
  }, ExtArgs["result"]["kelas"]>

  export type KelasSelectScalar = {
    id?: boolean
    namakelas?: boolean
    statusenabled?: boolean
  }

  export type KelasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namakelas" | "statusenabled", ExtArgs["result"]["kelas"]>
  export type KelasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kamars?: boolean | Kelas$kamarsArgs<ExtArgs>
    _count?: boolean | KelasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KelasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KelasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KelasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kelas"
    objects: {
      kamars: Prisma.$KamarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      namakelas: string
      statusenabled: boolean
    }, ExtArgs["result"]["kelas"]>
    composites: {}
  }

  type KelasGetPayload<S extends boolean | null | undefined | KelasDefaultArgs> = $Result.GetResult<Prisma.$KelasPayload, S>

  type KelasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KelasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KelasCountAggregateInputType | true
    }

  export interface KelasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kelas'], meta: { name: 'Kelas' } }
    /**
     * Find zero or one Kelas that matches the filter.
     * @param {KelasFindUniqueArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KelasFindUniqueArgs>(args: SelectSubset<T, KelasFindUniqueArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kelas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KelasFindUniqueOrThrowArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KelasFindUniqueOrThrowArgs>(args: SelectSubset<T, KelasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasFindFirstArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KelasFindFirstArgs>(args?: SelectSubset<T, KelasFindFirstArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kelas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasFindFirstOrThrowArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KelasFindFirstOrThrowArgs>(args?: SelectSubset<T, KelasFindFirstOrThrowArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kelas
     * const kelas = await prisma.kelas.findMany()
     * 
     * // Get first 10 Kelas
     * const kelas = await prisma.kelas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kelasWithIdOnly = await prisma.kelas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KelasFindManyArgs>(args?: SelectSubset<T, KelasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kelas.
     * @param {KelasCreateArgs} args - Arguments to create a Kelas.
     * @example
     * // Create one Kelas
     * const Kelas = await prisma.kelas.create({
     *   data: {
     *     // ... data to create a Kelas
     *   }
     * })
     * 
     */
    create<T extends KelasCreateArgs>(args: SelectSubset<T, KelasCreateArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kelas.
     * @param {KelasCreateManyArgs} args - Arguments to create many Kelas.
     * @example
     * // Create many Kelas
     * const kelas = await prisma.kelas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KelasCreateManyArgs>(args?: SelectSubset<T, KelasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kelas and returns the data saved in the database.
     * @param {KelasCreateManyAndReturnArgs} args - Arguments to create many Kelas.
     * @example
     * // Create many Kelas
     * const kelas = await prisma.kelas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kelas and only return the `id`
     * const kelasWithIdOnly = await prisma.kelas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KelasCreateManyAndReturnArgs>(args?: SelectSubset<T, KelasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kelas.
     * @param {KelasDeleteArgs} args - Arguments to delete one Kelas.
     * @example
     * // Delete one Kelas
     * const Kelas = await prisma.kelas.delete({
     *   where: {
     *     // ... filter to delete one Kelas
     *   }
     * })
     * 
     */
    delete<T extends KelasDeleteArgs>(args: SelectSubset<T, KelasDeleteArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kelas.
     * @param {KelasUpdateArgs} args - Arguments to update one Kelas.
     * @example
     * // Update one Kelas
     * const kelas = await prisma.kelas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KelasUpdateArgs>(args: SelectSubset<T, KelasUpdateArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kelas.
     * @param {KelasDeleteManyArgs} args - Arguments to filter Kelas to delete.
     * @example
     * // Delete a few Kelas
     * const { count } = await prisma.kelas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KelasDeleteManyArgs>(args?: SelectSubset<T, KelasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kelas
     * const kelas = await prisma.kelas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KelasUpdateManyArgs>(args: SelectSubset<T, KelasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kelas and returns the data updated in the database.
     * @param {KelasUpdateManyAndReturnArgs} args - Arguments to update many Kelas.
     * @example
     * // Update many Kelas
     * const kelas = await prisma.kelas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kelas and only return the `id`
     * const kelasWithIdOnly = await prisma.kelas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KelasUpdateManyAndReturnArgs>(args: SelectSubset<T, KelasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kelas.
     * @param {KelasUpsertArgs} args - Arguments to update or create a Kelas.
     * @example
     * // Update or create a Kelas
     * const kelas = await prisma.kelas.upsert({
     *   create: {
     *     // ... data to create a Kelas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kelas we want to update
     *   }
     * })
     */
    upsert<T extends KelasUpsertArgs>(args: SelectSubset<T, KelasUpsertArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasCountArgs} args - Arguments to filter Kelas to count.
     * @example
     * // Count the number of Kelas
     * const count = await prisma.kelas.count({
     *   where: {
     *     // ... the filter for the Kelas we want to count
     *   }
     * })
    **/
    count<T extends KelasCountArgs>(
      args?: Subset<T, KelasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KelasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KelasAggregateArgs>(args: Subset<T, KelasAggregateArgs>): Prisma.PrismaPromise<GetKelasAggregateType<T>>

    /**
     * Group by Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KelasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KelasGroupByArgs['orderBy'] }
        : { orderBy?: KelasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KelasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKelasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kelas model
   */
  readonly fields: KelasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kelas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KelasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kamars<T extends Kelas$kamarsArgs<ExtArgs> = {}>(args?: Subset<T, Kelas$kamarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Kelas model
   */
  interface KelasFieldRefs {
    readonly id: FieldRef<"Kelas", 'Int'>
    readonly namakelas: FieldRef<"Kelas", 'String'>
    readonly statusenabled: FieldRef<"Kelas", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Kelas findUnique
   */
  export type KelasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas findUniqueOrThrow
   */
  export type KelasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas findFirst
   */
  export type KelasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kelas.
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kelas.
     */
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * Kelas findFirstOrThrow
   */
  export type KelasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kelas.
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kelas.
     */
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * Kelas findMany
   */
  export type KelasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kelas.
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * Kelas create
   */
  export type KelasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * The data needed to create a Kelas.
     */
    data: XOR<KelasCreateInput, KelasUncheckedCreateInput>
  }

  /**
   * Kelas createMany
   */
  export type KelasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kelas.
     */
    data: KelasCreateManyInput | KelasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kelas createManyAndReturn
   */
  export type KelasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * The data used to create many Kelas.
     */
    data: KelasCreateManyInput | KelasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kelas update
   */
  export type KelasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * The data needed to update a Kelas.
     */
    data: XOR<KelasUpdateInput, KelasUncheckedUpdateInput>
    /**
     * Choose, which Kelas to update.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas updateMany
   */
  export type KelasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kelas.
     */
    data: XOR<KelasUpdateManyMutationInput, KelasUncheckedUpdateManyInput>
    /**
     * Filter which Kelas to update
     */
    where?: KelasWhereInput
    /**
     * Limit how many Kelas to update.
     */
    limit?: number
  }

  /**
   * Kelas updateManyAndReturn
   */
  export type KelasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * The data used to update Kelas.
     */
    data: XOR<KelasUpdateManyMutationInput, KelasUncheckedUpdateManyInput>
    /**
     * Filter which Kelas to update
     */
    where?: KelasWhereInput
    /**
     * Limit how many Kelas to update.
     */
    limit?: number
  }

  /**
   * Kelas upsert
   */
  export type KelasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * The filter to search for the Kelas to update in case it exists.
     */
    where: KelasWhereUniqueInput
    /**
     * In case the Kelas found by the `where` argument doesn't exist, create a new Kelas with this data.
     */
    create: XOR<KelasCreateInput, KelasUncheckedCreateInput>
    /**
     * In case the Kelas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KelasUpdateInput, KelasUncheckedUpdateInput>
  }

  /**
   * Kelas delete
   */
  export type KelasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter which Kelas to delete.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas deleteMany
   */
  export type KelasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kelas to delete
     */
    where?: KelasWhereInput
    /**
     * Limit how many Kelas to delete.
     */
    limit?: number
  }

  /**
   * Kelas.kamars
   */
  export type Kelas$kamarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    where?: KamarWhereInput
    orderBy?: KamarOrderByWithRelationInput | KamarOrderByWithRelationInput[]
    cursor?: KamarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KamarScalarFieldEnum | KamarScalarFieldEnum[]
  }

  /**
   * Kelas without action
   */
  export type KelasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
  }


  /**
   * Model Departemen
   */

  export type AggregateDepartemen = {
    _count: DepartemenCountAggregateOutputType | null
    _avg: DepartemenAvgAggregateOutputType | null
    _sum: DepartemenSumAggregateOutputType | null
    _min: DepartemenMinAggregateOutputType | null
    _max: DepartemenMaxAggregateOutputType | null
  }

  export type DepartemenAvgAggregateOutputType = {
    id: number | null
  }

  export type DepartemenSumAggregateOutputType = {
    id: number | null
  }

  export type DepartemenMinAggregateOutputType = {
    id: number | null
    namadepartemen: string | null
    statusenabled: boolean | null
  }

  export type DepartemenMaxAggregateOutputType = {
    id: number | null
    namadepartemen: string | null
    statusenabled: boolean | null
  }

  export type DepartemenCountAggregateOutputType = {
    id: number
    namadepartemen: number
    statusenabled: number
    _all: number
  }


  export type DepartemenAvgAggregateInputType = {
    id?: true
  }

  export type DepartemenSumAggregateInputType = {
    id?: true
  }

  export type DepartemenMinAggregateInputType = {
    id?: true
    namadepartemen?: true
    statusenabled?: true
  }

  export type DepartemenMaxAggregateInputType = {
    id?: true
    namadepartemen?: true
    statusenabled?: true
  }

  export type DepartemenCountAggregateInputType = {
    id?: true
    namadepartemen?: true
    statusenabled?: true
    _all?: true
  }

  export type DepartemenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departemen to aggregate.
     */
    where?: DepartemenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departemen to fetch.
     */
    orderBy?: DepartemenOrderByWithRelationInput | DepartemenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartemenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departemen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departemen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departemen
    **/
    _count?: true | DepartemenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartemenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartemenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartemenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartemenMaxAggregateInputType
  }

  export type GetDepartemenAggregateType<T extends DepartemenAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartemen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartemen[P]>
      : GetScalarType<T[P], AggregateDepartemen[P]>
  }




  export type DepartemenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartemenWhereInput
    orderBy?: DepartemenOrderByWithAggregationInput | DepartemenOrderByWithAggregationInput[]
    by: DepartemenScalarFieldEnum[] | DepartemenScalarFieldEnum
    having?: DepartemenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartemenCountAggregateInputType | true
    _avg?: DepartemenAvgAggregateInputType
    _sum?: DepartemenSumAggregateInputType
    _min?: DepartemenMinAggregateInputType
    _max?: DepartemenMaxAggregateInputType
  }

  export type DepartemenGroupByOutputType = {
    id: number
    namadepartemen: string
    statusenabled: boolean
    _count: DepartemenCountAggregateOutputType | null
    _avg: DepartemenAvgAggregateOutputType | null
    _sum: DepartemenSumAggregateOutputType | null
    _min: DepartemenMinAggregateOutputType | null
    _max: DepartemenMaxAggregateOutputType | null
  }

  type GetDepartemenGroupByPayload<T extends DepartemenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartemenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartemenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartemenGroupByOutputType[P]>
            : GetScalarType<T[P], DepartemenGroupByOutputType[P]>
        }
      >
    >


  export type DepartemenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namadepartemen?: boolean
    statusenabled?: boolean
    ruangans?: boolean | Departemen$ruangansArgs<ExtArgs>
    _count?: boolean | DepartemenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departemen"]>

  export type DepartemenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namadepartemen?: boolean
    statusenabled?: boolean
  }, ExtArgs["result"]["departemen"]>

  export type DepartemenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namadepartemen?: boolean
    statusenabled?: boolean
  }, ExtArgs["result"]["departemen"]>

  export type DepartemenSelectScalar = {
    id?: boolean
    namadepartemen?: boolean
    statusenabled?: boolean
  }

  export type DepartemenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namadepartemen" | "statusenabled", ExtArgs["result"]["departemen"]>
  export type DepartemenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ruangans?: boolean | Departemen$ruangansArgs<ExtArgs>
    _count?: boolean | DepartemenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartemenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartemenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartemenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Departemen"
    objects: {
      ruangans: Prisma.$RuanganPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      namadepartemen: string
      statusenabled: boolean
    }, ExtArgs["result"]["departemen"]>
    composites: {}
  }

  type DepartemenGetPayload<S extends boolean | null | undefined | DepartemenDefaultArgs> = $Result.GetResult<Prisma.$DepartemenPayload, S>

  type DepartemenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartemenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartemenCountAggregateInputType | true
    }

  export interface DepartemenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Departemen'], meta: { name: 'Departemen' } }
    /**
     * Find zero or one Departemen that matches the filter.
     * @param {DepartemenFindUniqueArgs} args - Arguments to find a Departemen
     * @example
     * // Get one Departemen
     * const departemen = await prisma.departemen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartemenFindUniqueArgs>(args: SelectSubset<T, DepartemenFindUniqueArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Departemen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartemenFindUniqueOrThrowArgs} args - Arguments to find a Departemen
     * @example
     * // Get one Departemen
     * const departemen = await prisma.departemen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartemenFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartemenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departemen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartemenFindFirstArgs} args - Arguments to find a Departemen
     * @example
     * // Get one Departemen
     * const departemen = await prisma.departemen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartemenFindFirstArgs>(args?: SelectSubset<T, DepartemenFindFirstArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departemen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartemenFindFirstOrThrowArgs} args - Arguments to find a Departemen
     * @example
     * // Get one Departemen
     * const departemen = await prisma.departemen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartemenFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartemenFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departemen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartemenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departemen
     * const departemen = await prisma.departemen.findMany()
     * 
     * // Get first 10 Departemen
     * const departemen = await prisma.departemen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departemenWithIdOnly = await prisma.departemen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartemenFindManyArgs>(args?: SelectSubset<T, DepartemenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Departemen.
     * @param {DepartemenCreateArgs} args - Arguments to create a Departemen.
     * @example
     * // Create one Departemen
     * const Departemen = await prisma.departemen.create({
     *   data: {
     *     // ... data to create a Departemen
     *   }
     * })
     * 
     */
    create<T extends DepartemenCreateArgs>(args: SelectSubset<T, DepartemenCreateArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departemen.
     * @param {DepartemenCreateManyArgs} args - Arguments to create many Departemen.
     * @example
     * // Create many Departemen
     * const departemen = await prisma.departemen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartemenCreateManyArgs>(args?: SelectSubset<T, DepartemenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departemen and returns the data saved in the database.
     * @param {DepartemenCreateManyAndReturnArgs} args - Arguments to create many Departemen.
     * @example
     * // Create many Departemen
     * const departemen = await prisma.departemen.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departemen and only return the `id`
     * const departemenWithIdOnly = await prisma.departemen.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartemenCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartemenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Departemen.
     * @param {DepartemenDeleteArgs} args - Arguments to delete one Departemen.
     * @example
     * // Delete one Departemen
     * const Departemen = await prisma.departemen.delete({
     *   where: {
     *     // ... filter to delete one Departemen
     *   }
     * })
     * 
     */
    delete<T extends DepartemenDeleteArgs>(args: SelectSubset<T, DepartemenDeleteArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Departemen.
     * @param {DepartemenUpdateArgs} args - Arguments to update one Departemen.
     * @example
     * // Update one Departemen
     * const departemen = await prisma.departemen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartemenUpdateArgs>(args: SelectSubset<T, DepartemenUpdateArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departemen.
     * @param {DepartemenDeleteManyArgs} args - Arguments to filter Departemen to delete.
     * @example
     * // Delete a few Departemen
     * const { count } = await prisma.departemen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartemenDeleteManyArgs>(args?: SelectSubset<T, DepartemenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departemen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartemenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departemen
     * const departemen = await prisma.departemen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartemenUpdateManyArgs>(args: SelectSubset<T, DepartemenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departemen and returns the data updated in the database.
     * @param {DepartemenUpdateManyAndReturnArgs} args - Arguments to update many Departemen.
     * @example
     * // Update many Departemen
     * const departemen = await prisma.departemen.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departemen and only return the `id`
     * const departemenWithIdOnly = await prisma.departemen.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartemenUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartemenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Departemen.
     * @param {DepartemenUpsertArgs} args - Arguments to update or create a Departemen.
     * @example
     * // Update or create a Departemen
     * const departemen = await prisma.departemen.upsert({
     *   create: {
     *     // ... data to create a Departemen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departemen we want to update
     *   }
     * })
     */
    upsert<T extends DepartemenUpsertArgs>(args: SelectSubset<T, DepartemenUpsertArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departemen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartemenCountArgs} args - Arguments to filter Departemen to count.
     * @example
     * // Count the number of Departemen
     * const count = await prisma.departemen.count({
     *   where: {
     *     // ... the filter for the Departemen we want to count
     *   }
     * })
    **/
    count<T extends DepartemenCountArgs>(
      args?: Subset<T, DepartemenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartemenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departemen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartemenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartemenAggregateArgs>(args: Subset<T, DepartemenAggregateArgs>): Prisma.PrismaPromise<GetDepartemenAggregateType<T>>

    /**
     * Group by Departemen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartemenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartemenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartemenGroupByArgs['orderBy'] }
        : { orderBy?: DepartemenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartemenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartemenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Departemen model
   */
  readonly fields: DepartemenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Departemen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartemenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ruangans<T extends Departemen$ruangansArgs<ExtArgs> = {}>(args?: Subset<T, Departemen$ruangansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Departemen model
   */
  interface DepartemenFieldRefs {
    readonly id: FieldRef<"Departemen", 'Int'>
    readonly namadepartemen: FieldRef<"Departemen", 'String'>
    readonly statusenabled: FieldRef<"Departemen", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Departemen findUnique
   */
  export type DepartemenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * Filter, which Departemen to fetch.
     */
    where: DepartemenWhereUniqueInput
  }

  /**
   * Departemen findUniqueOrThrow
   */
  export type DepartemenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * Filter, which Departemen to fetch.
     */
    where: DepartemenWhereUniqueInput
  }

  /**
   * Departemen findFirst
   */
  export type DepartemenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * Filter, which Departemen to fetch.
     */
    where?: DepartemenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departemen to fetch.
     */
    orderBy?: DepartemenOrderByWithRelationInput | DepartemenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departemen.
     */
    cursor?: DepartemenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departemen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departemen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departemen.
     */
    distinct?: DepartemenScalarFieldEnum | DepartemenScalarFieldEnum[]
  }

  /**
   * Departemen findFirstOrThrow
   */
  export type DepartemenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * Filter, which Departemen to fetch.
     */
    where?: DepartemenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departemen to fetch.
     */
    orderBy?: DepartemenOrderByWithRelationInput | DepartemenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departemen.
     */
    cursor?: DepartemenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departemen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departemen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departemen.
     */
    distinct?: DepartemenScalarFieldEnum | DepartemenScalarFieldEnum[]
  }

  /**
   * Departemen findMany
   */
  export type DepartemenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * Filter, which Departemen to fetch.
     */
    where?: DepartemenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departemen to fetch.
     */
    orderBy?: DepartemenOrderByWithRelationInput | DepartemenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departemen.
     */
    cursor?: DepartemenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departemen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departemen.
     */
    skip?: number
    distinct?: DepartemenScalarFieldEnum | DepartemenScalarFieldEnum[]
  }

  /**
   * Departemen create
   */
  export type DepartemenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * The data needed to create a Departemen.
     */
    data: XOR<DepartemenCreateInput, DepartemenUncheckedCreateInput>
  }

  /**
   * Departemen createMany
   */
  export type DepartemenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departemen.
     */
    data: DepartemenCreateManyInput | DepartemenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Departemen createManyAndReturn
   */
  export type DepartemenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * The data used to create many Departemen.
     */
    data: DepartemenCreateManyInput | DepartemenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Departemen update
   */
  export type DepartemenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * The data needed to update a Departemen.
     */
    data: XOR<DepartemenUpdateInput, DepartemenUncheckedUpdateInput>
    /**
     * Choose, which Departemen to update.
     */
    where: DepartemenWhereUniqueInput
  }

  /**
   * Departemen updateMany
   */
  export type DepartemenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departemen.
     */
    data: XOR<DepartemenUpdateManyMutationInput, DepartemenUncheckedUpdateManyInput>
    /**
     * Filter which Departemen to update
     */
    where?: DepartemenWhereInput
    /**
     * Limit how many Departemen to update.
     */
    limit?: number
  }

  /**
   * Departemen updateManyAndReturn
   */
  export type DepartemenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * The data used to update Departemen.
     */
    data: XOR<DepartemenUpdateManyMutationInput, DepartemenUncheckedUpdateManyInput>
    /**
     * Filter which Departemen to update
     */
    where?: DepartemenWhereInput
    /**
     * Limit how many Departemen to update.
     */
    limit?: number
  }

  /**
   * Departemen upsert
   */
  export type DepartemenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * The filter to search for the Departemen to update in case it exists.
     */
    where: DepartemenWhereUniqueInput
    /**
     * In case the Departemen found by the `where` argument doesn't exist, create a new Departemen with this data.
     */
    create: XOR<DepartemenCreateInput, DepartemenUncheckedCreateInput>
    /**
     * In case the Departemen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartemenUpdateInput, DepartemenUncheckedUpdateInput>
  }

  /**
   * Departemen delete
   */
  export type DepartemenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * Filter which Departemen to delete.
     */
    where: DepartemenWhereUniqueInput
  }

  /**
   * Departemen deleteMany
   */
  export type DepartemenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departemen to delete
     */
    where?: DepartemenWhereInput
    /**
     * Limit how many Departemen to delete.
     */
    limit?: number
  }

  /**
   * Departemen.ruangans
   */
  export type Departemen$ruangansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    where?: RuanganWhereInput
    orderBy?: RuanganOrderByWithRelationInput | RuanganOrderByWithRelationInput[]
    cursor?: RuanganWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RuanganScalarFieldEnum | RuanganScalarFieldEnum[]
  }

  /**
   * Departemen without action
   */
  export type DepartemenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PaymentMethodScalarFieldEnum: {
    id: 'id',
    statusenabled: 'statusenabled',
    reportdisplay: 'reportdisplay'
  };

  export type PaymentMethodScalarFieldEnum = (typeof PaymentMethodScalarFieldEnum)[keyof typeof PaymentMethodScalarFieldEnum]


  export const TempatTidurScalarFieldEnum: {
    id: 'id',
    reportdisplay: 'reportdisplay',
    nomorbed: 'nomorbed',
    statusenabled: 'statusenabled',
    objectkamarfk: 'objectkamarfk',
    objectstatusbedfk: 'objectstatusbedfk'
  };

  export type TempatTidurScalarFieldEnum = (typeof TempatTidurScalarFieldEnum)[keyof typeof TempatTidurScalarFieldEnum]


  export const KamarScalarFieldEnum: {
    id: 'id',
    namakamar: 'namakamar',
    statusenabled: 'statusenabled',
    objectruanganfk: 'objectruanganfk',
    objectkelasfk: 'objectkelasfk'
  };

  export type KamarScalarFieldEnum = (typeof KamarScalarFieldEnum)[keyof typeof KamarScalarFieldEnum]


  export const RuanganScalarFieldEnum: {
    id: 'id',
    namaruangan: 'namaruangan',
    statusenabled: 'statusenabled',
    objectdepartemenfk: 'objectdepartemenfk'
  };

  export type RuanganScalarFieldEnum = (typeof RuanganScalarFieldEnum)[keyof typeof RuanganScalarFieldEnum]


  export const StatusBedScalarFieldEnum: {
    id: 'id',
    statusbed: 'statusbed',
    statusenabled: 'statusenabled'
  };

  export type StatusBedScalarFieldEnum = (typeof StatusBedScalarFieldEnum)[keyof typeof StatusBedScalarFieldEnum]


  export const KelasScalarFieldEnum: {
    id: 'id',
    namakelas: 'namakelas',
    statusenabled: 'statusenabled'
  };

  export type KelasScalarFieldEnum = (typeof KelasScalarFieldEnum)[keyof typeof KelasScalarFieldEnum]


  export const DepartemenScalarFieldEnum: {
    id: 'id',
    namadepartemen: 'namadepartemen',
    statusenabled: 'statusenabled'
  };

  export type DepartemenScalarFieldEnum = (typeof DepartemenScalarFieldEnum)[keyof typeof DepartemenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PaymentMethodWhereInput = {
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    id?: IntFilter<"PaymentMethod"> | number
    statusenabled?: BoolFilter<"PaymentMethod"> | boolean
    reportdisplay?: StringFilter<"PaymentMethod"> | string
  }

  export type PaymentMethodOrderByWithRelationInput = {
    id?: SortOrder
    statusenabled?: SortOrder
    reportdisplay?: SortOrder
  }

  export type PaymentMethodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    statusenabled?: BoolFilter<"PaymentMethod"> | boolean
    reportdisplay?: StringFilter<"PaymentMethod"> | string
  }, "id">

  export type PaymentMethodOrderByWithAggregationInput = {
    id?: SortOrder
    statusenabled?: SortOrder
    reportdisplay?: SortOrder
    _count?: PaymentMethodCountOrderByAggregateInput
    _avg?: PaymentMethodAvgOrderByAggregateInput
    _max?: PaymentMethodMaxOrderByAggregateInput
    _min?: PaymentMethodMinOrderByAggregateInput
    _sum?: PaymentMethodSumOrderByAggregateInput
  }

  export type PaymentMethodScalarWhereWithAggregatesInput = {
    AND?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    OR?: PaymentMethodScalarWhereWithAggregatesInput[]
    NOT?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentMethod"> | number
    statusenabled?: BoolWithAggregatesFilter<"PaymentMethod"> | boolean
    reportdisplay?: StringWithAggregatesFilter<"PaymentMethod"> | string
  }

  export type TempatTidurWhereInput = {
    AND?: TempatTidurWhereInput | TempatTidurWhereInput[]
    OR?: TempatTidurWhereInput[]
    NOT?: TempatTidurWhereInput | TempatTidurWhereInput[]
    id?: IntFilter<"TempatTidur"> | number
    reportdisplay?: StringFilter<"TempatTidur"> | string
    nomorbed?: IntFilter<"TempatTidur"> | number
    statusenabled?: BoolFilter<"TempatTidur"> | boolean
    objectkamarfk?: IntNullableFilter<"TempatTidur"> | number | null
    objectstatusbedfk?: IntNullableFilter<"TempatTidur"> | number | null
    kamar?: XOR<KamarNullableScalarRelationFilter, KamarWhereInput> | null
    status?: XOR<StatusBedNullableScalarRelationFilter, StatusBedWhereInput> | null
  }

  export type TempatTidurOrderByWithRelationInput = {
    id?: SortOrder
    reportdisplay?: SortOrder
    nomorbed?: SortOrder
    statusenabled?: SortOrder
    objectkamarfk?: SortOrderInput | SortOrder
    objectstatusbedfk?: SortOrderInput | SortOrder
    kamar?: KamarOrderByWithRelationInput
    status?: StatusBedOrderByWithRelationInput
  }

  export type TempatTidurWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TempatTidurWhereInput | TempatTidurWhereInput[]
    OR?: TempatTidurWhereInput[]
    NOT?: TempatTidurWhereInput | TempatTidurWhereInput[]
    reportdisplay?: StringFilter<"TempatTidur"> | string
    nomorbed?: IntFilter<"TempatTidur"> | number
    statusenabled?: BoolFilter<"TempatTidur"> | boolean
    objectkamarfk?: IntNullableFilter<"TempatTidur"> | number | null
    objectstatusbedfk?: IntNullableFilter<"TempatTidur"> | number | null
    kamar?: XOR<KamarNullableScalarRelationFilter, KamarWhereInput> | null
    status?: XOR<StatusBedNullableScalarRelationFilter, StatusBedWhereInput> | null
  }, "id">

  export type TempatTidurOrderByWithAggregationInput = {
    id?: SortOrder
    reportdisplay?: SortOrder
    nomorbed?: SortOrder
    statusenabled?: SortOrder
    objectkamarfk?: SortOrderInput | SortOrder
    objectstatusbedfk?: SortOrderInput | SortOrder
    _count?: TempatTidurCountOrderByAggregateInput
    _avg?: TempatTidurAvgOrderByAggregateInput
    _max?: TempatTidurMaxOrderByAggregateInput
    _min?: TempatTidurMinOrderByAggregateInput
    _sum?: TempatTidurSumOrderByAggregateInput
  }

  export type TempatTidurScalarWhereWithAggregatesInput = {
    AND?: TempatTidurScalarWhereWithAggregatesInput | TempatTidurScalarWhereWithAggregatesInput[]
    OR?: TempatTidurScalarWhereWithAggregatesInput[]
    NOT?: TempatTidurScalarWhereWithAggregatesInput | TempatTidurScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TempatTidur"> | number
    reportdisplay?: StringWithAggregatesFilter<"TempatTidur"> | string
    nomorbed?: IntWithAggregatesFilter<"TempatTidur"> | number
    statusenabled?: BoolWithAggregatesFilter<"TempatTidur"> | boolean
    objectkamarfk?: IntNullableWithAggregatesFilter<"TempatTidur"> | number | null
    objectstatusbedfk?: IntNullableWithAggregatesFilter<"TempatTidur"> | number | null
  }

  export type KamarWhereInput = {
    AND?: KamarWhereInput | KamarWhereInput[]
    OR?: KamarWhereInput[]
    NOT?: KamarWhereInput | KamarWhereInput[]
    id?: IntFilter<"Kamar"> | number
    namakamar?: StringFilter<"Kamar"> | string
    statusenabled?: BoolFilter<"Kamar"> | boolean
    objectruanganfk?: IntNullableFilter<"Kamar"> | number | null
    objectkelasfk?: IntNullableFilter<"Kamar"> | number | null
    ruangan?: XOR<RuanganNullableScalarRelationFilter, RuanganWhereInput> | null
    kelas?: XOR<KelasNullableScalarRelationFilter, KelasWhereInput> | null
    tempatTidur?: TempatTidurListRelationFilter
  }

  export type KamarOrderByWithRelationInput = {
    id?: SortOrder
    namakamar?: SortOrder
    statusenabled?: SortOrder
    objectruanganfk?: SortOrderInput | SortOrder
    objectkelasfk?: SortOrderInput | SortOrder
    ruangan?: RuanganOrderByWithRelationInput
    kelas?: KelasOrderByWithRelationInput
    tempatTidur?: TempatTidurOrderByRelationAggregateInput
  }

  export type KamarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KamarWhereInput | KamarWhereInput[]
    OR?: KamarWhereInput[]
    NOT?: KamarWhereInput | KamarWhereInput[]
    namakamar?: StringFilter<"Kamar"> | string
    statusenabled?: BoolFilter<"Kamar"> | boolean
    objectruanganfk?: IntNullableFilter<"Kamar"> | number | null
    objectkelasfk?: IntNullableFilter<"Kamar"> | number | null
    ruangan?: XOR<RuanganNullableScalarRelationFilter, RuanganWhereInput> | null
    kelas?: XOR<KelasNullableScalarRelationFilter, KelasWhereInput> | null
    tempatTidur?: TempatTidurListRelationFilter
  }, "id">

  export type KamarOrderByWithAggregationInput = {
    id?: SortOrder
    namakamar?: SortOrder
    statusenabled?: SortOrder
    objectruanganfk?: SortOrderInput | SortOrder
    objectkelasfk?: SortOrderInput | SortOrder
    _count?: KamarCountOrderByAggregateInput
    _avg?: KamarAvgOrderByAggregateInput
    _max?: KamarMaxOrderByAggregateInput
    _min?: KamarMinOrderByAggregateInput
    _sum?: KamarSumOrderByAggregateInput
  }

  export type KamarScalarWhereWithAggregatesInput = {
    AND?: KamarScalarWhereWithAggregatesInput | KamarScalarWhereWithAggregatesInput[]
    OR?: KamarScalarWhereWithAggregatesInput[]
    NOT?: KamarScalarWhereWithAggregatesInput | KamarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kamar"> | number
    namakamar?: StringWithAggregatesFilter<"Kamar"> | string
    statusenabled?: BoolWithAggregatesFilter<"Kamar"> | boolean
    objectruanganfk?: IntNullableWithAggregatesFilter<"Kamar"> | number | null
    objectkelasfk?: IntNullableWithAggregatesFilter<"Kamar"> | number | null
  }

  export type RuanganWhereInput = {
    AND?: RuanganWhereInput | RuanganWhereInput[]
    OR?: RuanganWhereInput[]
    NOT?: RuanganWhereInput | RuanganWhereInput[]
    id?: IntFilter<"Ruangan"> | number
    namaruangan?: StringFilter<"Ruangan"> | string
    statusenabled?: BoolFilter<"Ruangan"> | boolean
    objectdepartemenfk?: IntNullableFilter<"Ruangan"> | number | null
    kamars?: KamarListRelationFilter
    departemen?: XOR<DepartemenNullableScalarRelationFilter, DepartemenWhereInput> | null
  }

  export type RuanganOrderByWithRelationInput = {
    id?: SortOrder
    namaruangan?: SortOrder
    statusenabled?: SortOrder
    objectdepartemenfk?: SortOrderInput | SortOrder
    kamars?: KamarOrderByRelationAggregateInput
    departemen?: DepartemenOrderByWithRelationInput
  }

  export type RuanganWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RuanganWhereInput | RuanganWhereInput[]
    OR?: RuanganWhereInput[]
    NOT?: RuanganWhereInput | RuanganWhereInput[]
    namaruangan?: StringFilter<"Ruangan"> | string
    statusenabled?: BoolFilter<"Ruangan"> | boolean
    objectdepartemenfk?: IntNullableFilter<"Ruangan"> | number | null
    kamars?: KamarListRelationFilter
    departemen?: XOR<DepartemenNullableScalarRelationFilter, DepartemenWhereInput> | null
  }, "id">

  export type RuanganOrderByWithAggregationInput = {
    id?: SortOrder
    namaruangan?: SortOrder
    statusenabled?: SortOrder
    objectdepartemenfk?: SortOrderInput | SortOrder
    _count?: RuanganCountOrderByAggregateInput
    _avg?: RuanganAvgOrderByAggregateInput
    _max?: RuanganMaxOrderByAggregateInput
    _min?: RuanganMinOrderByAggregateInput
    _sum?: RuanganSumOrderByAggregateInput
  }

  export type RuanganScalarWhereWithAggregatesInput = {
    AND?: RuanganScalarWhereWithAggregatesInput | RuanganScalarWhereWithAggregatesInput[]
    OR?: RuanganScalarWhereWithAggregatesInput[]
    NOT?: RuanganScalarWhereWithAggregatesInput | RuanganScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ruangan"> | number
    namaruangan?: StringWithAggregatesFilter<"Ruangan"> | string
    statusenabled?: BoolWithAggregatesFilter<"Ruangan"> | boolean
    objectdepartemenfk?: IntNullableWithAggregatesFilter<"Ruangan"> | number | null
  }

  export type StatusBedWhereInput = {
    AND?: StatusBedWhereInput | StatusBedWhereInput[]
    OR?: StatusBedWhereInput[]
    NOT?: StatusBedWhereInput | StatusBedWhereInput[]
    id?: IntFilter<"StatusBed"> | number
    statusbed?: StringFilter<"StatusBed"> | string
    statusenabled?: BoolFilter<"StatusBed"> | boolean
    tempatTidur?: TempatTidurListRelationFilter
  }

  export type StatusBedOrderByWithRelationInput = {
    id?: SortOrder
    statusbed?: SortOrder
    statusenabled?: SortOrder
    tempatTidur?: TempatTidurOrderByRelationAggregateInput
  }

  export type StatusBedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StatusBedWhereInput | StatusBedWhereInput[]
    OR?: StatusBedWhereInput[]
    NOT?: StatusBedWhereInput | StatusBedWhereInput[]
    statusbed?: StringFilter<"StatusBed"> | string
    statusenabled?: BoolFilter<"StatusBed"> | boolean
    tempatTidur?: TempatTidurListRelationFilter
  }, "id">

  export type StatusBedOrderByWithAggregationInput = {
    id?: SortOrder
    statusbed?: SortOrder
    statusenabled?: SortOrder
    _count?: StatusBedCountOrderByAggregateInput
    _avg?: StatusBedAvgOrderByAggregateInput
    _max?: StatusBedMaxOrderByAggregateInput
    _min?: StatusBedMinOrderByAggregateInput
    _sum?: StatusBedSumOrderByAggregateInput
  }

  export type StatusBedScalarWhereWithAggregatesInput = {
    AND?: StatusBedScalarWhereWithAggregatesInput | StatusBedScalarWhereWithAggregatesInput[]
    OR?: StatusBedScalarWhereWithAggregatesInput[]
    NOT?: StatusBedScalarWhereWithAggregatesInput | StatusBedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StatusBed"> | number
    statusbed?: StringWithAggregatesFilter<"StatusBed"> | string
    statusenabled?: BoolWithAggregatesFilter<"StatusBed"> | boolean
  }

  export type KelasWhereInput = {
    AND?: KelasWhereInput | KelasWhereInput[]
    OR?: KelasWhereInput[]
    NOT?: KelasWhereInput | KelasWhereInput[]
    id?: IntFilter<"Kelas"> | number
    namakelas?: StringFilter<"Kelas"> | string
    statusenabled?: BoolFilter<"Kelas"> | boolean
    kamars?: KamarListRelationFilter
  }

  export type KelasOrderByWithRelationInput = {
    id?: SortOrder
    namakelas?: SortOrder
    statusenabled?: SortOrder
    kamars?: KamarOrderByRelationAggregateInput
  }

  export type KelasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KelasWhereInput | KelasWhereInput[]
    OR?: KelasWhereInput[]
    NOT?: KelasWhereInput | KelasWhereInput[]
    namakelas?: StringFilter<"Kelas"> | string
    statusenabled?: BoolFilter<"Kelas"> | boolean
    kamars?: KamarListRelationFilter
  }, "id">

  export type KelasOrderByWithAggregationInput = {
    id?: SortOrder
    namakelas?: SortOrder
    statusenabled?: SortOrder
    _count?: KelasCountOrderByAggregateInput
    _avg?: KelasAvgOrderByAggregateInput
    _max?: KelasMaxOrderByAggregateInput
    _min?: KelasMinOrderByAggregateInput
    _sum?: KelasSumOrderByAggregateInput
  }

  export type KelasScalarWhereWithAggregatesInput = {
    AND?: KelasScalarWhereWithAggregatesInput | KelasScalarWhereWithAggregatesInput[]
    OR?: KelasScalarWhereWithAggregatesInput[]
    NOT?: KelasScalarWhereWithAggregatesInput | KelasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kelas"> | number
    namakelas?: StringWithAggregatesFilter<"Kelas"> | string
    statusenabled?: BoolWithAggregatesFilter<"Kelas"> | boolean
  }

  export type DepartemenWhereInput = {
    AND?: DepartemenWhereInput | DepartemenWhereInput[]
    OR?: DepartemenWhereInput[]
    NOT?: DepartemenWhereInput | DepartemenWhereInput[]
    id?: IntFilter<"Departemen"> | number
    namadepartemen?: StringFilter<"Departemen"> | string
    statusenabled?: BoolFilter<"Departemen"> | boolean
    ruangans?: RuanganListRelationFilter
  }

  export type DepartemenOrderByWithRelationInput = {
    id?: SortOrder
    namadepartemen?: SortOrder
    statusenabled?: SortOrder
    ruangans?: RuanganOrderByRelationAggregateInput
  }

  export type DepartemenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DepartemenWhereInput | DepartemenWhereInput[]
    OR?: DepartemenWhereInput[]
    NOT?: DepartemenWhereInput | DepartemenWhereInput[]
    namadepartemen?: StringFilter<"Departemen"> | string
    statusenabled?: BoolFilter<"Departemen"> | boolean
    ruangans?: RuanganListRelationFilter
  }, "id">

  export type DepartemenOrderByWithAggregationInput = {
    id?: SortOrder
    namadepartemen?: SortOrder
    statusenabled?: SortOrder
    _count?: DepartemenCountOrderByAggregateInput
    _avg?: DepartemenAvgOrderByAggregateInput
    _max?: DepartemenMaxOrderByAggregateInput
    _min?: DepartemenMinOrderByAggregateInput
    _sum?: DepartemenSumOrderByAggregateInput
  }

  export type DepartemenScalarWhereWithAggregatesInput = {
    AND?: DepartemenScalarWhereWithAggregatesInput | DepartemenScalarWhereWithAggregatesInput[]
    OR?: DepartemenScalarWhereWithAggregatesInput[]
    NOT?: DepartemenScalarWhereWithAggregatesInput | DepartemenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Departemen"> | number
    namadepartemen?: StringWithAggregatesFilter<"Departemen"> | string
    statusenabled?: BoolWithAggregatesFilter<"Departemen"> | boolean
  }

  export type PaymentMethodCreateInput = {
    id: number
    statusenabled: boolean
    reportdisplay: string
  }

  export type PaymentMethodUncheckedCreateInput = {
    id: number
    statusenabled: boolean
    reportdisplay: string
  }

  export type PaymentMethodUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    reportdisplay?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentMethodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    reportdisplay?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentMethodCreateManyInput = {
    id: number
    statusenabled: boolean
    reportdisplay: string
  }

  export type PaymentMethodUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    reportdisplay?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentMethodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    reportdisplay?: StringFieldUpdateOperationsInput | string
  }

  export type TempatTidurCreateInput = {
    id: number
    reportdisplay: string
    nomorbed: number
    statusenabled: boolean
    kamar?: KamarCreateNestedOneWithoutTempatTidurInput
    status?: StatusBedCreateNestedOneWithoutTempatTidurInput
  }

  export type TempatTidurUncheckedCreateInput = {
    id: number
    reportdisplay: string
    nomorbed: number
    statusenabled: boolean
    objectkamarfk?: number | null
    objectstatusbedfk?: number | null
  }

  export type TempatTidurUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reportdisplay?: StringFieldUpdateOperationsInput | string
    nomorbed?: IntFieldUpdateOperationsInput | number
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    kamar?: KamarUpdateOneWithoutTempatTidurNestedInput
    status?: StatusBedUpdateOneWithoutTempatTidurNestedInput
  }

  export type TempatTidurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reportdisplay?: StringFieldUpdateOperationsInput | string
    nomorbed?: IntFieldUpdateOperationsInput | number
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    objectkamarfk?: NullableIntFieldUpdateOperationsInput | number | null
    objectstatusbedfk?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TempatTidurCreateManyInput = {
    id: number
    reportdisplay: string
    nomorbed: number
    statusenabled: boolean
    objectkamarfk?: number | null
    objectstatusbedfk?: number | null
  }

  export type TempatTidurUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    reportdisplay?: StringFieldUpdateOperationsInput | string
    nomorbed?: IntFieldUpdateOperationsInput | number
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TempatTidurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reportdisplay?: StringFieldUpdateOperationsInput | string
    nomorbed?: IntFieldUpdateOperationsInput | number
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    objectkamarfk?: NullableIntFieldUpdateOperationsInput | number | null
    objectstatusbedfk?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type KamarCreateInput = {
    id: number
    namakamar: string
    statusenabled: boolean
    ruangan?: RuanganCreateNestedOneWithoutKamarsInput
    kelas?: KelasCreateNestedOneWithoutKamarsInput
    tempatTidur?: TempatTidurCreateNestedManyWithoutKamarInput
  }

  export type KamarUncheckedCreateInput = {
    id: number
    namakamar: string
    statusenabled: boolean
    objectruanganfk?: number | null
    objectkelasfk?: number | null
    tempatTidur?: TempatTidurUncheckedCreateNestedManyWithoutKamarInput
  }

  export type KamarUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    namakamar?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    ruangan?: RuanganUpdateOneWithoutKamarsNestedInput
    kelas?: KelasUpdateOneWithoutKamarsNestedInput
    tempatTidur?: TempatTidurUpdateManyWithoutKamarNestedInput
  }

  export type KamarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    namakamar?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    objectruanganfk?: NullableIntFieldUpdateOperationsInput | number | null
    objectkelasfk?: NullableIntFieldUpdateOperationsInput | number | null
    tempatTidur?: TempatTidurUncheckedUpdateManyWithoutKamarNestedInput
  }

  export type KamarCreateManyInput = {
    id: number
    namakamar: string
    statusenabled: boolean
    objectruanganfk?: number | null
    objectkelasfk?: number | null
  }

  export type KamarUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    namakamar?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type KamarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    namakamar?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    objectruanganfk?: NullableIntFieldUpdateOperationsInput | number | null
    objectkelasfk?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RuanganCreateInput = {
    id: number
    namaruangan: string
    statusenabled: boolean
    kamars?: KamarCreateNestedManyWithoutRuanganInput
    departemen?: DepartemenCreateNestedOneWithoutRuangansInput
  }

  export type RuanganUncheckedCreateInput = {
    id: number
    namaruangan: string
    statusenabled: boolean
    objectdepartemenfk?: number | null
    kamars?: KamarUncheckedCreateNestedManyWithoutRuanganInput
  }

  export type RuanganUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaruangan?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    kamars?: KamarUpdateManyWithoutRuanganNestedInput
    departemen?: DepartemenUpdateOneWithoutRuangansNestedInput
  }

  export type RuanganUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaruangan?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    objectdepartemenfk?: NullableIntFieldUpdateOperationsInput | number | null
    kamars?: KamarUncheckedUpdateManyWithoutRuanganNestedInput
  }

  export type RuanganCreateManyInput = {
    id: number
    namaruangan: string
    statusenabled: boolean
    objectdepartemenfk?: number | null
  }

  export type RuanganUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaruangan?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RuanganUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaruangan?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    objectdepartemenfk?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StatusBedCreateInput = {
    id: number
    statusbed: string
    statusenabled: boolean
    tempatTidur?: TempatTidurCreateNestedManyWithoutStatusInput
  }

  export type StatusBedUncheckedCreateInput = {
    id: number
    statusbed: string
    statusenabled: boolean
    tempatTidur?: TempatTidurUncheckedCreateNestedManyWithoutStatusInput
  }

  export type StatusBedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    statusbed?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    tempatTidur?: TempatTidurUpdateManyWithoutStatusNestedInput
  }

  export type StatusBedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    statusbed?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    tempatTidur?: TempatTidurUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type StatusBedCreateManyInput = {
    id: number
    statusbed: string
    statusenabled: boolean
  }

  export type StatusBedUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    statusbed?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StatusBedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    statusbed?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type KelasCreateInput = {
    id: number
    namakelas: string
    statusenabled: boolean
    kamars?: KamarCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateInput = {
    id: number
    namakelas: string
    statusenabled: boolean
    kamars?: KamarUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    namakelas?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    kamars?: KamarUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    namakelas?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    kamars?: KamarUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type KelasCreateManyInput = {
    id: number
    namakelas: string
    statusenabled: boolean
  }

  export type KelasUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    namakelas?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type KelasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    namakelas?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DepartemenCreateInput = {
    id: number
    namadepartemen: string
    statusenabled: boolean
    ruangans?: RuanganCreateNestedManyWithoutDepartemenInput
  }

  export type DepartemenUncheckedCreateInput = {
    id: number
    namadepartemen: string
    statusenabled: boolean
    ruangans?: RuanganUncheckedCreateNestedManyWithoutDepartemenInput
  }

  export type DepartemenUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    namadepartemen?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    ruangans?: RuanganUpdateManyWithoutDepartemenNestedInput
  }

  export type DepartemenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    namadepartemen?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    ruangans?: RuanganUncheckedUpdateManyWithoutDepartemenNestedInput
  }

  export type DepartemenCreateManyInput = {
    id: number
    namadepartemen: string
    statusenabled: boolean
  }

  export type DepartemenUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    namadepartemen?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DepartemenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    namadepartemen?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PaymentMethodCountOrderByAggregateInput = {
    id?: SortOrder
    statusenabled?: SortOrder
    reportdisplay?: SortOrder
  }

  export type PaymentMethodAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PaymentMethodMaxOrderByAggregateInput = {
    id?: SortOrder
    statusenabled?: SortOrder
    reportdisplay?: SortOrder
  }

  export type PaymentMethodMinOrderByAggregateInput = {
    id?: SortOrder
    statusenabled?: SortOrder
    reportdisplay?: SortOrder
  }

  export type PaymentMethodSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type KamarNullableScalarRelationFilter = {
    is?: KamarWhereInput | null
    isNot?: KamarWhereInput | null
  }

  export type StatusBedNullableScalarRelationFilter = {
    is?: StatusBedWhereInput | null
    isNot?: StatusBedWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TempatTidurCountOrderByAggregateInput = {
    id?: SortOrder
    reportdisplay?: SortOrder
    nomorbed?: SortOrder
    statusenabled?: SortOrder
    objectkamarfk?: SortOrder
    objectstatusbedfk?: SortOrder
  }

  export type TempatTidurAvgOrderByAggregateInput = {
    id?: SortOrder
    nomorbed?: SortOrder
    objectkamarfk?: SortOrder
    objectstatusbedfk?: SortOrder
  }

  export type TempatTidurMaxOrderByAggregateInput = {
    id?: SortOrder
    reportdisplay?: SortOrder
    nomorbed?: SortOrder
    statusenabled?: SortOrder
    objectkamarfk?: SortOrder
    objectstatusbedfk?: SortOrder
  }

  export type TempatTidurMinOrderByAggregateInput = {
    id?: SortOrder
    reportdisplay?: SortOrder
    nomorbed?: SortOrder
    statusenabled?: SortOrder
    objectkamarfk?: SortOrder
    objectstatusbedfk?: SortOrder
  }

  export type TempatTidurSumOrderByAggregateInput = {
    id?: SortOrder
    nomorbed?: SortOrder
    objectkamarfk?: SortOrder
    objectstatusbedfk?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type RuanganNullableScalarRelationFilter = {
    is?: RuanganWhereInput | null
    isNot?: RuanganWhereInput | null
  }

  export type KelasNullableScalarRelationFilter = {
    is?: KelasWhereInput | null
    isNot?: KelasWhereInput | null
  }

  export type TempatTidurListRelationFilter = {
    every?: TempatTidurWhereInput
    some?: TempatTidurWhereInput
    none?: TempatTidurWhereInput
  }

  export type TempatTidurOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KamarCountOrderByAggregateInput = {
    id?: SortOrder
    namakamar?: SortOrder
    statusenabled?: SortOrder
    objectruanganfk?: SortOrder
    objectkelasfk?: SortOrder
  }

  export type KamarAvgOrderByAggregateInput = {
    id?: SortOrder
    objectruanganfk?: SortOrder
    objectkelasfk?: SortOrder
  }

  export type KamarMaxOrderByAggregateInput = {
    id?: SortOrder
    namakamar?: SortOrder
    statusenabled?: SortOrder
    objectruanganfk?: SortOrder
    objectkelasfk?: SortOrder
  }

  export type KamarMinOrderByAggregateInput = {
    id?: SortOrder
    namakamar?: SortOrder
    statusenabled?: SortOrder
    objectruanganfk?: SortOrder
    objectkelasfk?: SortOrder
  }

  export type KamarSumOrderByAggregateInput = {
    id?: SortOrder
    objectruanganfk?: SortOrder
    objectkelasfk?: SortOrder
  }

  export type KamarListRelationFilter = {
    every?: KamarWhereInput
    some?: KamarWhereInput
    none?: KamarWhereInput
  }

  export type DepartemenNullableScalarRelationFilter = {
    is?: DepartemenWhereInput | null
    isNot?: DepartemenWhereInput | null
  }

  export type KamarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RuanganCountOrderByAggregateInput = {
    id?: SortOrder
    namaruangan?: SortOrder
    statusenabled?: SortOrder
    objectdepartemenfk?: SortOrder
  }

  export type RuanganAvgOrderByAggregateInput = {
    id?: SortOrder
    objectdepartemenfk?: SortOrder
  }

  export type RuanganMaxOrderByAggregateInput = {
    id?: SortOrder
    namaruangan?: SortOrder
    statusenabled?: SortOrder
    objectdepartemenfk?: SortOrder
  }

  export type RuanganMinOrderByAggregateInput = {
    id?: SortOrder
    namaruangan?: SortOrder
    statusenabled?: SortOrder
    objectdepartemenfk?: SortOrder
  }

  export type RuanganSumOrderByAggregateInput = {
    id?: SortOrder
    objectdepartemenfk?: SortOrder
  }

  export type StatusBedCountOrderByAggregateInput = {
    id?: SortOrder
    statusbed?: SortOrder
    statusenabled?: SortOrder
  }

  export type StatusBedAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StatusBedMaxOrderByAggregateInput = {
    id?: SortOrder
    statusbed?: SortOrder
    statusenabled?: SortOrder
  }

  export type StatusBedMinOrderByAggregateInput = {
    id?: SortOrder
    statusbed?: SortOrder
    statusenabled?: SortOrder
  }

  export type StatusBedSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KelasCountOrderByAggregateInput = {
    id?: SortOrder
    namakelas?: SortOrder
    statusenabled?: SortOrder
  }

  export type KelasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KelasMaxOrderByAggregateInput = {
    id?: SortOrder
    namakelas?: SortOrder
    statusenabled?: SortOrder
  }

  export type KelasMinOrderByAggregateInput = {
    id?: SortOrder
    namakelas?: SortOrder
    statusenabled?: SortOrder
  }

  export type KelasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RuanganListRelationFilter = {
    every?: RuanganWhereInput
    some?: RuanganWhereInput
    none?: RuanganWhereInput
  }

  export type RuanganOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartemenCountOrderByAggregateInput = {
    id?: SortOrder
    namadepartemen?: SortOrder
    statusenabled?: SortOrder
  }

  export type DepartemenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DepartemenMaxOrderByAggregateInput = {
    id?: SortOrder
    namadepartemen?: SortOrder
    statusenabled?: SortOrder
  }

  export type DepartemenMinOrderByAggregateInput = {
    id?: SortOrder
    namadepartemen?: SortOrder
    statusenabled?: SortOrder
  }

  export type DepartemenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type KamarCreateNestedOneWithoutTempatTidurInput = {
    create?: XOR<KamarCreateWithoutTempatTidurInput, KamarUncheckedCreateWithoutTempatTidurInput>
    connectOrCreate?: KamarCreateOrConnectWithoutTempatTidurInput
    connect?: KamarWhereUniqueInput
  }

  export type StatusBedCreateNestedOneWithoutTempatTidurInput = {
    create?: XOR<StatusBedCreateWithoutTempatTidurInput, StatusBedUncheckedCreateWithoutTempatTidurInput>
    connectOrCreate?: StatusBedCreateOrConnectWithoutTempatTidurInput
    connect?: StatusBedWhereUniqueInput
  }

  export type KamarUpdateOneWithoutTempatTidurNestedInput = {
    create?: XOR<KamarCreateWithoutTempatTidurInput, KamarUncheckedCreateWithoutTempatTidurInput>
    connectOrCreate?: KamarCreateOrConnectWithoutTempatTidurInput
    upsert?: KamarUpsertWithoutTempatTidurInput
    disconnect?: KamarWhereInput | boolean
    delete?: KamarWhereInput | boolean
    connect?: KamarWhereUniqueInput
    update?: XOR<XOR<KamarUpdateToOneWithWhereWithoutTempatTidurInput, KamarUpdateWithoutTempatTidurInput>, KamarUncheckedUpdateWithoutTempatTidurInput>
  }

  export type StatusBedUpdateOneWithoutTempatTidurNestedInput = {
    create?: XOR<StatusBedCreateWithoutTempatTidurInput, StatusBedUncheckedCreateWithoutTempatTidurInput>
    connectOrCreate?: StatusBedCreateOrConnectWithoutTempatTidurInput
    upsert?: StatusBedUpsertWithoutTempatTidurInput
    disconnect?: StatusBedWhereInput | boolean
    delete?: StatusBedWhereInput | boolean
    connect?: StatusBedWhereUniqueInput
    update?: XOR<XOR<StatusBedUpdateToOneWithWhereWithoutTempatTidurInput, StatusBedUpdateWithoutTempatTidurInput>, StatusBedUncheckedUpdateWithoutTempatTidurInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RuanganCreateNestedOneWithoutKamarsInput = {
    create?: XOR<RuanganCreateWithoutKamarsInput, RuanganUncheckedCreateWithoutKamarsInput>
    connectOrCreate?: RuanganCreateOrConnectWithoutKamarsInput
    connect?: RuanganWhereUniqueInput
  }

  export type KelasCreateNestedOneWithoutKamarsInput = {
    create?: XOR<KelasCreateWithoutKamarsInput, KelasUncheckedCreateWithoutKamarsInput>
    connectOrCreate?: KelasCreateOrConnectWithoutKamarsInput
    connect?: KelasWhereUniqueInput
  }

  export type TempatTidurCreateNestedManyWithoutKamarInput = {
    create?: XOR<TempatTidurCreateWithoutKamarInput, TempatTidurUncheckedCreateWithoutKamarInput> | TempatTidurCreateWithoutKamarInput[] | TempatTidurUncheckedCreateWithoutKamarInput[]
    connectOrCreate?: TempatTidurCreateOrConnectWithoutKamarInput | TempatTidurCreateOrConnectWithoutKamarInput[]
    createMany?: TempatTidurCreateManyKamarInputEnvelope
    connect?: TempatTidurWhereUniqueInput | TempatTidurWhereUniqueInput[]
  }

  export type TempatTidurUncheckedCreateNestedManyWithoutKamarInput = {
    create?: XOR<TempatTidurCreateWithoutKamarInput, TempatTidurUncheckedCreateWithoutKamarInput> | TempatTidurCreateWithoutKamarInput[] | TempatTidurUncheckedCreateWithoutKamarInput[]
    connectOrCreate?: TempatTidurCreateOrConnectWithoutKamarInput | TempatTidurCreateOrConnectWithoutKamarInput[]
    createMany?: TempatTidurCreateManyKamarInputEnvelope
    connect?: TempatTidurWhereUniqueInput | TempatTidurWhereUniqueInput[]
  }

  export type RuanganUpdateOneWithoutKamarsNestedInput = {
    create?: XOR<RuanganCreateWithoutKamarsInput, RuanganUncheckedCreateWithoutKamarsInput>
    connectOrCreate?: RuanganCreateOrConnectWithoutKamarsInput
    upsert?: RuanganUpsertWithoutKamarsInput
    disconnect?: RuanganWhereInput | boolean
    delete?: RuanganWhereInput | boolean
    connect?: RuanganWhereUniqueInput
    update?: XOR<XOR<RuanganUpdateToOneWithWhereWithoutKamarsInput, RuanganUpdateWithoutKamarsInput>, RuanganUncheckedUpdateWithoutKamarsInput>
  }

  export type KelasUpdateOneWithoutKamarsNestedInput = {
    create?: XOR<KelasCreateWithoutKamarsInput, KelasUncheckedCreateWithoutKamarsInput>
    connectOrCreate?: KelasCreateOrConnectWithoutKamarsInput
    upsert?: KelasUpsertWithoutKamarsInput
    disconnect?: KelasWhereInput | boolean
    delete?: KelasWhereInput | boolean
    connect?: KelasWhereUniqueInput
    update?: XOR<XOR<KelasUpdateToOneWithWhereWithoutKamarsInput, KelasUpdateWithoutKamarsInput>, KelasUncheckedUpdateWithoutKamarsInput>
  }

  export type TempatTidurUpdateManyWithoutKamarNestedInput = {
    create?: XOR<TempatTidurCreateWithoutKamarInput, TempatTidurUncheckedCreateWithoutKamarInput> | TempatTidurCreateWithoutKamarInput[] | TempatTidurUncheckedCreateWithoutKamarInput[]
    connectOrCreate?: TempatTidurCreateOrConnectWithoutKamarInput | TempatTidurCreateOrConnectWithoutKamarInput[]
    upsert?: TempatTidurUpsertWithWhereUniqueWithoutKamarInput | TempatTidurUpsertWithWhereUniqueWithoutKamarInput[]
    createMany?: TempatTidurCreateManyKamarInputEnvelope
    set?: TempatTidurWhereUniqueInput | TempatTidurWhereUniqueInput[]
    disconnect?: TempatTidurWhereUniqueInput | TempatTidurWhereUniqueInput[]
    delete?: TempatTidurWhereUniqueInput | TempatTidurWhereUniqueInput[]
    connect?: TempatTidurWhereUniqueInput | TempatTidurWhereUniqueInput[]
    update?: TempatTidurUpdateWithWhereUniqueWithoutKamarInput | TempatTidurUpdateWithWhereUniqueWithoutKamarInput[]
    updateMany?: TempatTidurUpdateManyWithWhereWithoutKamarInput | TempatTidurUpdateManyWithWhereWithoutKamarInput[]
    deleteMany?: TempatTidurScalarWhereInput | TempatTidurScalarWhereInput[]
  }

  export type TempatTidurUncheckedUpdateManyWithoutKamarNestedInput = {
    create?: XOR<TempatTidurCreateWithoutKamarInput, TempatTidurUncheckedCreateWithoutKamarInput> | TempatTidurCreateWithoutKamarInput[] | TempatTidurUncheckedCreateWithoutKamarInput[]
    connectOrCreate?: TempatTidurCreateOrConnectWithoutKamarInput | TempatTidurCreateOrConnectWithoutKamarInput[]
    upsert?: TempatTidurUpsertWithWhereUniqueWithoutKamarInput | TempatTidurUpsertWithWhereUniqueWithoutKamarInput[]
    createMany?: TempatTidurCreateManyKamarInputEnvelope
    set?: TempatTidurWhereUniqueInput | TempatTidurWhereUniqueInput[]
    disconnect?: TempatTidurWhereUniqueInput | TempatTidurWhereUniqueInput[]
    delete?: TempatTidurWhereUniqueInput | TempatTidurWhereUniqueInput[]
    connect?: TempatTidurWhereUniqueInput | TempatTidurWhereUniqueInput[]
    update?: TempatTidurUpdateWithWhereUniqueWithoutKamarInput | TempatTidurUpdateWithWhereUniqueWithoutKamarInput[]
    updateMany?: TempatTidurUpdateManyWithWhereWithoutKamarInput | TempatTidurUpdateManyWithWhereWithoutKamarInput[]
    deleteMany?: TempatTidurScalarWhereInput | TempatTidurScalarWhereInput[]
  }

  export type KamarCreateNestedManyWithoutRuanganInput = {
    create?: XOR<KamarCreateWithoutRuanganInput, KamarUncheckedCreateWithoutRuanganInput> | KamarCreateWithoutRuanganInput[] | KamarUncheckedCreateWithoutRuanganInput[]
    connectOrCreate?: KamarCreateOrConnectWithoutRuanganInput | KamarCreateOrConnectWithoutRuanganInput[]
    createMany?: KamarCreateManyRuanganInputEnvelope
    connect?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
  }

  export type DepartemenCreateNestedOneWithoutRuangansInput = {
    create?: XOR<DepartemenCreateWithoutRuangansInput, DepartemenUncheckedCreateWithoutRuangansInput>
    connectOrCreate?: DepartemenCreateOrConnectWithoutRuangansInput
    connect?: DepartemenWhereUniqueInput
  }

  export type KamarUncheckedCreateNestedManyWithoutRuanganInput = {
    create?: XOR<KamarCreateWithoutRuanganInput, KamarUncheckedCreateWithoutRuanganInput> | KamarCreateWithoutRuanganInput[] | KamarUncheckedCreateWithoutRuanganInput[]
    connectOrCreate?: KamarCreateOrConnectWithoutRuanganInput | KamarCreateOrConnectWithoutRuanganInput[]
    createMany?: KamarCreateManyRuanganInputEnvelope
    connect?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
  }

  export type KamarUpdateManyWithoutRuanganNestedInput = {
    create?: XOR<KamarCreateWithoutRuanganInput, KamarUncheckedCreateWithoutRuanganInput> | KamarCreateWithoutRuanganInput[] | KamarUncheckedCreateWithoutRuanganInput[]
    connectOrCreate?: KamarCreateOrConnectWithoutRuanganInput | KamarCreateOrConnectWithoutRuanganInput[]
    upsert?: KamarUpsertWithWhereUniqueWithoutRuanganInput | KamarUpsertWithWhereUniqueWithoutRuanganInput[]
    createMany?: KamarCreateManyRuanganInputEnvelope
    set?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    disconnect?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    delete?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    connect?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    update?: KamarUpdateWithWhereUniqueWithoutRuanganInput | KamarUpdateWithWhereUniqueWithoutRuanganInput[]
    updateMany?: KamarUpdateManyWithWhereWithoutRuanganInput | KamarUpdateManyWithWhereWithoutRuanganInput[]
    deleteMany?: KamarScalarWhereInput | KamarScalarWhereInput[]
  }

  export type DepartemenUpdateOneWithoutRuangansNestedInput = {
    create?: XOR<DepartemenCreateWithoutRuangansInput, DepartemenUncheckedCreateWithoutRuangansInput>
    connectOrCreate?: DepartemenCreateOrConnectWithoutRuangansInput
    upsert?: DepartemenUpsertWithoutRuangansInput
    disconnect?: DepartemenWhereInput | boolean
    delete?: DepartemenWhereInput | boolean
    connect?: DepartemenWhereUniqueInput
    update?: XOR<XOR<DepartemenUpdateToOneWithWhereWithoutRuangansInput, DepartemenUpdateWithoutRuangansInput>, DepartemenUncheckedUpdateWithoutRuangansInput>
  }

  export type KamarUncheckedUpdateManyWithoutRuanganNestedInput = {
    create?: XOR<KamarCreateWithoutRuanganInput, KamarUncheckedCreateWithoutRuanganInput> | KamarCreateWithoutRuanganInput[] | KamarUncheckedCreateWithoutRuanganInput[]
    connectOrCreate?: KamarCreateOrConnectWithoutRuanganInput | KamarCreateOrConnectWithoutRuanganInput[]
    upsert?: KamarUpsertWithWhereUniqueWithoutRuanganInput | KamarUpsertWithWhereUniqueWithoutRuanganInput[]
    createMany?: KamarCreateManyRuanganInputEnvelope
    set?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    disconnect?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    delete?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    connect?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    update?: KamarUpdateWithWhereUniqueWithoutRuanganInput | KamarUpdateWithWhereUniqueWithoutRuanganInput[]
    updateMany?: KamarUpdateManyWithWhereWithoutRuanganInput | KamarUpdateManyWithWhereWithoutRuanganInput[]
    deleteMany?: KamarScalarWhereInput | KamarScalarWhereInput[]
  }

  export type TempatTidurCreateNestedManyWithoutStatusInput = {
    create?: XOR<TempatTidurCreateWithoutStatusInput, TempatTidurUncheckedCreateWithoutStatusInput> | TempatTidurCreateWithoutStatusInput[] | TempatTidurUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: TempatTidurCreateOrConnectWithoutStatusInput | TempatTidurCreateOrConnectWithoutStatusInput[]
    createMany?: TempatTidurCreateManyStatusInputEnvelope
    connect?: TempatTidurWhereUniqueInput | TempatTidurWhereUniqueInput[]
  }

  export type TempatTidurUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<TempatTidurCreateWithoutStatusInput, TempatTidurUncheckedCreateWithoutStatusInput> | TempatTidurCreateWithoutStatusInput[] | TempatTidurUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: TempatTidurCreateOrConnectWithoutStatusInput | TempatTidurCreateOrConnectWithoutStatusInput[]
    createMany?: TempatTidurCreateManyStatusInputEnvelope
    connect?: TempatTidurWhereUniqueInput | TempatTidurWhereUniqueInput[]
  }

  export type TempatTidurUpdateManyWithoutStatusNestedInput = {
    create?: XOR<TempatTidurCreateWithoutStatusInput, TempatTidurUncheckedCreateWithoutStatusInput> | TempatTidurCreateWithoutStatusInput[] | TempatTidurUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: TempatTidurCreateOrConnectWithoutStatusInput | TempatTidurCreateOrConnectWithoutStatusInput[]
    upsert?: TempatTidurUpsertWithWhereUniqueWithoutStatusInput | TempatTidurUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: TempatTidurCreateManyStatusInputEnvelope
    set?: TempatTidurWhereUniqueInput | TempatTidurWhereUniqueInput[]
    disconnect?: TempatTidurWhereUniqueInput | TempatTidurWhereUniqueInput[]
    delete?: TempatTidurWhereUniqueInput | TempatTidurWhereUniqueInput[]
    connect?: TempatTidurWhereUniqueInput | TempatTidurWhereUniqueInput[]
    update?: TempatTidurUpdateWithWhereUniqueWithoutStatusInput | TempatTidurUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: TempatTidurUpdateManyWithWhereWithoutStatusInput | TempatTidurUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: TempatTidurScalarWhereInput | TempatTidurScalarWhereInput[]
  }

  export type TempatTidurUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<TempatTidurCreateWithoutStatusInput, TempatTidurUncheckedCreateWithoutStatusInput> | TempatTidurCreateWithoutStatusInput[] | TempatTidurUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: TempatTidurCreateOrConnectWithoutStatusInput | TempatTidurCreateOrConnectWithoutStatusInput[]
    upsert?: TempatTidurUpsertWithWhereUniqueWithoutStatusInput | TempatTidurUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: TempatTidurCreateManyStatusInputEnvelope
    set?: TempatTidurWhereUniqueInput | TempatTidurWhereUniqueInput[]
    disconnect?: TempatTidurWhereUniqueInput | TempatTidurWhereUniqueInput[]
    delete?: TempatTidurWhereUniqueInput | TempatTidurWhereUniqueInput[]
    connect?: TempatTidurWhereUniqueInput | TempatTidurWhereUniqueInput[]
    update?: TempatTidurUpdateWithWhereUniqueWithoutStatusInput | TempatTidurUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: TempatTidurUpdateManyWithWhereWithoutStatusInput | TempatTidurUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: TempatTidurScalarWhereInput | TempatTidurScalarWhereInput[]
  }

  export type KamarCreateNestedManyWithoutKelasInput = {
    create?: XOR<KamarCreateWithoutKelasInput, KamarUncheckedCreateWithoutKelasInput> | KamarCreateWithoutKelasInput[] | KamarUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: KamarCreateOrConnectWithoutKelasInput | KamarCreateOrConnectWithoutKelasInput[]
    createMany?: KamarCreateManyKelasInputEnvelope
    connect?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
  }

  export type KamarUncheckedCreateNestedManyWithoutKelasInput = {
    create?: XOR<KamarCreateWithoutKelasInput, KamarUncheckedCreateWithoutKelasInput> | KamarCreateWithoutKelasInput[] | KamarUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: KamarCreateOrConnectWithoutKelasInput | KamarCreateOrConnectWithoutKelasInput[]
    createMany?: KamarCreateManyKelasInputEnvelope
    connect?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
  }

  export type KamarUpdateManyWithoutKelasNestedInput = {
    create?: XOR<KamarCreateWithoutKelasInput, KamarUncheckedCreateWithoutKelasInput> | KamarCreateWithoutKelasInput[] | KamarUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: KamarCreateOrConnectWithoutKelasInput | KamarCreateOrConnectWithoutKelasInput[]
    upsert?: KamarUpsertWithWhereUniqueWithoutKelasInput | KamarUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: KamarCreateManyKelasInputEnvelope
    set?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    disconnect?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    delete?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    connect?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    update?: KamarUpdateWithWhereUniqueWithoutKelasInput | KamarUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: KamarUpdateManyWithWhereWithoutKelasInput | KamarUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: KamarScalarWhereInput | KamarScalarWhereInput[]
  }

  export type KamarUncheckedUpdateManyWithoutKelasNestedInput = {
    create?: XOR<KamarCreateWithoutKelasInput, KamarUncheckedCreateWithoutKelasInput> | KamarCreateWithoutKelasInput[] | KamarUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: KamarCreateOrConnectWithoutKelasInput | KamarCreateOrConnectWithoutKelasInput[]
    upsert?: KamarUpsertWithWhereUniqueWithoutKelasInput | KamarUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: KamarCreateManyKelasInputEnvelope
    set?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    disconnect?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    delete?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    connect?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    update?: KamarUpdateWithWhereUniqueWithoutKelasInput | KamarUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: KamarUpdateManyWithWhereWithoutKelasInput | KamarUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: KamarScalarWhereInput | KamarScalarWhereInput[]
  }

  export type RuanganCreateNestedManyWithoutDepartemenInput = {
    create?: XOR<RuanganCreateWithoutDepartemenInput, RuanganUncheckedCreateWithoutDepartemenInput> | RuanganCreateWithoutDepartemenInput[] | RuanganUncheckedCreateWithoutDepartemenInput[]
    connectOrCreate?: RuanganCreateOrConnectWithoutDepartemenInput | RuanganCreateOrConnectWithoutDepartemenInput[]
    createMany?: RuanganCreateManyDepartemenInputEnvelope
    connect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
  }

  export type RuanganUncheckedCreateNestedManyWithoutDepartemenInput = {
    create?: XOR<RuanganCreateWithoutDepartemenInput, RuanganUncheckedCreateWithoutDepartemenInput> | RuanganCreateWithoutDepartemenInput[] | RuanganUncheckedCreateWithoutDepartemenInput[]
    connectOrCreate?: RuanganCreateOrConnectWithoutDepartemenInput | RuanganCreateOrConnectWithoutDepartemenInput[]
    createMany?: RuanganCreateManyDepartemenInputEnvelope
    connect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
  }

  export type RuanganUpdateManyWithoutDepartemenNestedInput = {
    create?: XOR<RuanganCreateWithoutDepartemenInput, RuanganUncheckedCreateWithoutDepartemenInput> | RuanganCreateWithoutDepartemenInput[] | RuanganUncheckedCreateWithoutDepartemenInput[]
    connectOrCreate?: RuanganCreateOrConnectWithoutDepartemenInput | RuanganCreateOrConnectWithoutDepartemenInput[]
    upsert?: RuanganUpsertWithWhereUniqueWithoutDepartemenInput | RuanganUpsertWithWhereUniqueWithoutDepartemenInput[]
    createMany?: RuanganCreateManyDepartemenInputEnvelope
    set?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    disconnect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    delete?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    connect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    update?: RuanganUpdateWithWhereUniqueWithoutDepartemenInput | RuanganUpdateWithWhereUniqueWithoutDepartemenInput[]
    updateMany?: RuanganUpdateManyWithWhereWithoutDepartemenInput | RuanganUpdateManyWithWhereWithoutDepartemenInput[]
    deleteMany?: RuanganScalarWhereInput | RuanganScalarWhereInput[]
  }

  export type RuanganUncheckedUpdateManyWithoutDepartemenNestedInput = {
    create?: XOR<RuanganCreateWithoutDepartemenInput, RuanganUncheckedCreateWithoutDepartemenInput> | RuanganCreateWithoutDepartemenInput[] | RuanganUncheckedCreateWithoutDepartemenInput[]
    connectOrCreate?: RuanganCreateOrConnectWithoutDepartemenInput | RuanganCreateOrConnectWithoutDepartemenInput[]
    upsert?: RuanganUpsertWithWhereUniqueWithoutDepartemenInput | RuanganUpsertWithWhereUniqueWithoutDepartemenInput[]
    createMany?: RuanganCreateManyDepartemenInputEnvelope
    set?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    disconnect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    delete?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    connect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    update?: RuanganUpdateWithWhereUniqueWithoutDepartemenInput | RuanganUpdateWithWhereUniqueWithoutDepartemenInput[]
    updateMany?: RuanganUpdateManyWithWhereWithoutDepartemenInput | RuanganUpdateManyWithWhereWithoutDepartemenInput[]
    deleteMany?: RuanganScalarWhereInput | RuanganScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type KamarCreateWithoutTempatTidurInput = {
    id: number
    namakamar: string
    statusenabled: boolean
    ruangan?: RuanganCreateNestedOneWithoutKamarsInput
    kelas?: KelasCreateNestedOneWithoutKamarsInput
  }

  export type KamarUncheckedCreateWithoutTempatTidurInput = {
    id: number
    namakamar: string
    statusenabled: boolean
    objectruanganfk?: number | null
    objectkelasfk?: number | null
  }

  export type KamarCreateOrConnectWithoutTempatTidurInput = {
    where: KamarWhereUniqueInput
    create: XOR<KamarCreateWithoutTempatTidurInput, KamarUncheckedCreateWithoutTempatTidurInput>
  }

  export type StatusBedCreateWithoutTempatTidurInput = {
    id: number
    statusbed: string
    statusenabled: boolean
  }

  export type StatusBedUncheckedCreateWithoutTempatTidurInput = {
    id: number
    statusbed: string
    statusenabled: boolean
  }

  export type StatusBedCreateOrConnectWithoutTempatTidurInput = {
    where: StatusBedWhereUniqueInput
    create: XOR<StatusBedCreateWithoutTempatTidurInput, StatusBedUncheckedCreateWithoutTempatTidurInput>
  }

  export type KamarUpsertWithoutTempatTidurInput = {
    update: XOR<KamarUpdateWithoutTempatTidurInput, KamarUncheckedUpdateWithoutTempatTidurInput>
    create: XOR<KamarCreateWithoutTempatTidurInput, KamarUncheckedCreateWithoutTempatTidurInput>
    where?: KamarWhereInput
  }

  export type KamarUpdateToOneWithWhereWithoutTempatTidurInput = {
    where?: KamarWhereInput
    data: XOR<KamarUpdateWithoutTempatTidurInput, KamarUncheckedUpdateWithoutTempatTidurInput>
  }

  export type KamarUpdateWithoutTempatTidurInput = {
    id?: IntFieldUpdateOperationsInput | number
    namakamar?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    ruangan?: RuanganUpdateOneWithoutKamarsNestedInput
    kelas?: KelasUpdateOneWithoutKamarsNestedInput
  }

  export type KamarUncheckedUpdateWithoutTempatTidurInput = {
    id?: IntFieldUpdateOperationsInput | number
    namakamar?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    objectruanganfk?: NullableIntFieldUpdateOperationsInput | number | null
    objectkelasfk?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StatusBedUpsertWithoutTempatTidurInput = {
    update: XOR<StatusBedUpdateWithoutTempatTidurInput, StatusBedUncheckedUpdateWithoutTempatTidurInput>
    create: XOR<StatusBedCreateWithoutTempatTidurInput, StatusBedUncheckedCreateWithoutTempatTidurInput>
    where?: StatusBedWhereInput
  }

  export type StatusBedUpdateToOneWithWhereWithoutTempatTidurInput = {
    where?: StatusBedWhereInput
    data: XOR<StatusBedUpdateWithoutTempatTidurInput, StatusBedUncheckedUpdateWithoutTempatTidurInput>
  }

  export type StatusBedUpdateWithoutTempatTidurInput = {
    id?: IntFieldUpdateOperationsInput | number
    statusbed?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StatusBedUncheckedUpdateWithoutTempatTidurInput = {
    id?: IntFieldUpdateOperationsInput | number
    statusbed?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RuanganCreateWithoutKamarsInput = {
    id: number
    namaruangan: string
    statusenabled: boolean
    departemen?: DepartemenCreateNestedOneWithoutRuangansInput
  }

  export type RuanganUncheckedCreateWithoutKamarsInput = {
    id: number
    namaruangan: string
    statusenabled: boolean
    objectdepartemenfk?: number | null
  }

  export type RuanganCreateOrConnectWithoutKamarsInput = {
    where: RuanganWhereUniqueInput
    create: XOR<RuanganCreateWithoutKamarsInput, RuanganUncheckedCreateWithoutKamarsInput>
  }

  export type KelasCreateWithoutKamarsInput = {
    id: number
    namakelas: string
    statusenabled: boolean
  }

  export type KelasUncheckedCreateWithoutKamarsInput = {
    id: number
    namakelas: string
    statusenabled: boolean
  }

  export type KelasCreateOrConnectWithoutKamarsInput = {
    where: KelasWhereUniqueInput
    create: XOR<KelasCreateWithoutKamarsInput, KelasUncheckedCreateWithoutKamarsInput>
  }

  export type TempatTidurCreateWithoutKamarInput = {
    id: number
    reportdisplay: string
    nomorbed: number
    statusenabled: boolean
    status?: StatusBedCreateNestedOneWithoutTempatTidurInput
  }

  export type TempatTidurUncheckedCreateWithoutKamarInput = {
    id: number
    reportdisplay: string
    nomorbed: number
    statusenabled: boolean
    objectstatusbedfk?: number | null
  }

  export type TempatTidurCreateOrConnectWithoutKamarInput = {
    where: TempatTidurWhereUniqueInput
    create: XOR<TempatTidurCreateWithoutKamarInput, TempatTidurUncheckedCreateWithoutKamarInput>
  }

  export type TempatTidurCreateManyKamarInputEnvelope = {
    data: TempatTidurCreateManyKamarInput | TempatTidurCreateManyKamarInput[]
    skipDuplicates?: boolean
  }

  export type RuanganUpsertWithoutKamarsInput = {
    update: XOR<RuanganUpdateWithoutKamarsInput, RuanganUncheckedUpdateWithoutKamarsInput>
    create: XOR<RuanganCreateWithoutKamarsInput, RuanganUncheckedCreateWithoutKamarsInput>
    where?: RuanganWhereInput
  }

  export type RuanganUpdateToOneWithWhereWithoutKamarsInput = {
    where?: RuanganWhereInput
    data: XOR<RuanganUpdateWithoutKamarsInput, RuanganUncheckedUpdateWithoutKamarsInput>
  }

  export type RuanganUpdateWithoutKamarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaruangan?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    departemen?: DepartemenUpdateOneWithoutRuangansNestedInput
  }

  export type RuanganUncheckedUpdateWithoutKamarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaruangan?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    objectdepartemenfk?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type KelasUpsertWithoutKamarsInput = {
    update: XOR<KelasUpdateWithoutKamarsInput, KelasUncheckedUpdateWithoutKamarsInput>
    create: XOR<KelasCreateWithoutKamarsInput, KelasUncheckedCreateWithoutKamarsInput>
    where?: KelasWhereInput
  }

  export type KelasUpdateToOneWithWhereWithoutKamarsInput = {
    where?: KelasWhereInput
    data: XOR<KelasUpdateWithoutKamarsInput, KelasUncheckedUpdateWithoutKamarsInput>
  }

  export type KelasUpdateWithoutKamarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    namakelas?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type KelasUncheckedUpdateWithoutKamarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    namakelas?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TempatTidurUpsertWithWhereUniqueWithoutKamarInput = {
    where: TempatTidurWhereUniqueInput
    update: XOR<TempatTidurUpdateWithoutKamarInput, TempatTidurUncheckedUpdateWithoutKamarInput>
    create: XOR<TempatTidurCreateWithoutKamarInput, TempatTidurUncheckedCreateWithoutKamarInput>
  }

  export type TempatTidurUpdateWithWhereUniqueWithoutKamarInput = {
    where: TempatTidurWhereUniqueInput
    data: XOR<TempatTidurUpdateWithoutKamarInput, TempatTidurUncheckedUpdateWithoutKamarInput>
  }

  export type TempatTidurUpdateManyWithWhereWithoutKamarInput = {
    where: TempatTidurScalarWhereInput
    data: XOR<TempatTidurUpdateManyMutationInput, TempatTidurUncheckedUpdateManyWithoutKamarInput>
  }

  export type TempatTidurScalarWhereInput = {
    AND?: TempatTidurScalarWhereInput | TempatTidurScalarWhereInput[]
    OR?: TempatTidurScalarWhereInput[]
    NOT?: TempatTidurScalarWhereInput | TempatTidurScalarWhereInput[]
    id?: IntFilter<"TempatTidur"> | number
    reportdisplay?: StringFilter<"TempatTidur"> | string
    nomorbed?: IntFilter<"TempatTidur"> | number
    statusenabled?: BoolFilter<"TempatTidur"> | boolean
    objectkamarfk?: IntNullableFilter<"TempatTidur"> | number | null
    objectstatusbedfk?: IntNullableFilter<"TempatTidur"> | number | null
  }

  export type KamarCreateWithoutRuanganInput = {
    id: number
    namakamar: string
    statusenabled: boolean
    kelas?: KelasCreateNestedOneWithoutKamarsInput
    tempatTidur?: TempatTidurCreateNestedManyWithoutKamarInput
  }

  export type KamarUncheckedCreateWithoutRuanganInput = {
    id: number
    namakamar: string
    statusenabled: boolean
    objectkelasfk?: number | null
    tempatTidur?: TempatTidurUncheckedCreateNestedManyWithoutKamarInput
  }

  export type KamarCreateOrConnectWithoutRuanganInput = {
    where: KamarWhereUniqueInput
    create: XOR<KamarCreateWithoutRuanganInput, KamarUncheckedCreateWithoutRuanganInput>
  }

  export type KamarCreateManyRuanganInputEnvelope = {
    data: KamarCreateManyRuanganInput | KamarCreateManyRuanganInput[]
    skipDuplicates?: boolean
  }

  export type DepartemenCreateWithoutRuangansInput = {
    id: number
    namadepartemen: string
    statusenabled: boolean
  }

  export type DepartemenUncheckedCreateWithoutRuangansInput = {
    id: number
    namadepartemen: string
    statusenabled: boolean
  }

  export type DepartemenCreateOrConnectWithoutRuangansInput = {
    where: DepartemenWhereUniqueInput
    create: XOR<DepartemenCreateWithoutRuangansInput, DepartemenUncheckedCreateWithoutRuangansInput>
  }

  export type KamarUpsertWithWhereUniqueWithoutRuanganInput = {
    where: KamarWhereUniqueInput
    update: XOR<KamarUpdateWithoutRuanganInput, KamarUncheckedUpdateWithoutRuanganInput>
    create: XOR<KamarCreateWithoutRuanganInput, KamarUncheckedCreateWithoutRuanganInput>
  }

  export type KamarUpdateWithWhereUniqueWithoutRuanganInput = {
    where: KamarWhereUniqueInput
    data: XOR<KamarUpdateWithoutRuanganInput, KamarUncheckedUpdateWithoutRuanganInput>
  }

  export type KamarUpdateManyWithWhereWithoutRuanganInput = {
    where: KamarScalarWhereInput
    data: XOR<KamarUpdateManyMutationInput, KamarUncheckedUpdateManyWithoutRuanganInput>
  }

  export type KamarScalarWhereInput = {
    AND?: KamarScalarWhereInput | KamarScalarWhereInput[]
    OR?: KamarScalarWhereInput[]
    NOT?: KamarScalarWhereInput | KamarScalarWhereInput[]
    id?: IntFilter<"Kamar"> | number
    namakamar?: StringFilter<"Kamar"> | string
    statusenabled?: BoolFilter<"Kamar"> | boolean
    objectruanganfk?: IntNullableFilter<"Kamar"> | number | null
    objectkelasfk?: IntNullableFilter<"Kamar"> | number | null
  }

  export type DepartemenUpsertWithoutRuangansInput = {
    update: XOR<DepartemenUpdateWithoutRuangansInput, DepartemenUncheckedUpdateWithoutRuangansInput>
    create: XOR<DepartemenCreateWithoutRuangansInput, DepartemenUncheckedCreateWithoutRuangansInput>
    where?: DepartemenWhereInput
  }

  export type DepartemenUpdateToOneWithWhereWithoutRuangansInput = {
    where?: DepartemenWhereInput
    data: XOR<DepartemenUpdateWithoutRuangansInput, DepartemenUncheckedUpdateWithoutRuangansInput>
  }

  export type DepartemenUpdateWithoutRuangansInput = {
    id?: IntFieldUpdateOperationsInput | number
    namadepartemen?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DepartemenUncheckedUpdateWithoutRuangansInput = {
    id?: IntFieldUpdateOperationsInput | number
    namadepartemen?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TempatTidurCreateWithoutStatusInput = {
    id: number
    reportdisplay: string
    nomorbed: number
    statusenabled: boolean
    kamar?: KamarCreateNestedOneWithoutTempatTidurInput
  }

  export type TempatTidurUncheckedCreateWithoutStatusInput = {
    id: number
    reportdisplay: string
    nomorbed: number
    statusenabled: boolean
    objectkamarfk?: number | null
  }

  export type TempatTidurCreateOrConnectWithoutStatusInput = {
    where: TempatTidurWhereUniqueInput
    create: XOR<TempatTidurCreateWithoutStatusInput, TempatTidurUncheckedCreateWithoutStatusInput>
  }

  export type TempatTidurCreateManyStatusInputEnvelope = {
    data: TempatTidurCreateManyStatusInput | TempatTidurCreateManyStatusInput[]
    skipDuplicates?: boolean
  }

  export type TempatTidurUpsertWithWhereUniqueWithoutStatusInput = {
    where: TempatTidurWhereUniqueInput
    update: XOR<TempatTidurUpdateWithoutStatusInput, TempatTidurUncheckedUpdateWithoutStatusInput>
    create: XOR<TempatTidurCreateWithoutStatusInput, TempatTidurUncheckedCreateWithoutStatusInput>
  }

  export type TempatTidurUpdateWithWhereUniqueWithoutStatusInput = {
    where: TempatTidurWhereUniqueInput
    data: XOR<TempatTidurUpdateWithoutStatusInput, TempatTidurUncheckedUpdateWithoutStatusInput>
  }

  export type TempatTidurUpdateManyWithWhereWithoutStatusInput = {
    where: TempatTidurScalarWhereInput
    data: XOR<TempatTidurUpdateManyMutationInput, TempatTidurUncheckedUpdateManyWithoutStatusInput>
  }

  export type KamarCreateWithoutKelasInput = {
    id: number
    namakamar: string
    statusenabled: boolean
    ruangan?: RuanganCreateNestedOneWithoutKamarsInput
    tempatTidur?: TempatTidurCreateNestedManyWithoutKamarInput
  }

  export type KamarUncheckedCreateWithoutKelasInput = {
    id: number
    namakamar: string
    statusenabled: boolean
    objectruanganfk?: number | null
    tempatTidur?: TempatTidurUncheckedCreateNestedManyWithoutKamarInput
  }

  export type KamarCreateOrConnectWithoutKelasInput = {
    where: KamarWhereUniqueInput
    create: XOR<KamarCreateWithoutKelasInput, KamarUncheckedCreateWithoutKelasInput>
  }

  export type KamarCreateManyKelasInputEnvelope = {
    data: KamarCreateManyKelasInput | KamarCreateManyKelasInput[]
    skipDuplicates?: boolean
  }

  export type KamarUpsertWithWhereUniqueWithoutKelasInput = {
    where: KamarWhereUniqueInput
    update: XOR<KamarUpdateWithoutKelasInput, KamarUncheckedUpdateWithoutKelasInput>
    create: XOR<KamarCreateWithoutKelasInput, KamarUncheckedCreateWithoutKelasInput>
  }

  export type KamarUpdateWithWhereUniqueWithoutKelasInput = {
    where: KamarWhereUniqueInput
    data: XOR<KamarUpdateWithoutKelasInput, KamarUncheckedUpdateWithoutKelasInput>
  }

  export type KamarUpdateManyWithWhereWithoutKelasInput = {
    where: KamarScalarWhereInput
    data: XOR<KamarUpdateManyMutationInput, KamarUncheckedUpdateManyWithoutKelasInput>
  }

  export type RuanganCreateWithoutDepartemenInput = {
    id: number
    namaruangan: string
    statusenabled: boolean
    kamars?: KamarCreateNestedManyWithoutRuanganInput
  }

  export type RuanganUncheckedCreateWithoutDepartemenInput = {
    id: number
    namaruangan: string
    statusenabled: boolean
    kamars?: KamarUncheckedCreateNestedManyWithoutRuanganInput
  }

  export type RuanganCreateOrConnectWithoutDepartemenInput = {
    where: RuanganWhereUniqueInput
    create: XOR<RuanganCreateWithoutDepartemenInput, RuanganUncheckedCreateWithoutDepartemenInput>
  }

  export type RuanganCreateManyDepartemenInputEnvelope = {
    data: RuanganCreateManyDepartemenInput | RuanganCreateManyDepartemenInput[]
    skipDuplicates?: boolean
  }

  export type RuanganUpsertWithWhereUniqueWithoutDepartemenInput = {
    where: RuanganWhereUniqueInput
    update: XOR<RuanganUpdateWithoutDepartemenInput, RuanganUncheckedUpdateWithoutDepartemenInput>
    create: XOR<RuanganCreateWithoutDepartemenInput, RuanganUncheckedCreateWithoutDepartemenInput>
  }

  export type RuanganUpdateWithWhereUniqueWithoutDepartemenInput = {
    where: RuanganWhereUniqueInput
    data: XOR<RuanganUpdateWithoutDepartemenInput, RuanganUncheckedUpdateWithoutDepartemenInput>
  }

  export type RuanganUpdateManyWithWhereWithoutDepartemenInput = {
    where: RuanganScalarWhereInput
    data: XOR<RuanganUpdateManyMutationInput, RuanganUncheckedUpdateManyWithoutDepartemenInput>
  }

  export type RuanganScalarWhereInput = {
    AND?: RuanganScalarWhereInput | RuanganScalarWhereInput[]
    OR?: RuanganScalarWhereInput[]
    NOT?: RuanganScalarWhereInput | RuanganScalarWhereInput[]
    id?: IntFilter<"Ruangan"> | number
    namaruangan?: StringFilter<"Ruangan"> | string
    statusenabled?: BoolFilter<"Ruangan"> | boolean
    objectdepartemenfk?: IntNullableFilter<"Ruangan"> | number | null
  }

  export type TempatTidurCreateManyKamarInput = {
    id: number
    reportdisplay: string
    nomorbed: number
    statusenabled: boolean
    objectstatusbedfk?: number | null
  }

  export type TempatTidurUpdateWithoutKamarInput = {
    id?: IntFieldUpdateOperationsInput | number
    reportdisplay?: StringFieldUpdateOperationsInput | string
    nomorbed?: IntFieldUpdateOperationsInput | number
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    status?: StatusBedUpdateOneWithoutTempatTidurNestedInput
  }

  export type TempatTidurUncheckedUpdateWithoutKamarInput = {
    id?: IntFieldUpdateOperationsInput | number
    reportdisplay?: StringFieldUpdateOperationsInput | string
    nomorbed?: IntFieldUpdateOperationsInput | number
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    objectstatusbedfk?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TempatTidurUncheckedUpdateManyWithoutKamarInput = {
    id?: IntFieldUpdateOperationsInput | number
    reportdisplay?: StringFieldUpdateOperationsInput | string
    nomorbed?: IntFieldUpdateOperationsInput | number
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    objectstatusbedfk?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type KamarCreateManyRuanganInput = {
    id: number
    namakamar: string
    statusenabled: boolean
    objectkelasfk?: number | null
  }

  export type KamarUpdateWithoutRuanganInput = {
    id?: IntFieldUpdateOperationsInput | number
    namakamar?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    kelas?: KelasUpdateOneWithoutKamarsNestedInput
    tempatTidur?: TempatTidurUpdateManyWithoutKamarNestedInput
  }

  export type KamarUncheckedUpdateWithoutRuanganInput = {
    id?: IntFieldUpdateOperationsInput | number
    namakamar?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    objectkelasfk?: NullableIntFieldUpdateOperationsInput | number | null
    tempatTidur?: TempatTidurUncheckedUpdateManyWithoutKamarNestedInput
  }

  export type KamarUncheckedUpdateManyWithoutRuanganInput = {
    id?: IntFieldUpdateOperationsInput | number
    namakamar?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    objectkelasfk?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TempatTidurCreateManyStatusInput = {
    id: number
    reportdisplay: string
    nomorbed: number
    statusenabled: boolean
    objectkamarfk?: number | null
  }

  export type TempatTidurUpdateWithoutStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    reportdisplay?: StringFieldUpdateOperationsInput | string
    nomorbed?: IntFieldUpdateOperationsInput | number
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    kamar?: KamarUpdateOneWithoutTempatTidurNestedInput
  }

  export type TempatTidurUncheckedUpdateWithoutStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    reportdisplay?: StringFieldUpdateOperationsInput | string
    nomorbed?: IntFieldUpdateOperationsInput | number
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    objectkamarfk?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TempatTidurUncheckedUpdateManyWithoutStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    reportdisplay?: StringFieldUpdateOperationsInput | string
    nomorbed?: IntFieldUpdateOperationsInput | number
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    objectkamarfk?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type KamarCreateManyKelasInput = {
    id: number
    namakamar: string
    statusenabled: boolean
    objectruanganfk?: number | null
  }

  export type KamarUpdateWithoutKelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    namakamar?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    ruangan?: RuanganUpdateOneWithoutKamarsNestedInput
    tempatTidur?: TempatTidurUpdateManyWithoutKamarNestedInput
  }

  export type KamarUncheckedUpdateWithoutKelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    namakamar?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    objectruanganfk?: NullableIntFieldUpdateOperationsInput | number | null
    tempatTidur?: TempatTidurUncheckedUpdateManyWithoutKamarNestedInput
  }

  export type KamarUncheckedUpdateManyWithoutKelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    namakamar?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    objectruanganfk?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RuanganCreateManyDepartemenInput = {
    id: number
    namaruangan: string
    statusenabled: boolean
  }

  export type RuanganUpdateWithoutDepartemenInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaruangan?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    kamars?: KamarUpdateManyWithoutRuanganNestedInput
  }

  export type RuanganUncheckedUpdateWithoutDepartemenInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaruangan?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
    kamars?: KamarUncheckedUpdateManyWithoutRuanganNestedInput
  }

  export type RuanganUncheckedUpdateManyWithoutDepartemenInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaruangan?: StringFieldUpdateOperationsInput | string
    statusenabled?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}