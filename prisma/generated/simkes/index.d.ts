
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
 * Model EmergencyRequest
 * 
 */
export type EmergencyRequest = $Result.DefaultSelection<Prisma.$EmergencyRequestPayload>
/**
 * Model EmergencyHistory
 * 
 */
export type EmergencyHistory = $Result.DefaultSelection<Prisma.$EmergencyHistoryPayload>
/**
 * Model AmbulanceStaff
 * 
 */
export type AmbulanceStaff = $Result.DefaultSelection<Prisma.$AmbulanceStaffPayload>
/**
 * Model ReservationQRCode
 * 
 */
export type ReservationQRCode = $Result.DefaultSelection<Prisma.$ReservationQRCodePayload>
/**
 * Model HospitalLocation
 * 
 */
export type HospitalLocation = $Result.DefaultSelection<Prisma.$HospitalLocationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EmergencyStatus: {
  PENDING: 'PENDING',
  ASSIGNED: 'ASSIGNED',
  ON_THE_WAY: 'ON_THE_WAY',
  ARRIVED: 'ARRIVED',
  PATIENT_IN_CAR: 'PATIENT_IN_CAR',
  TO_HOSPITAL: 'TO_HOSPITAL',
  COMPLETED: 'COMPLETED'
};

export type EmergencyStatus = (typeof EmergencyStatus)[keyof typeof EmergencyStatus]

}

export type EmergencyStatus = $Enums.EmergencyStatus

export const EmergencyStatus: typeof $Enums.EmergencyStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more EmergencyRequests
 * const emergencyRequests = await prisma.emergencyRequest.findMany()
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
   * // Fetch zero or more EmergencyRequests
   * const emergencyRequests = await prisma.emergencyRequest.findMany()
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
   * `prisma.emergencyRequest`: Exposes CRUD operations for the **EmergencyRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmergencyRequests
    * const emergencyRequests = await prisma.emergencyRequest.findMany()
    * ```
    */
  get emergencyRequest(): Prisma.EmergencyRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emergencyHistory`: Exposes CRUD operations for the **EmergencyHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmergencyHistories
    * const emergencyHistories = await prisma.emergencyHistory.findMany()
    * ```
    */
  get emergencyHistory(): Prisma.EmergencyHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ambulanceStaff`: Exposes CRUD operations for the **AmbulanceStaff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AmbulanceStaffs
    * const ambulanceStaffs = await prisma.ambulanceStaff.findMany()
    * ```
    */
  get ambulanceStaff(): Prisma.AmbulanceStaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservationQRCode`: Exposes CRUD operations for the **ReservationQRCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReservationQRCodes
    * const reservationQRCodes = await prisma.reservationQRCode.findMany()
    * ```
    */
  get reservationQRCode(): Prisma.ReservationQRCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hospitalLocation`: Exposes CRUD operations for the **HospitalLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HospitalLocations
    * const hospitalLocations = await prisma.hospitalLocation.findMany()
    * ```
    */
  get hospitalLocation(): Prisma.HospitalLocationDelegate<ExtArgs, ClientOptions>;
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
    EmergencyRequest: 'EmergencyRequest',
    EmergencyHistory: 'EmergencyHistory',
    AmbulanceStaff: 'AmbulanceStaff',
    ReservationQRCode: 'ReservationQRCode',
    HospitalLocation: 'HospitalLocation'
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
      modelProps: "emergencyRequest" | "emergencyHistory" | "ambulanceStaff" | "reservationQRCode" | "hospitalLocation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      EmergencyRequest: {
        payload: Prisma.$EmergencyRequestPayload<ExtArgs>
        fields: Prisma.EmergencyRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmergencyRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmergencyRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>
          }
          findFirst: {
            args: Prisma.EmergencyRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmergencyRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>
          }
          findMany: {
            args: Prisma.EmergencyRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>[]
          }
          create: {
            args: Prisma.EmergencyRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>
          }
          createMany: {
            args: Prisma.EmergencyRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmergencyRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>[]
          }
          delete: {
            args: Prisma.EmergencyRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>
          }
          update: {
            args: Prisma.EmergencyRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>
          }
          deleteMany: {
            args: Prisma.EmergencyRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmergencyRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmergencyRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>[]
          }
          upsert: {
            args: Prisma.EmergencyRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>
          }
          aggregate: {
            args: Prisma.EmergencyRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmergencyRequest>
          }
          groupBy: {
            args: Prisma.EmergencyRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmergencyRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmergencyRequestCountArgs<ExtArgs>
            result: $Utils.Optional<EmergencyRequestCountAggregateOutputType> | number
          }
        }
      }
      EmergencyHistory: {
        payload: Prisma.$EmergencyHistoryPayload<ExtArgs>
        fields: Prisma.EmergencyHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmergencyHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmergencyHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyHistoryPayload>
          }
          findFirst: {
            args: Prisma.EmergencyHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmergencyHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyHistoryPayload>
          }
          findMany: {
            args: Prisma.EmergencyHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyHistoryPayload>[]
          }
          create: {
            args: Prisma.EmergencyHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyHistoryPayload>
          }
          createMany: {
            args: Prisma.EmergencyHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmergencyHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyHistoryPayload>[]
          }
          delete: {
            args: Prisma.EmergencyHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyHistoryPayload>
          }
          update: {
            args: Prisma.EmergencyHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyHistoryPayload>
          }
          deleteMany: {
            args: Prisma.EmergencyHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmergencyHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmergencyHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyHistoryPayload>[]
          }
          upsert: {
            args: Prisma.EmergencyHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyHistoryPayload>
          }
          aggregate: {
            args: Prisma.EmergencyHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmergencyHistory>
          }
          groupBy: {
            args: Prisma.EmergencyHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmergencyHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmergencyHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<EmergencyHistoryCountAggregateOutputType> | number
          }
        }
      }
      AmbulanceStaff: {
        payload: Prisma.$AmbulanceStaffPayload<ExtArgs>
        fields: Prisma.AmbulanceStaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmbulanceStaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbulanceStaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmbulanceStaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbulanceStaffPayload>
          }
          findFirst: {
            args: Prisma.AmbulanceStaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbulanceStaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmbulanceStaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbulanceStaffPayload>
          }
          findMany: {
            args: Prisma.AmbulanceStaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbulanceStaffPayload>[]
          }
          create: {
            args: Prisma.AmbulanceStaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbulanceStaffPayload>
          }
          createMany: {
            args: Prisma.AmbulanceStaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AmbulanceStaffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbulanceStaffPayload>[]
          }
          delete: {
            args: Prisma.AmbulanceStaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbulanceStaffPayload>
          }
          update: {
            args: Prisma.AmbulanceStaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbulanceStaffPayload>
          }
          deleteMany: {
            args: Prisma.AmbulanceStaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmbulanceStaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AmbulanceStaffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbulanceStaffPayload>[]
          }
          upsert: {
            args: Prisma.AmbulanceStaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbulanceStaffPayload>
          }
          aggregate: {
            args: Prisma.AmbulanceStaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmbulanceStaff>
          }
          groupBy: {
            args: Prisma.AmbulanceStaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmbulanceStaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmbulanceStaffCountArgs<ExtArgs>
            result: $Utils.Optional<AmbulanceStaffCountAggregateOutputType> | number
          }
        }
      }
      ReservationQRCode: {
        payload: Prisma.$ReservationQRCodePayload<ExtArgs>
        fields: Prisma.ReservationQRCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationQRCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationQRCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationQRCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationQRCodePayload>
          }
          findFirst: {
            args: Prisma.ReservationQRCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationQRCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationQRCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationQRCodePayload>
          }
          findMany: {
            args: Prisma.ReservationQRCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationQRCodePayload>[]
          }
          create: {
            args: Prisma.ReservationQRCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationQRCodePayload>
          }
          createMany: {
            args: Prisma.ReservationQRCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationQRCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationQRCodePayload>[]
          }
          delete: {
            args: Prisma.ReservationQRCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationQRCodePayload>
          }
          update: {
            args: Prisma.ReservationQRCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationQRCodePayload>
          }
          deleteMany: {
            args: Prisma.ReservationQRCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationQRCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservationQRCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationQRCodePayload>[]
          }
          upsert: {
            args: Prisma.ReservationQRCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationQRCodePayload>
          }
          aggregate: {
            args: Prisma.ReservationQRCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservationQRCode>
          }
          groupBy: {
            args: Prisma.ReservationQRCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationQRCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationQRCodeCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationQRCodeCountAggregateOutputType> | number
          }
        }
      }
      HospitalLocation: {
        payload: Prisma.$HospitalLocationPayload<ExtArgs>
        fields: Prisma.HospitalLocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HospitalLocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalLocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HospitalLocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalLocationPayload>
          }
          findFirst: {
            args: Prisma.HospitalLocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalLocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HospitalLocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalLocationPayload>
          }
          findMany: {
            args: Prisma.HospitalLocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalLocationPayload>[]
          }
          create: {
            args: Prisma.HospitalLocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalLocationPayload>
          }
          createMany: {
            args: Prisma.HospitalLocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HospitalLocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalLocationPayload>[]
          }
          delete: {
            args: Prisma.HospitalLocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalLocationPayload>
          }
          update: {
            args: Prisma.HospitalLocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalLocationPayload>
          }
          deleteMany: {
            args: Prisma.HospitalLocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HospitalLocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HospitalLocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalLocationPayload>[]
          }
          upsert: {
            args: Prisma.HospitalLocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalLocationPayload>
          }
          aggregate: {
            args: Prisma.HospitalLocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHospitalLocation>
          }
          groupBy: {
            args: Prisma.HospitalLocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<HospitalLocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.HospitalLocationCountArgs<ExtArgs>
            result: $Utils.Optional<HospitalLocationCountAggregateOutputType> | number
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
    emergencyRequest?: EmergencyRequestOmit
    emergencyHistory?: EmergencyHistoryOmit
    ambulanceStaff?: AmbulanceStaffOmit
    reservationQRCode?: ReservationQRCodeOmit
    hospitalLocation?: HospitalLocationOmit
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
   * Count Type EmergencyRequestCountOutputType
   */

  export type EmergencyRequestCountOutputType = {
    histories: number
  }

  export type EmergencyRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histories?: boolean | EmergencyRequestCountOutputTypeCountHistoriesArgs
  }

  // Custom InputTypes
  /**
   * EmergencyRequestCountOutputType without action
   */
  export type EmergencyRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequestCountOutputType
     */
    select?: EmergencyRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmergencyRequestCountOutputType without action
   */
  export type EmergencyRequestCountOutputTypeCountHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyHistoryWhereInput
  }


  /**
   * Count Type AmbulanceStaffCountOutputType
   */

  export type AmbulanceStaffCountOutputType = {
    EmergencyRequest: number
  }

  export type AmbulanceStaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EmergencyRequest?: boolean | AmbulanceStaffCountOutputTypeCountEmergencyRequestArgs
  }

  // Custom InputTypes
  /**
   * AmbulanceStaffCountOutputType without action
   */
  export type AmbulanceStaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbulanceStaffCountOutputType
     */
    select?: AmbulanceStaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AmbulanceStaffCountOutputType without action
   */
  export type AmbulanceStaffCountOutputTypeCountEmergencyRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyRequestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model EmergencyRequest
   */

  export type AggregateEmergencyRequest = {
    _count: EmergencyRequestCountAggregateOutputType | null
    _min: EmergencyRequestMinAggregateOutputType | null
    _max: EmergencyRequestMaxAggregateOutputType | null
  }

  export type EmergencyRequestMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    location: string | null
    note: string | null
    status: $Enums.EmergencyStatus | null
    assignedToId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmergencyRequestMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    location: string | null
    note: string | null
    status: $Enums.EmergencyStatus | null
    assignedToId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmergencyRequestCountAggregateOutputType = {
    id: number
    patientId: number
    location: number
    note: number
    status: number
    assignedToId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmergencyRequestMinAggregateInputType = {
    id?: true
    patientId?: true
    location?: true
    note?: true
    status?: true
    assignedToId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmergencyRequestMaxAggregateInputType = {
    id?: true
    patientId?: true
    location?: true
    note?: true
    status?: true
    assignedToId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmergencyRequestCountAggregateInputType = {
    id?: true
    patientId?: true
    location?: true
    note?: true
    status?: true
    assignedToId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmergencyRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyRequest to aggregate.
     */
    where?: EmergencyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyRequests to fetch.
     */
    orderBy?: EmergencyRequestOrderByWithRelationInput | EmergencyRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmergencyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmergencyRequests
    **/
    _count?: true | EmergencyRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmergencyRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmergencyRequestMaxAggregateInputType
  }

  export type GetEmergencyRequestAggregateType<T extends EmergencyRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateEmergencyRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmergencyRequest[P]>
      : GetScalarType<T[P], AggregateEmergencyRequest[P]>
  }




  export type EmergencyRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyRequestWhereInput
    orderBy?: EmergencyRequestOrderByWithAggregationInput | EmergencyRequestOrderByWithAggregationInput[]
    by: EmergencyRequestScalarFieldEnum[] | EmergencyRequestScalarFieldEnum
    having?: EmergencyRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmergencyRequestCountAggregateInputType | true
    _min?: EmergencyRequestMinAggregateInputType
    _max?: EmergencyRequestMaxAggregateInputType
  }

  export type EmergencyRequestGroupByOutputType = {
    id: string
    patientId: string
    location: string
    note: string | null
    status: $Enums.EmergencyStatus
    assignedToId: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmergencyRequestCountAggregateOutputType | null
    _min: EmergencyRequestMinAggregateOutputType | null
    _max: EmergencyRequestMaxAggregateOutputType | null
  }

  type GetEmergencyRequestGroupByPayload<T extends EmergencyRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmergencyRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmergencyRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmergencyRequestGroupByOutputType[P]>
            : GetScalarType<T[P], EmergencyRequestGroupByOutputType[P]>
        }
      >
    >


  export type EmergencyRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    location?: boolean
    note?: boolean
    status?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedTo?: boolean | EmergencyRequest$assignedToArgs<ExtArgs>
    histories?: boolean | EmergencyRequest$historiesArgs<ExtArgs>
    _count?: boolean | EmergencyRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyRequest"]>

  export type EmergencyRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    location?: boolean
    note?: boolean
    status?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedTo?: boolean | EmergencyRequest$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyRequest"]>

  export type EmergencyRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    location?: boolean
    note?: boolean
    status?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedTo?: boolean | EmergencyRequest$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyRequest"]>

  export type EmergencyRequestSelectScalar = {
    id?: boolean
    patientId?: boolean
    location?: boolean
    note?: boolean
    status?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmergencyRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "location" | "note" | "status" | "assignedToId" | "createdAt" | "updatedAt", ExtArgs["result"]["emergencyRequest"]>
  export type EmergencyRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTo?: boolean | EmergencyRequest$assignedToArgs<ExtArgs>
    histories?: boolean | EmergencyRequest$historiesArgs<ExtArgs>
    _count?: boolean | EmergencyRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmergencyRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTo?: boolean | EmergencyRequest$assignedToArgs<ExtArgs>
  }
  export type EmergencyRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTo?: boolean | EmergencyRequest$assignedToArgs<ExtArgs>
  }

  export type $EmergencyRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmergencyRequest"
    objects: {
      assignedTo: Prisma.$AmbulanceStaffPayload<ExtArgs> | null
      histories: Prisma.$EmergencyHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      location: string
      note: string | null
      status: $Enums.EmergencyStatus
      assignedToId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["emergencyRequest"]>
    composites: {}
  }

  type EmergencyRequestGetPayload<S extends boolean | null | undefined | EmergencyRequestDefaultArgs> = $Result.GetResult<Prisma.$EmergencyRequestPayload, S>

  type EmergencyRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmergencyRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmergencyRequestCountAggregateInputType | true
    }

  export interface EmergencyRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmergencyRequest'], meta: { name: 'EmergencyRequest' } }
    /**
     * Find zero or one EmergencyRequest that matches the filter.
     * @param {EmergencyRequestFindUniqueArgs} args - Arguments to find a EmergencyRequest
     * @example
     * // Get one EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmergencyRequestFindUniqueArgs>(args: SelectSubset<T, EmergencyRequestFindUniqueArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmergencyRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmergencyRequestFindUniqueOrThrowArgs} args - Arguments to find a EmergencyRequest
     * @example
     * // Get one EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmergencyRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, EmergencyRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmergencyRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestFindFirstArgs} args - Arguments to find a EmergencyRequest
     * @example
     * // Get one EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmergencyRequestFindFirstArgs>(args?: SelectSubset<T, EmergencyRequestFindFirstArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmergencyRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestFindFirstOrThrowArgs} args - Arguments to find a EmergencyRequest
     * @example
     * // Get one EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmergencyRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, EmergencyRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmergencyRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmergencyRequests
     * const emergencyRequests = await prisma.emergencyRequest.findMany()
     * 
     * // Get first 10 EmergencyRequests
     * const emergencyRequests = await prisma.emergencyRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emergencyRequestWithIdOnly = await prisma.emergencyRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmergencyRequestFindManyArgs>(args?: SelectSubset<T, EmergencyRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmergencyRequest.
     * @param {EmergencyRequestCreateArgs} args - Arguments to create a EmergencyRequest.
     * @example
     * // Create one EmergencyRequest
     * const EmergencyRequest = await prisma.emergencyRequest.create({
     *   data: {
     *     // ... data to create a EmergencyRequest
     *   }
     * })
     * 
     */
    create<T extends EmergencyRequestCreateArgs>(args: SelectSubset<T, EmergencyRequestCreateArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmergencyRequests.
     * @param {EmergencyRequestCreateManyArgs} args - Arguments to create many EmergencyRequests.
     * @example
     * // Create many EmergencyRequests
     * const emergencyRequest = await prisma.emergencyRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmergencyRequestCreateManyArgs>(args?: SelectSubset<T, EmergencyRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmergencyRequests and returns the data saved in the database.
     * @param {EmergencyRequestCreateManyAndReturnArgs} args - Arguments to create many EmergencyRequests.
     * @example
     * // Create many EmergencyRequests
     * const emergencyRequest = await prisma.emergencyRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmergencyRequests and only return the `id`
     * const emergencyRequestWithIdOnly = await prisma.emergencyRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmergencyRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, EmergencyRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmergencyRequest.
     * @param {EmergencyRequestDeleteArgs} args - Arguments to delete one EmergencyRequest.
     * @example
     * // Delete one EmergencyRequest
     * const EmergencyRequest = await prisma.emergencyRequest.delete({
     *   where: {
     *     // ... filter to delete one EmergencyRequest
     *   }
     * })
     * 
     */
    delete<T extends EmergencyRequestDeleteArgs>(args: SelectSubset<T, EmergencyRequestDeleteArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmergencyRequest.
     * @param {EmergencyRequestUpdateArgs} args - Arguments to update one EmergencyRequest.
     * @example
     * // Update one EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmergencyRequestUpdateArgs>(args: SelectSubset<T, EmergencyRequestUpdateArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmergencyRequests.
     * @param {EmergencyRequestDeleteManyArgs} args - Arguments to filter EmergencyRequests to delete.
     * @example
     * // Delete a few EmergencyRequests
     * const { count } = await prisma.emergencyRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmergencyRequestDeleteManyArgs>(args?: SelectSubset<T, EmergencyRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmergencyRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmergencyRequests
     * const emergencyRequest = await prisma.emergencyRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmergencyRequestUpdateManyArgs>(args: SelectSubset<T, EmergencyRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmergencyRequests and returns the data updated in the database.
     * @param {EmergencyRequestUpdateManyAndReturnArgs} args - Arguments to update many EmergencyRequests.
     * @example
     * // Update many EmergencyRequests
     * const emergencyRequest = await prisma.emergencyRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmergencyRequests and only return the `id`
     * const emergencyRequestWithIdOnly = await prisma.emergencyRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmergencyRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, EmergencyRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmergencyRequest.
     * @param {EmergencyRequestUpsertArgs} args - Arguments to update or create a EmergencyRequest.
     * @example
     * // Update or create a EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.upsert({
     *   create: {
     *     // ... data to create a EmergencyRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmergencyRequest we want to update
     *   }
     * })
     */
    upsert<T extends EmergencyRequestUpsertArgs>(args: SelectSubset<T, EmergencyRequestUpsertArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmergencyRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestCountArgs} args - Arguments to filter EmergencyRequests to count.
     * @example
     * // Count the number of EmergencyRequests
     * const count = await prisma.emergencyRequest.count({
     *   where: {
     *     // ... the filter for the EmergencyRequests we want to count
     *   }
     * })
    **/
    count<T extends EmergencyRequestCountArgs>(
      args?: Subset<T, EmergencyRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmergencyRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmergencyRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmergencyRequestAggregateArgs>(args: Subset<T, EmergencyRequestAggregateArgs>): Prisma.PrismaPromise<GetEmergencyRequestAggregateType<T>>

    /**
     * Group by EmergencyRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestGroupByArgs} args - Group by arguments.
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
      T extends EmergencyRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmergencyRequestGroupByArgs['orderBy'] }
        : { orderBy?: EmergencyRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmergencyRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmergencyRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmergencyRequest model
   */
  readonly fields: EmergencyRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmergencyRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmergencyRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignedTo<T extends EmergencyRequest$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, EmergencyRequest$assignedToArgs<ExtArgs>>): Prisma__AmbulanceStaffClient<$Result.GetResult<Prisma.$AmbulanceStaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    histories<T extends EmergencyRequest$historiesArgs<ExtArgs> = {}>(args?: Subset<T, EmergencyRequest$historiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EmergencyRequest model
   */
  interface EmergencyRequestFieldRefs {
    readonly id: FieldRef<"EmergencyRequest", 'String'>
    readonly patientId: FieldRef<"EmergencyRequest", 'String'>
    readonly location: FieldRef<"EmergencyRequest", 'String'>
    readonly note: FieldRef<"EmergencyRequest", 'String'>
    readonly status: FieldRef<"EmergencyRequest", 'EmergencyStatus'>
    readonly assignedToId: FieldRef<"EmergencyRequest", 'String'>
    readonly createdAt: FieldRef<"EmergencyRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"EmergencyRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmergencyRequest findUnique
   */
  export type EmergencyRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyRequest to fetch.
     */
    where: EmergencyRequestWhereUniqueInput
  }

  /**
   * EmergencyRequest findUniqueOrThrow
   */
  export type EmergencyRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyRequest to fetch.
     */
    where: EmergencyRequestWhereUniqueInput
  }

  /**
   * EmergencyRequest findFirst
   */
  export type EmergencyRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyRequest to fetch.
     */
    where?: EmergencyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyRequests to fetch.
     */
    orderBy?: EmergencyRequestOrderByWithRelationInput | EmergencyRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyRequests.
     */
    cursor?: EmergencyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyRequests.
     */
    distinct?: EmergencyRequestScalarFieldEnum | EmergencyRequestScalarFieldEnum[]
  }

  /**
   * EmergencyRequest findFirstOrThrow
   */
  export type EmergencyRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyRequest to fetch.
     */
    where?: EmergencyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyRequests to fetch.
     */
    orderBy?: EmergencyRequestOrderByWithRelationInput | EmergencyRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyRequests.
     */
    cursor?: EmergencyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyRequests.
     */
    distinct?: EmergencyRequestScalarFieldEnum | EmergencyRequestScalarFieldEnum[]
  }

  /**
   * EmergencyRequest findMany
   */
  export type EmergencyRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyRequests to fetch.
     */
    where?: EmergencyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyRequests to fetch.
     */
    orderBy?: EmergencyRequestOrderByWithRelationInput | EmergencyRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmergencyRequests.
     */
    cursor?: EmergencyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyRequests.
     */
    skip?: number
    distinct?: EmergencyRequestScalarFieldEnum | EmergencyRequestScalarFieldEnum[]
  }

  /**
   * EmergencyRequest create
   */
  export type EmergencyRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a EmergencyRequest.
     */
    data: XOR<EmergencyRequestCreateInput, EmergencyRequestUncheckedCreateInput>
  }

  /**
   * EmergencyRequest createMany
   */
  export type EmergencyRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmergencyRequests.
     */
    data: EmergencyRequestCreateManyInput | EmergencyRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmergencyRequest createManyAndReturn
   */
  export type EmergencyRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * The data used to create many EmergencyRequests.
     */
    data: EmergencyRequestCreateManyInput | EmergencyRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmergencyRequest update
   */
  export type EmergencyRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a EmergencyRequest.
     */
    data: XOR<EmergencyRequestUpdateInput, EmergencyRequestUncheckedUpdateInput>
    /**
     * Choose, which EmergencyRequest to update.
     */
    where: EmergencyRequestWhereUniqueInput
  }

  /**
   * EmergencyRequest updateMany
   */
  export type EmergencyRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmergencyRequests.
     */
    data: XOR<EmergencyRequestUpdateManyMutationInput, EmergencyRequestUncheckedUpdateManyInput>
    /**
     * Filter which EmergencyRequests to update
     */
    where?: EmergencyRequestWhereInput
    /**
     * Limit how many EmergencyRequests to update.
     */
    limit?: number
  }

  /**
   * EmergencyRequest updateManyAndReturn
   */
  export type EmergencyRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * The data used to update EmergencyRequests.
     */
    data: XOR<EmergencyRequestUpdateManyMutationInput, EmergencyRequestUncheckedUpdateManyInput>
    /**
     * Filter which EmergencyRequests to update
     */
    where?: EmergencyRequestWhereInput
    /**
     * Limit how many EmergencyRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmergencyRequest upsert
   */
  export type EmergencyRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the EmergencyRequest to update in case it exists.
     */
    where: EmergencyRequestWhereUniqueInput
    /**
     * In case the EmergencyRequest found by the `where` argument doesn't exist, create a new EmergencyRequest with this data.
     */
    create: XOR<EmergencyRequestCreateInput, EmergencyRequestUncheckedCreateInput>
    /**
     * In case the EmergencyRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmergencyRequestUpdateInput, EmergencyRequestUncheckedUpdateInput>
  }

  /**
   * EmergencyRequest delete
   */
  export type EmergencyRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
    /**
     * Filter which EmergencyRequest to delete.
     */
    where: EmergencyRequestWhereUniqueInput
  }

  /**
   * EmergencyRequest deleteMany
   */
  export type EmergencyRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyRequests to delete
     */
    where?: EmergencyRequestWhereInput
    /**
     * Limit how many EmergencyRequests to delete.
     */
    limit?: number
  }

  /**
   * EmergencyRequest.assignedTo
   */
  export type EmergencyRequest$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbulanceStaff
     */
    select?: AmbulanceStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbulanceStaff
     */
    omit?: AmbulanceStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanceStaffInclude<ExtArgs> | null
    where?: AmbulanceStaffWhereInput
  }

  /**
   * EmergencyRequest.histories
   */
  export type EmergencyRequest$historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyHistory
     */
    select?: EmergencyHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyHistory
     */
    omit?: EmergencyHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyHistoryInclude<ExtArgs> | null
    where?: EmergencyHistoryWhereInput
    orderBy?: EmergencyHistoryOrderByWithRelationInput | EmergencyHistoryOrderByWithRelationInput[]
    cursor?: EmergencyHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmergencyHistoryScalarFieldEnum | EmergencyHistoryScalarFieldEnum[]
  }

  /**
   * EmergencyRequest without action
   */
  export type EmergencyRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
  }


  /**
   * Model EmergencyHistory
   */

  export type AggregateEmergencyHistory = {
    _count: EmergencyHistoryCountAggregateOutputType | null
    _min: EmergencyHistoryMinAggregateOutputType | null
    _max: EmergencyHistoryMaxAggregateOutputType | null
  }

  export type EmergencyHistoryMinAggregateOutputType = {
    id: string | null
    emergencyRequestId: string | null
    ambulanceStaffLocation: string | null
    status: $Enums.EmergencyStatus | null
    note: string | null
    createdAt: Date | null
  }

  export type EmergencyHistoryMaxAggregateOutputType = {
    id: string | null
    emergencyRequestId: string | null
    ambulanceStaffLocation: string | null
    status: $Enums.EmergencyStatus | null
    note: string | null
    createdAt: Date | null
  }

  export type EmergencyHistoryCountAggregateOutputType = {
    id: number
    emergencyRequestId: number
    ambulanceStaffLocation: number
    status: number
    note: number
    createdAt: number
    _all: number
  }


  export type EmergencyHistoryMinAggregateInputType = {
    id?: true
    emergencyRequestId?: true
    ambulanceStaffLocation?: true
    status?: true
    note?: true
    createdAt?: true
  }

  export type EmergencyHistoryMaxAggregateInputType = {
    id?: true
    emergencyRequestId?: true
    ambulanceStaffLocation?: true
    status?: true
    note?: true
    createdAt?: true
  }

  export type EmergencyHistoryCountAggregateInputType = {
    id?: true
    emergencyRequestId?: true
    ambulanceStaffLocation?: true
    status?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type EmergencyHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyHistory to aggregate.
     */
    where?: EmergencyHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyHistories to fetch.
     */
    orderBy?: EmergencyHistoryOrderByWithRelationInput | EmergencyHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmergencyHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmergencyHistories
    **/
    _count?: true | EmergencyHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmergencyHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmergencyHistoryMaxAggregateInputType
  }

  export type GetEmergencyHistoryAggregateType<T extends EmergencyHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateEmergencyHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmergencyHistory[P]>
      : GetScalarType<T[P], AggregateEmergencyHistory[P]>
  }




  export type EmergencyHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyHistoryWhereInput
    orderBy?: EmergencyHistoryOrderByWithAggregationInput | EmergencyHistoryOrderByWithAggregationInput[]
    by: EmergencyHistoryScalarFieldEnum[] | EmergencyHistoryScalarFieldEnum
    having?: EmergencyHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmergencyHistoryCountAggregateInputType | true
    _min?: EmergencyHistoryMinAggregateInputType
    _max?: EmergencyHistoryMaxAggregateInputType
  }

  export type EmergencyHistoryGroupByOutputType = {
    id: string
    emergencyRequestId: string
    ambulanceStaffLocation: string | null
    status: $Enums.EmergencyStatus
    note: string | null
    createdAt: Date
    _count: EmergencyHistoryCountAggregateOutputType | null
    _min: EmergencyHistoryMinAggregateOutputType | null
    _max: EmergencyHistoryMaxAggregateOutputType | null
  }

  type GetEmergencyHistoryGroupByPayload<T extends EmergencyHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmergencyHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmergencyHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmergencyHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], EmergencyHistoryGroupByOutputType[P]>
        }
      >
    >


  export type EmergencyHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emergencyRequestId?: boolean
    ambulanceStaffLocation?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    emergencyRequest?: boolean | EmergencyRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyHistory"]>

  export type EmergencyHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emergencyRequestId?: boolean
    ambulanceStaffLocation?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    emergencyRequest?: boolean | EmergencyRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyHistory"]>

  export type EmergencyHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emergencyRequestId?: boolean
    ambulanceStaffLocation?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    emergencyRequest?: boolean | EmergencyRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyHistory"]>

  export type EmergencyHistorySelectScalar = {
    id?: boolean
    emergencyRequestId?: boolean
    ambulanceStaffLocation?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type EmergencyHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "emergencyRequestId" | "ambulanceStaffLocation" | "status" | "note" | "createdAt", ExtArgs["result"]["emergencyHistory"]>
  export type EmergencyHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emergencyRequest?: boolean | EmergencyRequestDefaultArgs<ExtArgs>
  }
  export type EmergencyHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emergencyRequest?: boolean | EmergencyRequestDefaultArgs<ExtArgs>
  }
  export type EmergencyHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emergencyRequest?: boolean | EmergencyRequestDefaultArgs<ExtArgs>
  }

  export type $EmergencyHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmergencyHistory"
    objects: {
      emergencyRequest: Prisma.$EmergencyRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      emergencyRequestId: string
      ambulanceStaffLocation: string | null
      status: $Enums.EmergencyStatus
      note: string | null
      createdAt: Date
    }, ExtArgs["result"]["emergencyHistory"]>
    composites: {}
  }

  type EmergencyHistoryGetPayload<S extends boolean | null | undefined | EmergencyHistoryDefaultArgs> = $Result.GetResult<Prisma.$EmergencyHistoryPayload, S>

  type EmergencyHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmergencyHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmergencyHistoryCountAggregateInputType | true
    }

  export interface EmergencyHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmergencyHistory'], meta: { name: 'EmergencyHistory' } }
    /**
     * Find zero or one EmergencyHistory that matches the filter.
     * @param {EmergencyHistoryFindUniqueArgs} args - Arguments to find a EmergencyHistory
     * @example
     * // Get one EmergencyHistory
     * const emergencyHistory = await prisma.emergencyHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmergencyHistoryFindUniqueArgs>(args: SelectSubset<T, EmergencyHistoryFindUniqueArgs<ExtArgs>>): Prisma__EmergencyHistoryClient<$Result.GetResult<Prisma.$EmergencyHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmergencyHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmergencyHistoryFindUniqueOrThrowArgs} args - Arguments to find a EmergencyHistory
     * @example
     * // Get one EmergencyHistory
     * const emergencyHistory = await prisma.emergencyHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmergencyHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, EmergencyHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmergencyHistoryClient<$Result.GetResult<Prisma.$EmergencyHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmergencyHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyHistoryFindFirstArgs} args - Arguments to find a EmergencyHistory
     * @example
     * // Get one EmergencyHistory
     * const emergencyHistory = await prisma.emergencyHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmergencyHistoryFindFirstArgs>(args?: SelectSubset<T, EmergencyHistoryFindFirstArgs<ExtArgs>>): Prisma__EmergencyHistoryClient<$Result.GetResult<Prisma.$EmergencyHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmergencyHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyHistoryFindFirstOrThrowArgs} args - Arguments to find a EmergencyHistory
     * @example
     * // Get one EmergencyHistory
     * const emergencyHistory = await prisma.emergencyHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmergencyHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, EmergencyHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmergencyHistoryClient<$Result.GetResult<Prisma.$EmergencyHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmergencyHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmergencyHistories
     * const emergencyHistories = await prisma.emergencyHistory.findMany()
     * 
     * // Get first 10 EmergencyHistories
     * const emergencyHistories = await prisma.emergencyHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emergencyHistoryWithIdOnly = await prisma.emergencyHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmergencyHistoryFindManyArgs>(args?: SelectSubset<T, EmergencyHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmergencyHistory.
     * @param {EmergencyHistoryCreateArgs} args - Arguments to create a EmergencyHistory.
     * @example
     * // Create one EmergencyHistory
     * const EmergencyHistory = await prisma.emergencyHistory.create({
     *   data: {
     *     // ... data to create a EmergencyHistory
     *   }
     * })
     * 
     */
    create<T extends EmergencyHistoryCreateArgs>(args: SelectSubset<T, EmergencyHistoryCreateArgs<ExtArgs>>): Prisma__EmergencyHistoryClient<$Result.GetResult<Prisma.$EmergencyHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmergencyHistories.
     * @param {EmergencyHistoryCreateManyArgs} args - Arguments to create many EmergencyHistories.
     * @example
     * // Create many EmergencyHistories
     * const emergencyHistory = await prisma.emergencyHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmergencyHistoryCreateManyArgs>(args?: SelectSubset<T, EmergencyHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmergencyHistories and returns the data saved in the database.
     * @param {EmergencyHistoryCreateManyAndReturnArgs} args - Arguments to create many EmergencyHistories.
     * @example
     * // Create many EmergencyHistories
     * const emergencyHistory = await prisma.emergencyHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmergencyHistories and only return the `id`
     * const emergencyHistoryWithIdOnly = await prisma.emergencyHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmergencyHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, EmergencyHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmergencyHistory.
     * @param {EmergencyHistoryDeleteArgs} args - Arguments to delete one EmergencyHistory.
     * @example
     * // Delete one EmergencyHistory
     * const EmergencyHistory = await prisma.emergencyHistory.delete({
     *   where: {
     *     // ... filter to delete one EmergencyHistory
     *   }
     * })
     * 
     */
    delete<T extends EmergencyHistoryDeleteArgs>(args: SelectSubset<T, EmergencyHistoryDeleteArgs<ExtArgs>>): Prisma__EmergencyHistoryClient<$Result.GetResult<Prisma.$EmergencyHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmergencyHistory.
     * @param {EmergencyHistoryUpdateArgs} args - Arguments to update one EmergencyHistory.
     * @example
     * // Update one EmergencyHistory
     * const emergencyHistory = await prisma.emergencyHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmergencyHistoryUpdateArgs>(args: SelectSubset<T, EmergencyHistoryUpdateArgs<ExtArgs>>): Prisma__EmergencyHistoryClient<$Result.GetResult<Prisma.$EmergencyHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmergencyHistories.
     * @param {EmergencyHistoryDeleteManyArgs} args - Arguments to filter EmergencyHistories to delete.
     * @example
     * // Delete a few EmergencyHistories
     * const { count } = await prisma.emergencyHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmergencyHistoryDeleteManyArgs>(args?: SelectSubset<T, EmergencyHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmergencyHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmergencyHistories
     * const emergencyHistory = await prisma.emergencyHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmergencyHistoryUpdateManyArgs>(args: SelectSubset<T, EmergencyHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmergencyHistories and returns the data updated in the database.
     * @param {EmergencyHistoryUpdateManyAndReturnArgs} args - Arguments to update many EmergencyHistories.
     * @example
     * // Update many EmergencyHistories
     * const emergencyHistory = await prisma.emergencyHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmergencyHistories and only return the `id`
     * const emergencyHistoryWithIdOnly = await prisma.emergencyHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmergencyHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, EmergencyHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmergencyHistory.
     * @param {EmergencyHistoryUpsertArgs} args - Arguments to update or create a EmergencyHistory.
     * @example
     * // Update or create a EmergencyHistory
     * const emergencyHistory = await prisma.emergencyHistory.upsert({
     *   create: {
     *     // ... data to create a EmergencyHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmergencyHistory we want to update
     *   }
     * })
     */
    upsert<T extends EmergencyHistoryUpsertArgs>(args: SelectSubset<T, EmergencyHistoryUpsertArgs<ExtArgs>>): Prisma__EmergencyHistoryClient<$Result.GetResult<Prisma.$EmergencyHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmergencyHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyHistoryCountArgs} args - Arguments to filter EmergencyHistories to count.
     * @example
     * // Count the number of EmergencyHistories
     * const count = await prisma.emergencyHistory.count({
     *   where: {
     *     // ... the filter for the EmergencyHistories we want to count
     *   }
     * })
    **/
    count<T extends EmergencyHistoryCountArgs>(
      args?: Subset<T, EmergencyHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmergencyHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmergencyHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmergencyHistoryAggregateArgs>(args: Subset<T, EmergencyHistoryAggregateArgs>): Prisma.PrismaPromise<GetEmergencyHistoryAggregateType<T>>

    /**
     * Group by EmergencyHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyHistoryGroupByArgs} args - Group by arguments.
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
      T extends EmergencyHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmergencyHistoryGroupByArgs['orderBy'] }
        : { orderBy?: EmergencyHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmergencyHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmergencyHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmergencyHistory model
   */
  readonly fields: EmergencyHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmergencyHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmergencyHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emergencyRequest<T extends EmergencyRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmergencyRequestDefaultArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EmergencyHistory model
   */
  interface EmergencyHistoryFieldRefs {
    readonly id: FieldRef<"EmergencyHistory", 'String'>
    readonly emergencyRequestId: FieldRef<"EmergencyHistory", 'String'>
    readonly ambulanceStaffLocation: FieldRef<"EmergencyHistory", 'String'>
    readonly status: FieldRef<"EmergencyHistory", 'EmergencyStatus'>
    readonly note: FieldRef<"EmergencyHistory", 'String'>
    readonly createdAt: FieldRef<"EmergencyHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmergencyHistory findUnique
   */
  export type EmergencyHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyHistory
     */
    select?: EmergencyHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyHistory
     */
    omit?: EmergencyHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyHistoryInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyHistory to fetch.
     */
    where: EmergencyHistoryWhereUniqueInput
  }

  /**
   * EmergencyHistory findUniqueOrThrow
   */
  export type EmergencyHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyHistory
     */
    select?: EmergencyHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyHistory
     */
    omit?: EmergencyHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyHistoryInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyHistory to fetch.
     */
    where: EmergencyHistoryWhereUniqueInput
  }

  /**
   * EmergencyHistory findFirst
   */
  export type EmergencyHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyHistory
     */
    select?: EmergencyHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyHistory
     */
    omit?: EmergencyHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyHistoryInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyHistory to fetch.
     */
    where?: EmergencyHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyHistories to fetch.
     */
    orderBy?: EmergencyHistoryOrderByWithRelationInput | EmergencyHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyHistories.
     */
    cursor?: EmergencyHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyHistories.
     */
    distinct?: EmergencyHistoryScalarFieldEnum | EmergencyHistoryScalarFieldEnum[]
  }

  /**
   * EmergencyHistory findFirstOrThrow
   */
  export type EmergencyHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyHistory
     */
    select?: EmergencyHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyHistory
     */
    omit?: EmergencyHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyHistoryInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyHistory to fetch.
     */
    where?: EmergencyHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyHistories to fetch.
     */
    orderBy?: EmergencyHistoryOrderByWithRelationInput | EmergencyHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyHistories.
     */
    cursor?: EmergencyHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyHistories.
     */
    distinct?: EmergencyHistoryScalarFieldEnum | EmergencyHistoryScalarFieldEnum[]
  }

  /**
   * EmergencyHistory findMany
   */
  export type EmergencyHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyHistory
     */
    select?: EmergencyHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyHistory
     */
    omit?: EmergencyHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyHistoryInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyHistories to fetch.
     */
    where?: EmergencyHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyHistories to fetch.
     */
    orderBy?: EmergencyHistoryOrderByWithRelationInput | EmergencyHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmergencyHistories.
     */
    cursor?: EmergencyHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyHistories.
     */
    skip?: number
    distinct?: EmergencyHistoryScalarFieldEnum | EmergencyHistoryScalarFieldEnum[]
  }

  /**
   * EmergencyHistory create
   */
  export type EmergencyHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyHistory
     */
    select?: EmergencyHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyHistory
     */
    omit?: EmergencyHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a EmergencyHistory.
     */
    data: XOR<EmergencyHistoryCreateInput, EmergencyHistoryUncheckedCreateInput>
  }

  /**
   * EmergencyHistory createMany
   */
  export type EmergencyHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmergencyHistories.
     */
    data: EmergencyHistoryCreateManyInput | EmergencyHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmergencyHistory createManyAndReturn
   */
  export type EmergencyHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyHistory
     */
    select?: EmergencyHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyHistory
     */
    omit?: EmergencyHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many EmergencyHistories.
     */
    data: EmergencyHistoryCreateManyInput | EmergencyHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmergencyHistory update
   */
  export type EmergencyHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyHistory
     */
    select?: EmergencyHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyHistory
     */
    omit?: EmergencyHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a EmergencyHistory.
     */
    data: XOR<EmergencyHistoryUpdateInput, EmergencyHistoryUncheckedUpdateInput>
    /**
     * Choose, which EmergencyHistory to update.
     */
    where: EmergencyHistoryWhereUniqueInput
  }

  /**
   * EmergencyHistory updateMany
   */
  export type EmergencyHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmergencyHistories.
     */
    data: XOR<EmergencyHistoryUpdateManyMutationInput, EmergencyHistoryUncheckedUpdateManyInput>
    /**
     * Filter which EmergencyHistories to update
     */
    where?: EmergencyHistoryWhereInput
    /**
     * Limit how many EmergencyHistories to update.
     */
    limit?: number
  }

  /**
   * EmergencyHistory updateManyAndReturn
   */
  export type EmergencyHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyHistory
     */
    select?: EmergencyHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyHistory
     */
    omit?: EmergencyHistoryOmit<ExtArgs> | null
    /**
     * The data used to update EmergencyHistories.
     */
    data: XOR<EmergencyHistoryUpdateManyMutationInput, EmergencyHistoryUncheckedUpdateManyInput>
    /**
     * Filter which EmergencyHistories to update
     */
    where?: EmergencyHistoryWhereInput
    /**
     * Limit how many EmergencyHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmergencyHistory upsert
   */
  export type EmergencyHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyHistory
     */
    select?: EmergencyHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyHistory
     */
    omit?: EmergencyHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the EmergencyHistory to update in case it exists.
     */
    where: EmergencyHistoryWhereUniqueInput
    /**
     * In case the EmergencyHistory found by the `where` argument doesn't exist, create a new EmergencyHistory with this data.
     */
    create: XOR<EmergencyHistoryCreateInput, EmergencyHistoryUncheckedCreateInput>
    /**
     * In case the EmergencyHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmergencyHistoryUpdateInput, EmergencyHistoryUncheckedUpdateInput>
  }

  /**
   * EmergencyHistory delete
   */
  export type EmergencyHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyHistory
     */
    select?: EmergencyHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyHistory
     */
    omit?: EmergencyHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyHistoryInclude<ExtArgs> | null
    /**
     * Filter which EmergencyHistory to delete.
     */
    where: EmergencyHistoryWhereUniqueInput
  }

  /**
   * EmergencyHistory deleteMany
   */
  export type EmergencyHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyHistories to delete
     */
    where?: EmergencyHistoryWhereInput
    /**
     * Limit how many EmergencyHistories to delete.
     */
    limit?: number
  }

  /**
   * EmergencyHistory without action
   */
  export type EmergencyHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyHistory
     */
    select?: EmergencyHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyHistory
     */
    omit?: EmergencyHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyHistoryInclude<ExtArgs> | null
  }


  /**
   * Model AmbulanceStaff
   */

  export type AggregateAmbulanceStaff = {
    _count: AmbulanceStaffCountAggregateOutputType | null
    _min: AmbulanceStaffMinAggregateOutputType | null
    _max: AmbulanceStaffMaxAggregateOutputType | null
  }

  export type AmbulanceStaffMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AmbulanceStaffMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AmbulanceStaffCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AmbulanceStaffMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AmbulanceStaffMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AmbulanceStaffCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AmbulanceStaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AmbulanceStaff to aggregate.
     */
    where?: AmbulanceStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AmbulanceStaffs to fetch.
     */
    orderBy?: AmbulanceStaffOrderByWithRelationInput | AmbulanceStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmbulanceStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AmbulanceStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AmbulanceStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AmbulanceStaffs
    **/
    _count?: true | AmbulanceStaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmbulanceStaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmbulanceStaffMaxAggregateInputType
  }

  export type GetAmbulanceStaffAggregateType<T extends AmbulanceStaffAggregateArgs> = {
        [P in keyof T & keyof AggregateAmbulanceStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmbulanceStaff[P]>
      : GetScalarType<T[P], AggregateAmbulanceStaff[P]>
  }




  export type AmbulanceStaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmbulanceStaffWhereInput
    orderBy?: AmbulanceStaffOrderByWithAggregationInput | AmbulanceStaffOrderByWithAggregationInput[]
    by: AmbulanceStaffScalarFieldEnum[] | AmbulanceStaffScalarFieldEnum
    having?: AmbulanceStaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmbulanceStaffCountAggregateInputType | true
    _min?: AmbulanceStaffMinAggregateInputType
    _max?: AmbulanceStaffMaxAggregateInputType
  }

  export type AmbulanceStaffGroupByOutputType = {
    id: string
    name: string
    phone: string
    email: string
    createdAt: Date
    updatedAt: Date
    _count: AmbulanceStaffCountAggregateOutputType | null
    _min: AmbulanceStaffMinAggregateOutputType | null
    _max: AmbulanceStaffMaxAggregateOutputType | null
  }

  type GetAmbulanceStaffGroupByPayload<T extends AmbulanceStaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmbulanceStaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmbulanceStaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmbulanceStaffGroupByOutputType[P]>
            : GetScalarType<T[P], AmbulanceStaffGroupByOutputType[P]>
        }
      >
    >


  export type AmbulanceStaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    EmergencyRequest?: boolean | AmbulanceStaff$EmergencyRequestArgs<ExtArgs>
    _count?: boolean | AmbulanceStaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ambulanceStaff"]>

  export type AmbulanceStaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ambulanceStaff"]>

  export type AmbulanceStaffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ambulanceStaff"]>

  export type AmbulanceStaffSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AmbulanceStaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["ambulanceStaff"]>
  export type AmbulanceStaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EmergencyRequest?: boolean | AmbulanceStaff$EmergencyRequestArgs<ExtArgs>
    _count?: boolean | AmbulanceStaffCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AmbulanceStaffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AmbulanceStaffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AmbulanceStaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AmbulanceStaff"
    objects: {
      EmergencyRequest: Prisma.$EmergencyRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ambulanceStaff"]>
    composites: {}
  }

  type AmbulanceStaffGetPayload<S extends boolean | null | undefined | AmbulanceStaffDefaultArgs> = $Result.GetResult<Prisma.$AmbulanceStaffPayload, S>

  type AmbulanceStaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AmbulanceStaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmbulanceStaffCountAggregateInputType | true
    }

  export interface AmbulanceStaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AmbulanceStaff'], meta: { name: 'AmbulanceStaff' } }
    /**
     * Find zero or one AmbulanceStaff that matches the filter.
     * @param {AmbulanceStaffFindUniqueArgs} args - Arguments to find a AmbulanceStaff
     * @example
     * // Get one AmbulanceStaff
     * const ambulanceStaff = await prisma.ambulanceStaff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmbulanceStaffFindUniqueArgs>(args: SelectSubset<T, AmbulanceStaffFindUniqueArgs<ExtArgs>>): Prisma__AmbulanceStaffClient<$Result.GetResult<Prisma.$AmbulanceStaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AmbulanceStaff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmbulanceStaffFindUniqueOrThrowArgs} args - Arguments to find a AmbulanceStaff
     * @example
     * // Get one AmbulanceStaff
     * const ambulanceStaff = await prisma.ambulanceStaff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmbulanceStaffFindUniqueOrThrowArgs>(args: SelectSubset<T, AmbulanceStaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmbulanceStaffClient<$Result.GetResult<Prisma.$AmbulanceStaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AmbulanceStaff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbulanceStaffFindFirstArgs} args - Arguments to find a AmbulanceStaff
     * @example
     * // Get one AmbulanceStaff
     * const ambulanceStaff = await prisma.ambulanceStaff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmbulanceStaffFindFirstArgs>(args?: SelectSubset<T, AmbulanceStaffFindFirstArgs<ExtArgs>>): Prisma__AmbulanceStaffClient<$Result.GetResult<Prisma.$AmbulanceStaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AmbulanceStaff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbulanceStaffFindFirstOrThrowArgs} args - Arguments to find a AmbulanceStaff
     * @example
     * // Get one AmbulanceStaff
     * const ambulanceStaff = await prisma.ambulanceStaff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmbulanceStaffFindFirstOrThrowArgs>(args?: SelectSubset<T, AmbulanceStaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmbulanceStaffClient<$Result.GetResult<Prisma.$AmbulanceStaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AmbulanceStaffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbulanceStaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AmbulanceStaffs
     * const ambulanceStaffs = await prisma.ambulanceStaff.findMany()
     * 
     * // Get first 10 AmbulanceStaffs
     * const ambulanceStaffs = await prisma.ambulanceStaff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ambulanceStaffWithIdOnly = await prisma.ambulanceStaff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AmbulanceStaffFindManyArgs>(args?: SelectSubset<T, AmbulanceStaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmbulanceStaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AmbulanceStaff.
     * @param {AmbulanceStaffCreateArgs} args - Arguments to create a AmbulanceStaff.
     * @example
     * // Create one AmbulanceStaff
     * const AmbulanceStaff = await prisma.ambulanceStaff.create({
     *   data: {
     *     // ... data to create a AmbulanceStaff
     *   }
     * })
     * 
     */
    create<T extends AmbulanceStaffCreateArgs>(args: SelectSubset<T, AmbulanceStaffCreateArgs<ExtArgs>>): Prisma__AmbulanceStaffClient<$Result.GetResult<Prisma.$AmbulanceStaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AmbulanceStaffs.
     * @param {AmbulanceStaffCreateManyArgs} args - Arguments to create many AmbulanceStaffs.
     * @example
     * // Create many AmbulanceStaffs
     * const ambulanceStaff = await prisma.ambulanceStaff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmbulanceStaffCreateManyArgs>(args?: SelectSubset<T, AmbulanceStaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AmbulanceStaffs and returns the data saved in the database.
     * @param {AmbulanceStaffCreateManyAndReturnArgs} args - Arguments to create many AmbulanceStaffs.
     * @example
     * // Create many AmbulanceStaffs
     * const ambulanceStaff = await prisma.ambulanceStaff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AmbulanceStaffs and only return the `id`
     * const ambulanceStaffWithIdOnly = await prisma.ambulanceStaff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AmbulanceStaffCreateManyAndReturnArgs>(args?: SelectSubset<T, AmbulanceStaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmbulanceStaffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AmbulanceStaff.
     * @param {AmbulanceStaffDeleteArgs} args - Arguments to delete one AmbulanceStaff.
     * @example
     * // Delete one AmbulanceStaff
     * const AmbulanceStaff = await prisma.ambulanceStaff.delete({
     *   where: {
     *     // ... filter to delete one AmbulanceStaff
     *   }
     * })
     * 
     */
    delete<T extends AmbulanceStaffDeleteArgs>(args: SelectSubset<T, AmbulanceStaffDeleteArgs<ExtArgs>>): Prisma__AmbulanceStaffClient<$Result.GetResult<Prisma.$AmbulanceStaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AmbulanceStaff.
     * @param {AmbulanceStaffUpdateArgs} args - Arguments to update one AmbulanceStaff.
     * @example
     * // Update one AmbulanceStaff
     * const ambulanceStaff = await prisma.ambulanceStaff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmbulanceStaffUpdateArgs>(args: SelectSubset<T, AmbulanceStaffUpdateArgs<ExtArgs>>): Prisma__AmbulanceStaffClient<$Result.GetResult<Prisma.$AmbulanceStaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AmbulanceStaffs.
     * @param {AmbulanceStaffDeleteManyArgs} args - Arguments to filter AmbulanceStaffs to delete.
     * @example
     * // Delete a few AmbulanceStaffs
     * const { count } = await prisma.ambulanceStaff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmbulanceStaffDeleteManyArgs>(args?: SelectSubset<T, AmbulanceStaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AmbulanceStaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbulanceStaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AmbulanceStaffs
     * const ambulanceStaff = await prisma.ambulanceStaff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmbulanceStaffUpdateManyArgs>(args: SelectSubset<T, AmbulanceStaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AmbulanceStaffs and returns the data updated in the database.
     * @param {AmbulanceStaffUpdateManyAndReturnArgs} args - Arguments to update many AmbulanceStaffs.
     * @example
     * // Update many AmbulanceStaffs
     * const ambulanceStaff = await prisma.ambulanceStaff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AmbulanceStaffs and only return the `id`
     * const ambulanceStaffWithIdOnly = await prisma.ambulanceStaff.updateManyAndReturn({
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
    updateManyAndReturn<T extends AmbulanceStaffUpdateManyAndReturnArgs>(args: SelectSubset<T, AmbulanceStaffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmbulanceStaffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AmbulanceStaff.
     * @param {AmbulanceStaffUpsertArgs} args - Arguments to update or create a AmbulanceStaff.
     * @example
     * // Update or create a AmbulanceStaff
     * const ambulanceStaff = await prisma.ambulanceStaff.upsert({
     *   create: {
     *     // ... data to create a AmbulanceStaff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AmbulanceStaff we want to update
     *   }
     * })
     */
    upsert<T extends AmbulanceStaffUpsertArgs>(args: SelectSubset<T, AmbulanceStaffUpsertArgs<ExtArgs>>): Prisma__AmbulanceStaffClient<$Result.GetResult<Prisma.$AmbulanceStaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AmbulanceStaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbulanceStaffCountArgs} args - Arguments to filter AmbulanceStaffs to count.
     * @example
     * // Count the number of AmbulanceStaffs
     * const count = await prisma.ambulanceStaff.count({
     *   where: {
     *     // ... the filter for the AmbulanceStaffs we want to count
     *   }
     * })
    **/
    count<T extends AmbulanceStaffCountArgs>(
      args?: Subset<T, AmbulanceStaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmbulanceStaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AmbulanceStaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbulanceStaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AmbulanceStaffAggregateArgs>(args: Subset<T, AmbulanceStaffAggregateArgs>): Prisma.PrismaPromise<GetAmbulanceStaffAggregateType<T>>

    /**
     * Group by AmbulanceStaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbulanceStaffGroupByArgs} args - Group by arguments.
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
      T extends AmbulanceStaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmbulanceStaffGroupByArgs['orderBy'] }
        : { orderBy?: AmbulanceStaffGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AmbulanceStaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmbulanceStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AmbulanceStaff model
   */
  readonly fields: AmbulanceStaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AmbulanceStaff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmbulanceStaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    EmergencyRequest<T extends AmbulanceStaff$EmergencyRequestArgs<ExtArgs> = {}>(args?: Subset<T, AmbulanceStaff$EmergencyRequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AmbulanceStaff model
   */
  interface AmbulanceStaffFieldRefs {
    readonly id: FieldRef<"AmbulanceStaff", 'String'>
    readonly name: FieldRef<"AmbulanceStaff", 'String'>
    readonly phone: FieldRef<"AmbulanceStaff", 'String'>
    readonly email: FieldRef<"AmbulanceStaff", 'String'>
    readonly createdAt: FieldRef<"AmbulanceStaff", 'DateTime'>
    readonly updatedAt: FieldRef<"AmbulanceStaff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AmbulanceStaff findUnique
   */
  export type AmbulanceStaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbulanceStaff
     */
    select?: AmbulanceStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbulanceStaff
     */
    omit?: AmbulanceStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanceStaffInclude<ExtArgs> | null
    /**
     * Filter, which AmbulanceStaff to fetch.
     */
    where: AmbulanceStaffWhereUniqueInput
  }

  /**
   * AmbulanceStaff findUniqueOrThrow
   */
  export type AmbulanceStaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbulanceStaff
     */
    select?: AmbulanceStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbulanceStaff
     */
    omit?: AmbulanceStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanceStaffInclude<ExtArgs> | null
    /**
     * Filter, which AmbulanceStaff to fetch.
     */
    where: AmbulanceStaffWhereUniqueInput
  }

  /**
   * AmbulanceStaff findFirst
   */
  export type AmbulanceStaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbulanceStaff
     */
    select?: AmbulanceStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbulanceStaff
     */
    omit?: AmbulanceStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanceStaffInclude<ExtArgs> | null
    /**
     * Filter, which AmbulanceStaff to fetch.
     */
    where?: AmbulanceStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AmbulanceStaffs to fetch.
     */
    orderBy?: AmbulanceStaffOrderByWithRelationInput | AmbulanceStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AmbulanceStaffs.
     */
    cursor?: AmbulanceStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AmbulanceStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AmbulanceStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AmbulanceStaffs.
     */
    distinct?: AmbulanceStaffScalarFieldEnum | AmbulanceStaffScalarFieldEnum[]
  }

  /**
   * AmbulanceStaff findFirstOrThrow
   */
  export type AmbulanceStaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbulanceStaff
     */
    select?: AmbulanceStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbulanceStaff
     */
    omit?: AmbulanceStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanceStaffInclude<ExtArgs> | null
    /**
     * Filter, which AmbulanceStaff to fetch.
     */
    where?: AmbulanceStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AmbulanceStaffs to fetch.
     */
    orderBy?: AmbulanceStaffOrderByWithRelationInput | AmbulanceStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AmbulanceStaffs.
     */
    cursor?: AmbulanceStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AmbulanceStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AmbulanceStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AmbulanceStaffs.
     */
    distinct?: AmbulanceStaffScalarFieldEnum | AmbulanceStaffScalarFieldEnum[]
  }

  /**
   * AmbulanceStaff findMany
   */
  export type AmbulanceStaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbulanceStaff
     */
    select?: AmbulanceStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbulanceStaff
     */
    omit?: AmbulanceStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanceStaffInclude<ExtArgs> | null
    /**
     * Filter, which AmbulanceStaffs to fetch.
     */
    where?: AmbulanceStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AmbulanceStaffs to fetch.
     */
    orderBy?: AmbulanceStaffOrderByWithRelationInput | AmbulanceStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AmbulanceStaffs.
     */
    cursor?: AmbulanceStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AmbulanceStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AmbulanceStaffs.
     */
    skip?: number
    distinct?: AmbulanceStaffScalarFieldEnum | AmbulanceStaffScalarFieldEnum[]
  }

  /**
   * AmbulanceStaff create
   */
  export type AmbulanceStaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbulanceStaff
     */
    select?: AmbulanceStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbulanceStaff
     */
    omit?: AmbulanceStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanceStaffInclude<ExtArgs> | null
    /**
     * The data needed to create a AmbulanceStaff.
     */
    data: XOR<AmbulanceStaffCreateInput, AmbulanceStaffUncheckedCreateInput>
  }

  /**
   * AmbulanceStaff createMany
   */
  export type AmbulanceStaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AmbulanceStaffs.
     */
    data: AmbulanceStaffCreateManyInput | AmbulanceStaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AmbulanceStaff createManyAndReturn
   */
  export type AmbulanceStaffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbulanceStaff
     */
    select?: AmbulanceStaffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AmbulanceStaff
     */
    omit?: AmbulanceStaffOmit<ExtArgs> | null
    /**
     * The data used to create many AmbulanceStaffs.
     */
    data: AmbulanceStaffCreateManyInput | AmbulanceStaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AmbulanceStaff update
   */
  export type AmbulanceStaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbulanceStaff
     */
    select?: AmbulanceStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbulanceStaff
     */
    omit?: AmbulanceStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanceStaffInclude<ExtArgs> | null
    /**
     * The data needed to update a AmbulanceStaff.
     */
    data: XOR<AmbulanceStaffUpdateInput, AmbulanceStaffUncheckedUpdateInput>
    /**
     * Choose, which AmbulanceStaff to update.
     */
    where: AmbulanceStaffWhereUniqueInput
  }

  /**
   * AmbulanceStaff updateMany
   */
  export type AmbulanceStaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AmbulanceStaffs.
     */
    data: XOR<AmbulanceStaffUpdateManyMutationInput, AmbulanceStaffUncheckedUpdateManyInput>
    /**
     * Filter which AmbulanceStaffs to update
     */
    where?: AmbulanceStaffWhereInput
    /**
     * Limit how many AmbulanceStaffs to update.
     */
    limit?: number
  }

  /**
   * AmbulanceStaff updateManyAndReturn
   */
  export type AmbulanceStaffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbulanceStaff
     */
    select?: AmbulanceStaffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AmbulanceStaff
     */
    omit?: AmbulanceStaffOmit<ExtArgs> | null
    /**
     * The data used to update AmbulanceStaffs.
     */
    data: XOR<AmbulanceStaffUpdateManyMutationInput, AmbulanceStaffUncheckedUpdateManyInput>
    /**
     * Filter which AmbulanceStaffs to update
     */
    where?: AmbulanceStaffWhereInput
    /**
     * Limit how many AmbulanceStaffs to update.
     */
    limit?: number
  }

  /**
   * AmbulanceStaff upsert
   */
  export type AmbulanceStaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbulanceStaff
     */
    select?: AmbulanceStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbulanceStaff
     */
    omit?: AmbulanceStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanceStaffInclude<ExtArgs> | null
    /**
     * The filter to search for the AmbulanceStaff to update in case it exists.
     */
    where: AmbulanceStaffWhereUniqueInput
    /**
     * In case the AmbulanceStaff found by the `where` argument doesn't exist, create a new AmbulanceStaff with this data.
     */
    create: XOR<AmbulanceStaffCreateInput, AmbulanceStaffUncheckedCreateInput>
    /**
     * In case the AmbulanceStaff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmbulanceStaffUpdateInput, AmbulanceStaffUncheckedUpdateInput>
  }

  /**
   * AmbulanceStaff delete
   */
  export type AmbulanceStaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbulanceStaff
     */
    select?: AmbulanceStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbulanceStaff
     */
    omit?: AmbulanceStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanceStaffInclude<ExtArgs> | null
    /**
     * Filter which AmbulanceStaff to delete.
     */
    where: AmbulanceStaffWhereUniqueInput
  }

  /**
   * AmbulanceStaff deleteMany
   */
  export type AmbulanceStaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AmbulanceStaffs to delete
     */
    where?: AmbulanceStaffWhereInput
    /**
     * Limit how many AmbulanceStaffs to delete.
     */
    limit?: number
  }

  /**
   * AmbulanceStaff.EmergencyRequest
   */
  export type AmbulanceStaff$EmergencyRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
    where?: EmergencyRequestWhereInput
    orderBy?: EmergencyRequestOrderByWithRelationInput | EmergencyRequestOrderByWithRelationInput[]
    cursor?: EmergencyRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmergencyRequestScalarFieldEnum | EmergencyRequestScalarFieldEnum[]
  }

  /**
   * AmbulanceStaff without action
   */
  export type AmbulanceStaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbulanceStaff
     */
    select?: AmbulanceStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmbulanceStaff
     */
    omit?: AmbulanceStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanceStaffInclude<ExtArgs> | null
  }


  /**
   * Model ReservationQRCode
   */

  export type AggregateReservationQRCode = {
    _count: ReservationQRCodeCountAggregateOutputType | null
    _min: ReservationQRCodeMinAggregateOutputType | null
    _max: ReservationQRCodeMaxAggregateOutputType | null
  }

  export type ReservationQRCodeMinAggregateOutputType = {
    id: string | null
    reservationId: string | null
    qrCodeUrl: string | null
    qrCodeContent: string | null
    filePath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationQRCodeMaxAggregateOutputType = {
    id: string | null
    reservationId: string | null
    qrCodeUrl: string | null
    qrCodeContent: string | null
    filePath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationQRCodeCountAggregateOutputType = {
    id: number
    reservationId: number
    qrCodeUrl: number
    qrCodeContent: number
    filePath: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReservationQRCodeMinAggregateInputType = {
    id?: true
    reservationId?: true
    qrCodeUrl?: true
    qrCodeContent?: true
    filePath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationQRCodeMaxAggregateInputType = {
    id?: true
    reservationId?: true
    qrCodeUrl?: true
    qrCodeContent?: true
    filePath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationQRCodeCountAggregateInputType = {
    id?: true
    reservationId?: true
    qrCodeUrl?: true
    qrCodeContent?: true
    filePath?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReservationQRCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservationQRCode to aggregate.
     */
    where?: ReservationQRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationQRCodes to fetch.
     */
    orderBy?: ReservationQRCodeOrderByWithRelationInput | ReservationQRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationQRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationQRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationQRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReservationQRCodes
    **/
    _count?: true | ReservationQRCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationQRCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationQRCodeMaxAggregateInputType
  }

  export type GetReservationQRCodeAggregateType<T extends ReservationQRCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateReservationQRCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservationQRCode[P]>
      : GetScalarType<T[P], AggregateReservationQRCode[P]>
  }




  export type ReservationQRCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationQRCodeWhereInput
    orderBy?: ReservationQRCodeOrderByWithAggregationInput | ReservationQRCodeOrderByWithAggregationInput[]
    by: ReservationQRCodeScalarFieldEnum[] | ReservationQRCodeScalarFieldEnum
    having?: ReservationQRCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationQRCodeCountAggregateInputType | true
    _min?: ReservationQRCodeMinAggregateInputType
    _max?: ReservationQRCodeMaxAggregateInputType
  }

  export type ReservationQRCodeGroupByOutputType = {
    id: string
    reservationId: string
    qrCodeUrl: string
    qrCodeContent: string
    filePath: string
    createdAt: Date
    updatedAt: Date
    _count: ReservationQRCodeCountAggregateOutputType | null
    _min: ReservationQRCodeMinAggregateOutputType | null
    _max: ReservationQRCodeMaxAggregateOutputType | null
  }

  type GetReservationQRCodeGroupByPayload<T extends ReservationQRCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationQRCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationQRCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationQRCodeGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationQRCodeGroupByOutputType[P]>
        }
      >
    >


  export type ReservationQRCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    qrCodeUrl?: boolean
    qrCodeContent?: boolean
    filePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reservationQRCode"]>

  export type ReservationQRCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    qrCodeUrl?: boolean
    qrCodeContent?: boolean
    filePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reservationQRCode"]>

  export type ReservationQRCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    qrCodeUrl?: boolean
    qrCodeContent?: boolean
    filePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reservationQRCode"]>

  export type ReservationQRCodeSelectScalar = {
    id?: boolean
    reservationId?: boolean
    qrCodeUrl?: boolean
    qrCodeContent?: boolean
    filePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReservationQRCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reservationId" | "qrCodeUrl" | "qrCodeContent" | "filePath" | "createdAt" | "updatedAt", ExtArgs["result"]["reservationQRCode"]>

  export type $ReservationQRCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReservationQRCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reservationId: string
      qrCodeUrl: string
      qrCodeContent: string
      filePath: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reservationQRCode"]>
    composites: {}
  }

  type ReservationQRCodeGetPayload<S extends boolean | null | undefined | ReservationQRCodeDefaultArgs> = $Result.GetResult<Prisma.$ReservationQRCodePayload, S>

  type ReservationQRCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationQRCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationQRCodeCountAggregateInputType | true
    }

  export interface ReservationQRCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReservationQRCode'], meta: { name: 'ReservationQRCode' } }
    /**
     * Find zero or one ReservationQRCode that matches the filter.
     * @param {ReservationQRCodeFindUniqueArgs} args - Arguments to find a ReservationQRCode
     * @example
     * // Get one ReservationQRCode
     * const reservationQRCode = await prisma.reservationQRCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationQRCodeFindUniqueArgs>(args: SelectSubset<T, ReservationQRCodeFindUniqueArgs<ExtArgs>>): Prisma__ReservationQRCodeClient<$Result.GetResult<Prisma.$ReservationQRCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReservationQRCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationQRCodeFindUniqueOrThrowArgs} args - Arguments to find a ReservationQRCode
     * @example
     * // Get one ReservationQRCode
     * const reservationQRCode = await prisma.reservationQRCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationQRCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationQRCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationQRCodeClient<$Result.GetResult<Prisma.$ReservationQRCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReservationQRCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationQRCodeFindFirstArgs} args - Arguments to find a ReservationQRCode
     * @example
     * // Get one ReservationQRCode
     * const reservationQRCode = await prisma.reservationQRCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationQRCodeFindFirstArgs>(args?: SelectSubset<T, ReservationQRCodeFindFirstArgs<ExtArgs>>): Prisma__ReservationQRCodeClient<$Result.GetResult<Prisma.$ReservationQRCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReservationQRCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationQRCodeFindFirstOrThrowArgs} args - Arguments to find a ReservationQRCode
     * @example
     * // Get one ReservationQRCode
     * const reservationQRCode = await prisma.reservationQRCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationQRCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationQRCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationQRCodeClient<$Result.GetResult<Prisma.$ReservationQRCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReservationQRCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationQRCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReservationQRCodes
     * const reservationQRCodes = await prisma.reservationQRCode.findMany()
     * 
     * // Get first 10 ReservationQRCodes
     * const reservationQRCodes = await prisma.reservationQRCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationQRCodeWithIdOnly = await prisma.reservationQRCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationQRCodeFindManyArgs>(args?: SelectSubset<T, ReservationQRCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationQRCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReservationQRCode.
     * @param {ReservationQRCodeCreateArgs} args - Arguments to create a ReservationQRCode.
     * @example
     * // Create one ReservationQRCode
     * const ReservationQRCode = await prisma.reservationQRCode.create({
     *   data: {
     *     // ... data to create a ReservationQRCode
     *   }
     * })
     * 
     */
    create<T extends ReservationQRCodeCreateArgs>(args: SelectSubset<T, ReservationQRCodeCreateArgs<ExtArgs>>): Prisma__ReservationQRCodeClient<$Result.GetResult<Prisma.$ReservationQRCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReservationQRCodes.
     * @param {ReservationQRCodeCreateManyArgs} args - Arguments to create many ReservationQRCodes.
     * @example
     * // Create many ReservationQRCodes
     * const reservationQRCode = await prisma.reservationQRCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationQRCodeCreateManyArgs>(args?: SelectSubset<T, ReservationQRCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReservationQRCodes and returns the data saved in the database.
     * @param {ReservationQRCodeCreateManyAndReturnArgs} args - Arguments to create many ReservationQRCodes.
     * @example
     * // Create many ReservationQRCodes
     * const reservationQRCode = await prisma.reservationQRCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReservationQRCodes and only return the `id`
     * const reservationQRCodeWithIdOnly = await prisma.reservationQRCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationQRCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationQRCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationQRCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReservationQRCode.
     * @param {ReservationQRCodeDeleteArgs} args - Arguments to delete one ReservationQRCode.
     * @example
     * // Delete one ReservationQRCode
     * const ReservationQRCode = await prisma.reservationQRCode.delete({
     *   where: {
     *     // ... filter to delete one ReservationQRCode
     *   }
     * })
     * 
     */
    delete<T extends ReservationQRCodeDeleteArgs>(args: SelectSubset<T, ReservationQRCodeDeleteArgs<ExtArgs>>): Prisma__ReservationQRCodeClient<$Result.GetResult<Prisma.$ReservationQRCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReservationQRCode.
     * @param {ReservationQRCodeUpdateArgs} args - Arguments to update one ReservationQRCode.
     * @example
     * // Update one ReservationQRCode
     * const reservationQRCode = await prisma.reservationQRCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationQRCodeUpdateArgs>(args: SelectSubset<T, ReservationQRCodeUpdateArgs<ExtArgs>>): Prisma__ReservationQRCodeClient<$Result.GetResult<Prisma.$ReservationQRCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReservationQRCodes.
     * @param {ReservationQRCodeDeleteManyArgs} args - Arguments to filter ReservationQRCodes to delete.
     * @example
     * // Delete a few ReservationQRCodes
     * const { count } = await prisma.reservationQRCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationQRCodeDeleteManyArgs>(args?: SelectSubset<T, ReservationQRCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReservationQRCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationQRCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReservationQRCodes
     * const reservationQRCode = await prisma.reservationQRCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationQRCodeUpdateManyArgs>(args: SelectSubset<T, ReservationQRCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReservationQRCodes and returns the data updated in the database.
     * @param {ReservationQRCodeUpdateManyAndReturnArgs} args - Arguments to update many ReservationQRCodes.
     * @example
     * // Update many ReservationQRCodes
     * const reservationQRCode = await prisma.reservationQRCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReservationQRCodes and only return the `id`
     * const reservationQRCodeWithIdOnly = await prisma.reservationQRCode.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReservationQRCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservationQRCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationQRCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReservationQRCode.
     * @param {ReservationQRCodeUpsertArgs} args - Arguments to update or create a ReservationQRCode.
     * @example
     * // Update or create a ReservationQRCode
     * const reservationQRCode = await prisma.reservationQRCode.upsert({
     *   create: {
     *     // ... data to create a ReservationQRCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReservationQRCode we want to update
     *   }
     * })
     */
    upsert<T extends ReservationQRCodeUpsertArgs>(args: SelectSubset<T, ReservationQRCodeUpsertArgs<ExtArgs>>): Prisma__ReservationQRCodeClient<$Result.GetResult<Prisma.$ReservationQRCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReservationQRCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationQRCodeCountArgs} args - Arguments to filter ReservationQRCodes to count.
     * @example
     * // Count the number of ReservationQRCodes
     * const count = await prisma.reservationQRCode.count({
     *   where: {
     *     // ... the filter for the ReservationQRCodes we want to count
     *   }
     * })
    **/
    count<T extends ReservationQRCodeCountArgs>(
      args?: Subset<T, ReservationQRCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationQRCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReservationQRCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationQRCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationQRCodeAggregateArgs>(args: Subset<T, ReservationQRCodeAggregateArgs>): Prisma.PrismaPromise<GetReservationQRCodeAggregateType<T>>

    /**
     * Group by ReservationQRCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationQRCodeGroupByArgs} args - Group by arguments.
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
      T extends ReservationQRCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationQRCodeGroupByArgs['orderBy'] }
        : { orderBy?: ReservationQRCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationQRCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationQRCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReservationQRCode model
   */
  readonly fields: ReservationQRCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReservationQRCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationQRCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ReservationQRCode model
   */
  interface ReservationQRCodeFieldRefs {
    readonly id: FieldRef<"ReservationQRCode", 'String'>
    readonly reservationId: FieldRef<"ReservationQRCode", 'String'>
    readonly qrCodeUrl: FieldRef<"ReservationQRCode", 'String'>
    readonly qrCodeContent: FieldRef<"ReservationQRCode", 'String'>
    readonly filePath: FieldRef<"ReservationQRCode", 'String'>
    readonly createdAt: FieldRef<"ReservationQRCode", 'DateTime'>
    readonly updatedAt: FieldRef<"ReservationQRCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReservationQRCode findUnique
   */
  export type ReservationQRCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationQRCode
     */
    select?: ReservationQRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationQRCode
     */
    omit?: ReservationQRCodeOmit<ExtArgs> | null
    /**
     * Filter, which ReservationQRCode to fetch.
     */
    where: ReservationQRCodeWhereUniqueInput
  }

  /**
   * ReservationQRCode findUniqueOrThrow
   */
  export type ReservationQRCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationQRCode
     */
    select?: ReservationQRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationQRCode
     */
    omit?: ReservationQRCodeOmit<ExtArgs> | null
    /**
     * Filter, which ReservationQRCode to fetch.
     */
    where: ReservationQRCodeWhereUniqueInput
  }

  /**
   * ReservationQRCode findFirst
   */
  export type ReservationQRCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationQRCode
     */
    select?: ReservationQRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationQRCode
     */
    omit?: ReservationQRCodeOmit<ExtArgs> | null
    /**
     * Filter, which ReservationQRCode to fetch.
     */
    where?: ReservationQRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationQRCodes to fetch.
     */
    orderBy?: ReservationQRCodeOrderByWithRelationInput | ReservationQRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservationQRCodes.
     */
    cursor?: ReservationQRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationQRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationQRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservationQRCodes.
     */
    distinct?: ReservationQRCodeScalarFieldEnum | ReservationQRCodeScalarFieldEnum[]
  }

  /**
   * ReservationQRCode findFirstOrThrow
   */
  export type ReservationQRCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationQRCode
     */
    select?: ReservationQRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationQRCode
     */
    omit?: ReservationQRCodeOmit<ExtArgs> | null
    /**
     * Filter, which ReservationQRCode to fetch.
     */
    where?: ReservationQRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationQRCodes to fetch.
     */
    orderBy?: ReservationQRCodeOrderByWithRelationInput | ReservationQRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservationQRCodes.
     */
    cursor?: ReservationQRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationQRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationQRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservationQRCodes.
     */
    distinct?: ReservationQRCodeScalarFieldEnum | ReservationQRCodeScalarFieldEnum[]
  }

  /**
   * ReservationQRCode findMany
   */
  export type ReservationQRCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationQRCode
     */
    select?: ReservationQRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationQRCode
     */
    omit?: ReservationQRCodeOmit<ExtArgs> | null
    /**
     * Filter, which ReservationQRCodes to fetch.
     */
    where?: ReservationQRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationQRCodes to fetch.
     */
    orderBy?: ReservationQRCodeOrderByWithRelationInput | ReservationQRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReservationQRCodes.
     */
    cursor?: ReservationQRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationQRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationQRCodes.
     */
    skip?: number
    distinct?: ReservationQRCodeScalarFieldEnum | ReservationQRCodeScalarFieldEnum[]
  }

  /**
   * ReservationQRCode create
   */
  export type ReservationQRCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationQRCode
     */
    select?: ReservationQRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationQRCode
     */
    omit?: ReservationQRCodeOmit<ExtArgs> | null
    /**
     * The data needed to create a ReservationQRCode.
     */
    data: XOR<ReservationQRCodeCreateInput, ReservationQRCodeUncheckedCreateInput>
  }

  /**
   * ReservationQRCode createMany
   */
  export type ReservationQRCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReservationQRCodes.
     */
    data: ReservationQRCodeCreateManyInput | ReservationQRCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReservationQRCode createManyAndReturn
   */
  export type ReservationQRCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationQRCode
     */
    select?: ReservationQRCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationQRCode
     */
    omit?: ReservationQRCodeOmit<ExtArgs> | null
    /**
     * The data used to create many ReservationQRCodes.
     */
    data: ReservationQRCodeCreateManyInput | ReservationQRCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReservationQRCode update
   */
  export type ReservationQRCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationQRCode
     */
    select?: ReservationQRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationQRCode
     */
    omit?: ReservationQRCodeOmit<ExtArgs> | null
    /**
     * The data needed to update a ReservationQRCode.
     */
    data: XOR<ReservationQRCodeUpdateInput, ReservationQRCodeUncheckedUpdateInput>
    /**
     * Choose, which ReservationQRCode to update.
     */
    where: ReservationQRCodeWhereUniqueInput
  }

  /**
   * ReservationQRCode updateMany
   */
  export type ReservationQRCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReservationQRCodes.
     */
    data: XOR<ReservationQRCodeUpdateManyMutationInput, ReservationQRCodeUncheckedUpdateManyInput>
    /**
     * Filter which ReservationQRCodes to update
     */
    where?: ReservationQRCodeWhereInput
    /**
     * Limit how many ReservationQRCodes to update.
     */
    limit?: number
  }

  /**
   * ReservationQRCode updateManyAndReturn
   */
  export type ReservationQRCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationQRCode
     */
    select?: ReservationQRCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationQRCode
     */
    omit?: ReservationQRCodeOmit<ExtArgs> | null
    /**
     * The data used to update ReservationQRCodes.
     */
    data: XOR<ReservationQRCodeUpdateManyMutationInput, ReservationQRCodeUncheckedUpdateManyInput>
    /**
     * Filter which ReservationQRCodes to update
     */
    where?: ReservationQRCodeWhereInput
    /**
     * Limit how many ReservationQRCodes to update.
     */
    limit?: number
  }

  /**
   * ReservationQRCode upsert
   */
  export type ReservationQRCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationQRCode
     */
    select?: ReservationQRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationQRCode
     */
    omit?: ReservationQRCodeOmit<ExtArgs> | null
    /**
     * The filter to search for the ReservationQRCode to update in case it exists.
     */
    where: ReservationQRCodeWhereUniqueInput
    /**
     * In case the ReservationQRCode found by the `where` argument doesn't exist, create a new ReservationQRCode with this data.
     */
    create: XOR<ReservationQRCodeCreateInput, ReservationQRCodeUncheckedCreateInput>
    /**
     * In case the ReservationQRCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationQRCodeUpdateInput, ReservationQRCodeUncheckedUpdateInput>
  }

  /**
   * ReservationQRCode delete
   */
  export type ReservationQRCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationQRCode
     */
    select?: ReservationQRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationQRCode
     */
    omit?: ReservationQRCodeOmit<ExtArgs> | null
    /**
     * Filter which ReservationQRCode to delete.
     */
    where: ReservationQRCodeWhereUniqueInput
  }

  /**
   * ReservationQRCode deleteMany
   */
  export type ReservationQRCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservationQRCodes to delete
     */
    where?: ReservationQRCodeWhereInput
    /**
     * Limit how many ReservationQRCodes to delete.
     */
    limit?: number
  }

  /**
   * ReservationQRCode without action
   */
  export type ReservationQRCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationQRCode
     */
    select?: ReservationQRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationQRCode
     */
    omit?: ReservationQRCodeOmit<ExtArgs> | null
  }


  /**
   * Model HospitalLocation
   */

  export type AggregateHospitalLocation = {
    _count: HospitalLocationCountAggregateOutputType | null
    _avg: HospitalLocationAvgAggregateOutputType | null
    _sum: HospitalLocationSumAggregateOutputType | null
    _min: HospitalLocationMinAggregateOutputType | null
    _max: HospitalLocationMaxAggregateOutputType | null
  }

  export type HospitalLocationAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type HospitalLocationSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type HospitalLocationMinAggregateOutputType = {
    id: string | null
    name: string | null
    latitude: number | null
    longitude: number | null
    address: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HospitalLocationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    latitude: number | null
    longitude: number | null
    address: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HospitalLocationCountAggregateOutputType = {
    id: number
    name: number
    latitude: number
    longitude: number
    address: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HospitalLocationAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type HospitalLocationSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type HospitalLocationMinAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
    address?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HospitalLocationMaxAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
    address?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HospitalLocationCountAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
    address?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HospitalLocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HospitalLocation to aggregate.
     */
    where?: HospitalLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HospitalLocations to fetch.
     */
    orderBy?: HospitalLocationOrderByWithRelationInput | HospitalLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HospitalLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HospitalLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HospitalLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HospitalLocations
    **/
    _count?: true | HospitalLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HospitalLocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HospitalLocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospitalLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospitalLocationMaxAggregateInputType
  }

  export type GetHospitalLocationAggregateType<T extends HospitalLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateHospitalLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospitalLocation[P]>
      : GetScalarType<T[P], AggregateHospitalLocation[P]>
  }




  export type HospitalLocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HospitalLocationWhereInput
    orderBy?: HospitalLocationOrderByWithAggregationInput | HospitalLocationOrderByWithAggregationInput[]
    by: HospitalLocationScalarFieldEnum[] | HospitalLocationScalarFieldEnum
    having?: HospitalLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospitalLocationCountAggregateInputType | true
    _avg?: HospitalLocationAvgAggregateInputType
    _sum?: HospitalLocationSumAggregateInputType
    _min?: HospitalLocationMinAggregateInputType
    _max?: HospitalLocationMaxAggregateInputType
  }

  export type HospitalLocationGroupByOutputType = {
    id: string
    name: string
    latitude: number
    longitude: number
    address: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: HospitalLocationCountAggregateOutputType | null
    _avg: HospitalLocationAvgAggregateOutputType | null
    _sum: HospitalLocationSumAggregateOutputType | null
    _min: HospitalLocationMinAggregateOutputType | null
    _max: HospitalLocationMaxAggregateOutputType | null
  }

  type GetHospitalLocationGroupByPayload<T extends HospitalLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospitalLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HospitalLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HospitalLocationGroupByOutputType[P]>
            : GetScalarType<T[P], HospitalLocationGroupByOutputType[P]>
        }
      >
    >


  export type HospitalLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hospitalLocation"]>

  export type HospitalLocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hospitalLocation"]>

  export type HospitalLocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hospitalLocation"]>

  export type HospitalLocationSelectScalar = {
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HospitalLocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "latitude" | "longitude" | "address" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["hospitalLocation"]>

  export type $HospitalLocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HospitalLocation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      latitude: number
      longitude: number
      address: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hospitalLocation"]>
    composites: {}
  }

  type HospitalLocationGetPayload<S extends boolean | null | undefined | HospitalLocationDefaultArgs> = $Result.GetResult<Prisma.$HospitalLocationPayload, S>

  type HospitalLocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HospitalLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HospitalLocationCountAggregateInputType | true
    }

  export interface HospitalLocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HospitalLocation'], meta: { name: 'HospitalLocation' } }
    /**
     * Find zero or one HospitalLocation that matches the filter.
     * @param {HospitalLocationFindUniqueArgs} args - Arguments to find a HospitalLocation
     * @example
     * // Get one HospitalLocation
     * const hospitalLocation = await prisma.hospitalLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HospitalLocationFindUniqueArgs>(args: SelectSubset<T, HospitalLocationFindUniqueArgs<ExtArgs>>): Prisma__HospitalLocationClient<$Result.GetResult<Prisma.$HospitalLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HospitalLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HospitalLocationFindUniqueOrThrowArgs} args - Arguments to find a HospitalLocation
     * @example
     * // Get one HospitalLocation
     * const hospitalLocation = await prisma.hospitalLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HospitalLocationFindUniqueOrThrowArgs>(args: SelectSubset<T, HospitalLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HospitalLocationClient<$Result.GetResult<Prisma.$HospitalLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HospitalLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalLocationFindFirstArgs} args - Arguments to find a HospitalLocation
     * @example
     * // Get one HospitalLocation
     * const hospitalLocation = await prisma.hospitalLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HospitalLocationFindFirstArgs>(args?: SelectSubset<T, HospitalLocationFindFirstArgs<ExtArgs>>): Prisma__HospitalLocationClient<$Result.GetResult<Prisma.$HospitalLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HospitalLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalLocationFindFirstOrThrowArgs} args - Arguments to find a HospitalLocation
     * @example
     * // Get one HospitalLocation
     * const hospitalLocation = await prisma.hospitalLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HospitalLocationFindFirstOrThrowArgs>(args?: SelectSubset<T, HospitalLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__HospitalLocationClient<$Result.GetResult<Prisma.$HospitalLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HospitalLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HospitalLocations
     * const hospitalLocations = await prisma.hospitalLocation.findMany()
     * 
     * // Get first 10 HospitalLocations
     * const hospitalLocations = await prisma.hospitalLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hospitalLocationWithIdOnly = await prisma.hospitalLocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HospitalLocationFindManyArgs>(args?: SelectSubset<T, HospitalLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HospitalLocation.
     * @param {HospitalLocationCreateArgs} args - Arguments to create a HospitalLocation.
     * @example
     * // Create one HospitalLocation
     * const HospitalLocation = await prisma.hospitalLocation.create({
     *   data: {
     *     // ... data to create a HospitalLocation
     *   }
     * })
     * 
     */
    create<T extends HospitalLocationCreateArgs>(args: SelectSubset<T, HospitalLocationCreateArgs<ExtArgs>>): Prisma__HospitalLocationClient<$Result.GetResult<Prisma.$HospitalLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HospitalLocations.
     * @param {HospitalLocationCreateManyArgs} args - Arguments to create many HospitalLocations.
     * @example
     * // Create many HospitalLocations
     * const hospitalLocation = await prisma.hospitalLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HospitalLocationCreateManyArgs>(args?: SelectSubset<T, HospitalLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HospitalLocations and returns the data saved in the database.
     * @param {HospitalLocationCreateManyAndReturnArgs} args - Arguments to create many HospitalLocations.
     * @example
     * // Create many HospitalLocations
     * const hospitalLocation = await prisma.hospitalLocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HospitalLocations and only return the `id`
     * const hospitalLocationWithIdOnly = await prisma.hospitalLocation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HospitalLocationCreateManyAndReturnArgs>(args?: SelectSubset<T, HospitalLocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalLocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HospitalLocation.
     * @param {HospitalLocationDeleteArgs} args - Arguments to delete one HospitalLocation.
     * @example
     * // Delete one HospitalLocation
     * const HospitalLocation = await prisma.hospitalLocation.delete({
     *   where: {
     *     // ... filter to delete one HospitalLocation
     *   }
     * })
     * 
     */
    delete<T extends HospitalLocationDeleteArgs>(args: SelectSubset<T, HospitalLocationDeleteArgs<ExtArgs>>): Prisma__HospitalLocationClient<$Result.GetResult<Prisma.$HospitalLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HospitalLocation.
     * @param {HospitalLocationUpdateArgs} args - Arguments to update one HospitalLocation.
     * @example
     * // Update one HospitalLocation
     * const hospitalLocation = await prisma.hospitalLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HospitalLocationUpdateArgs>(args: SelectSubset<T, HospitalLocationUpdateArgs<ExtArgs>>): Prisma__HospitalLocationClient<$Result.GetResult<Prisma.$HospitalLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HospitalLocations.
     * @param {HospitalLocationDeleteManyArgs} args - Arguments to filter HospitalLocations to delete.
     * @example
     * // Delete a few HospitalLocations
     * const { count } = await prisma.hospitalLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HospitalLocationDeleteManyArgs>(args?: SelectSubset<T, HospitalLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HospitalLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HospitalLocations
     * const hospitalLocation = await prisma.hospitalLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HospitalLocationUpdateManyArgs>(args: SelectSubset<T, HospitalLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HospitalLocations and returns the data updated in the database.
     * @param {HospitalLocationUpdateManyAndReturnArgs} args - Arguments to update many HospitalLocations.
     * @example
     * // Update many HospitalLocations
     * const hospitalLocation = await prisma.hospitalLocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HospitalLocations and only return the `id`
     * const hospitalLocationWithIdOnly = await prisma.hospitalLocation.updateManyAndReturn({
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
    updateManyAndReturn<T extends HospitalLocationUpdateManyAndReturnArgs>(args: SelectSubset<T, HospitalLocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalLocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HospitalLocation.
     * @param {HospitalLocationUpsertArgs} args - Arguments to update or create a HospitalLocation.
     * @example
     * // Update or create a HospitalLocation
     * const hospitalLocation = await prisma.hospitalLocation.upsert({
     *   create: {
     *     // ... data to create a HospitalLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HospitalLocation we want to update
     *   }
     * })
     */
    upsert<T extends HospitalLocationUpsertArgs>(args: SelectSubset<T, HospitalLocationUpsertArgs<ExtArgs>>): Prisma__HospitalLocationClient<$Result.GetResult<Prisma.$HospitalLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HospitalLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalLocationCountArgs} args - Arguments to filter HospitalLocations to count.
     * @example
     * // Count the number of HospitalLocations
     * const count = await prisma.hospitalLocation.count({
     *   where: {
     *     // ... the filter for the HospitalLocations we want to count
     *   }
     * })
    **/
    count<T extends HospitalLocationCountArgs>(
      args?: Subset<T, HospitalLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospitalLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HospitalLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HospitalLocationAggregateArgs>(args: Subset<T, HospitalLocationAggregateArgs>): Prisma.PrismaPromise<GetHospitalLocationAggregateType<T>>

    /**
     * Group by HospitalLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalLocationGroupByArgs} args - Group by arguments.
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
      T extends HospitalLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HospitalLocationGroupByArgs['orderBy'] }
        : { orderBy?: HospitalLocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HospitalLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HospitalLocation model
   */
  readonly fields: HospitalLocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HospitalLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HospitalLocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the HospitalLocation model
   */
  interface HospitalLocationFieldRefs {
    readonly id: FieldRef<"HospitalLocation", 'String'>
    readonly name: FieldRef<"HospitalLocation", 'String'>
    readonly latitude: FieldRef<"HospitalLocation", 'Float'>
    readonly longitude: FieldRef<"HospitalLocation", 'Float'>
    readonly address: FieldRef<"HospitalLocation", 'String'>
    readonly isActive: FieldRef<"HospitalLocation", 'Boolean'>
    readonly createdAt: FieldRef<"HospitalLocation", 'DateTime'>
    readonly updatedAt: FieldRef<"HospitalLocation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HospitalLocation findUnique
   */
  export type HospitalLocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalLocation
     */
    select?: HospitalLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalLocation
     */
    omit?: HospitalLocationOmit<ExtArgs> | null
    /**
     * Filter, which HospitalLocation to fetch.
     */
    where: HospitalLocationWhereUniqueInput
  }

  /**
   * HospitalLocation findUniqueOrThrow
   */
  export type HospitalLocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalLocation
     */
    select?: HospitalLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalLocation
     */
    omit?: HospitalLocationOmit<ExtArgs> | null
    /**
     * Filter, which HospitalLocation to fetch.
     */
    where: HospitalLocationWhereUniqueInput
  }

  /**
   * HospitalLocation findFirst
   */
  export type HospitalLocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalLocation
     */
    select?: HospitalLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalLocation
     */
    omit?: HospitalLocationOmit<ExtArgs> | null
    /**
     * Filter, which HospitalLocation to fetch.
     */
    where?: HospitalLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HospitalLocations to fetch.
     */
    orderBy?: HospitalLocationOrderByWithRelationInput | HospitalLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HospitalLocations.
     */
    cursor?: HospitalLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HospitalLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HospitalLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HospitalLocations.
     */
    distinct?: HospitalLocationScalarFieldEnum | HospitalLocationScalarFieldEnum[]
  }

  /**
   * HospitalLocation findFirstOrThrow
   */
  export type HospitalLocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalLocation
     */
    select?: HospitalLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalLocation
     */
    omit?: HospitalLocationOmit<ExtArgs> | null
    /**
     * Filter, which HospitalLocation to fetch.
     */
    where?: HospitalLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HospitalLocations to fetch.
     */
    orderBy?: HospitalLocationOrderByWithRelationInput | HospitalLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HospitalLocations.
     */
    cursor?: HospitalLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HospitalLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HospitalLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HospitalLocations.
     */
    distinct?: HospitalLocationScalarFieldEnum | HospitalLocationScalarFieldEnum[]
  }

  /**
   * HospitalLocation findMany
   */
  export type HospitalLocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalLocation
     */
    select?: HospitalLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalLocation
     */
    omit?: HospitalLocationOmit<ExtArgs> | null
    /**
     * Filter, which HospitalLocations to fetch.
     */
    where?: HospitalLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HospitalLocations to fetch.
     */
    orderBy?: HospitalLocationOrderByWithRelationInput | HospitalLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HospitalLocations.
     */
    cursor?: HospitalLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HospitalLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HospitalLocations.
     */
    skip?: number
    distinct?: HospitalLocationScalarFieldEnum | HospitalLocationScalarFieldEnum[]
  }

  /**
   * HospitalLocation create
   */
  export type HospitalLocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalLocation
     */
    select?: HospitalLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalLocation
     */
    omit?: HospitalLocationOmit<ExtArgs> | null
    /**
     * The data needed to create a HospitalLocation.
     */
    data: XOR<HospitalLocationCreateInput, HospitalLocationUncheckedCreateInput>
  }

  /**
   * HospitalLocation createMany
   */
  export type HospitalLocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HospitalLocations.
     */
    data: HospitalLocationCreateManyInput | HospitalLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HospitalLocation createManyAndReturn
   */
  export type HospitalLocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalLocation
     */
    select?: HospitalLocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalLocation
     */
    omit?: HospitalLocationOmit<ExtArgs> | null
    /**
     * The data used to create many HospitalLocations.
     */
    data: HospitalLocationCreateManyInput | HospitalLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HospitalLocation update
   */
  export type HospitalLocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalLocation
     */
    select?: HospitalLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalLocation
     */
    omit?: HospitalLocationOmit<ExtArgs> | null
    /**
     * The data needed to update a HospitalLocation.
     */
    data: XOR<HospitalLocationUpdateInput, HospitalLocationUncheckedUpdateInput>
    /**
     * Choose, which HospitalLocation to update.
     */
    where: HospitalLocationWhereUniqueInput
  }

  /**
   * HospitalLocation updateMany
   */
  export type HospitalLocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HospitalLocations.
     */
    data: XOR<HospitalLocationUpdateManyMutationInput, HospitalLocationUncheckedUpdateManyInput>
    /**
     * Filter which HospitalLocations to update
     */
    where?: HospitalLocationWhereInput
    /**
     * Limit how many HospitalLocations to update.
     */
    limit?: number
  }

  /**
   * HospitalLocation updateManyAndReturn
   */
  export type HospitalLocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalLocation
     */
    select?: HospitalLocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalLocation
     */
    omit?: HospitalLocationOmit<ExtArgs> | null
    /**
     * The data used to update HospitalLocations.
     */
    data: XOR<HospitalLocationUpdateManyMutationInput, HospitalLocationUncheckedUpdateManyInput>
    /**
     * Filter which HospitalLocations to update
     */
    where?: HospitalLocationWhereInput
    /**
     * Limit how many HospitalLocations to update.
     */
    limit?: number
  }

  /**
   * HospitalLocation upsert
   */
  export type HospitalLocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalLocation
     */
    select?: HospitalLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalLocation
     */
    omit?: HospitalLocationOmit<ExtArgs> | null
    /**
     * The filter to search for the HospitalLocation to update in case it exists.
     */
    where: HospitalLocationWhereUniqueInput
    /**
     * In case the HospitalLocation found by the `where` argument doesn't exist, create a new HospitalLocation with this data.
     */
    create: XOR<HospitalLocationCreateInput, HospitalLocationUncheckedCreateInput>
    /**
     * In case the HospitalLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HospitalLocationUpdateInput, HospitalLocationUncheckedUpdateInput>
  }

  /**
   * HospitalLocation delete
   */
  export type HospitalLocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalLocation
     */
    select?: HospitalLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalLocation
     */
    omit?: HospitalLocationOmit<ExtArgs> | null
    /**
     * Filter which HospitalLocation to delete.
     */
    where: HospitalLocationWhereUniqueInput
  }

  /**
   * HospitalLocation deleteMany
   */
  export type HospitalLocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HospitalLocations to delete
     */
    where?: HospitalLocationWhereInput
    /**
     * Limit how many HospitalLocations to delete.
     */
    limit?: number
  }

  /**
   * HospitalLocation without action
   */
  export type HospitalLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalLocation
     */
    select?: HospitalLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalLocation
     */
    omit?: HospitalLocationOmit<ExtArgs> | null
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


  export const EmergencyRequestScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    location: 'location',
    note: 'note',
    status: 'status',
    assignedToId: 'assignedToId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmergencyRequestScalarFieldEnum = (typeof EmergencyRequestScalarFieldEnum)[keyof typeof EmergencyRequestScalarFieldEnum]


  export const EmergencyHistoryScalarFieldEnum: {
    id: 'id',
    emergencyRequestId: 'emergencyRequestId',
    ambulanceStaffLocation: 'ambulanceStaffLocation',
    status: 'status',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type EmergencyHistoryScalarFieldEnum = (typeof EmergencyHistoryScalarFieldEnum)[keyof typeof EmergencyHistoryScalarFieldEnum]


  export const AmbulanceStaffScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AmbulanceStaffScalarFieldEnum = (typeof AmbulanceStaffScalarFieldEnum)[keyof typeof AmbulanceStaffScalarFieldEnum]


  export const ReservationQRCodeScalarFieldEnum: {
    id: 'id',
    reservationId: 'reservationId',
    qrCodeUrl: 'qrCodeUrl',
    qrCodeContent: 'qrCodeContent',
    filePath: 'filePath',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReservationQRCodeScalarFieldEnum = (typeof ReservationQRCodeScalarFieldEnum)[keyof typeof ReservationQRCodeScalarFieldEnum]


  export const HospitalLocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    latitude: 'latitude',
    longitude: 'longitude',
    address: 'address',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HospitalLocationScalarFieldEnum = (typeof HospitalLocationScalarFieldEnum)[keyof typeof HospitalLocationScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'EmergencyStatus'
   */
  export type EnumEmergencyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmergencyStatus'>
    


  /**
   * Reference to a field of type 'EmergencyStatus[]'
   */
  export type ListEnumEmergencyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmergencyStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type EmergencyRequestWhereInput = {
    AND?: EmergencyRequestWhereInput | EmergencyRequestWhereInput[]
    OR?: EmergencyRequestWhereInput[]
    NOT?: EmergencyRequestWhereInput | EmergencyRequestWhereInput[]
    id?: StringFilter<"EmergencyRequest"> | string
    patientId?: StringFilter<"EmergencyRequest"> | string
    location?: StringFilter<"EmergencyRequest"> | string
    note?: StringNullableFilter<"EmergencyRequest"> | string | null
    status?: EnumEmergencyStatusFilter<"EmergencyRequest"> | $Enums.EmergencyStatus
    assignedToId?: StringNullableFilter<"EmergencyRequest"> | string | null
    createdAt?: DateTimeFilter<"EmergencyRequest"> | Date | string
    updatedAt?: DateTimeFilter<"EmergencyRequest"> | Date | string
    assignedTo?: XOR<AmbulanceStaffNullableScalarRelationFilter, AmbulanceStaffWhereInput> | null
    histories?: EmergencyHistoryListRelationFilter
  }

  export type EmergencyRequestOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    location?: SortOrder
    note?: SortOrderInput | SortOrder
    status?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignedTo?: AmbulanceStaffOrderByWithRelationInput
    histories?: EmergencyHistoryOrderByRelationAggregateInput
  }

  export type EmergencyRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmergencyRequestWhereInput | EmergencyRequestWhereInput[]
    OR?: EmergencyRequestWhereInput[]
    NOT?: EmergencyRequestWhereInput | EmergencyRequestWhereInput[]
    patientId?: StringFilter<"EmergencyRequest"> | string
    location?: StringFilter<"EmergencyRequest"> | string
    note?: StringNullableFilter<"EmergencyRequest"> | string | null
    status?: EnumEmergencyStatusFilter<"EmergencyRequest"> | $Enums.EmergencyStatus
    assignedToId?: StringNullableFilter<"EmergencyRequest"> | string | null
    createdAt?: DateTimeFilter<"EmergencyRequest"> | Date | string
    updatedAt?: DateTimeFilter<"EmergencyRequest"> | Date | string
    assignedTo?: XOR<AmbulanceStaffNullableScalarRelationFilter, AmbulanceStaffWhereInput> | null
    histories?: EmergencyHistoryListRelationFilter
  }, "id">

  export type EmergencyRequestOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    location?: SortOrder
    note?: SortOrderInput | SortOrder
    status?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmergencyRequestCountOrderByAggregateInput
    _max?: EmergencyRequestMaxOrderByAggregateInput
    _min?: EmergencyRequestMinOrderByAggregateInput
  }

  export type EmergencyRequestScalarWhereWithAggregatesInput = {
    AND?: EmergencyRequestScalarWhereWithAggregatesInput | EmergencyRequestScalarWhereWithAggregatesInput[]
    OR?: EmergencyRequestScalarWhereWithAggregatesInput[]
    NOT?: EmergencyRequestScalarWhereWithAggregatesInput | EmergencyRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmergencyRequest"> | string
    patientId?: StringWithAggregatesFilter<"EmergencyRequest"> | string
    location?: StringWithAggregatesFilter<"EmergencyRequest"> | string
    note?: StringNullableWithAggregatesFilter<"EmergencyRequest"> | string | null
    status?: EnumEmergencyStatusWithAggregatesFilter<"EmergencyRequest"> | $Enums.EmergencyStatus
    assignedToId?: StringNullableWithAggregatesFilter<"EmergencyRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmergencyRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmergencyRequest"> | Date | string
  }

  export type EmergencyHistoryWhereInput = {
    AND?: EmergencyHistoryWhereInput | EmergencyHistoryWhereInput[]
    OR?: EmergencyHistoryWhereInput[]
    NOT?: EmergencyHistoryWhereInput | EmergencyHistoryWhereInput[]
    id?: StringFilter<"EmergencyHistory"> | string
    emergencyRequestId?: StringFilter<"EmergencyHistory"> | string
    ambulanceStaffLocation?: StringNullableFilter<"EmergencyHistory"> | string | null
    status?: EnumEmergencyStatusFilter<"EmergencyHistory"> | $Enums.EmergencyStatus
    note?: StringNullableFilter<"EmergencyHistory"> | string | null
    createdAt?: DateTimeFilter<"EmergencyHistory"> | Date | string
    emergencyRequest?: XOR<EmergencyRequestScalarRelationFilter, EmergencyRequestWhereInput>
  }

  export type EmergencyHistoryOrderByWithRelationInput = {
    id?: SortOrder
    emergencyRequestId?: SortOrder
    ambulanceStaffLocation?: SortOrderInput | SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    emergencyRequest?: EmergencyRequestOrderByWithRelationInput
  }

  export type EmergencyHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmergencyHistoryWhereInput | EmergencyHistoryWhereInput[]
    OR?: EmergencyHistoryWhereInput[]
    NOT?: EmergencyHistoryWhereInput | EmergencyHistoryWhereInput[]
    emergencyRequestId?: StringFilter<"EmergencyHistory"> | string
    ambulanceStaffLocation?: StringNullableFilter<"EmergencyHistory"> | string | null
    status?: EnumEmergencyStatusFilter<"EmergencyHistory"> | $Enums.EmergencyStatus
    note?: StringNullableFilter<"EmergencyHistory"> | string | null
    createdAt?: DateTimeFilter<"EmergencyHistory"> | Date | string
    emergencyRequest?: XOR<EmergencyRequestScalarRelationFilter, EmergencyRequestWhereInput>
  }, "id">

  export type EmergencyHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    emergencyRequestId?: SortOrder
    ambulanceStaffLocation?: SortOrderInput | SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EmergencyHistoryCountOrderByAggregateInput
    _max?: EmergencyHistoryMaxOrderByAggregateInput
    _min?: EmergencyHistoryMinOrderByAggregateInput
  }

  export type EmergencyHistoryScalarWhereWithAggregatesInput = {
    AND?: EmergencyHistoryScalarWhereWithAggregatesInput | EmergencyHistoryScalarWhereWithAggregatesInput[]
    OR?: EmergencyHistoryScalarWhereWithAggregatesInput[]
    NOT?: EmergencyHistoryScalarWhereWithAggregatesInput | EmergencyHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmergencyHistory"> | string
    emergencyRequestId?: StringWithAggregatesFilter<"EmergencyHistory"> | string
    ambulanceStaffLocation?: StringNullableWithAggregatesFilter<"EmergencyHistory"> | string | null
    status?: EnumEmergencyStatusWithAggregatesFilter<"EmergencyHistory"> | $Enums.EmergencyStatus
    note?: StringNullableWithAggregatesFilter<"EmergencyHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmergencyHistory"> | Date | string
  }

  export type AmbulanceStaffWhereInput = {
    AND?: AmbulanceStaffWhereInput | AmbulanceStaffWhereInput[]
    OR?: AmbulanceStaffWhereInput[]
    NOT?: AmbulanceStaffWhereInput | AmbulanceStaffWhereInput[]
    id?: StringFilter<"AmbulanceStaff"> | string
    name?: StringFilter<"AmbulanceStaff"> | string
    phone?: StringFilter<"AmbulanceStaff"> | string
    email?: StringFilter<"AmbulanceStaff"> | string
    createdAt?: DateTimeFilter<"AmbulanceStaff"> | Date | string
    updatedAt?: DateTimeFilter<"AmbulanceStaff"> | Date | string
    EmergencyRequest?: EmergencyRequestListRelationFilter
  }

  export type AmbulanceStaffOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    EmergencyRequest?: EmergencyRequestOrderByRelationAggregateInput
  }

  export type AmbulanceStaffWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AmbulanceStaffWhereInput | AmbulanceStaffWhereInput[]
    OR?: AmbulanceStaffWhereInput[]
    NOT?: AmbulanceStaffWhereInput | AmbulanceStaffWhereInput[]
    name?: StringFilter<"AmbulanceStaff"> | string
    phone?: StringFilter<"AmbulanceStaff"> | string
    email?: StringFilter<"AmbulanceStaff"> | string
    createdAt?: DateTimeFilter<"AmbulanceStaff"> | Date | string
    updatedAt?: DateTimeFilter<"AmbulanceStaff"> | Date | string
    EmergencyRequest?: EmergencyRequestListRelationFilter
  }, "id">

  export type AmbulanceStaffOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AmbulanceStaffCountOrderByAggregateInput
    _max?: AmbulanceStaffMaxOrderByAggregateInput
    _min?: AmbulanceStaffMinOrderByAggregateInput
  }

  export type AmbulanceStaffScalarWhereWithAggregatesInput = {
    AND?: AmbulanceStaffScalarWhereWithAggregatesInput | AmbulanceStaffScalarWhereWithAggregatesInput[]
    OR?: AmbulanceStaffScalarWhereWithAggregatesInput[]
    NOT?: AmbulanceStaffScalarWhereWithAggregatesInput | AmbulanceStaffScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AmbulanceStaff"> | string
    name?: StringWithAggregatesFilter<"AmbulanceStaff"> | string
    phone?: StringWithAggregatesFilter<"AmbulanceStaff"> | string
    email?: StringWithAggregatesFilter<"AmbulanceStaff"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AmbulanceStaff"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AmbulanceStaff"> | Date | string
  }

  export type ReservationQRCodeWhereInput = {
    AND?: ReservationQRCodeWhereInput | ReservationQRCodeWhereInput[]
    OR?: ReservationQRCodeWhereInput[]
    NOT?: ReservationQRCodeWhereInput | ReservationQRCodeWhereInput[]
    id?: StringFilter<"ReservationQRCode"> | string
    reservationId?: StringFilter<"ReservationQRCode"> | string
    qrCodeUrl?: StringFilter<"ReservationQRCode"> | string
    qrCodeContent?: StringFilter<"ReservationQRCode"> | string
    filePath?: StringFilter<"ReservationQRCode"> | string
    createdAt?: DateTimeFilter<"ReservationQRCode"> | Date | string
    updatedAt?: DateTimeFilter<"ReservationQRCode"> | Date | string
  }

  export type ReservationQRCodeOrderByWithRelationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    qrCodeUrl?: SortOrder
    qrCodeContent?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationQRCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reservationId?: string
    AND?: ReservationQRCodeWhereInput | ReservationQRCodeWhereInput[]
    OR?: ReservationQRCodeWhereInput[]
    NOT?: ReservationQRCodeWhereInput | ReservationQRCodeWhereInput[]
    qrCodeUrl?: StringFilter<"ReservationQRCode"> | string
    qrCodeContent?: StringFilter<"ReservationQRCode"> | string
    filePath?: StringFilter<"ReservationQRCode"> | string
    createdAt?: DateTimeFilter<"ReservationQRCode"> | Date | string
    updatedAt?: DateTimeFilter<"ReservationQRCode"> | Date | string
  }, "id" | "reservationId">

  export type ReservationQRCodeOrderByWithAggregationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    qrCodeUrl?: SortOrder
    qrCodeContent?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReservationQRCodeCountOrderByAggregateInput
    _max?: ReservationQRCodeMaxOrderByAggregateInput
    _min?: ReservationQRCodeMinOrderByAggregateInput
  }

  export type ReservationQRCodeScalarWhereWithAggregatesInput = {
    AND?: ReservationQRCodeScalarWhereWithAggregatesInput | ReservationQRCodeScalarWhereWithAggregatesInput[]
    OR?: ReservationQRCodeScalarWhereWithAggregatesInput[]
    NOT?: ReservationQRCodeScalarWhereWithAggregatesInput | ReservationQRCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReservationQRCode"> | string
    reservationId?: StringWithAggregatesFilter<"ReservationQRCode"> | string
    qrCodeUrl?: StringWithAggregatesFilter<"ReservationQRCode"> | string
    qrCodeContent?: StringWithAggregatesFilter<"ReservationQRCode"> | string
    filePath?: StringWithAggregatesFilter<"ReservationQRCode"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ReservationQRCode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReservationQRCode"> | Date | string
  }

  export type HospitalLocationWhereInput = {
    AND?: HospitalLocationWhereInput | HospitalLocationWhereInput[]
    OR?: HospitalLocationWhereInput[]
    NOT?: HospitalLocationWhereInput | HospitalLocationWhereInput[]
    id?: StringFilter<"HospitalLocation"> | string
    name?: StringFilter<"HospitalLocation"> | string
    latitude?: FloatFilter<"HospitalLocation"> | number
    longitude?: FloatFilter<"HospitalLocation"> | number
    address?: StringFilter<"HospitalLocation"> | string
    isActive?: BoolFilter<"HospitalLocation"> | boolean
    createdAt?: DateTimeFilter<"HospitalLocation"> | Date | string
    updatedAt?: DateTimeFilter<"HospitalLocation"> | Date | string
  }

  export type HospitalLocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HospitalLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HospitalLocationWhereInput | HospitalLocationWhereInput[]
    OR?: HospitalLocationWhereInput[]
    NOT?: HospitalLocationWhereInput | HospitalLocationWhereInput[]
    name?: StringFilter<"HospitalLocation"> | string
    latitude?: FloatFilter<"HospitalLocation"> | number
    longitude?: FloatFilter<"HospitalLocation"> | number
    address?: StringFilter<"HospitalLocation"> | string
    isActive?: BoolFilter<"HospitalLocation"> | boolean
    createdAt?: DateTimeFilter<"HospitalLocation"> | Date | string
    updatedAt?: DateTimeFilter<"HospitalLocation"> | Date | string
  }, "id">

  export type HospitalLocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HospitalLocationCountOrderByAggregateInput
    _avg?: HospitalLocationAvgOrderByAggregateInput
    _max?: HospitalLocationMaxOrderByAggregateInput
    _min?: HospitalLocationMinOrderByAggregateInput
    _sum?: HospitalLocationSumOrderByAggregateInput
  }

  export type HospitalLocationScalarWhereWithAggregatesInput = {
    AND?: HospitalLocationScalarWhereWithAggregatesInput | HospitalLocationScalarWhereWithAggregatesInput[]
    OR?: HospitalLocationScalarWhereWithAggregatesInput[]
    NOT?: HospitalLocationScalarWhereWithAggregatesInput | HospitalLocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HospitalLocation"> | string
    name?: StringWithAggregatesFilter<"HospitalLocation"> | string
    latitude?: FloatWithAggregatesFilter<"HospitalLocation"> | number
    longitude?: FloatWithAggregatesFilter<"HospitalLocation"> | number
    address?: StringWithAggregatesFilter<"HospitalLocation"> | string
    isActive?: BoolWithAggregatesFilter<"HospitalLocation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"HospitalLocation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HospitalLocation"> | Date | string
  }

  export type EmergencyRequestCreateInput = {
    id?: string
    patientId: string
    location: string
    note?: string | null
    status?: $Enums.EmergencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: AmbulanceStaffCreateNestedOneWithoutEmergencyRequestInput
    histories?: EmergencyHistoryCreateNestedManyWithoutEmergencyRequestInput
  }

  export type EmergencyRequestUncheckedCreateInput = {
    id?: string
    patientId: string
    location: string
    note?: string | null
    status?: $Enums.EmergencyStatus
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    histories?: EmergencyHistoryUncheckedCreateNestedManyWithoutEmergencyRequestInput
  }

  export type EmergencyRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: AmbulanceStaffUpdateOneWithoutEmergencyRequestNestedInput
    histories?: EmergencyHistoryUpdateManyWithoutEmergencyRequestNestedInput
  }

  export type EmergencyRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    histories?: EmergencyHistoryUncheckedUpdateManyWithoutEmergencyRequestNestedInput
  }

  export type EmergencyRequestCreateManyInput = {
    id?: string
    patientId: string
    location: string
    note?: string | null
    status?: $Enums.EmergencyStatus
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmergencyRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyHistoryCreateInput = {
    id?: string
    ambulanceStaffLocation?: string | null
    status: $Enums.EmergencyStatus
    note?: string | null
    createdAt?: Date | string
    emergencyRequest: EmergencyRequestCreateNestedOneWithoutHistoriesInput
  }

  export type EmergencyHistoryUncheckedCreateInput = {
    id?: string
    emergencyRequestId: string
    ambulanceStaffLocation?: string | null
    status: $Enums.EmergencyStatus
    note?: string | null
    createdAt?: Date | string
  }

  export type EmergencyHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ambulanceStaffLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencyRequest?: EmergencyRequestUpdateOneRequiredWithoutHistoriesNestedInput
  }

  export type EmergencyHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emergencyRequestId?: StringFieldUpdateOperationsInput | string
    ambulanceStaffLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyHistoryCreateManyInput = {
    id?: string
    emergencyRequestId: string
    ambulanceStaffLocation?: string | null
    status: $Enums.EmergencyStatus
    note?: string | null
    createdAt?: Date | string
  }

  export type EmergencyHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ambulanceStaffLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    emergencyRequestId?: StringFieldUpdateOperationsInput | string
    ambulanceStaffLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmbulanceStaffCreateInput = {
    id?: string
    name: string
    phone: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    EmergencyRequest?: EmergencyRequestCreateNestedManyWithoutAssignedToInput
  }

  export type AmbulanceStaffUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    EmergencyRequest?: EmergencyRequestUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type AmbulanceStaffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmergencyRequest?: EmergencyRequestUpdateManyWithoutAssignedToNestedInput
  }

  export type AmbulanceStaffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmergencyRequest?: EmergencyRequestUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type AmbulanceStaffCreateManyInput = {
    id?: string
    name: string
    phone: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AmbulanceStaffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmbulanceStaffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationQRCodeCreateInput = {
    id?: string
    reservationId: string
    qrCodeUrl: string
    qrCodeContent: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationQRCodeUncheckedCreateInput = {
    id?: string
    reservationId: string
    qrCodeUrl: string
    qrCodeContent: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationQRCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    qrCodeContent?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationQRCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    qrCodeContent?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationQRCodeCreateManyInput = {
    id?: string
    reservationId: string
    qrCodeUrl: string
    qrCodeContent: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationQRCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    qrCodeContent?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationQRCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    qrCodeContent?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalLocationCreateInput = {
    id?: string
    name: string
    latitude: number
    longitude: number
    address: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HospitalLocationUncheckedCreateInput = {
    id?: string
    name: string
    latitude: number
    longitude: number
    address: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HospitalLocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalLocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalLocationCreateManyInput = {
    id?: string
    name: string
    latitude: number
    longitude: number
    address: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HospitalLocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalLocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumEmergencyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmergencyStatus | EnumEmergencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmergencyStatusFilter<$PrismaModel> | $Enums.EmergencyStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AmbulanceStaffNullableScalarRelationFilter = {
    is?: AmbulanceStaffWhereInput | null
    isNot?: AmbulanceStaffWhereInput | null
  }

  export type EmergencyHistoryListRelationFilter = {
    every?: EmergencyHistoryWhereInput
    some?: EmergencyHistoryWhereInput
    none?: EmergencyHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmergencyHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmergencyRequestCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    location?: SortOrder
    note?: SortOrder
    status?: SortOrder
    assignedToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmergencyRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    location?: SortOrder
    note?: SortOrder
    status?: SortOrder
    assignedToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmergencyRequestMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    location?: SortOrder
    note?: SortOrder
    status?: SortOrder
    assignedToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumEmergencyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmergencyStatus | EnumEmergencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmergencyStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmergencyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmergencyStatusFilter<$PrismaModel>
    _max?: NestedEnumEmergencyStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EmergencyRequestScalarRelationFilter = {
    is?: EmergencyRequestWhereInput
    isNot?: EmergencyRequestWhereInput
  }

  export type EmergencyHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    emergencyRequestId?: SortOrder
    ambulanceStaffLocation?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type EmergencyHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    emergencyRequestId?: SortOrder
    ambulanceStaffLocation?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type EmergencyHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    emergencyRequestId?: SortOrder
    ambulanceStaffLocation?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type EmergencyRequestListRelationFilter = {
    every?: EmergencyRequestWhereInput
    some?: EmergencyRequestWhereInput
    none?: EmergencyRequestWhereInput
  }

  export type EmergencyRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AmbulanceStaffCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AmbulanceStaffMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AmbulanceStaffMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationQRCodeCountOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    qrCodeUrl?: SortOrder
    qrCodeContent?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationQRCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    qrCodeUrl?: SortOrder
    qrCodeContent?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationQRCodeMinOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    qrCodeUrl?: SortOrder
    qrCodeContent?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type HospitalLocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HospitalLocationAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type HospitalLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HospitalLocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HospitalLocationSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AmbulanceStaffCreateNestedOneWithoutEmergencyRequestInput = {
    create?: XOR<AmbulanceStaffCreateWithoutEmergencyRequestInput, AmbulanceStaffUncheckedCreateWithoutEmergencyRequestInput>
    connectOrCreate?: AmbulanceStaffCreateOrConnectWithoutEmergencyRequestInput
    connect?: AmbulanceStaffWhereUniqueInput
  }

  export type EmergencyHistoryCreateNestedManyWithoutEmergencyRequestInput = {
    create?: XOR<EmergencyHistoryCreateWithoutEmergencyRequestInput, EmergencyHistoryUncheckedCreateWithoutEmergencyRequestInput> | EmergencyHistoryCreateWithoutEmergencyRequestInput[] | EmergencyHistoryUncheckedCreateWithoutEmergencyRequestInput[]
    connectOrCreate?: EmergencyHistoryCreateOrConnectWithoutEmergencyRequestInput | EmergencyHistoryCreateOrConnectWithoutEmergencyRequestInput[]
    createMany?: EmergencyHistoryCreateManyEmergencyRequestInputEnvelope
    connect?: EmergencyHistoryWhereUniqueInput | EmergencyHistoryWhereUniqueInput[]
  }

  export type EmergencyHistoryUncheckedCreateNestedManyWithoutEmergencyRequestInput = {
    create?: XOR<EmergencyHistoryCreateWithoutEmergencyRequestInput, EmergencyHistoryUncheckedCreateWithoutEmergencyRequestInput> | EmergencyHistoryCreateWithoutEmergencyRequestInput[] | EmergencyHistoryUncheckedCreateWithoutEmergencyRequestInput[]
    connectOrCreate?: EmergencyHistoryCreateOrConnectWithoutEmergencyRequestInput | EmergencyHistoryCreateOrConnectWithoutEmergencyRequestInput[]
    createMany?: EmergencyHistoryCreateManyEmergencyRequestInputEnvelope
    connect?: EmergencyHistoryWhereUniqueInput | EmergencyHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumEmergencyStatusFieldUpdateOperationsInput = {
    set?: $Enums.EmergencyStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AmbulanceStaffUpdateOneWithoutEmergencyRequestNestedInput = {
    create?: XOR<AmbulanceStaffCreateWithoutEmergencyRequestInput, AmbulanceStaffUncheckedCreateWithoutEmergencyRequestInput>
    connectOrCreate?: AmbulanceStaffCreateOrConnectWithoutEmergencyRequestInput
    upsert?: AmbulanceStaffUpsertWithoutEmergencyRequestInput
    disconnect?: AmbulanceStaffWhereInput | boolean
    delete?: AmbulanceStaffWhereInput | boolean
    connect?: AmbulanceStaffWhereUniqueInput
    update?: XOR<XOR<AmbulanceStaffUpdateToOneWithWhereWithoutEmergencyRequestInput, AmbulanceStaffUpdateWithoutEmergencyRequestInput>, AmbulanceStaffUncheckedUpdateWithoutEmergencyRequestInput>
  }

  export type EmergencyHistoryUpdateManyWithoutEmergencyRequestNestedInput = {
    create?: XOR<EmergencyHistoryCreateWithoutEmergencyRequestInput, EmergencyHistoryUncheckedCreateWithoutEmergencyRequestInput> | EmergencyHistoryCreateWithoutEmergencyRequestInput[] | EmergencyHistoryUncheckedCreateWithoutEmergencyRequestInput[]
    connectOrCreate?: EmergencyHistoryCreateOrConnectWithoutEmergencyRequestInput | EmergencyHistoryCreateOrConnectWithoutEmergencyRequestInput[]
    upsert?: EmergencyHistoryUpsertWithWhereUniqueWithoutEmergencyRequestInput | EmergencyHistoryUpsertWithWhereUniqueWithoutEmergencyRequestInput[]
    createMany?: EmergencyHistoryCreateManyEmergencyRequestInputEnvelope
    set?: EmergencyHistoryWhereUniqueInput | EmergencyHistoryWhereUniqueInput[]
    disconnect?: EmergencyHistoryWhereUniqueInput | EmergencyHistoryWhereUniqueInput[]
    delete?: EmergencyHistoryWhereUniqueInput | EmergencyHistoryWhereUniqueInput[]
    connect?: EmergencyHistoryWhereUniqueInput | EmergencyHistoryWhereUniqueInput[]
    update?: EmergencyHistoryUpdateWithWhereUniqueWithoutEmergencyRequestInput | EmergencyHistoryUpdateWithWhereUniqueWithoutEmergencyRequestInput[]
    updateMany?: EmergencyHistoryUpdateManyWithWhereWithoutEmergencyRequestInput | EmergencyHistoryUpdateManyWithWhereWithoutEmergencyRequestInput[]
    deleteMany?: EmergencyHistoryScalarWhereInput | EmergencyHistoryScalarWhereInput[]
  }

  export type EmergencyHistoryUncheckedUpdateManyWithoutEmergencyRequestNestedInput = {
    create?: XOR<EmergencyHistoryCreateWithoutEmergencyRequestInput, EmergencyHistoryUncheckedCreateWithoutEmergencyRequestInput> | EmergencyHistoryCreateWithoutEmergencyRequestInput[] | EmergencyHistoryUncheckedCreateWithoutEmergencyRequestInput[]
    connectOrCreate?: EmergencyHistoryCreateOrConnectWithoutEmergencyRequestInput | EmergencyHistoryCreateOrConnectWithoutEmergencyRequestInput[]
    upsert?: EmergencyHistoryUpsertWithWhereUniqueWithoutEmergencyRequestInput | EmergencyHistoryUpsertWithWhereUniqueWithoutEmergencyRequestInput[]
    createMany?: EmergencyHistoryCreateManyEmergencyRequestInputEnvelope
    set?: EmergencyHistoryWhereUniqueInput | EmergencyHistoryWhereUniqueInput[]
    disconnect?: EmergencyHistoryWhereUniqueInput | EmergencyHistoryWhereUniqueInput[]
    delete?: EmergencyHistoryWhereUniqueInput | EmergencyHistoryWhereUniqueInput[]
    connect?: EmergencyHistoryWhereUniqueInput | EmergencyHistoryWhereUniqueInput[]
    update?: EmergencyHistoryUpdateWithWhereUniqueWithoutEmergencyRequestInput | EmergencyHistoryUpdateWithWhereUniqueWithoutEmergencyRequestInput[]
    updateMany?: EmergencyHistoryUpdateManyWithWhereWithoutEmergencyRequestInput | EmergencyHistoryUpdateManyWithWhereWithoutEmergencyRequestInput[]
    deleteMany?: EmergencyHistoryScalarWhereInput | EmergencyHistoryScalarWhereInput[]
  }

  export type EmergencyRequestCreateNestedOneWithoutHistoriesInput = {
    create?: XOR<EmergencyRequestCreateWithoutHistoriesInput, EmergencyRequestUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: EmergencyRequestCreateOrConnectWithoutHistoriesInput
    connect?: EmergencyRequestWhereUniqueInput
  }

  export type EmergencyRequestUpdateOneRequiredWithoutHistoriesNestedInput = {
    create?: XOR<EmergencyRequestCreateWithoutHistoriesInput, EmergencyRequestUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: EmergencyRequestCreateOrConnectWithoutHistoriesInput
    upsert?: EmergencyRequestUpsertWithoutHistoriesInput
    connect?: EmergencyRequestWhereUniqueInput
    update?: XOR<XOR<EmergencyRequestUpdateToOneWithWhereWithoutHistoriesInput, EmergencyRequestUpdateWithoutHistoriesInput>, EmergencyRequestUncheckedUpdateWithoutHistoriesInput>
  }

  export type EmergencyRequestCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<EmergencyRequestCreateWithoutAssignedToInput, EmergencyRequestUncheckedCreateWithoutAssignedToInput> | EmergencyRequestCreateWithoutAssignedToInput[] | EmergencyRequestUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: EmergencyRequestCreateOrConnectWithoutAssignedToInput | EmergencyRequestCreateOrConnectWithoutAssignedToInput[]
    createMany?: EmergencyRequestCreateManyAssignedToInputEnvelope
    connect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
  }

  export type EmergencyRequestUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<EmergencyRequestCreateWithoutAssignedToInput, EmergencyRequestUncheckedCreateWithoutAssignedToInput> | EmergencyRequestCreateWithoutAssignedToInput[] | EmergencyRequestUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: EmergencyRequestCreateOrConnectWithoutAssignedToInput | EmergencyRequestCreateOrConnectWithoutAssignedToInput[]
    createMany?: EmergencyRequestCreateManyAssignedToInputEnvelope
    connect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
  }

  export type EmergencyRequestUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<EmergencyRequestCreateWithoutAssignedToInput, EmergencyRequestUncheckedCreateWithoutAssignedToInput> | EmergencyRequestCreateWithoutAssignedToInput[] | EmergencyRequestUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: EmergencyRequestCreateOrConnectWithoutAssignedToInput | EmergencyRequestCreateOrConnectWithoutAssignedToInput[]
    upsert?: EmergencyRequestUpsertWithWhereUniqueWithoutAssignedToInput | EmergencyRequestUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: EmergencyRequestCreateManyAssignedToInputEnvelope
    set?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    disconnect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    delete?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    connect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    update?: EmergencyRequestUpdateWithWhereUniqueWithoutAssignedToInput | EmergencyRequestUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: EmergencyRequestUpdateManyWithWhereWithoutAssignedToInput | EmergencyRequestUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: EmergencyRequestScalarWhereInput | EmergencyRequestScalarWhereInput[]
  }

  export type EmergencyRequestUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<EmergencyRequestCreateWithoutAssignedToInput, EmergencyRequestUncheckedCreateWithoutAssignedToInput> | EmergencyRequestCreateWithoutAssignedToInput[] | EmergencyRequestUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: EmergencyRequestCreateOrConnectWithoutAssignedToInput | EmergencyRequestCreateOrConnectWithoutAssignedToInput[]
    upsert?: EmergencyRequestUpsertWithWhereUniqueWithoutAssignedToInput | EmergencyRequestUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: EmergencyRequestCreateManyAssignedToInputEnvelope
    set?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    disconnect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    delete?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    connect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    update?: EmergencyRequestUpdateWithWhereUniqueWithoutAssignedToInput | EmergencyRequestUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: EmergencyRequestUpdateManyWithWhereWithoutAssignedToInput | EmergencyRequestUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: EmergencyRequestScalarWhereInput | EmergencyRequestScalarWhereInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumEmergencyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmergencyStatus | EnumEmergencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmergencyStatusFilter<$PrismaModel> | $Enums.EmergencyStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedEnumEmergencyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmergencyStatus | EnumEmergencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmergencyStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmergencyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmergencyStatusFilter<$PrismaModel>
    _max?: NestedEnumEmergencyStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AmbulanceStaffCreateWithoutEmergencyRequestInput = {
    id?: string
    name: string
    phone: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AmbulanceStaffUncheckedCreateWithoutEmergencyRequestInput = {
    id?: string
    name: string
    phone: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AmbulanceStaffCreateOrConnectWithoutEmergencyRequestInput = {
    where: AmbulanceStaffWhereUniqueInput
    create: XOR<AmbulanceStaffCreateWithoutEmergencyRequestInput, AmbulanceStaffUncheckedCreateWithoutEmergencyRequestInput>
  }

  export type EmergencyHistoryCreateWithoutEmergencyRequestInput = {
    id?: string
    ambulanceStaffLocation?: string | null
    status: $Enums.EmergencyStatus
    note?: string | null
    createdAt?: Date | string
  }

  export type EmergencyHistoryUncheckedCreateWithoutEmergencyRequestInput = {
    id?: string
    ambulanceStaffLocation?: string | null
    status: $Enums.EmergencyStatus
    note?: string | null
    createdAt?: Date | string
  }

  export type EmergencyHistoryCreateOrConnectWithoutEmergencyRequestInput = {
    where: EmergencyHistoryWhereUniqueInput
    create: XOR<EmergencyHistoryCreateWithoutEmergencyRequestInput, EmergencyHistoryUncheckedCreateWithoutEmergencyRequestInput>
  }

  export type EmergencyHistoryCreateManyEmergencyRequestInputEnvelope = {
    data: EmergencyHistoryCreateManyEmergencyRequestInput | EmergencyHistoryCreateManyEmergencyRequestInput[]
    skipDuplicates?: boolean
  }

  export type AmbulanceStaffUpsertWithoutEmergencyRequestInput = {
    update: XOR<AmbulanceStaffUpdateWithoutEmergencyRequestInput, AmbulanceStaffUncheckedUpdateWithoutEmergencyRequestInput>
    create: XOR<AmbulanceStaffCreateWithoutEmergencyRequestInput, AmbulanceStaffUncheckedCreateWithoutEmergencyRequestInput>
    where?: AmbulanceStaffWhereInput
  }

  export type AmbulanceStaffUpdateToOneWithWhereWithoutEmergencyRequestInput = {
    where?: AmbulanceStaffWhereInput
    data: XOR<AmbulanceStaffUpdateWithoutEmergencyRequestInput, AmbulanceStaffUncheckedUpdateWithoutEmergencyRequestInput>
  }

  export type AmbulanceStaffUpdateWithoutEmergencyRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmbulanceStaffUncheckedUpdateWithoutEmergencyRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyHistoryUpsertWithWhereUniqueWithoutEmergencyRequestInput = {
    where: EmergencyHistoryWhereUniqueInput
    update: XOR<EmergencyHistoryUpdateWithoutEmergencyRequestInput, EmergencyHistoryUncheckedUpdateWithoutEmergencyRequestInput>
    create: XOR<EmergencyHistoryCreateWithoutEmergencyRequestInput, EmergencyHistoryUncheckedCreateWithoutEmergencyRequestInput>
  }

  export type EmergencyHistoryUpdateWithWhereUniqueWithoutEmergencyRequestInput = {
    where: EmergencyHistoryWhereUniqueInput
    data: XOR<EmergencyHistoryUpdateWithoutEmergencyRequestInput, EmergencyHistoryUncheckedUpdateWithoutEmergencyRequestInput>
  }

  export type EmergencyHistoryUpdateManyWithWhereWithoutEmergencyRequestInput = {
    where: EmergencyHistoryScalarWhereInput
    data: XOR<EmergencyHistoryUpdateManyMutationInput, EmergencyHistoryUncheckedUpdateManyWithoutEmergencyRequestInput>
  }

  export type EmergencyHistoryScalarWhereInput = {
    AND?: EmergencyHistoryScalarWhereInput | EmergencyHistoryScalarWhereInput[]
    OR?: EmergencyHistoryScalarWhereInput[]
    NOT?: EmergencyHistoryScalarWhereInput | EmergencyHistoryScalarWhereInput[]
    id?: StringFilter<"EmergencyHistory"> | string
    emergencyRequestId?: StringFilter<"EmergencyHistory"> | string
    ambulanceStaffLocation?: StringNullableFilter<"EmergencyHistory"> | string | null
    status?: EnumEmergencyStatusFilter<"EmergencyHistory"> | $Enums.EmergencyStatus
    note?: StringNullableFilter<"EmergencyHistory"> | string | null
    createdAt?: DateTimeFilter<"EmergencyHistory"> | Date | string
  }

  export type EmergencyRequestCreateWithoutHistoriesInput = {
    id?: string
    patientId: string
    location: string
    note?: string | null
    status?: $Enums.EmergencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: AmbulanceStaffCreateNestedOneWithoutEmergencyRequestInput
  }

  export type EmergencyRequestUncheckedCreateWithoutHistoriesInput = {
    id?: string
    patientId: string
    location: string
    note?: string | null
    status?: $Enums.EmergencyStatus
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmergencyRequestCreateOrConnectWithoutHistoriesInput = {
    where: EmergencyRequestWhereUniqueInput
    create: XOR<EmergencyRequestCreateWithoutHistoriesInput, EmergencyRequestUncheckedCreateWithoutHistoriesInput>
  }

  export type EmergencyRequestUpsertWithoutHistoriesInput = {
    update: XOR<EmergencyRequestUpdateWithoutHistoriesInput, EmergencyRequestUncheckedUpdateWithoutHistoriesInput>
    create: XOR<EmergencyRequestCreateWithoutHistoriesInput, EmergencyRequestUncheckedCreateWithoutHistoriesInput>
    where?: EmergencyRequestWhereInput
  }

  export type EmergencyRequestUpdateToOneWithWhereWithoutHistoriesInput = {
    where?: EmergencyRequestWhereInput
    data: XOR<EmergencyRequestUpdateWithoutHistoriesInput, EmergencyRequestUncheckedUpdateWithoutHistoriesInput>
  }

  export type EmergencyRequestUpdateWithoutHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: AmbulanceStaffUpdateOneWithoutEmergencyRequestNestedInput
  }

  export type EmergencyRequestUncheckedUpdateWithoutHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyRequestCreateWithoutAssignedToInput = {
    id?: string
    patientId: string
    location: string
    note?: string | null
    status?: $Enums.EmergencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    histories?: EmergencyHistoryCreateNestedManyWithoutEmergencyRequestInput
  }

  export type EmergencyRequestUncheckedCreateWithoutAssignedToInput = {
    id?: string
    patientId: string
    location: string
    note?: string | null
    status?: $Enums.EmergencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    histories?: EmergencyHistoryUncheckedCreateNestedManyWithoutEmergencyRequestInput
  }

  export type EmergencyRequestCreateOrConnectWithoutAssignedToInput = {
    where: EmergencyRequestWhereUniqueInput
    create: XOR<EmergencyRequestCreateWithoutAssignedToInput, EmergencyRequestUncheckedCreateWithoutAssignedToInput>
  }

  export type EmergencyRequestCreateManyAssignedToInputEnvelope = {
    data: EmergencyRequestCreateManyAssignedToInput | EmergencyRequestCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type EmergencyRequestUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: EmergencyRequestWhereUniqueInput
    update: XOR<EmergencyRequestUpdateWithoutAssignedToInput, EmergencyRequestUncheckedUpdateWithoutAssignedToInput>
    create: XOR<EmergencyRequestCreateWithoutAssignedToInput, EmergencyRequestUncheckedCreateWithoutAssignedToInput>
  }

  export type EmergencyRequestUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: EmergencyRequestWhereUniqueInput
    data: XOR<EmergencyRequestUpdateWithoutAssignedToInput, EmergencyRequestUncheckedUpdateWithoutAssignedToInput>
  }

  export type EmergencyRequestUpdateManyWithWhereWithoutAssignedToInput = {
    where: EmergencyRequestScalarWhereInput
    data: XOR<EmergencyRequestUpdateManyMutationInput, EmergencyRequestUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type EmergencyRequestScalarWhereInput = {
    AND?: EmergencyRequestScalarWhereInput | EmergencyRequestScalarWhereInput[]
    OR?: EmergencyRequestScalarWhereInput[]
    NOT?: EmergencyRequestScalarWhereInput | EmergencyRequestScalarWhereInput[]
    id?: StringFilter<"EmergencyRequest"> | string
    patientId?: StringFilter<"EmergencyRequest"> | string
    location?: StringFilter<"EmergencyRequest"> | string
    note?: StringNullableFilter<"EmergencyRequest"> | string | null
    status?: EnumEmergencyStatusFilter<"EmergencyRequest"> | $Enums.EmergencyStatus
    assignedToId?: StringNullableFilter<"EmergencyRequest"> | string | null
    createdAt?: DateTimeFilter<"EmergencyRequest"> | Date | string
    updatedAt?: DateTimeFilter<"EmergencyRequest"> | Date | string
  }

  export type EmergencyHistoryCreateManyEmergencyRequestInput = {
    id?: string
    ambulanceStaffLocation?: string | null
    status: $Enums.EmergencyStatus
    note?: string | null
    createdAt?: Date | string
  }

  export type EmergencyHistoryUpdateWithoutEmergencyRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    ambulanceStaffLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyHistoryUncheckedUpdateWithoutEmergencyRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    ambulanceStaffLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyHistoryUncheckedUpdateManyWithoutEmergencyRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    ambulanceStaffLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyRequestCreateManyAssignedToInput = {
    id?: string
    patientId: string
    location: string
    note?: string | null
    status?: $Enums.EmergencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmergencyRequestUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    histories?: EmergencyHistoryUpdateManyWithoutEmergencyRequestNestedInput
  }

  export type EmergencyRequestUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    histories?: EmergencyHistoryUncheckedUpdateManyWithoutEmergencyRequestNestedInput
  }

  export type EmergencyRequestUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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