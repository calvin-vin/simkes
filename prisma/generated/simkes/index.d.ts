
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
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model PaymentMethod
 * 
 */
export type PaymentMethod = $Result.DefaultSelection<Prisma.$PaymentMethodPayload>
/**
 * Model PatientPayment
 * 
 */
export type PatientPayment = $Result.DefaultSelection<Prisma.$PatientPaymentPayload>
/**
 * Model MedicalCategory
 * 
 */
export type MedicalCategory = $Result.DefaultSelection<Prisma.$MedicalCategoryPayload>
/**
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model DoctorMedicalCategory
 * 
 */
export type DoctorMedicalCategory = $Result.DefaultSelection<Prisma.$DoctorMedicalCategoryPayload>
/**
 * Model DoctorSchedule
 * 
 */
export type DoctorSchedule = $Result.DefaultSelection<Prisma.$DoctorSchedulePayload>
/**
 * Model Medicine
 * 
 */
export type Medicine = $Result.DefaultSelection<Prisma.$MedicinePayload>
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


export const Days: {
  MINGGU: 'MINGGU',
  SENIN: 'SENIN',
  SELASA: 'SELASA',
  RABU: 'RABU',
  KAMIS: 'KAMIS',
  JUMAT: 'JUMAT',
  SABTU: 'SABTU'
};

export type Days = (typeof Days)[keyof typeof Days]


export const ReservationStatus: {
  WAITING: 'WAITING',
  ONGOING: 'ONGOING',
  DONE: 'DONE',
  SKIPPED: 'SKIPPED',
  RECALLED: 'RECALLED',
  EXPIRED: 'EXPIRED'
};

export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus]

}

export type EmergencyStatus = $Enums.EmergencyStatus

export const EmergencyStatus: typeof $Enums.EmergencyStatus

export type Days = $Enums.Days

export const Days: typeof $Enums.Days

export type ReservationStatus = $Enums.ReservationStatus

export const ReservationStatus: typeof $Enums.ReservationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Reservations
 * const reservations = await prisma.reservation.findMany()
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
   * // Fetch zero or more Reservations
   * const reservations = await prisma.reservation.findMany()
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
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.patientPayment`: Exposes CRUD operations for the **PatientPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatientPayments
    * const patientPayments = await prisma.patientPayment.findMany()
    * ```
    */
  get patientPayment(): Prisma.PatientPaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicalCategory`: Exposes CRUD operations for the **MedicalCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalCategories
    * const medicalCategories = await prisma.medicalCategory.findMany()
    * ```
    */
  get medicalCategory(): Prisma.MedicalCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorMedicalCategory`: Exposes CRUD operations for the **DoctorMedicalCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorMedicalCategories
    * const doctorMedicalCategories = await prisma.doctorMedicalCategory.findMany()
    * ```
    */
  get doctorMedicalCategory(): Prisma.DoctorMedicalCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorSchedule`: Exposes CRUD operations for the **DoctorSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorSchedules
    * const doctorSchedules = await prisma.doctorSchedule.findMany()
    * ```
    */
  get doctorSchedule(): Prisma.DoctorScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicine`: Exposes CRUD operations for the **Medicine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicines
    * const medicines = await prisma.medicine.findMany()
    * ```
    */
  get medicine(): Prisma.MedicineDelegate<ExtArgs, ClientOptions>;

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
    Reservation: 'Reservation',
    Patient: 'Patient',
    PaymentMethod: 'PaymentMethod',
    PatientPayment: 'PatientPayment',
    MedicalCategory: 'MedicalCategory',
    Doctor: 'Doctor',
    DoctorMedicalCategory: 'DoctorMedicalCategory',
    DoctorSchedule: 'DoctorSchedule',
    Medicine: 'Medicine',
    EmergencyRequest: 'EmergencyRequest',
    EmergencyHistory: 'EmergencyHistory',
    AmbulanceStaff: 'AmbulanceStaff'
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
      modelProps: "reservation" | "patient" | "paymentMethod" | "patientPayment" | "medicalCategory" | "doctor" | "doctorMedicalCategory" | "doctorSchedule" | "medicine" | "emergencyRequest" | "emergencyHistory" | "ambulanceStaff"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
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
      PatientPayment: {
        payload: Prisma.$PatientPaymentPayload<ExtArgs>
        fields: Prisma.PatientPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPaymentPayload>
          }
          findFirst: {
            args: Prisma.PatientPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPaymentPayload>
          }
          findMany: {
            args: Prisma.PatientPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPaymentPayload>[]
          }
          create: {
            args: Prisma.PatientPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPaymentPayload>
          }
          createMany: {
            args: Prisma.PatientPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPaymentPayload>[]
          }
          delete: {
            args: Prisma.PatientPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPaymentPayload>
          }
          update: {
            args: Prisma.PatientPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPaymentPayload>
          }
          deleteMany: {
            args: Prisma.PatientPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientPaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPaymentPayload>[]
          }
          upsert: {
            args: Prisma.PatientPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPaymentPayload>
          }
          aggregate: {
            args: Prisma.PatientPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatientPayment>
          }
          groupBy: {
            args: Prisma.PatientPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PatientPaymentCountAggregateOutputType> | number
          }
        }
      }
      MedicalCategory: {
        payload: Prisma.$MedicalCategoryPayload<ExtArgs>
        fields: Prisma.MedicalCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalCategoryPayload>
          }
          findFirst: {
            args: Prisma.MedicalCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalCategoryPayload>
          }
          findMany: {
            args: Prisma.MedicalCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalCategoryPayload>[]
          }
          create: {
            args: Prisma.MedicalCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalCategoryPayload>
          }
          createMany: {
            args: Prisma.MedicalCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicalCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalCategoryPayload>[]
          }
          delete: {
            args: Prisma.MedicalCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalCategoryPayload>
          }
          update: {
            args: Prisma.MedicalCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalCategoryPayload>
          }
          deleteMany: {
            args: Prisma.MedicalCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicalCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalCategoryPayload>[]
          }
          upsert: {
            args: Prisma.MedicalCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalCategoryPayload>
          }
          aggregate: {
            args: Prisma.MedicalCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalCategory>
          }
          groupBy: {
            args: Prisma.MedicalCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalCategoryCountAggregateOutputType> | number
          }
        }
      }
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      DoctorMedicalCategory: {
        payload: Prisma.$DoctorMedicalCategoryPayload<ExtArgs>
        fields: Prisma.DoctorMedicalCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorMedicalCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorMedicalCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorMedicalCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorMedicalCategoryPayload>
          }
          findFirst: {
            args: Prisma.DoctorMedicalCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorMedicalCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorMedicalCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorMedicalCategoryPayload>
          }
          findMany: {
            args: Prisma.DoctorMedicalCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorMedicalCategoryPayload>[]
          }
          create: {
            args: Prisma.DoctorMedicalCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorMedicalCategoryPayload>
          }
          createMany: {
            args: Prisma.DoctorMedicalCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorMedicalCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorMedicalCategoryPayload>[]
          }
          delete: {
            args: Prisma.DoctorMedicalCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorMedicalCategoryPayload>
          }
          update: {
            args: Prisma.DoctorMedicalCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorMedicalCategoryPayload>
          }
          deleteMany: {
            args: Prisma.DoctorMedicalCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorMedicalCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorMedicalCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorMedicalCategoryPayload>[]
          }
          upsert: {
            args: Prisma.DoctorMedicalCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorMedicalCategoryPayload>
          }
          aggregate: {
            args: Prisma.DoctorMedicalCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorMedicalCategory>
          }
          groupBy: {
            args: Prisma.DoctorMedicalCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorMedicalCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorMedicalCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorMedicalCategoryCountAggregateOutputType> | number
          }
        }
      }
      DoctorSchedule: {
        payload: Prisma.$DoctorSchedulePayload<ExtArgs>
        fields: Prisma.DoctorScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulePayload>
          }
          findFirst: {
            args: Prisma.DoctorScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulePayload>
          }
          findMany: {
            args: Prisma.DoctorScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulePayload>[]
          }
          create: {
            args: Prisma.DoctorScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulePayload>
          }
          createMany: {
            args: Prisma.DoctorScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulePayload>[]
          }
          delete: {
            args: Prisma.DoctorScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulePayload>
          }
          update: {
            args: Prisma.DoctorScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulePayload>
          }
          deleteMany: {
            args: Prisma.DoctorScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulePayload>[]
          }
          upsert: {
            args: Prisma.DoctorScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulePayload>
          }
          aggregate: {
            args: Prisma.DoctorScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorSchedule>
          }
          groupBy: {
            args: Prisma.DoctorScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorScheduleCountAggregateOutputType> | number
          }
        }
      }
      Medicine: {
        payload: Prisma.$MedicinePayload<ExtArgs>
        fields: Prisma.MedicineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findFirst: {
            args: Prisma.MedicineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findMany: {
            args: Prisma.MedicineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          create: {
            args: Prisma.MedicineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          createMany: {
            args: Prisma.MedicineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          delete: {
            args: Prisma.MedicineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          update: {
            args: Prisma.MedicineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          deleteMany: {
            args: Prisma.MedicineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          upsert: {
            args: Prisma.MedicineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          aggregate: {
            args: Prisma.MedicineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicine>
          }
          groupBy: {
            args: Prisma.MedicineGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicineGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicineCountArgs<ExtArgs>
            result: $Utils.Optional<MedicineCountAggregateOutputType> | number
          }
        }
      }
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
    reservation?: ReservationOmit
    patient?: PatientOmit
    paymentMethod?: PaymentMethodOmit
    patientPayment?: PatientPaymentOmit
    medicalCategory?: MedicalCategoryOmit
    doctor?: DoctorOmit
    doctorMedicalCategory?: DoctorMedicalCategoryOmit
    doctorSchedule?: DoctorScheduleOmit
    medicine?: MedicineOmit
    emergencyRequest?: EmergencyRequestOmit
    emergencyHistory?: EmergencyHistoryOmit
    ambulanceStaff?: AmbulanceStaffOmit
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
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    reservations: number
    payments: number
    emergencyRequests: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | PatientCountOutputTypeCountReservationsArgs
    payments?: boolean | PatientCountOutputTypeCountPaymentsArgs
    emergencyRequests?: boolean | PatientCountOutputTypeCountEmergencyRequestsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientPaymentWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountEmergencyRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyRequestWhereInput
  }


  /**
   * Count Type PaymentMethodCountOutputType
   */

  export type PaymentMethodCountOutputType = {
    patients: number
  }

  export type PaymentMethodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | PaymentMethodCountOutputTypeCountPatientsArgs
  }

  // Custom InputTypes
  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethodCountOutputType
     */
    select?: PaymentMethodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientPaymentWhereInput
  }


  /**
   * Count Type PatientPaymentCountOutputType
   */

  export type PatientPaymentCountOutputType = {
    reservations: number
  }

  export type PatientPaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | PatientPaymentCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * PatientPaymentCountOutputType without action
   */
  export type PatientPaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientPaymentCountOutputType
     */
    select?: PatientPaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientPaymentCountOutputType without action
   */
  export type PatientPaymentCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type MedicalCategoryCountOutputType
   */

  export type MedicalCategoryCountOutputType = {
    reservations: number
    doctors: number
  }

  export type MedicalCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | MedicalCategoryCountOutputTypeCountReservationsArgs
    doctors?: boolean | MedicalCategoryCountOutputTypeCountDoctorsArgs
  }

  // Custom InputTypes
  /**
   * MedicalCategoryCountOutputType without action
   */
  export type MedicalCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCategoryCountOutputType
     */
    select?: MedicalCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicalCategoryCountOutputType without action
   */
  export type MedicalCategoryCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * MedicalCategoryCountOutputType without action
   */
  export type MedicalCategoryCountOutputTypeCountDoctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorMedicalCategoryWhereInput
  }


  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    reservations: number
    schedules: number
    medicalCategories: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | DoctorCountOutputTypeCountReservationsArgs
    schedules?: boolean | DoctorCountOutputTypeCountSchedulesArgs
    medicalCategories?: boolean | DoctorCountOutputTypeCountMedicalCategoriesArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorScheduleWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountMedicalCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorMedicalCategoryWhereInput
  }


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
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    medicalCategoryId: string | null
    doctorId: string | null
    reservationDate: Date | null
    queueNumber: string | null
    qrCodeUrl: string | null
    status: $Enums.ReservationStatus | null
    referralFile: string | null
    patientPaymentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    medicalCategoryId: string | null
    doctorId: string | null
    reservationDate: Date | null
    queueNumber: string | null
    qrCodeUrl: string | null
    status: $Enums.ReservationStatus | null
    referralFile: string | null
    patientPaymentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    patientId: number
    medicalCategoryId: number
    doctorId: number
    reservationDate: number
    queueNumber: number
    qrCodeUrl: number
    status: number
    referralFile: number
    patientPaymentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReservationMinAggregateInputType = {
    id?: true
    patientId?: true
    medicalCategoryId?: true
    doctorId?: true
    reservationDate?: true
    queueNumber?: true
    qrCodeUrl?: true
    status?: true
    referralFile?: true
    patientPaymentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    patientId?: true
    medicalCategoryId?: true
    doctorId?: true
    reservationDate?: true
    queueNumber?: true
    qrCodeUrl?: true
    status?: true
    referralFile?: true
    patientPaymentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    patientId?: true
    medicalCategoryId?: true
    doctorId?: true
    reservationDate?: true
    queueNumber?: true
    qrCodeUrl?: true
    status?: true
    referralFile?: true
    patientPaymentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: string
    patientId: string
    medicalCategoryId: string
    doctorId: string
    reservationDate: Date
    queueNumber: string
    qrCodeUrl: string
    status: $Enums.ReservationStatus
    referralFile: string | null
    patientPaymentId: string
    createdAt: Date
    updatedAt: Date
    _count: ReservationCountAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    medicalCategoryId?: boolean
    doctorId?: boolean
    reservationDate?: boolean
    queueNumber?: boolean
    qrCodeUrl?: boolean
    status?: boolean
    referralFile?: boolean
    patientPaymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    medicalCategory?: boolean | MedicalCategoryDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patientPayment?: boolean | PatientPaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    medicalCategoryId?: boolean
    doctorId?: boolean
    reservationDate?: boolean
    queueNumber?: boolean
    qrCodeUrl?: boolean
    status?: boolean
    referralFile?: boolean
    patientPaymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    medicalCategory?: boolean | MedicalCategoryDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patientPayment?: boolean | PatientPaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    medicalCategoryId?: boolean
    doctorId?: boolean
    reservationDate?: boolean
    queueNumber?: boolean
    qrCodeUrl?: boolean
    status?: boolean
    referralFile?: boolean
    patientPaymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    medicalCategory?: boolean | MedicalCategoryDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patientPayment?: boolean | PatientPaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    id?: boolean
    patientId?: boolean
    medicalCategoryId?: boolean
    doctorId?: boolean
    reservationDate?: boolean
    queueNumber?: boolean
    qrCodeUrl?: boolean
    status?: boolean
    referralFile?: boolean
    patientPaymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "medicalCategoryId" | "doctorId" | "reservationDate" | "queueNumber" | "qrCodeUrl" | "status" | "referralFile" | "patientPaymentId" | "createdAt" | "updatedAt", ExtArgs["result"]["reservation"]>
  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    medicalCategory?: boolean | MedicalCategoryDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patientPayment?: boolean | PatientPaymentDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    medicalCategory?: boolean | MedicalCategoryDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patientPayment?: boolean | PatientPaymentDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    medicalCategory?: boolean | MedicalCategoryDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patientPayment?: boolean | PatientPaymentDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      medicalCategory: Prisma.$MedicalCategoryPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs>
      patientPayment: Prisma.$PatientPaymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      medicalCategoryId: string
      doctorId: string
      reservationDate: Date
      queueNumber: string
      qrCodeUrl: string
      status: $Enums.ReservationStatus
      referralFile: string | null
      patientPaymentId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations and returns the data updated in the database.
     * @param {ReservationUpdateManyAndReturnArgs} args - Arguments to update many Reservations.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReservationUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
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
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medicalCategory<T extends MedicalCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicalCategoryDefaultArgs<ExtArgs>>): Prisma__MedicalCategoryClient<$Result.GetResult<Prisma.$MedicalCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patientPayment<T extends PatientPaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientPaymentDefaultArgs<ExtArgs>>): Prisma__PatientPaymentClient<$Result.GetResult<Prisma.$PatientPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reservation model
   */
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'String'>
    readonly patientId: FieldRef<"Reservation", 'String'>
    readonly medicalCategoryId: FieldRef<"Reservation", 'String'>
    readonly doctorId: FieldRef<"Reservation", 'String'>
    readonly reservationDate: FieldRef<"Reservation", 'DateTime'>
    readonly queueNumber: FieldRef<"Reservation", 'String'>
    readonly qrCodeUrl: FieldRef<"Reservation", 'String'>
    readonly status: FieldRef<"Reservation", 'ReservationStatus'>
    readonly referralFile: FieldRef<"Reservation", 'String'>
    readonly patientPaymentId: FieldRef<"Reservation", 'String'>
    readonly createdAt: FieldRef<"Reservation", 'DateTime'>
    readonly updatedAt: FieldRef<"Reservation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservation createManyAndReturn
   */
  export type ReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservation updateManyAndReturn
   */
  export type ReservationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    name: string | null
    simrsId: string | null
    nik: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    simrsId: string | null
    nik: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    name: number
    simrsId: number
    nik: number
    phone: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    id?: true
    name?: true
    simrsId?: true
    nik?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    name?: true
    simrsId?: true
    nik?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    name?: true
    simrsId?: true
    nik?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    name: string
    simrsId: string | null
    nik: string | null
    phone: string | null
    email: string | null
    createdAt: Date
    updatedAt: Date
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    simrsId?: boolean
    nik?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reservations?: boolean | Patient$reservationsArgs<ExtArgs>
    payments?: boolean | Patient$paymentsArgs<ExtArgs>
    emergencyRequests?: boolean | Patient$emergencyRequestsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    simrsId?: boolean
    nik?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    simrsId?: boolean
    nik?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    name?: boolean
    simrsId?: boolean
    nik?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "simrsId" | "nik" | "phone" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | Patient$reservationsArgs<ExtArgs>
    payments?: boolean | Patient$paymentsArgs<ExtArgs>
    emergencyRequests?: boolean | Patient$emergencyRequestsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      payments: Prisma.$PatientPaymentPayload<ExtArgs>[]
      emergencyRequests: Prisma.$EmergencyRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      simrsId: string | null
      nik: string | null
      phone: string | null
      email: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
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
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends Patient$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Patient$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emergencyRequests<T extends Patient$emergencyRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$emergencyRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly name: FieldRef<"Patient", 'String'>
    readonly simrsId: FieldRef<"Patient", 'String'>
    readonly nik: FieldRef<"Patient", 'String'>
    readonly phone: FieldRef<"Patient", 'String'>
    readonly email: FieldRef<"Patient", 'String'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.reservations
   */
  export type Patient$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Patient.payments
   */
  export type Patient$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientPayment
     */
    select?: PatientPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientPayment
     */
    omit?: PatientPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientPaymentInclude<ExtArgs> | null
    where?: PatientPaymentWhereInput
    orderBy?: PatientPaymentOrderByWithRelationInput | PatientPaymentOrderByWithRelationInput[]
    cursor?: PatientPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientPaymentScalarFieldEnum | PatientPaymentScalarFieldEnum[]
  }

  /**
   * Patient.emergencyRequests
   */
  export type Patient$emergencyRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model PaymentMethod
   */

  export type AggregatePaymentMethod = {
    _count: PaymentMethodCountAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  export type PaymentMethodMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMethodMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMethodCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentMethodMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMethodMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMethodCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: PaymentMethodMinAggregateInputType
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type PaymentMethodGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: PaymentMethodCountAggregateOutputType | null
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
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patients?: boolean | PaymentMethod$patientsArgs<ExtArgs>
    _count?: boolean | PaymentMethodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentMethodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentMethod"]>
  export type PaymentMethodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | PaymentMethod$patientsArgs<ExtArgs>
    _count?: boolean | PaymentMethodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentMethodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PaymentMethodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PaymentMethodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentMethod"
    objects: {
      patients: Prisma.$PatientPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
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
    patients<T extends PaymentMethod$patientsArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethod$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"PaymentMethod", 'String'>
    readonly name: FieldRef<"PaymentMethod", 'String'>
    readonly createdAt: FieldRef<"PaymentMethod", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentMethod", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
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
   * PaymentMethod.patients
   */
  export type PaymentMethod$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientPayment
     */
    select?: PatientPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientPayment
     */
    omit?: PatientPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientPaymentInclude<ExtArgs> | null
    where?: PatientPaymentWhereInput
    orderBy?: PatientPaymentOrderByWithRelationInput | PatientPaymentOrderByWithRelationInput[]
    cursor?: PatientPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientPaymentScalarFieldEnum | PatientPaymentScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
  }


  /**
   * Model PatientPayment
   */

  export type AggregatePatientPayment = {
    _count: PatientPaymentCountAggregateOutputType | null
    _min: PatientPaymentMinAggregateOutputType | null
    _max: PatientPaymentMaxAggregateOutputType | null
  }

  export type PatientPaymentMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    paymentMethodId: string | null
    participantId: string | null
    paymentFile: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientPaymentMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    paymentMethodId: string | null
    participantId: string | null
    paymentFile: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientPaymentCountAggregateOutputType = {
    id: number
    patientId: number
    paymentMethodId: number
    participantId: number
    paymentFile: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientPaymentMinAggregateInputType = {
    id?: true
    patientId?: true
    paymentMethodId?: true
    participantId?: true
    paymentFile?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientPaymentMaxAggregateInputType = {
    id?: true
    patientId?: true
    paymentMethodId?: true
    participantId?: true
    paymentFile?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientPaymentCountAggregateInputType = {
    id?: true
    patientId?: true
    paymentMethodId?: true
    participantId?: true
    paymentFile?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientPayment to aggregate.
     */
    where?: PatientPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientPayments to fetch.
     */
    orderBy?: PatientPaymentOrderByWithRelationInput | PatientPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatientPayments
    **/
    _count?: true | PatientPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientPaymentMaxAggregateInputType
  }

  export type GetPatientPaymentAggregateType<T extends PatientPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePatientPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatientPayment[P]>
      : GetScalarType<T[P], AggregatePatientPayment[P]>
  }




  export type PatientPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientPaymentWhereInput
    orderBy?: PatientPaymentOrderByWithAggregationInput | PatientPaymentOrderByWithAggregationInput[]
    by: PatientPaymentScalarFieldEnum[] | PatientPaymentScalarFieldEnum
    having?: PatientPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientPaymentCountAggregateInputType | true
    _min?: PatientPaymentMinAggregateInputType
    _max?: PatientPaymentMaxAggregateInputType
  }

  export type PatientPaymentGroupByOutputType = {
    id: string
    patientId: string
    paymentMethodId: string
    participantId: string
    paymentFile: string | null
    createdAt: Date
    updatedAt: Date
    _count: PatientPaymentCountAggregateOutputType | null
    _min: PatientPaymentMinAggregateOutputType | null
    _max: PatientPaymentMaxAggregateOutputType | null
  }

  type GetPatientPaymentGroupByPayload<T extends PatientPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PatientPaymentGroupByOutputType[P]>
        }
      >
    >


  export type PatientPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    paymentMethodId?: boolean
    participantId?: boolean
    paymentFile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    paymentMethod?: boolean | PaymentMethodDefaultArgs<ExtArgs>
    reservations?: boolean | PatientPayment$reservationsArgs<ExtArgs>
    _count?: boolean | PatientPaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientPayment"]>

  export type PatientPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    paymentMethodId?: boolean
    participantId?: boolean
    paymentFile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    paymentMethod?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientPayment"]>

  export type PatientPaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    paymentMethodId?: boolean
    participantId?: boolean
    paymentFile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    paymentMethod?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientPayment"]>

  export type PatientPaymentSelectScalar = {
    id?: boolean
    patientId?: boolean
    paymentMethodId?: boolean
    participantId?: boolean
    paymentFile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "paymentMethodId" | "participantId" | "paymentFile" | "createdAt" | "updatedAt", ExtArgs["result"]["patientPayment"]>
  export type PatientPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    paymentMethod?: boolean | PaymentMethodDefaultArgs<ExtArgs>
    reservations?: boolean | PatientPayment$reservationsArgs<ExtArgs>
    _count?: boolean | PatientPaymentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientPaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    paymentMethod?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }
  export type PatientPaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    paymentMethod?: boolean | PaymentMethodDefaultArgs<ExtArgs>
  }

  export type $PatientPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatientPayment"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      paymentMethod: Prisma.$PaymentMethodPayload<ExtArgs>
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      paymentMethodId: string
      participantId: string
      paymentFile: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patientPayment"]>
    composites: {}
  }

  type PatientPaymentGetPayload<S extends boolean | null | undefined | PatientPaymentDefaultArgs> = $Result.GetResult<Prisma.$PatientPaymentPayload, S>

  type PatientPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientPaymentCountAggregateInputType | true
    }

  export interface PatientPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatientPayment'], meta: { name: 'PatientPayment' } }
    /**
     * Find zero or one PatientPayment that matches the filter.
     * @param {PatientPaymentFindUniqueArgs} args - Arguments to find a PatientPayment
     * @example
     * // Get one PatientPayment
     * const patientPayment = await prisma.patientPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientPaymentFindUniqueArgs>(args: SelectSubset<T, PatientPaymentFindUniqueArgs<ExtArgs>>): Prisma__PatientPaymentClient<$Result.GetResult<Prisma.$PatientPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PatientPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientPaymentFindUniqueOrThrowArgs} args - Arguments to find a PatientPayment
     * @example
     * // Get one PatientPayment
     * const patientPayment = await prisma.patientPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientPaymentClient<$Result.GetResult<Prisma.$PatientPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientPaymentFindFirstArgs} args - Arguments to find a PatientPayment
     * @example
     * // Get one PatientPayment
     * const patientPayment = await prisma.patientPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientPaymentFindFirstArgs>(args?: SelectSubset<T, PatientPaymentFindFirstArgs<ExtArgs>>): Prisma__PatientPaymentClient<$Result.GetResult<Prisma.$PatientPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientPaymentFindFirstOrThrowArgs} args - Arguments to find a PatientPayment
     * @example
     * // Get one PatientPayment
     * const patientPayment = await prisma.patientPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientPaymentClient<$Result.GetResult<Prisma.$PatientPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PatientPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatientPayments
     * const patientPayments = await prisma.patientPayment.findMany()
     * 
     * // Get first 10 PatientPayments
     * const patientPayments = await prisma.patientPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientPaymentWithIdOnly = await prisma.patientPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientPaymentFindManyArgs>(args?: SelectSubset<T, PatientPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PatientPayment.
     * @param {PatientPaymentCreateArgs} args - Arguments to create a PatientPayment.
     * @example
     * // Create one PatientPayment
     * const PatientPayment = await prisma.patientPayment.create({
     *   data: {
     *     // ... data to create a PatientPayment
     *   }
     * })
     * 
     */
    create<T extends PatientPaymentCreateArgs>(args: SelectSubset<T, PatientPaymentCreateArgs<ExtArgs>>): Prisma__PatientPaymentClient<$Result.GetResult<Prisma.$PatientPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PatientPayments.
     * @param {PatientPaymentCreateManyArgs} args - Arguments to create many PatientPayments.
     * @example
     * // Create many PatientPayments
     * const patientPayment = await prisma.patientPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientPaymentCreateManyArgs>(args?: SelectSubset<T, PatientPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatientPayments and returns the data saved in the database.
     * @param {PatientPaymentCreateManyAndReturnArgs} args - Arguments to create many PatientPayments.
     * @example
     * // Create many PatientPayments
     * const patientPayment = await prisma.patientPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatientPayments and only return the `id`
     * const patientPaymentWithIdOnly = await prisma.patientPayment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientPaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PatientPayment.
     * @param {PatientPaymentDeleteArgs} args - Arguments to delete one PatientPayment.
     * @example
     * // Delete one PatientPayment
     * const PatientPayment = await prisma.patientPayment.delete({
     *   where: {
     *     // ... filter to delete one PatientPayment
     *   }
     * })
     * 
     */
    delete<T extends PatientPaymentDeleteArgs>(args: SelectSubset<T, PatientPaymentDeleteArgs<ExtArgs>>): Prisma__PatientPaymentClient<$Result.GetResult<Prisma.$PatientPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PatientPayment.
     * @param {PatientPaymentUpdateArgs} args - Arguments to update one PatientPayment.
     * @example
     * // Update one PatientPayment
     * const patientPayment = await prisma.patientPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientPaymentUpdateArgs>(args: SelectSubset<T, PatientPaymentUpdateArgs<ExtArgs>>): Prisma__PatientPaymentClient<$Result.GetResult<Prisma.$PatientPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PatientPayments.
     * @param {PatientPaymentDeleteManyArgs} args - Arguments to filter PatientPayments to delete.
     * @example
     * // Delete a few PatientPayments
     * const { count } = await prisma.patientPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientPaymentDeleteManyArgs>(args?: SelectSubset<T, PatientPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatientPayments
     * const patientPayment = await prisma.patientPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientPaymentUpdateManyArgs>(args: SelectSubset<T, PatientPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientPayments and returns the data updated in the database.
     * @param {PatientPaymentUpdateManyAndReturnArgs} args - Arguments to update many PatientPayments.
     * @example
     * // Update many PatientPayments
     * const patientPayment = await prisma.patientPayment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PatientPayments and only return the `id`
     * const patientPaymentWithIdOnly = await prisma.patientPayment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PatientPaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientPaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PatientPayment.
     * @param {PatientPaymentUpsertArgs} args - Arguments to update or create a PatientPayment.
     * @example
     * // Update or create a PatientPayment
     * const patientPayment = await prisma.patientPayment.upsert({
     *   create: {
     *     // ... data to create a PatientPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatientPayment we want to update
     *   }
     * })
     */
    upsert<T extends PatientPaymentUpsertArgs>(args: SelectSubset<T, PatientPaymentUpsertArgs<ExtArgs>>): Prisma__PatientPaymentClient<$Result.GetResult<Prisma.$PatientPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PatientPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientPaymentCountArgs} args - Arguments to filter PatientPayments to count.
     * @example
     * // Count the number of PatientPayments
     * const count = await prisma.patientPayment.count({
     *   where: {
     *     // ... the filter for the PatientPayments we want to count
     *   }
     * })
    **/
    count<T extends PatientPaymentCountArgs>(
      args?: Subset<T, PatientPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatientPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientPaymentAggregateArgs>(args: Subset<T, PatientPaymentAggregateArgs>): Prisma.PrismaPromise<GetPatientPaymentAggregateType<T>>

    /**
     * Group by PatientPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientPaymentGroupByArgs} args - Group by arguments.
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
      T extends PatientPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientPaymentGroupByArgs['orderBy'] }
        : { orderBy?: PatientPaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatientPayment model
   */
  readonly fields: PatientPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatientPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paymentMethod<T extends PaymentMethodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethodDefaultArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reservations<T extends PatientPayment$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, PatientPayment$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PatientPayment model
   */
  interface PatientPaymentFieldRefs {
    readonly id: FieldRef<"PatientPayment", 'String'>
    readonly patientId: FieldRef<"PatientPayment", 'String'>
    readonly paymentMethodId: FieldRef<"PatientPayment", 'String'>
    readonly participantId: FieldRef<"PatientPayment", 'String'>
    readonly paymentFile: FieldRef<"PatientPayment", 'String'>
    readonly createdAt: FieldRef<"PatientPayment", 'DateTime'>
    readonly updatedAt: FieldRef<"PatientPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PatientPayment findUnique
   */
  export type PatientPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientPayment
     */
    select?: PatientPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientPayment
     */
    omit?: PatientPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientPaymentInclude<ExtArgs> | null
    /**
     * Filter, which PatientPayment to fetch.
     */
    where: PatientPaymentWhereUniqueInput
  }

  /**
   * PatientPayment findUniqueOrThrow
   */
  export type PatientPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientPayment
     */
    select?: PatientPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientPayment
     */
    omit?: PatientPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientPaymentInclude<ExtArgs> | null
    /**
     * Filter, which PatientPayment to fetch.
     */
    where: PatientPaymentWhereUniqueInput
  }

  /**
   * PatientPayment findFirst
   */
  export type PatientPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientPayment
     */
    select?: PatientPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientPayment
     */
    omit?: PatientPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientPaymentInclude<ExtArgs> | null
    /**
     * Filter, which PatientPayment to fetch.
     */
    where?: PatientPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientPayments to fetch.
     */
    orderBy?: PatientPaymentOrderByWithRelationInput | PatientPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientPayments.
     */
    cursor?: PatientPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientPayments.
     */
    distinct?: PatientPaymentScalarFieldEnum | PatientPaymentScalarFieldEnum[]
  }

  /**
   * PatientPayment findFirstOrThrow
   */
  export type PatientPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientPayment
     */
    select?: PatientPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientPayment
     */
    omit?: PatientPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientPaymentInclude<ExtArgs> | null
    /**
     * Filter, which PatientPayment to fetch.
     */
    where?: PatientPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientPayments to fetch.
     */
    orderBy?: PatientPaymentOrderByWithRelationInput | PatientPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientPayments.
     */
    cursor?: PatientPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientPayments.
     */
    distinct?: PatientPaymentScalarFieldEnum | PatientPaymentScalarFieldEnum[]
  }

  /**
   * PatientPayment findMany
   */
  export type PatientPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientPayment
     */
    select?: PatientPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientPayment
     */
    omit?: PatientPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientPaymentInclude<ExtArgs> | null
    /**
     * Filter, which PatientPayments to fetch.
     */
    where?: PatientPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientPayments to fetch.
     */
    orderBy?: PatientPaymentOrderByWithRelationInput | PatientPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatientPayments.
     */
    cursor?: PatientPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientPayments.
     */
    skip?: number
    distinct?: PatientPaymentScalarFieldEnum | PatientPaymentScalarFieldEnum[]
  }

  /**
   * PatientPayment create
   */
  export type PatientPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientPayment
     */
    select?: PatientPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientPayment
     */
    omit?: PatientPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a PatientPayment.
     */
    data: XOR<PatientPaymentCreateInput, PatientPaymentUncheckedCreateInput>
  }

  /**
   * PatientPayment createMany
   */
  export type PatientPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatientPayments.
     */
    data: PatientPaymentCreateManyInput | PatientPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PatientPayment createManyAndReturn
   */
  export type PatientPaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientPayment
     */
    select?: PatientPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientPayment
     */
    omit?: PatientPaymentOmit<ExtArgs> | null
    /**
     * The data used to create many PatientPayments.
     */
    data: PatientPaymentCreateManyInput | PatientPaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientPaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientPayment update
   */
  export type PatientPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientPayment
     */
    select?: PatientPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientPayment
     */
    omit?: PatientPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a PatientPayment.
     */
    data: XOR<PatientPaymentUpdateInput, PatientPaymentUncheckedUpdateInput>
    /**
     * Choose, which PatientPayment to update.
     */
    where: PatientPaymentWhereUniqueInput
  }

  /**
   * PatientPayment updateMany
   */
  export type PatientPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatientPayments.
     */
    data: XOR<PatientPaymentUpdateManyMutationInput, PatientPaymentUncheckedUpdateManyInput>
    /**
     * Filter which PatientPayments to update
     */
    where?: PatientPaymentWhereInput
    /**
     * Limit how many PatientPayments to update.
     */
    limit?: number
  }

  /**
   * PatientPayment updateManyAndReturn
   */
  export type PatientPaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientPayment
     */
    select?: PatientPaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientPayment
     */
    omit?: PatientPaymentOmit<ExtArgs> | null
    /**
     * The data used to update PatientPayments.
     */
    data: XOR<PatientPaymentUpdateManyMutationInput, PatientPaymentUncheckedUpdateManyInput>
    /**
     * Filter which PatientPayments to update
     */
    where?: PatientPaymentWhereInput
    /**
     * Limit how many PatientPayments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientPaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientPayment upsert
   */
  export type PatientPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientPayment
     */
    select?: PatientPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientPayment
     */
    omit?: PatientPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the PatientPayment to update in case it exists.
     */
    where: PatientPaymentWhereUniqueInput
    /**
     * In case the PatientPayment found by the `where` argument doesn't exist, create a new PatientPayment with this data.
     */
    create: XOR<PatientPaymentCreateInput, PatientPaymentUncheckedCreateInput>
    /**
     * In case the PatientPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientPaymentUpdateInput, PatientPaymentUncheckedUpdateInput>
  }

  /**
   * PatientPayment delete
   */
  export type PatientPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientPayment
     */
    select?: PatientPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientPayment
     */
    omit?: PatientPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientPaymentInclude<ExtArgs> | null
    /**
     * Filter which PatientPayment to delete.
     */
    where: PatientPaymentWhereUniqueInput
  }

  /**
   * PatientPayment deleteMany
   */
  export type PatientPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientPayments to delete
     */
    where?: PatientPaymentWhereInput
    /**
     * Limit how many PatientPayments to delete.
     */
    limit?: number
  }

  /**
   * PatientPayment.reservations
   */
  export type PatientPayment$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * PatientPayment without action
   */
  export type PatientPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientPayment
     */
    select?: PatientPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientPayment
     */
    omit?: PatientPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientPaymentInclude<ExtArgs> | null
  }


  /**
   * Model MedicalCategory
   */

  export type AggregateMedicalCategory = {
    _count: MedicalCategoryCountAggregateOutputType | null
    _min: MedicalCategoryMinAggregateOutputType | null
    _max: MedicalCategoryMaxAggregateOutputType | null
  }

  export type MedicalCategoryMinAggregateOutputType = {
    id: string | null
    simrsId: string | null
    name: string | null
    syncedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalCategoryMaxAggregateOutputType = {
    id: string | null
    simrsId: string | null
    name: string | null
    syncedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalCategoryCountAggregateOutputType = {
    id: number
    simrsId: number
    name: number
    syncedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicalCategoryMinAggregateInputType = {
    id?: true
    simrsId?: true
    name?: true
    syncedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalCategoryMaxAggregateInputType = {
    id?: true
    simrsId?: true
    name?: true
    syncedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalCategoryCountAggregateInputType = {
    id?: true
    simrsId?: true
    name?: true
    syncedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicalCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalCategory to aggregate.
     */
    where?: MedicalCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalCategories to fetch.
     */
    orderBy?: MedicalCategoryOrderByWithRelationInput | MedicalCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalCategories
    **/
    _count?: true | MedicalCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalCategoryMaxAggregateInputType
  }

  export type GetMedicalCategoryAggregateType<T extends MedicalCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalCategory[P]>
      : GetScalarType<T[P], AggregateMedicalCategory[P]>
  }




  export type MedicalCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalCategoryWhereInput
    orderBy?: MedicalCategoryOrderByWithAggregationInput | MedicalCategoryOrderByWithAggregationInput[]
    by: MedicalCategoryScalarFieldEnum[] | MedicalCategoryScalarFieldEnum
    having?: MedicalCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalCategoryCountAggregateInputType | true
    _min?: MedicalCategoryMinAggregateInputType
    _max?: MedicalCategoryMaxAggregateInputType
  }

  export type MedicalCategoryGroupByOutputType = {
    id: string
    simrsId: string
    name: string
    syncedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: MedicalCategoryCountAggregateOutputType | null
    _min: MedicalCategoryMinAggregateOutputType | null
    _max: MedicalCategoryMaxAggregateOutputType | null
  }

  type GetMedicalCategoryGroupByPayload<T extends MedicalCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalCategoryGroupByOutputType[P]>
        }
      >
    >


  export type MedicalCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simrsId?: boolean
    name?: boolean
    syncedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reservations?: boolean | MedicalCategory$reservationsArgs<ExtArgs>
    doctors?: boolean | MedicalCategory$doctorsArgs<ExtArgs>
    _count?: boolean | MedicalCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalCategory"]>

  export type MedicalCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simrsId?: boolean
    name?: boolean
    syncedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["medicalCategory"]>

  export type MedicalCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simrsId?: boolean
    name?: boolean
    syncedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["medicalCategory"]>

  export type MedicalCategorySelectScalar = {
    id?: boolean
    simrsId?: boolean
    name?: boolean
    syncedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicalCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "simrsId" | "name" | "syncedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["medicalCategory"]>
  export type MedicalCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | MedicalCategory$reservationsArgs<ExtArgs>
    doctors?: boolean | MedicalCategory$doctorsArgs<ExtArgs>
    _count?: boolean | MedicalCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicalCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MedicalCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MedicalCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalCategory"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      doctors: Prisma.$DoctorMedicalCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      simrsId: string
      name: string
      syncedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicalCategory"]>
    composites: {}
  }

  type MedicalCategoryGetPayload<S extends boolean | null | undefined | MedicalCategoryDefaultArgs> = $Result.GetResult<Prisma.$MedicalCategoryPayload, S>

  type MedicalCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalCategoryCountAggregateInputType | true
    }

  export interface MedicalCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalCategory'], meta: { name: 'MedicalCategory' } }
    /**
     * Find zero or one MedicalCategory that matches the filter.
     * @param {MedicalCategoryFindUniqueArgs} args - Arguments to find a MedicalCategory
     * @example
     * // Get one MedicalCategory
     * const medicalCategory = await prisma.medicalCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalCategoryFindUniqueArgs>(args: SelectSubset<T, MedicalCategoryFindUniqueArgs<ExtArgs>>): Prisma__MedicalCategoryClient<$Result.GetResult<Prisma.$MedicalCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicalCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalCategoryFindUniqueOrThrowArgs} args - Arguments to find a MedicalCategory
     * @example
     * // Get one MedicalCategory
     * const medicalCategory = await prisma.medicalCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalCategoryClient<$Result.GetResult<Prisma.$MedicalCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCategoryFindFirstArgs} args - Arguments to find a MedicalCategory
     * @example
     * // Get one MedicalCategory
     * const medicalCategory = await prisma.medicalCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalCategoryFindFirstArgs>(args?: SelectSubset<T, MedicalCategoryFindFirstArgs<ExtArgs>>): Prisma__MedicalCategoryClient<$Result.GetResult<Prisma.$MedicalCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCategoryFindFirstOrThrowArgs} args - Arguments to find a MedicalCategory
     * @example
     * // Get one MedicalCategory
     * const medicalCategory = await prisma.medicalCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalCategoryClient<$Result.GetResult<Prisma.$MedicalCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicalCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalCategories
     * const medicalCategories = await prisma.medicalCategory.findMany()
     * 
     * // Get first 10 MedicalCategories
     * const medicalCategories = await prisma.medicalCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalCategoryWithIdOnly = await prisma.medicalCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicalCategoryFindManyArgs>(args?: SelectSubset<T, MedicalCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicalCategory.
     * @param {MedicalCategoryCreateArgs} args - Arguments to create a MedicalCategory.
     * @example
     * // Create one MedicalCategory
     * const MedicalCategory = await prisma.medicalCategory.create({
     *   data: {
     *     // ... data to create a MedicalCategory
     *   }
     * })
     * 
     */
    create<T extends MedicalCategoryCreateArgs>(args: SelectSubset<T, MedicalCategoryCreateArgs<ExtArgs>>): Prisma__MedicalCategoryClient<$Result.GetResult<Prisma.$MedicalCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicalCategories.
     * @param {MedicalCategoryCreateManyArgs} args - Arguments to create many MedicalCategories.
     * @example
     * // Create many MedicalCategories
     * const medicalCategory = await prisma.medicalCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalCategoryCreateManyArgs>(args?: SelectSubset<T, MedicalCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicalCategories and returns the data saved in the database.
     * @param {MedicalCategoryCreateManyAndReturnArgs} args - Arguments to create many MedicalCategories.
     * @example
     * // Create many MedicalCategories
     * const medicalCategory = await prisma.medicalCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicalCategories and only return the `id`
     * const medicalCategoryWithIdOnly = await prisma.medicalCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicalCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicalCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicalCategory.
     * @param {MedicalCategoryDeleteArgs} args - Arguments to delete one MedicalCategory.
     * @example
     * // Delete one MedicalCategory
     * const MedicalCategory = await prisma.medicalCategory.delete({
     *   where: {
     *     // ... filter to delete one MedicalCategory
     *   }
     * })
     * 
     */
    delete<T extends MedicalCategoryDeleteArgs>(args: SelectSubset<T, MedicalCategoryDeleteArgs<ExtArgs>>): Prisma__MedicalCategoryClient<$Result.GetResult<Prisma.$MedicalCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicalCategory.
     * @param {MedicalCategoryUpdateArgs} args - Arguments to update one MedicalCategory.
     * @example
     * // Update one MedicalCategory
     * const medicalCategory = await prisma.medicalCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalCategoryUpdateArgs>(args: SelectSubset<T, MedicalCategoryUpdateArgs<ExtArgs>>): Prisma__MedicalCategoryClient<$Result.GetResult<Prisma.$MedicalCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicalCategories.
     * @param {MedicalCategoryDeleteManyArgs} args - Arguments to filter MedicalCategories to delete.
     * @example
     * // Delete a few MedicalCategories
     * const { count } = await prisma.medicalCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalCategoryDeleteManyArgs>(args?: SelectSubset<T, MedicalCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalCategories
     * const medicalCategory = await prisma.medicalCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalCategoryUpdateManyArgs>(args: SelectSubset<T, MedicalCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalCategories and returns the data updated in the database.
     * @param {MedicalCategoryUpdateManyAndReturnArgs} args - Arguments to update many MedicalCategories.
     * @example
     * // Update many MedicalCategories
     * const medicalCategory = await prisma.medicalCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicalCategories and only return the `id`
     * const medicalCategoryWithIdOnly = await prisma.medicalCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends MedicalCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicalCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicalCategory.
     * @param {MedicalCategoryUpsertArgs} args - Arguments to update or create a MedicalCategory.
     * @example
     * // Update or create a MedicalCategory
     * const medicalCategory = await prisma.medicalCategory.upsert({
     *   create: {
     *     // ... data to create a MedicalCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalCategory we want to update
     *   }
     * })
     */
    upsert<T extends MedicalCategoryUpsertArgs>(args: SelectSubset<T, MedicalCategoryUpsertArgs<ExtArgs>>): Prisma__MedicalCategoryClient<$Result.GetResult<Prisma.$MedicalCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicalCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCategoryCountArgs} args - Arguments to filter MedicalCategories to count.
     * @example
     * // Count the number of MedicalCategories
     * const count = await prisma.medicalCategory.count({
     *   where: {
     *     // ... the filter for the MedicalCategories we want to count
     *   }
     * })
    **/
    count<T extends MedicalCategoryCountArgs>(
      args?: Subset<T, MedicalCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicalCategoryAggregateArgs>(args: Subset<T, MedicalCategoryAggregateArgs>): Prisma.PrismaPromise<GetMedicalCategoryAggregateType<T>>

    /**
     * Group by MedicalCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCategoryGroupByArgs} args - Group by arguments.
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
      T extends MedicalCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalCategoryGroupByArgs['orderBy'] }
        : { orderBy?: MedicalCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicalCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalCategory model
   */
  readonly fields: MedicalCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends MedicalCategory$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, MedicalCategory$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    doctors<T extends MedicalCategory$doctorsArgs<ExtArgs> = {}>(args?: Subset<T, MedicalCategory$doctorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorMedicalCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MedicalCategory model
   */
  interface MedicalCategoryFieldRefs {
    readonly id: FieldRef<"MedicalCategory", 'String'>
    readonly simrsId: FieldRef<"MedicalCategory", 'String'>
    readonly name: FieldRef<"MedicalCategory", 'String'>
    readonly syncedAt: FieldRef<"MedicalCategory", 'DateTime'>
    readonly createdAt: FieldRef<"MedicalCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"MedicalCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicalCategory findUnique
   */
  export type MedicalCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCategory
     */
    select?: MedicalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCategory
     */
    omit?: MedicalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCategory to fetch.
     */
    where: MedicalCategoryWhereUniqueInput
  }

  /**
   * MedicalCategory findUniqueOrThrow
   */
  export type MedicalCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCategory
     */
    select?: MedicalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCategory
     */
    omit?: MedicalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCategory to fetch.
     */
    where: MedicalCategoryWhereUniqueInput
  }

  /**
   * MedicalCategory findFirst
   */
  export type MedicalCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCategory
     */
    select?: MedicalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCategory
     */
    omit?: MedicalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCategory to fetch.
     */
    where?: MedicalCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalCategories to fetch.
     */
    orderBy?: MedicalCategoryOrderByWithRelationInput | MedicalCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalCategories.
     */
    cursor?: MedicalCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalCategories.
     */
    distinct?: MedicalCategoryScalarFieldEnum | MedicalCategoryScalarFieldEnum[]
  }

  /**
   * MedicalCategory findFirstOrThrow
   */
  export type MedicalCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCategory
     */
    select?: MedicalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCategory
     */
    omit?: MedicalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCategory to fetch.
     */
    where?: MedicalCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalCategories to fetch.
     */
    orderBy?: MedicalCategoryOrderByWithRelationInput | MedicalCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalCategories.
     */
    cursor?: MedicalCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalCategories.
     */
    distinct?: MedicalCategoryScalarFieldEnum | MedicalCategoryScalarFieldEnum[]
  }

  /**
   * MedicalCategory findMany
   */
  export type MedicalCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCategory
     */
    select?: MedicalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCategory
     */
    omit?: MedicalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicalCategories to fetch.
     */
    where?: MedicalCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalCategories to fetch.
     */
    orderBy?: MedicalCategoryOrderByWithRelationInput | MedicalCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalCategories.
     */
    cursor?: MedicalCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalCategories.
     */
    skip?: number
    distinct?: MedicalCategoryScalarFieldEnum | MedicalCategoryScalarFieldEnum[]
  }

  /**
   * MedicalCategory create
   */
  export type MedicalCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCategory
     */
    select?: MedicalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCategory
     */
    omit?: MedicalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalCategory.
     */
    data: XOR<MedicalCategoryCreateInput, MedicalCategoryUncheckedCreateInput>
  }

  /**
   * MedicalCategory createMany
   */
  export type MedicalCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalCategories.
     */
    data: MedicalCategoryCreateManyInput | MedicalCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicalCategory createManyAndReturn
   */
  export type MedicalCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCategory
     */
    select?: MedicalCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCategory
     */
    omit?: MedicalCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many MedicalCategories.
     */
    data: MedicalCategoryCreateManyInput | MedicalCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicalCategory update
   */
  export type MedicalCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCategory
     */
    select?: MedicalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCategory
     */
    omit?: MedicalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalCategory.
     */
    data: XOR<MedicalCategoryUpdateInput, MedicalCategoryUncheckedUpdateInput>
    /**
     * Choose, which MedicalCategory to update.
     */
    where: MedicalCategoryWhereUniqueInput
  }

  /**
   * MedicalCategory updateMany
   */
  export type MedicalCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalCategories.
     */
    data: XOR<MedicalCategoryUpdateManyMutationInput, MedicalCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MedicalCategories to update
     */
    where?: MedicalCategoryWhereInput
    /**
     * Limit how many MedicalCategories to update.
     */
    limit?: number
  }

  /**
   * MedicalCategory updateManyAndReturn
   */
  export type MedicalCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCategory
     */
    select?: MedicalCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCategory
     */
    omit?: MedicalCategoryOmit<ExtArgs> | null
    /**
     * The data used to update MedicalCategories.
     */
    data: XOR<MedicalCategoryUpdateManyMutationInput, MedicalCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MedicalCategories to update
     */
    where?: MedicalCategoryWhereInput
    /**
     * Limit how many MedicalCategories to update.
     */
    limit?: number
  }

  /**
   * MedicalCategory upsert
   */
  export type MedicalCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCategory
     */
    select?: MedicalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCategory
     */
    omit?: MedicalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalCategory to update in case it exists.
     */
    where: MedicalCategoryWhereUniqueInput
    /**
     * In case the MedicalCategory found by the `where` argument doesn't exist, create a new MedicalCategory with this data.
     */
    create: XOR<MedicalCategoryCreateInput, MedicalCategoryUncheckedCreateInput>
    /**
     * In case the MedicalCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalCategoryUpdateInput, MedicalCategoryUncheckedUpdateInput>
  }

  /**
   * MedicalCategory delete
   */
  export type MedicalCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCategory
     */
    select?: MedicalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCategory
     */
    omit?: MedicalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCategoryInclude<ExtArgs> | null
    /**
     * Filter which MedicalCategory to delete.
     */
    where: MedicalCategoryWhereUniqueInput
  }

  /**
   * MedicalCategory deleteMany
   */
  export type MedicalCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalCategories to delete
     */
    where?: MedicalCategoryWhereInput
    /**
     * Limit how many MedicalCategories to delete.
     */
    limit?: number
  }

  /**
   * MedicalCategory.reservations
   */
  export type MedicalCategory$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * MedicalCategory.doctors
   */
  export type MedicalCategory$doctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorMedicalCategory
     */
    select?: DoctorMedicalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorMedicalCategory
     */
    omit?: DoctorMedicalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorMedicalCategoryInclude<ExtArgs> | null
    where?: DoctorMedicalCategoryWhereInput
    orderBy?: DoctorMedicalCategoryOrderByWithRelationInput | DoctorMedicalCategoryOrderByWithRelationInput[]
    cursor?: DoctorMedicalCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorMedicalCategoryScalarFieldEnum | DoctorMedicalCategoryScalarFieldEnum[]
  }

  /**
   * MedicalCategory without action
   */
  export type MedicalCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalCategory
     */
    select?: MedicalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalCategory
     */
    omit?: MedicalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorMinAggregateOutputType = {
    id: string | null
    simrsId: string | null
    name: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: string | null
    simrsId: string | null
    name: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    simrsId: number
    name: number
    code: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DoctorMinAggregateInputType = {
    id?: true
    simrsId?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    simrsId?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    simrsId?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: string
    simrsId: string
    name: string
    code: string
    createdAt: Date
    updatedAt: Date
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simrsId?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reservations?: boolean | Doctor$reservationsArgs<ExtArgs>
    schedules?: boolean | Doctor$schedulesArgs<ExtArgs>
    medicalCategories?: boolean | Doctor$medicalCategoriesArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simrsId?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simrsId?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectScalar = {
    id?: boolean
    simrsId?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DoctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "simrsId" | "name" | "code" | "createdAt" | "updatedAt", ExtArgs["result"]["doctor"]>
  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | Doctor$reservationsArgs<ExtArgs>
    schedules?: boolean | Doctor$schedulesArgs<ExtArgs>
    medicalCategories?: boolean | Doctor$medicalCategoriesArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DoctorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      schedules: Prisma.$DoctorSchedulePayload<ExtArgs>[]
      medicalCategories: Prisma.$DoctorMedicalCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      simrsId: string
      name: string
      code: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFindUniqueArgs>(args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFindFirstArgs>(args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorFindManyArgs>(args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends DoctorCreateArgs>(args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorCreateManyArgs>(args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {DoctorCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends DoctorDeleteArgs>(args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorUpdateArgs>(args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDeleteManyArgs>(args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorUpdateManyArgs>(args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {DoctorUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.updateManyAndReturn({
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
    updateManyAndReturn<T extends DoctorUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends DoctorUpsertArgs>(args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
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
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends Doctor$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends Doctor$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medicalCategories<T extends Doctor$medicalCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$medicalCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorMedicalCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Doctor model
   */
  interface DoctorFieldRefs {
    readonly id: FieldRef<"Doctor", 'String'>
    readonly simrsId: FieldRef<"Doctor", 'String'>
    readonly name: FieldRef<"Doctor", 'String'>
    readonly code: FieldRef<"Doctor", 'String'>
    readonly createdAt: FieldRef<"Doctor", 'DateTime'>
    readonly updatedAt: FieldRef<"Doctor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor createManyAndReturn
   */
  export type DoctorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor updateManyAndReturn
   */
  export type DoctorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctor.reservations
   */
  export type Doctor$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Doctor.schedules
   */
  export type Doctor$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleInclude<ExtArgs> | null
    where?: DoctorScheduleWhereInput
    orderBy?: DoctorScheduleOrderByWithRelationInput | DoctorScheduleOrderByWithRelationInput[]
    cursor?: DoctorScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorScheduleScalarFieldEnum | DoctorScheduleScalarFieldEnum[]
  }

  /**
   * Doctor.medicalCategories
   */
  export type Doctor$medicalCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorMedicalCategory
     */
    select?: DoctorMedicalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorMedicalCategory
     */
    omit?: DoctorMedicalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorMedicalCategoryInclude<ExtArgs> | null
    where?: DoctorMedicalCategoryWhereInput
    orderBy?: DoctorMedicalCategoryOrderByWithRelationInput | DoctorMedicalCategoryOrderByWithRelationInput[]
    cursor?: DoctorMedicalCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorMedicalCategoryScalarFieldEnum | DoctorMedicalCategoryScalarFieldEnum[]
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
  }


  /**
   * Model DoctorMedicalCategory
   */

  export type AggregateDoctorMedicalCategory = {
    _count: DoctorMedicalCategoryCountAggregateOutputType | null
    _min: DoctorMedicalCategoryMinAggregateOutputType | null
    _max: DoctorMedicalCategoryMaxAggregateOutputType | null
  }

  export type DoctorMedicalCategoryMinAggregateOutputType = {
    id: string | null
    doctorId: string | null
    medicalCategoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorMedicalCategoryMaxAggregateOutputType = {
    id: string | null
    doctorId: string | null
    medicalCategoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorMedicalCategoryCountAggregateOutputType = {
    id: number
    doctorId: number
    medicalCategoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DoctorMedicalCategoryMinAggregateInputType = {
    id?: true
    doctorId?: true
    medicalCategoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorMedicalCategoryMaxAggregateInputType = {
    id?: true
    doctorId?: true
    medicalCategoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorMedicalCategoryCountAggregateInputType = {
    id?: true
    doctorId?: true
    medicalCategoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DoctorMedicalCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorMedicalCategory to aggregate.
     */
    where?: DoctorMedicalCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorMedicalCategories to fetch.
     */
    orderBy?: DoctorMedicalCategoryOrderByWithRelationInput | DoctorMedicalCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorMedicalCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorMedicalCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorMedicalCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorMedicalCategories
    **/
    _count?: true | DoctorMedicalCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMedicalCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMedicalCategoryMaxAggregateInputType
  }

  export type GetDoctorMedicalCategoryAggregateType<T extends DoctorMedicalCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorMedicalCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorMedicalCategory[P]>
      : GetScalarType<T[P], AggregateDoctorMedicalCategory[P]>
  }




  export type DoctorMedicalCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorMedicalCategoryWhereInput
    orderBy?: DoctorMedicalCategoryOrderByWithAggregationInput | DoctorMedicalCategoryOrderByWithAggregationInput[]
    by: DoctorMedicalCategoryScalarFieldEnum[] | DoctorMedicalCategoryScalarFieldEnum
    having?: DoctorMedicalCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorMedicalCategoryCountAggregateInputType | true
    _min?: DoctorMedicalCategoryMinAggregateInputType
    _max?: DoctorMedicalCategoryMaxAggregateInputType
  }

  export type DoctorMedicalCategoryGroupByOutputType = {
    id: string
    doctorId: string
    medicalCategoryId: string
    createdAt: Date
    updatedAt: Date
    _count: DoctorMedicalCategoryCountAggregateOutputType | null
    _min: DoctorMedicalCategoryMinAggregateOutputType | null
    _max: DoctorMedicalCategoryMaxAggregateOutputType | null
  }

  type GetDoctorMedicalCategoryGroupByPayload<T extends DoctorMedicalCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorMedicalCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorMedicalCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorMedicalCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorMedicalCategoryGroupByOutputType[P]>
        }
      >
    >


  export type DoctorMedicalCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    medicalCategoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    medicalCategory?: boolean | MedicalCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorMedicalCategory"]>

  export type DoctorMedicalCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    medicalCategoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    medicalCategory?: boolean | MedicalCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorMedicalCategory"]>

  export type DoctorMedicalCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    medicalCategoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    medicalCategory?: boolean | MedicalCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorMedicalCategory"]>

  export type DoctorMedicalCategorySelectScalar = {
    id?: boolean
    doctorId?: boolean
    medicalCategoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DoctorMedicalCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "medicalCategoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["doctorMedicalCategory"]>
  export type DoctorMedicalCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    medicalCategory?: boolean | MedicalCategoryDefaultArgs<ExtArgs>
  }
  export type DoctorMedicalCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    medicalCategory?: boolean | MedicalCategoryDefaultArgs<ExtArgs>
  }
  export type DoctorMedicalCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    medicalCategory?: boolean | MedicalCategoryDefaultArgs<ExtArgs>
  }

  export type $DoctorMedicalCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorMedicalCategory"
    objects: {
      doctor: Prisma.$DoctorPayload<ExtArgs>
      medicalCategory: Prisma.$MedicalCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorId: string
      medicalCategoryId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["doctorMedicalCategory"]>
    composites: {}
  }

  type DoctorMedicalCategoryGetPayload<S extends boolean | null | undefined | DoctorMedicalCategoryDefaultArgs> = $Result.GetResult<Prisma.$DoctorMedicalCategoryPayload, S>

  type DoctorMedicalCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorMedicalCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorMedicalCategoryCountAggregateInputType | true
    }

  export interface DoctorMedicalCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorMedicalCategory'], meta: { name: 'DoctorMedicalCategory' } }
    /**
     * Find zero or one DoctorMedicalCategory that matches the filter.
     * @param {DoctorMedicalCategoryFindUniqueArgs} args - Arguments to find a DoctorMedicalCategory
     * @example
     * // Get one DoctorMedicalCategory
     * const doctorMedicalCategory = await prisma.doctorMedicalCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorMedicalCategoryFindUniqueArgs>(args: SelectSubset<T, DoctorMedicalCategoryFindUniqueArgs<ExtArgs>>): Prisma__DoctorMedicalCategoryClient<$Result.GetResult<Prisma.$DoctorMedicalCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorMedicalCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorMedicalCategoryFindUniqueOrThrowArgs} args - Arguments to find a DoctorMedicalCategory
     * @example
     * // Get one DoctorMedicalCategory
     * const doctorMedicalCategory = await prisma.doctorMedicalCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorMedicalCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorMedicalCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorMedicalCategoryClient<$Result.GetResult<Prisma.$DoctorMedicalCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorMedicalCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorMedicalCategoryFindFirstArgs} args - Arguments to find a DoctorMedicalCategory
     * @example
     * // Get one DoctorMedicalCategory
     * const doctorMedicalCategory = await prisma.doctorMedicalCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorMedicalCategoryFindFirstArgs>(args?: SelectSubset<T, DoctorMedicalCategoryFindFirstArgs<ExtArgs>>): Prisma__DoctorMedicalCategoryClient<$Result.GetResult<Prisma.$DoctorMedicalCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorMedicalCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorMedicalCategoryFindFirstOrThrowArgs} args - Arguments to find a DoctorMedicalCategory
     * @example
     * // Get one DoctorMedicalCategory
     * const doctorMedicalCategory = await prisma.doctorMedicalCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorMedicalCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorMedicalCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorMedicalCategoryClient<$Result.GetResult<Prisma.$DoctorMedicalCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorMedicalCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorMedicalCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorMedicalCategories
     * const doctorMedicalCategories = await prisma.doctorMedicalCategory.findMany()
     * 
     * // Get first 10 DoctorMedicalCategories
     * const doctorMedicalCategories = await prisma.doctorMedicalCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorMedicalCategoryWithIdOnly = await prisma.doctorMedicalCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorMedicalCategoryFindManyArgs>(args?: SelectSubset<T, DoctorMedicalCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorMedicalCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorMedicalCategory.
     * @param {DoctorMedicalCategoryCreateArgs} args - Arguments to create a DoctorMedicalCategory.
     * @example
     * // Create one DoctorMedicalCategory
     * const DoctorMedicalCategory = await prisma.doctorMedicalCategory.create({
     *   data: {
     *     // ... data to create a DoctorMedicalCategory
     *   }
     * })
     * 
     */
    create<T extends DoctorMedicalCategoryCreateArgs>(args: SelectSubset<T, DoctorMedicalCategoryCreateArgs<ExtArgs>>): Prisma__DoctorMedicalCategoryClient<$Result.GetResult<Prisma.$DoctorMedicalCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorMedicalCategories.
     * @param {DoctorMedicalCategoryCreateManyArgs} args - Arguments to create many DoctorMedicalCategories.
     * @example
     * // Create many DoctorMedicalCategories
     * const doctorMedicalCategory = await prisma.doctorMedicalCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorMedicalCategoryCreateManyArgs>(args?: SelectSubset<T, DoctorMedicalCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoctorMedicalCategories and returns the data saved in the database.
     * @param {DoctorMedicalCategoryCreateManyAndReturnArgs} args - Arguments to create many DoctorMedicalCategories.
     * @example
     * // Create many DoctorMedicalCategories
     * const doctorMedicalCategory = await prisma.doctorMedicalCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoctorMedicalCategories and only return the `id`
     * const doctorMedicalCategoryWithIdOnly = await prisma.doctorMedicalCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorMedicalCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorMedicalCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorMedicalCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoctorMedicalCategory.
     * @param {DoctorMedicalCategoryDeleteArgs} args - Arguments to delete one DoctorMedicalCategory.
     * @example
     * // Delete one DoctorMedicalCategory
     * const DoctorMedicalCategory = await prisma.doctorMedicalCategory.delete({
     *   where: {
     *     // ... filter to delete one DoctorMedicalCategory
     *   }
     * })
     * 
     */
    delete<T extends DoctorMedicalCategoryDeleteArgs>(args: SelectSubset<T, DoctorMedicalCategoryDeleteArgs<ExtArgs>>): Prisma__DoctorMedicalCategoryClient<$Result.GetResult<Prisma.$DoctorMedicalCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorMedicalCategory.
     * @param {DoctorMedicalCategoryUpdateArgs} args - Arguments to update one DoctorMedicalCategory.
     * @example
     * // Update one DoctorMedicalCategory
     * const doctorMedicalCategory = await prisma.doctorMedicalCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorMedicalCategoryUpdateArgs>(args: SelectSubset<T, DoctorMedicalCategoryUpdateArgs<ExtArgs>>): Prisma__DoctorMedicalCategoryClient<$Result.GetResult<Prisma.$DoctorMedicalCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorMedicalCategories.
     * @param {DoctorMedicalCategoryDeleteManyArgs} args - Arguments to filter DoctorMedicalCategories to delete.
     * @example
     * // Delete a few DoctorMedicalCategories
     * const { count } = await prisma.doctorMedicalCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorMedicalCategoryDeleteManyArgs>(args?: SelectSubset<T, DoctorMedicalCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorMedicalCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorMedicalCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorMedicalCategories
     * const doctorMedicalCategory = await prisma.doctorMedicalCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorMedicalCategoryUpdateManyArgs>(args: SelectSubset<T, DoctorMedicalCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorMedicalCategories and returns the data updated in the database.
     * @param {DoctorMedicalCategoryUpdateManyAndReturnArgs} args - Arguments to update many DoctorMedicalCategories.
     * @example
     * // Update many DoctorMedicalCategories
     * const doctorMedicalCategory = await prisma.doctorMedicalCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoctorMedicalCategories and only return the `id`
     * const doctorMedicalCategoryWithIdOnly = await prisma.doctorMedicalCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends DoctorMedicalCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorMedicalCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorMedicalCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoctorMedicalCategory.
     * @param {DoctorMedicalCategoryUpsertArgs} args - Arguments to update or create a DoctorMedicalCategory.
     * @example
     * // Update or create a DoctorMedicalCategory
     * const doctorMedicalCategory = await prisma.doctorMedicalCategory.upsert({
     *   create: {
     *     // ... data to create a DoctorMedicalCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorMedicalCategory we want to update
     *   }
     * })
     */
    upsert<T extends DoctorMedicalCategoryUpsertArgs>(args: SelectSubset<T, DoctorMedicalCategoryUpsertArgs<ExtArgs>>): Prisma__DoctorMedicalCategoryClient<$Result.GetResult<Prisma.$DoctorMedicalCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorMedicalCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorMedicalCategoryCountArgs} args - Arguments to filter DoctorMedicalCategories to count.
     * @example
     * // Count the number of DoctorMedicalCategories
     * const count = await prisma.doctorMedicalCategory.count({
     *   where: {
     *     // ... the filter for the DoctorMedicalCategories we want to count
     *   }
     * })
    **/
    count<T extends DoctorMedicalCategoryCountArgs>(
      args?: Subset<T, DoctorMedicalCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorMedicalCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorMedicalCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorMedicalCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorMedicalCategoryAggregateArgs>(args: Subset<T, DoctorMedicalCategoryAggregateArgs>): Prisma.PrismaPromise<GetDoctorMedicalCategoryAggregateType<T>>

    /**
     * Group by DoctorMedicalCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorMedicalCategoryGroupByArgs} args - Group by arguments.
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
      T extends DoctorMedicalCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorMedicalCategoryGroupByArgs['orderBy'] }
        : { orderBy?: DoctorMedicalCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorMedicalCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorMedicalCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorMedicalCategory model
   */
  readonly fields: DoctorMedicalCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorMedicalCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorMedicalCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medicalCategory<T extends MedicalCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicalCategoryDefaultArgs<ExtArgs>>): Prisma__MedicalCategoryClient<$Result.GetResult<Prisma.$MedicalCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DoctorMedicalCategory model
   */
  interface DoctorMedicalCategoryFieldRefs {
    readonly id: FieldRef<"DoctorMedicalCategory", 'String'>
    readonly doctorId: FieldRef<"DoctorMedicalCategory", 'String'>
    readonly medicalCategoryId: FieldRef<"DoctorMedicalCategory", 'String'>
    readonly createdAt: FieldRef<"DoctorMedicalCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"DoctorMedicalCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DoctorMedicalCategory findUnique
   */
  export type DoctorMedicalCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorMedicalCategory
     */
    select?: DoctorMedicalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorMedicalCategory
     */
    omit?: DoctorMedicalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorMedicalCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DoctorMedicalCategory to fetch.
     */
    where: DoctorMedicalCategoryWhereUniqueInput
  }

  /**
   * DoctorMedicalCategory findUniqueOrThrow
   */
  export type DoctorMedicalCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorMedicalCategory
     */
    select?: DoctorMedicalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorMedicalCategory
     */
    omit?: DoctorMedicalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorMedicalCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DoctorMedicalCategory to fetch.
     */
    where: DoctorMedicalCategoryWhereUniqueInput
  }

  /**
   * DoctorMedicalCategory findFirst
   */
  export type DoctorMedicalCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorMedicalCategory
     */
    select?: DoctorMedicalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorMedicalCategory
     */
    omit?: DoctorMedicalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorMedicalCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DoctorMedicalCategory to fetch.
     */
    where?: DoctorMedicalCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorMedicalCategories to fetch.
     */
    orderBy?: DoctorMedicalCategoryOrderByWithRelationInput | DoctorMedicalCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorMedicalCategories.
     */
    cursor?: DoctorMedicalCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorMedicalCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorMedicalCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorMedicalCategories.
     */
    distinct?: DoctorMedicalCategoryScalarFieldEnum | DoctorMedicalCategoryScalarFieldEnum[]
  }

  /**
   * DoctorMedicalCategory findFirstOrThrow
   */
  export type DoctorMedicalCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorMedicalCategory
     */
    select?: DoctorMedicalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorMedicalCategory
     */
    omit?: DoctorMedicalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorMedicalCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DoctorMedicalCategory to fetch.
     */
    where?: DoctorMedicalCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorMedicalCategories to fetch.
     */
    orderBy?: DoctorMedicalCategoryOrderByWithRelationInput | DoctorMedicalCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorMedicalCategories.
     */
    cursor?: DoctorMedicalCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorMedicalCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorMedicalCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorMedicalCategories.
     */
    distinct?: DoctorMedicalCategoryScalarFieldEnum | DoctorMedicalCategoryScalarFieldEnum[]
  }

  /**
   * DoctorMedicalCategory findMany
   */
  export type DoctorMedicalCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorMedicalCategory
     */
    select?: DoctorMedicalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorMedicalCategory
     */
    omit?: DoctorMedicalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorMedicalCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DoctorMedicalCategories to fetch.
     */
    where?: DoctorMedicalCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorMedicalCategories to fetch.
     */
    orderBy?: DoctorMedicalCategoryOrderByWithRelationInput | DoctorMedicalCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorMedicalCategories.
     */
    cursor?: DoctorMedicalCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorMedicalCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorMedicalCategories.
     */
    skip?: number
    distinct?: DoctorMedicalCategoryScalarFieldEnum | DoctorMedicalCategoryScalarFieldEnum[]
  }

  /**
   * DoctorMedicalCategory create
   */
  export type DoctorMedicalCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorMedicalCategory
     */
    select?: DoctorMedicalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorMedicalCategory
     */
    omit?: DoctorMedicalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorMedicalCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorMedicalCategory.
     */
    data: XOR<DoctorMedicalCategoryCreateInput, DoctorMedicalCategoryUncheckedCreateInput>
  }

  /**
   * DoctorMedicalCategory createMany
   */
  export type DoctorMedicalCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorMedicalCategories.
     */
    data: DoctorMedicalCategoryCreateManyInput | DoctorMedicalCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorMedicalCategory createManyAndReturn
   */
  export type DoctorMedicalCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorMedicalCategory
     */
    select?: DoctorMedicalCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorMedicalCategory
     */
    omit?: DoctorMedicalCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many DoctorMedicalCategories.
     */
    data: DoctorMedicalCategoryCreateManyInput | DoctorMedicalCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorMedicalCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorMedicalCategory update
   */
  export type DoctorMedicalCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorMedicalCategory
     */
    select?: DoctorMedicalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorMedicalCategory
     */
    omit?: DoctorMedicalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorMedicalCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorMedicalCategory.
     */
    data: XOR<DoctorMedicalCategoryUpdateInput, DoctorMedicalCategoryUncheckedUpdateInput>
    /**
     * Choose, which DoctorMedicalCategory to update.
     */
    where: DoctorMedicalCategoryWhereUniqueInput
  }

  /**
   * DoctorMedicalCategory updateMany
   */
  export type DoctorMedicalCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorMedicalCategories.
     */
    data: XOR<DoctorMedicalCategoryUpdateManyMutationInput, DoctorMedicalCategoryUncheckedUpdateManyInput>
    /**
     * Filter which DoctorMedicalCategories to update
     */
    where?: DoctorMedicalCategoryWhereInput
    /**
     * Limit how many DoctorMedicalCategories to update.
     */
    limit?: number
  }

  /**
   * DoctorMedicalCategory updateManyAndReturn
   */
  export type DoctorMedicalCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorMedicalCategory
     */
    select?: DoctorMedicalCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorMedicalCategory
     */
    omit?: DoctorMedicalCategoryOmit<ExtArgs> | null
    /**
     * The data used to update DoctorMedicalCategories.
     */
    data: XOR<DoctorMedicalCategoryUpdateManyMutationInput, DoctorMedicalCategoryUncheckedUpdateManyInput>
    /**
     * Filter which DoctorMedicalCategories to update
     */
    where?: DoctorMedicalCategoryWhereInput
    /**
     * Limit how many DoctorMedicalCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorMedicalCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorMedicalCategory upsert
   */
  export type DoctorMedicalCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorMedicalCategory
     */
    select?: DoctorMedicalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorMedicalCategory
     */
    omit?: DoctorMedicalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorMedicalCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorMedicalCategory to update in case it exists.
     */
    where: DoctorMedicalCategoryWhereUniqueInput
    /**
     * In case the DoctorMedicalCategory found by the `where` argument doesn't exist, create a new DoctorMedicalCategory with this data.
     */
    create: XOR<DoctorMedicalCategoryCreateInput, DoctorMedicalCategoryUncheckedCreateInput>
    /**
     * In case the DoctorMedicalCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorMedicalCategoryUpdateInput, DoctorMedicalCategoryUncheckedUpdateInput>
  }

  /**
   * DoctorMedicalCategory delete
   */
  export type DoctorMedicalCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorMedicalCategory
     */
    select?: DoctorMedicalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorMedicalCategory
     */
    omit?: DoctorMedicalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorMedicalCategoryInclude<ExtArgs> | null
    /**
     * Filter which DoctorMedicalCategory to delete.
     */
    where: DoctorMedicalCategoryWhereUniqueInput
  }

  /**
   * DoctorMedicalCategory deleteMany
   */
  export type DoctorMedicalCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorMedicalCategories to delete
     */
    where?: DoctorMedicalCategoryWhereInput
    /**
     * Limit how many DoctorMedicalCategories to delete.
     */
    limit?: number
  }

  /**
   * DoctorMedicalCategory without action
   */
  export type DoctorMedicalCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorMedicalCategory
     */
    select?: DoctorMedicalCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorMedicalCategory
     */
    omit?: DoctorMedicalCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorMedicalCategoryInclude<ExtArgs> | null
  }


  /**
   * Model DoctorSchedule
   */

  export type AggregateDoctorSchedule = {
    _count: DoctorScheduleCountAggregateOutputType | null
    _min: DoctorScheduleMinAggregateOutputType | null
    _max: DoctorScheduleMaxAggregateOutputType | null
  }

  export type DoctorScheduleMinAggregateOutputType = {
    id: string | null
    simrsId: string | null
    doctorId: string | null
    specialization: string | null
    day: string | null
    startTime: string | null
    endTime: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorScheduleMaxAggregateOutputType = {
    id: string | null
    simrsId: string | null
    doctorId: string | null
    specialization: string | null
    day: string | null
    startTime: string | null
    endTime: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorScheduleCountAggregateOutputType = {
    id: number
    simrsId: number
    doctorId: number
    specialization: number
    day: number
    startTime: number
    endTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DoctorScheduleMinAggregateInputType = {
    id?: true
    simrsId?: true
    doctorId?: true
    specialization?: true
    day?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorScheduleMaxAggregateInputType = {
    id?: true
    simrsId?: true
    doctorId?: true
    specialization?: true
    day?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorScheduleCountAggregateInputType = {
    id?: true
    simrsId?: true
    doctorId?: true
    specialization?: true
    day?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DoctorScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSchedule to aggregate.
     */
    where?: DoctorScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSchedules to fetch.
     */
    orderBy?: DoctorScheduleOrderByWithRelationInput | DoctorScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorSchedules
    **/
    _count?: true | DoctorScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorScheduleMaxAggregateInputType
  }

  export type GetDoctorScheduleAggregateType<T extends DoctorScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorSchedule[P]>
      : GetScalarType<T[P], AggregateDoctorSchedule[P]>
  }




  export type DoctorScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorScheduleWhereInput
    orderBy?: DoctorScheduleOrderByWithAggregationInput | DoctorScheduleOrderByWithAggregationInput[]
    by: DoctorScheduleScalarFieldEnum[] | DoctorScheduleScalarFieldEnum
    having?: DoctorScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorScheduleCountAggregateInputType | true
    _min?: DoctorScheduleMinAggregateInputType
    _max?: DoctorScheduleMaxAggregateInputType
  }

  export type DoctorScheduleGroupByOutputType = {
    id: string
    simrsId: string
    doctorId: string
    specialization: string
    day: string
    startTime: string
    endTime: string
    createdAt: Date
    updatedAt: Date
    _count: DoctorScheduleCountAggregateOutputType | null
    _min: DoctorScheduleMinAggregateOutputType | null
    _max: DoctorScheduleMaxAggregateOutputType | null
  }

  type GetDoctorScheduleGroupByPayload<T extends DoctorScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorScheduleGroupByOutputType[P]>
        }
      >
    >


  export type DoctorScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simrsId?: boolean
    doctorId?: boolean
    specialization?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSchedule"]>

  export type DoctorScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simrsId?: boolean
    doctorId?: boolean
    specialization?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSchedule"]>

  export type DoctorScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simrsId?: boolean
    doctorId?: boolean
    specialization?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSchedule"]>

  export type DoctorScheduleSelectScalar = {
    id?: boolean
    simrsId?: boolean
    doctorId?: boolean
    specialization?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DoctorScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "simrsId" | "doctorId" | "specialization" | "day" | "startTime" | "endTime" | "createdAt" | "updatedAt", ExtArgs["result"]["doctorSchedule"]>
  export type DoctorScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type DoctorScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type DoctorScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }

  export type $DoctorSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorSchedule"
    objects: {
      doctor: Prisma.$DoctorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      simrsId: string
      doctorId: string
      specialization: string
      day: string
      startTime: string
      endTime: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["doctorSchedule"]>
    composites: {}
  }

  type DoctorScheduleGetPayload<S extends boolean | null | undefined | DoctorScheduleDefaultArgs> = $Result.GetResult<Prisma.$DoctorSchedulePayload, S>

  type DoctorScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorScheduleCountAggregateInputType | true
    }

  export interface DoctorScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorSchedule'], meta: { name: 'DoctorSchedule' } }
    /**
     * Find zero or one DoctorSchedule that matches the filter.
     * @param {DoctorScheduleFindUniqueArgs} args - Arguments to find a DoctorSchedule
     * @example
     * // Get one DoctorSchedule
     * const doctorSchedule = await prisma.doctorSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorScheduleFindUniqueArgs>(args: SelectSubset<T, DoctorScheduleFindUniqueArgs<ExtArgs>>): Prisma__DoctorScheduleClient<$Result.GetResult<Prisma.$DoctorSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorScheduleFindUniqueOrThrowArgs} args - Arguments to find a DoctorSchedule
     * @example
     * // Get one DoctorSchedule
     * const doctorSchedule = await prisma.doctorSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorScheduleClient<$Result.GetResult<Prisma.$DoctorSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorScheduleFindFirstArgs} args - Arguments to find a DoctorSchedule
     * @example
     * // Get one DoctorSchedule
     * const doctorSchedule = await prisma.doctorSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorScheduleFindFirstArgs>(args?: SelectSubset<T, DoctorScheduleFindFirstArgs<ExtArgs>>): Prisma__DoctorScheduleClient<$Result.GetResult<Prisma.$DoctorSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorScheduleFindFirstOrThrowArgs} args - Arguments to find a DoctorSchedule
     * @example
     * // Get one DoctorSchedule
     * const doctorSchedule = await prisma.doctorSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorScheduleClient<$Result.GetResult<Prisma.$DoctorSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedule.findMany()
     * 
     * // Get first 10 DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorScheduleWithIdOnly = await prisma.doctorSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorScheduleFindManyArgs>(args?: SelectSubset<T, DoctorScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorSchedule.
     * @param {DoctorScheduleCreateArgs} args - Arguments to create a DoctorSchedule.
     * @example
     * // Create one DoctorSchedule
     * const DoctorSchedule = await prisma.doctorSchedule.create({
     *   data: {
     *     // ... data to create a DoctorSchedule
     *   }
     * })
     * 
     */
    create<T extends DoctorScheduleCreateArgs>(args: SelectSubset<T, DoctorScheduleCreateArgs<ExtArgs>>): Prisma__DoctorScheduleClient<$Result.GetResult<Prisma.$DoctorSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorSchedules.
     * @param {DoctorScheduleCreateManyArgs} args - Arguments to create many DoctorSchedules.
     * @example
     * // Create many DoctorSchedules
     * const doctorSchedule = await prisma.doctorSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorScheduleCreateManyArgs>(args?: SelectSubset<T, DoctorScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoctorSchedules and returns the data saved in the database.
     * @param {DoctorScheduleCreateManyAndReturnArgs} args - Arguments to create many DoctorSchedules.
     * @example
     * // Create many DoctorSchedules
     * const doctorSchedule = await prisma.doctorSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoctorSchedules and only return the `id`
     * const doctorScheduleWithIdOnly = await prisma.doctorSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoctorSchedule.
     * @param {DoctorScheduleDeleteArgs} args - Arguments to delete one DoctorSchedule.
     * @example
     * // Delete one DoctorSchedule
     * const DoctorSchedule = await prisma.doctorSchedule.delete({
     *   where: {
     *     // ... filter to delete one DoctorSchedule
     *   }
     * })
     * 
     */
    delete<T extends DoctorScheduleDeleteArgs>(args: SelectSubset<T, DoctorScheduleDeleteArgs<ExtArgs>>): Prisma__DoctorScheduleClient<$Result.GetResult<Prisma.$DoctorSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorSchedule.
     * @param {DoctorScheduleUpdateArgs} args - Arguments to update one DoctorSchedule.
     * @example
     * // Update one DoctorSchedule
     * const doctorSchedule = await prisma.doctorSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorScheduleUpdateArgs>(args: SelectSubset<T, DoctorScheduleUpdateArgs<ExtArgs>>): Prisma__DoctorScheduleClient<$Result.GetResult<Prisma.$DoctorSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorSchedules.
     * @param {DoctorScheduleDeleteManyArgs} args - Arguments to filter DoctorSchedules to delete.
     * @example
     * // Delete a few DoctorSchedules
     * const { count } = await prisma.doctorSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorScheduleDeleteManyArgs>(args?: SelectSubset<T, DoctorScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorSchedules
     * const doctorSchedule = await prisma.doctorSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorScheduleUpdateManyArgs>(args: SelectSubset<T, DoctorScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorSchedules and returns the data updated in the database.
     * @param {DoctorScheduleUpdateManyAndReturnArgs} args - Arguments to update many DoctorSchedules.
     * @example
     * // Update many DoctorSchedules
     * const doctorSchedule = await prisma.doctorSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoctorSchedules and only return the `id`
     * const doctorScheduleWithIdOnly = await prisma.doctorSchedule.updateManyAndReturn({
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
    updateManyAndReturn<T extends DoctorScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoctorSchedule.
     * @param {DoctorScheduleUpsertArgs} args - Arguments to update or create a DoctorSchedule.
     * @example
     * // Update or create a DoctorSchedule
     * const doctorSchedule = await prisma.doctorSchedule.upsert({
     *   create: {
     *     // ... data to create a DoctorSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorSchedule we want to update
     *   }
     * })
     */
    upsert<T extends DoctorScheduleUpsertArgs>(args: SelectSubset<T, DoctorScheduleUpsertArgs<ExtArgs>>): Prisma__DoctorScheduleClient<$Result.GetResult<Prisma.$DoctorSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorScheduleCountArgs} args - Arguments to filter DoctorSchedules to count.
     * @example
     * // Count the number of DoctorSchedules
     * const count = await prisma.doctorSchedule.count({
     *   where: {
     *     // ... the filter for the DoctorSchedules we want to count
     *   }
     * })
    **/
    count<T extends DoctorScheduleCountArgs>(
      args?: Subset<T, DoctorScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorScheduleAggregateArgs>(args: Subset<T, DoctorScheduleAggregateArgs>): Prisma.PrismaPromise<GetDoctorScheduleAggregateType<T>>

    /**
     * Group by DoctorSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorScheduleGroupByArgs} args - Group by arguments.
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
      T extends DoctorScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorScheduleGroupByArgs['orderBy'] }
        : { orderBy?: DoctorScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorSchedule model
   */
  readonly fields: DoctorScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DoctorSchedule model
   */
  interface DoctorScheduleFieldRefs {
    readonly id: FieldRef<"DoctorSchedule", 'String'>
    readonly simrsId: FieldRef<"DoctorSchedule", 'String'>
    readonly doctorId: FieldRef<"DoctorSchedule", 'String'>
    readonly specialization: FieldRef<"DoctorSchedule", 'String'>
    readonly day: FieldRef<"DoctorSchedule", 'String'>
    readonly startTime: FieldRef<"DoctorSchedule", 'String'>
    readonly endTime: FieldRef<"DoctorSchedule", 'String'>
    readonly createdAt: FieldRef<"DoctorSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"DoctorSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DoctorSchedule findUnique
   */
  export type DoctorScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSchedule to fetch.
     */
    where: DoctorScheduleWhereUniqueInput
  }

  /**
   * DoctorSchedule findUniqueOrThrow
   */
  export type DoctorScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSchedule to fetch.
     */
    where: DoctorScheduleWhereUniqueInput
  }

  /**
   * DoctorSchedule findFirst
   */
  export type DoctorScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSchedule to fetch.
     */
    where?: DoctorScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSchedules to fetch.
     */
    orderBy?: DoctorScheduleOrderByWithRelationInput | DoctorScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSchedules.
     */
    cursor?: DoctorScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSchedules.
     */
    distinct?: DoctorScheduleScalarFieldEnum | DoctorScheduleScalarFieldEnum[]
  }

  /**
   * DoctorSchedule findFirstOrThrow
   */
  export type DoctorScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSchedule to fetch.
     */
    where?: DoctorScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSchedules to fetch.
     */
    orderBy?: DoctorScheduleOrderByWithRelationInput | DoctorScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSchedules.
     */
    cursor?: DoctorScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSchedules.
     */
    distinct?: DoctorScheduleScalarFieldEnum | DoctorScheduleScalarFieldEnum[]
  }

  /**
   * DoctorSchedule findMany
   */
  export type DoctorScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSchedules to fetch.
     */
    where?: DoctorScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSchedules to fetch.
     */
    orderBy?: DoctorScheduleOrderByWithRelationInput | DoctorScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorSchedules.
     */
    cursor?: DoctorScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSchedules.
     */
    skip?: number
    distinct?: DoctorScheduleScalarFieldEnum | DoctorScheduleScalarFieldEnum[]
  }

  /**
   * DoctorSchedule create
   */
  export type DoctorScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorSchedule.
     */
    data: XOR<DoctorScheduleCreateInput, DoctorScheduleUncheckedCreateInput>
  }

  /**
   * DoctorSchedule createMany
   */
  export type DoctorScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorSchedules.
     */
    data: DoctorScheduleCreateManyInput | DoctorScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorSchedule createManyAndReturn
   */
  export type DoctorScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many DoctorSchedules.
     */
    data: DoctorScheduleCreateManyInput | DoctorScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorSchedule update
   */
  export type DoctorScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorSchedule.
     */
    data: XOR<DoctorScheduleUpdateInput, DoctorScheduleUncheckedUpdateInput>
    /**
     * Choose, which DoctorSchedule to update.
     */
    where: DoctorScheduleWhereUniqueInput
  }

  /**
   * DoctorSchedule updateMany
   */
  export type DoctorScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorSchedules.
     */
    data: XOR<DoctorScheduleUpdateManyMutationInput, DoctorScheduleUncheckedUpdateManyInput>
    /**
     * Filter which DoctorSchedules to update
     */
    where?: DoctorScheduleWhereInput
    /**
     * Limit how many DoctorSchedules to update.
     */
    limit?: number
  }

  /**
   * DoctorSchedule updateManyAndReturn
   */
  export type DoctorScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * The data used to update DoctorSchedules.
     */
    data: XOR<DoctorScheduleUpdateManyMutationInput, DoctorScheduleUncheckedUpdateManyInput>
    /**
     * Filter which DoctorSchedules to update
     */
    where?: DoctorScheduleWhereInput
    /**
     * Limit how many DoctorSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorSchedule upsert
   */
  export type DoctorScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorSchedule to update in case it exists.
     */
    where: DoctorScheduleWhereUniqueInput
    /**
     * In case the DoctorSchedule found by the `where` argument doesn't exist, create a new DoctorSchedule with this data.
     */
    create: XOR<DoctorScheduleCreateInput, DoctorScheduleUncheckedCreateInput>
    /**
     * In case the DoctorSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorScheduleUpdateInput, DoctorScheduleUncheckedUpdateInput>
  }

  /**
   * DoctorSchedule delete
   */
  export type DoctorScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleInclude<ExtArgs> | null
    /**
     * Filter which DoctorSchedule to delete.
     */
    where: DoctorScheduleWhereUniqueInput
  }

  /**
   * DoctorSchedule deleteMany
   */
  export type DoctorScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSchedules to delete
     */
    where?: DoctorScheduleWhereInput
    /**
     * Limit how many DoctorSchedules to delete.
     */
    limit?: number
  }

  /**
   * DoctorSchedule without action
   */
  export type DoctorScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleInclude<ExtArgs> | null
  }


  /**
   * Model Medicine
   */

  export type AggregateMedicine = {
    _count: MedicineCountAggregateOutputType | null
    _avg: MedicineAvgAggregateOutputType | null
    _sum: MedicineSumAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  export type MedicineAvgAggregateOutputType = {
    stock: number | null
  }

  export type MedicineSumAggregateOutputType = {
    stock: number | null
  }

  export type MedicineMinAggregateOutputType = {
    id: string | null
    name: string | null
    unit: string | null
    stock: number | null
    simrsId: string | null
    syncedAt: Date | null
    updatedAt: Date | null
  }

  export type MedicineMaxAggregateOutputType = {
    id: string | null
    name: string | null
    unit: string | null
    stock: number | null
    simrsId: string | null
    syncedAt: Date | null
    updatedAt: Date | null
  }

  export type MedicineCountAggregateOutputType = {
    id: number
    name: number
    unit: number
    stock: number
    simrsId: number
    syncedAt: number
    updatedAt: number
    _all: number
  }


  export type MedicineAvgAggregateInputType = {
    stock?: true
  }

  export type MedicineSumAggregateInputType = {
    stock?: true
  }

  export type MedicineMinAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    stock?: true
    simrsId?: true
    syncedAt?: true
    updatedAt?: true
  }

  export type MedicineMaxAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    stock?: true
    simrsId?: true
    syncedAt?: true
    updatedAt?: true
  }

  export type MedicineCountAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    stock?: true
    simrsId?: true
    syncedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicine to aggregate.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicines
    **/
    _count?: true | MedicineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicineMaxAggregateInputType
  }

  export type GetMedicineAggregateType<T extends MedicineAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicine[P]>
      : GetScalarType<T[P], AggregateMedicine[P]>
  }




  export type MedicineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineWhereInput
    orderBy?: MedicineOrderByWithAggregationInput | MedicineOrderByWithAggregationInput[]
    by: MedicineScalarFieldEnum[] | MedicineScalarFieldEnum
    having?: MedicineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicineCountAggregateInputType | true
    _avg?: MedicineAvgAggregateInputType
    _sum?: MedicineSumAggregateInputType
    _min?: MedicineMinAggregateInputType
    _max?: MedicineMaxAggregateInputType
  }

  export type MedicineGroupByOutputType = {
    id: string
    name: string
    unit: string
    stock: number
    simrsId: string | null
    syncedAt: Date | null
    updatedAt: Date
    _count: MedicineCountAggregateOutputType | null
    _avg: MedicineAvgAggregateOutputType | null
    _sum: MedicineSumAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  type GetMedicineGroupByPayload<T extends MedicineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicineGroupByOutputType[P]>
            : GetScalarType<T[P], MedicineGroupByOutputType[P]>
        }
      >
    >


  export type MedicineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unit?: boolean
    stock?: boolean
    simrsId?: boolean
    syncedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unit?: boolean
    stock?: boolean
    simrsId?: boolean
    syncedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unit?: boolean
    stock?: boolean
    simrsId?: boolean
    syncedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectScalar = {
    id?: boolean
    name?: boolean
    unit?: boolean
    stock?: boolean
    simrsId?: boolean
    syncedAt?: boolean
    updatedAt?: boolean
  }

  export type MedicineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "unit" | "stock" | "simrsId" | "syncedAt" | "updatedAt", ExtArgs["result"]["medicine"]>

  export type $MedicinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medicine"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      unit: string
      stock: number
      simrsId: string | null
      syncedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["medicine"]>
    composites: {}
  }

  type MedicineGetPayload<S extends boolean | null | undefined | MedicineDefaultArgs> = $Result.GetResult<Prisma.$MedicinePayload, S>

  type MedicineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicineCountAggregateInputType | true
    }

  export interface MedicineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medicine'], meta: { name: 'Medicine' } }
    /**
     * Find zero or one Medicine that matches the filter.
     * @param {MedicineFindUniqueArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicineFindUniqueArgs>(args: SelectSubset<T, MedicineFindUniqueArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medicine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicineFindUniqueOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicineFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicineFindFirstArgs>(args?: SelectSubset<T, MedicineFindFirstArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicineFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicineFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicines
     * const medicines = await prisma.medicine.findMany()
     * 
     * // Get first 10 Medicines
     * const medicines = await prisma.medicine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicineWithIdOnly = await prisma.medicine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicineFindManyArgs>(args?: SelectSubset<T, MedicineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medicine.
     * @param {MedicineCreateArgs} args - Arguments to create a Medicine.
     * @example
     * // Create one Medicine
     * const Medicine = await prisma.medicine.create({
     *   data: {
     *     // ... data to create a Medicine
     *   }
     * })
     * 
     */
    create<T extends MedicineCreateArgs>(args: SelectSubset<T, MedicineCreateArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicines.
     * @param {MedicineCreateManyArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicineCreateManyArgs>(args?: SelectSubset<T, MedicineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicines and returns the data saved in the database.
     * @param {MedicineCreateManyAndReturnArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicines and only return the `id`
     * const medicineWithIdOnly = await prisma.medicine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicineCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medicine.
     * @param {MedicineDeleteArgs} args - Arguments to delete one Medicine.
     * @example
     * // Delete one Medicine
     * const Medicine = await prisma.medicine.delete({
     *   where: {
     *     // ... filter to delete one Medicine
     *   }
     * })
     * 
     */
    delete<T extends MedicineDeleteArgs>(args: SelectSubset<T, MedicineDeleteArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medicine.
     * @param {MedicineUpdateArgs} args - Arguments to update one Medicine.
     * @example
     * // Update one Medicine
     * const medicine = await prisma.medicine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicineUpdateArgs>(args: SelectSubset<T, MedicineUpdateArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicines.
     * @param {MedicineDeleteManyArgs} args - Arguments to filter Medicines to delete.
     * @example
     * // Delete a few Medicines
     * const { count } = await prisma.medicine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicineDeleteManyArgs>(args?: SelectSubset<T, MedicineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicineUpdateManyArgs>(args: SelectSubset<T, MedicineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines and returns the data updated in the database.
     * @param {MedicineUpdateManyAndReturnArgs} args - Arguments to update many Medicines.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medicines and only return the `id`
     * const medicineWithIdOnly = await prisma.medicine.updateManyAndReturn({
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
    updateManyAndReturn<T extends MedicineUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medicine.
     * @param {MedicineUpsertArgs} args - Arguments to update or create a Medicine.
     * @example
     * // Update or create a Medicine
     * const medicine = await prisma.medicine.upsert({
     *   create: {
     *     // ... data to create a Medicine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicine we want to update
     *   }
     * })
     */
    upsert<T extends MedicineUpsertArgs>(args: SelectSubset<T, MedicineUpsertArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineCountArgs} args - Arguments to filter Medicines to count.
     * @example
     * // Count the number of Medicines
     * const count = await prisma.medicine.count({
     *   where: {
     *     // ... the filter for the Medicines we want to count
     *   }
     * })
    **/
    count<T extends MedicineCountArgs>(
      args?: Subset<T, MedicineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicineAggregateArgs>(args: Subset<T, MedicineAggregateArgs>): Prisma.PrismaPromise<GetMedicineAggregateType<T>>

    /**
     * Group by Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineGroupByArgs} args - Group by arguments.
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
      T extends MedicineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicineGroupByArgs['orderBy'] }
        : { orderBy?: MedicineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medicine model
   */
  readonly fields: MedicineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medicine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Medicine model
   */
  interface MedicineFieldRefs {
    readonly id: FieldRef<"Medicine", 'String'>
    readonly name: FieldRef<"Medicine", 'String'>
    readonly unit: FieldRef<"Medicine", 'String'>
    readonly stock: FieldRef<"Medicine", 'Int'>
    readonly simrsId: FieldRef<"Medicine", 'String'>
    readonly syncedAt: FieldRef<"Medicine", 'DateTime'>
    readonly updatedAt: FieldRef<"Medicine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Medicine findUnique
   */
  export type MedicineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findUniqueOrThrow
   */
  export type MedicineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findFirst
   */
  export type MedicineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine findFirstOrThrow
   */
  export type MedicineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine findMany
   */
  export type MedicineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Filter, which Medicines to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine create
   */
  export type MedicineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * The data needed to create a Medicine.
     */
    data: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
  }

  /**
   * Medicine createMany
   */
  export type MedicineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicines.
     */
    data: MedicineCreateManyInput | MedicineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medicine createManyAndReturn
   */
  export type MedicineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * The data used to create many Medicines.
     */
    data: MedicineCreateManyInput | MedicineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medicine update
   */
  export type MedicineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * The data needed to update a Medicine.
     */
    data: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
    /**
     * Choose, which Medicine to update.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine updateMany
   */
  export type MedicineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicines.
     */
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyInput>
    /**
     * Filter which Medicines to update
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to update.
     */
    limit?: number
  }

  /**
   * Medicine updateManyAndReturn
   */
  export type MedicineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * The data used to update Medicines.
     */
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyInput>
    /**
     * Filter which Medicines to update
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to update.
     */
    limit?: number
  }

  /**
   * Medicine upsert
   */
  export type MedicineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * The filter to search for the Medicine to update in case it exists.
     */
    where: MedicineWhereUniqueInput
    /**
     * In case the Medicine found by the `where` argument doesn't exist, create a new Medicine with this data.
     */
    create: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
    /**
     * In case the Medicine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
  }

  /**
   * Medicine delete
   */
  export type MedicineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Filter which Medicine to delete.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine deleteMany
   */
  export type MedicineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicines to delete
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to delete.
     */
    limit?: number
  }

  /**
   * Medicine without action
   */
  export type MedicineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
  }


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
    patient?: boolean | PatientDefaultArgs<ExtArgs>
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
    patient?: boolean | PatientDefaultArgs<ExtArgs>
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
    patient?: boolean | PatientDefaultArgs<ExtArgs>
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
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    assignedTo?: boolean | EmergencyRequest$assignedToArgs<ExtArgs>
    histories?: boolean | EmergencyRequest$historiesArgs<ExtArgs>
    _count?: boolean | EmergencyRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmergencyRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    assignedTo?: boolean | EmergencyRequest$assignedToArgs<ExtArgs>
  }
  export type EmergencyRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    assignedTo?: boolean | EmergencyRequest$assignedToArgs<ExtArgs>
  }

  export type $EmergencyRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmergencyRequest"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
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
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    medicalCategoryId: 'medicalCategoryId',
    doctorId: 'doctorId',
    reservationDate: 'reservationDate',
    queueNumber: 'queueNumber',
    qrCodeUrl: 'qrCodeUrl',
    status: 'status',
    referralFile: 'referralFile',
    patientPaymentId: 'patientPaymentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    simrsId: 'simrsId',
    nik: 'nik',
    phone: 'phone',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const PaymentMethodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentMethodScalarFieldEnum = (typeof PaymentMethodScalarFieldEnum)[keyof typeof PaymentMethodScalarFieldEnum]


  export const PatientPaymentScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    paymentMethodId: 'paymentMethodId',
    participantId: 'participantId',
    paymentFile: 'paymentFile',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientPaymentScalarFieldEnum = (typeof PatientPaymentScalarFieldEnum)[keyof typeof PatientPaymentScalarFieldEnum]


  export const MedicalCategoryScalarFieldEnum: {
    id: 'id',
    simrsId: 'simrsId',
    name: 'name',
    syncedAt: 'syncedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicalCategoryScalarFieldEnum = (typeof MedicalCategoryScalarFieldEnum)[keyof typeof MedicalCategoryScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    simrsId: 'simrsId',
    name: 'name',
    code: 'code',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const DoctorMedicalCategoryScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    medicalCategoryId: 'medicalCategoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DoctorMedicalCategoryScalarFieldEnum = (typeof DoctorMedicalCategoryScalarFieldEnum)[keyof typeof DoctorMedicalCategoryScalarFieldEnum]


  export const DoctorScheduleScalarFieldEnum: {
    id: 'id',
    simrsId: 'simrsId',
    doctorId: 'doctorId',
    specialization: 'specialization',
    day: 'day',
    startTime: 'startTime',
    endTime: 'endTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DoctorScheduleScalarFieldEnum = (typeof DoctorScheduleScalarFieldEnum)[keyof typeof DoctorScheduleScalarFieldEnum]


  export const MedicineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    unit: 'unit',
    stock: 'stock',
    simrsId: 'simrsId',
    syncedAt: 'syncedAt',
    updatedAt: 'updatedAt'
  };

  export type MedicineScalarFieldEnum = (typeof MedicineScalarFieldEnum)[keyof typeof MedicineScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ReservationStatus'
   */
  export type EnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus'>
    


  /**
   * Reference to a field of type 'ReservationStatus[]'
   */
  export type ListEnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'EmergencyStatus'
   */
  export type EnumEmergencyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmergencyStatus'>
    


  /**
   * Reference to a field of type 'EmergencyStatus[]'
   */
  export type ListEnumEmergencyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmergencyStatus[]'>
    


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


  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: StringFilter<"Reservation"> | string
    patientId?: StringFilter<"Reservation"> | string
    medicalCategoryId?: StringFilter<"Reservation"> | string
    doctorId?: StringFilter<"Reservation"> | string
    reservationDate?: DateTimeFilter<"Reservation"> | Date | string
    queueNumber?: StringFilter<"Reservation"> | string
    qrCodeUrl?: StringFilter<"Reservation"> | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    referralFile?: StringNullableFilter<"Reservation"> | string | null
    patientPaymentId?: StringFilter<"Reservation"> | string
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    medicalCategory?: XOR<MedicalCategoryScalarRelationFilter, MedicalCategoryWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    patientPayment?: XOR<PatientPaymentScalarRelationFilter, PatientPaymentWhereInput>
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    medicalCategoryId?: SortOrder
    doctorId?: SortOrder
    reservationDate?: SortOrder
    queueNumber?: SortOrder
    qrCodeUrl?: SortOrder
    status?: SortOrder
    referralFile?: SortOrderInput | SortOrder
    patientPaymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    medicalCategory?: MedicalCategoryOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
    patientPayment?: PatientPaymentOrderByWithRelationInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    referralFile?: string
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    patientId?: StringFilter<"Reservation"> | string
    medicalCategoryId?: StringFilter<"Reservation"> | string
    doctorId?: StringFilter<"Reservation"> | string
    reservationDate?: DateTimeFilter<"Reservation"> | Date | string
    queueNumber?: StringFilter<"Reservation"> | string
    qrCodeUrl?: StringFilter<"Reservation"> | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    patientPaymentId?: StringFilter<"Reservation"> | string
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    medicalCategory?: XOR<MedicalCategoryScalarRelationFilter, MedicalCategoryWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    patientPayment?: XOR<PatientPaymentScalarRelationFilter, PatientPaymentWhereInput>
  }, "id" | "referralFile">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    medicalCategoryId?: SortOrder
    doctorId?: SortOrder
    reservationDate?: SortOrder
    queueNumber?: SortOrder
    qrCodeUrl?: SortOrder
    status?: SortOrder
    referralFile?: SortOrderInput | SortOrder
    patientPaymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reservation"> | string
    patientId?: StringWithAggregatesFilter<"Reservation"> | string
    medicalCategoryId?: StringWithAggregatesFilter<"Reservation"> | string
    doctorId?: StringWithAggregatesFilter<"Reservation"> | string
    reservationDate?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    queueNumber?: StringWithAggregatesFilter<"Reservation"> | string
    qrCodeUrl?: StringWithAggregatesFilter<"Reservation"> | string
    status?: EnumReservationStatusWithAggregatesFilter<"Reservation"> | $Enums.ReservationStatus
    referralFile?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    patientPaymentId?: StringWithAggregatesFilter<"Reservation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    name?: StringFilter<"Patient"> | string
    simrsId?: StringNullableFilter<"Patient"> | string | null
    nik?: StringNullableFilter<"Patient"> | string | null
    phone?: StringNullableFilter<"Patient"> | string | null
    email?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    reservations?: ReservationListRelationFilter
    payments?: PatientPaymentListRelationFilter
    emergencyRequests?: EmergencyRequestListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    simrsId?: SortOrderInput | SortOrder
    nik?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
    payments?: PatientPaymentOrderByRelationAggregateInput
    emergencyRequests?: EmergencyRequestOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    name?: StringFilter<"Patient"> | string
    simrsId?: StringNullableFilter<"Patient"> | string | null
    nik?: StringNullableFilter<"Patient"> | string | null
    phone?: StringNullableFilter<"Patient"> | string | null
    email?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    reservations?: ReservationListRelationFilter
    payments?: PatientPaymentListRelationFilter
    emergencyRequests?: EmergencyRequestListRelationFilter
  }, "id">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    simrsId?: SortOrderInput | SortOrder
    nik?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    name?: StringWithAggregatesFilter<"Patient"> | string
    simrsId?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    nik?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    email?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type PaymentMethodWhereInput = {
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    id?: StringFilter<"PaymentMethod"> | string
    name?: StringFilter<"PaymentMethod"> | string
    createdAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    patients?: PatientPaymentListRelationFilter
  }

  export type PaymentMethodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patients?: PatientPaymentOrderByRelationAggregateInput
  }

  export type PaymentMethodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    createdAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    patients?: PatientPaymentListRelationFilter
  }, "id" | "name">

  export type PaymentMethodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentMethodCountOrderByAggregateInput
    _max?: PaymentMethodMaxOrderByAggregateInput
    _min?: PaymentMethodMinOrderByAggregateInput
  }

  export type PaymentMethodScalarWhereWithAggregatesInput = {
    AND?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    OR?: PaymentMethodScalarWhereWithAggregatesInput[]
    NOT?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentMethod"> | string
    name?: StringWithAggregatesFilter<"PaymentMethod"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string
  }

  export type PatientPaymentWhereInput = {
    AND?: PatientPaymentWhereInput | PatientPaymentWhereInput[]
    OR?: PatientPaymentWhereInput[]
    NOT?: PatientPaymentWhereInput | PatientPaymentWhereInput[]
    id?: StringFilter<"PatientPayment"> | string
    patientId?: StringFilter<"PatientPayment"> | string
    paymentMethodId?: StringFilter<"PatientPayment"> | string
    participantId?: StringFilter<"PatientPayment"> | string
    paymentFile?: StringNullableFilter<"PatientPayment"> | string | null
    createdAt?: DateTimeFilter<"PatientPayment"> | Date | string
    updatedAt?: DateTimeFilter<"PatientPayment"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    paymentMethod?: XOR<PaymentMethodScalarRelationFilter, PaymentMethodWhereInput>
    reservations?: ReservationListRelationFilter
  }

  export type PatientPaymentOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    paymentMethodId?: SortOrder
    participantId?: SortOrder
    paymentFile?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    paymentMethod?: PaymentMethodOrderByWithRelationInput
    reservations?: ReservationOrderByRelationAggregateInput
  }

  export type PatientPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    patientId_paymentMethodId?: PatientPaymentPatientIdPaymentMethodIdCompoundUniqueInput
    AND?: PatientPaymentWhereInput | PatientPaymentWhereInput[]
    OR?: PatientPaymentWhereInput[]
    NOT?: PatientPaymentWhereInput | PatientPaymentWhereInput[]
    patientId?: StringFilter<"PatientPayment"> | string
    paymentMethodId?: StringFilter<"PatientPayment"> | string
    participantId?: StringFilter<"PatientPayment"> | string
    paymentFile?: StringNullableFilter<"PatientPayment"> | string | null
    createdAt?: DateTimeFilter<"PatientPayment"> | Date | string
    updatedAt?: DateTimeFilter<"PatientPayment"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    paymentMethod?: XOR<PaymentMethodScalarRelationFilter, PaymentMethodWhereInput>
    reservations?: ReservationListRelationFilter
  }, "id" | "patientId_paymentMethodId">

  export type PatientPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    paymentMethodId?: SortOrder
    participantId?: SortOrder
    paymentFile?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientPaymentCountOrderByAggregateInput
    _max?: PatientPaymentMaxOrderByAggregateInput
    _min?: PatientPaymentMinOrderByAggregateInput
  }

  export type PatientPaymentScalarWhereWithAggregatesInput = {
    AND?: PatientPaymentScalarWhereWithAggregatesInput | PatientPaymentScalarWhereWithAggregatesInput[]
    OR?: PatientPaymentScalarWhereWithAggregatesInput[]
    NOT?: PatientPaymentScalarWhereWithAggregatesInput | PatientPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PatientPayment"> | string
    patientId?: StringWithAggregatesFilter<"PatientPayment"> | string
    paymentMethodId?: StringWithAggregatesFilter<"PatientPayment"> | string
    participantId?: StringWithAggregatesFilter<"PatientPayment"> | string
    paymentFile?: StringNullableWithAggregatesFilter<"PatientPayment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PatientPayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PatientPayment"> | Date | string
  }

  export type MedicalCategoryWhereInput = {
    AND?: MedicalCategoryWhereInput | MedicalCategoryWhereInput[]
    OR?: MedicalCategoryWhereInput[]
    NOT?: MedicalCategoryWhereInput | MedicalCategoryWhereInput[]
    id?: StringFilter<"MedicalCategory"> | string
    simrsId?: StringFilter<"MedicalCategory"> | string
    name?: StringFilter<"MedicalCategory"> | string
    syncedAt?: DateTimeNullableFilter<"MedicalCategory"> | Date | string | null
    createdAt?: DateTimeFilter<"MedicalCategory"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalCategory"> | Date | string
    reservations?: ReservationListRelationFilter
    doctors?: DoctorMedicalCategoryListRelationFilter
  }

  export type MedicalCategoryOrderByWithRelationInput = {
    id?: SortOrder
    simrsId?: SortOrder
    name?: SortOrder
    syncedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
    doctors?: DoctorMedicalCategoryOrderByRelationAggregateInput
  }

  export type MedicalCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    simrsId?: string
    AND?: MedicalCategoryWhereInput | MedicalCategoryWhereInput[]
    OR?: MedicalCategoryWhereInput[]
    NOT?: MedicalCategoryWhereInput | MedicalCategoryWhereInput[]
    name?: StringFilter<"MedicalCategory"> | string
    syncedAt?: DateTimeNullableFilter<"MedicalCategory"> | Date | string | null
    createdAt?: DateTimeFilter<"MedicalCategory"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalCategory"> | Date | string
    reservations?: ReservationListRelationFilter
    doctors?: DoctorMedicalCategoryListRelationFilter
  }, "id" | "simrsId">

  export type MedicalCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    simrsId?: SortOrder
    name?: SortOrder
    syncedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicalCategoryCountOrderByAggregateInput
    _max?: MedicalCategoryMaxOrderByAggregateInput
    _min?: MedicalCategoryMinOrderByAggregateInput
  }

  export type MedicalCategoryScalarWhereWithAggregatesInput = {
    AND?: MedicalCategoryScalarWhereWithAggregatesInput | MedicalCategoryScalarWhereWithAggregatesInput[]
    OR?: MedicalCategoryScalarWhereWithAggregatesInput[]
    NOT?: MedicalCategoryScalarWhereWithAggregatesInput | MedicalCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicalCategory"> | string
    simrsId?: StringWithAggregatesFilter<"MedicalCategory"> | string
    name?: StringWithAggregatesFilter<"MedicalCategory"> | string
    syncedAt?: DateTimeNullableWithAggregatesFilter<"MedicalCategory"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MedicalCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MedicalCategory"> | Date | string
  }

  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    id?: StringFilter<"Doctor"> | string
    simrsId?: StringFilter<"Doctor"> | string
    name?: StringFilter<"Doctor"> | string
    code?: StringFilter<"Doctor"> | string
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeFilter<"Doctor"> | Date | string
    reservations?: ReservationListRelationFilter
    schedules?: DoctorScheduleListRelationFilter
    medicalCategories?: DoctorMedicalCategoryListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    simrsId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
    schedules?: DoctorScheduleOrderByRelationAggregateInput
    medicalCategories?: DoctorMedicalCategoryOrderByRelationAggregateInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    simrsId?: string
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    name?: StringFilter<"Doctor"> | string
    code?: StringFilter<"Doctor"> | string
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeFilter<"Doctor"> | Date | string
    reservations?: ReservationListRelationFilter
    schedules?: DoctorScheduleListRelationFilter
    medicalCategories?: DoctorMedicalCategoryListRelationFilter
  }, "id" | "simrsId">

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    simrsId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Doctor"> | string
    simrsId?: StringWithAggregatesFilter<"Doctor"> | string
    name?: StringWithAggregatesFilter<"Doctor"> | string
    code?: StringWithAggregatesFilter<"Doctor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Doctor"> | Date | string
  }

  export type DoctorMedicalCategoryWhereInput = {
    AND?: DoctorMedicalCategoryWhereInput | DoctorMedicalCategoryWhereInput[]
    OR?: DoctorMedicalCategoryWhereInput[]
    NOT?: DoctorMedicalCategoryWhereInput | DoctorMedicalCategoryWhereInput[]
    id?: StringFilter<"DoctorMedicalCategory"> | string
    doctorId?: StringFilter<"DoctorMedicalCategory"> | string
    medicalCategoryId?: StringFilter<"DoctorMedicalCategory"> | string
    createdAt?: DateTimeFilter<"DoctorMedicalCategory"> | Date | string
    updatedAt?: DateTimeFilter<"DoctorMedicalCategory"> | Date | string
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    medicalCategory?: XOR<MedicalCategoryScalarRelationFilter, MedicalCategoryWhereInput>
  }

  export type DoctorMedicalCategoryOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    medicalCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctor?: DoctorOrderByWithRelationInput
    medicalCategory?: MedicalCategoryOrderByWithRelationInput
  }

  export type DoctorMedicalCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    doctorId_medicalCategoryId?: DoctorMedicalCategoryDoctorIdMedicalCategoryIdCompoundUniqueInput
    AND?: DoctorMedicalCategoryWhereInput | DoctorMedicalCategoryWhereInput[]
    OR?: DoctorMedicalCategoryWhereInput[]
    NOT?: DoctorMedicalCategoryWhereInput | DoctorMedicalCategoryWhereInput[]
    doctorId?: StringFilter<"DoctorMedicalCategory"> | string
    medicalCategoryId?: StringFilter<"DoctorMedicalCategory"> | string
    createdAt?: DateTimeFilter<"DoctorMedicalCategory"> | Date | string
    updatedAt?: DateTimeFilter<"DoctorMedicalCategory"> | Date | string
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    medicalCategory?: XOR<MedicalCategoryScalarRelationFilter, MedicalCategoryWhereInput>
  }, "id" | "doctorId_medicalCategoryId">

  export type DoctorMedicalCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    medicalCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DoctorMedicalCategoryCountOrderByAggregateInput
    _max?: DoctorMedicalCategoryMaxOrderByAggregateInput
    _min?: DoctorMedicalCategoryMinOrderByAggregateInput
  }

  export type DoctorMedicalCategoryScalarWhereWithAggregatesInput = {
    AND?: DoctorMedicalCategoryScalarWhereWithAggregatesInput | DoctorMedicalCategoryScalarWhereWithAggregatesInput[]
    OR?: DoctorMedicalCategoryScalarWhereWithAggregatesInput[]
    NOT?: DoctorMedicalCategoryScalarWhereWithAggregatesInput | DoctorMedicalCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoctorMedicalCategory"> | string
    doctorId?: StringWithAggregatesFilter<"DoctorMedicalCategory"> | string
    medicalCategoryId?: StringWithAggregatesFilter<"DoctorMedicalCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DoctorMedicalCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DoctorMedicalCategory"> | Date | string
  }

  export type DoctorScheduleWhereInput = {
    AND?: DoctorScheduleWhereInput | DoctorScheduleWhereInput[]
    OR?: DoctorScheduleWhereInput[]
    NOT?: DoctorScheduleWhereInput | DoctorScheduleWhereInput[]
    id?: StringFilter<"DoctorSchedule"> | string
    simrsId?: StringFilter<"DoctorSchedule"> | string
    doctorId?: StringFilter<"DoctorSchedule"> | string
    specialization?: StringFilter<"DoctorSchedule"> | string
    day?: StringFilter<"DoctorSchedule"> | string
    startTime?: StringFilter<"DoctorSchedule"> | string
    endTime?: StringFilter<"DoctorSchedule"> | string
    createdAt?: DateTimeFilter<"DoctorSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"DoctorSchedule"> | Date | string
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }

  export type DoctorScheduleOrderByWithRelationInput = {
    id?: SortOrder
    simrsId?: SortOrder
    doctorId?: SortOrder
    specialization?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctor?: DoctorOrderByWithRelationInput
  }

  export type DoctorScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    simrsId?: string
    AND?: DoctorScheduleWhereInput | DoctorScheduleWhereInput[]
    OR?: DoctorScheduleWhereInput[]
    NOT?: DoctorScheduleWhereInput | DoctorScheduleWhereInput[]
    doctorId?: StringFilter<"DoctorSchedule"> | string
    specialization?: StringFilter<"DoctorSchedule"> | string
    day?: StringFilter<"DoctorSchedule"> | string
    startTime?: StringFilter<"DoctorSchedule"> | string
    endTime?: StringFilter<"DoctorSchedule"> | string
    createdAt?: DateTimeFilter<"DoctorSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"DoctorSchedule"> | Date | string
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }, "id" | "simrsId">

  export type DoctorScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    simrsId?: SortOrder
    doctorId?: SortOrder
    specialization?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DoctorScheduleCountOrderByAggregateInput
    _max?: DoctorScheduleMaxOrderByAggregateInput
    _min?: DoctorScheduleMinOrderByAggregateInput
  }

  export type DoctorScheduleScalarWhereWithAggregatesInput = {
    AND?: DoctorScheduleScalarWhereWithAggregatesInput | DoctorScheduleScalarWhereWithAggregatesInput[]
    OR?: DoctorScheduleScalarWhereWithAggregatesInput[]
    NOT?: DoctorScheduleScalarWhereWithAggregatesInput | DoctorScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoctorSchedule"> | string
    simrsId?: StringWithAggregatesFilter<"DoctorSchedule"> | string
    doctorId?: StringWithAggregatesFilter<"DoctorSchedule"> | string
    specialization?: StringWithAggregatesFilter<"DoctorSchedule"> | string
    day?: StringWithAggregatesFilter<"DoctorSchedule"> | string
    startTime?: StringWithAggregatesFilter<"DoctorSchedule"> | string
    endTime?: StringWithAggregatesFilter<"DoctorSchedule"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DoctorSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DoctorSchedule"> | Date | string
  }

  export type MedicineWhereInput = {
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    id?: StringFilter<"Medicine"> | string
    name?: StringFilter<"Medicine"> | string
    unit?: StringFilter<"Medicine"> | string
    stock?: IntFilter<"Medicine"> | number
    simrsId?: StringNullableFilter<"Medicine"> | string | null
    syncedAt?: DateTimeNullableFilter<"Medicine"> | Date | string | null
    updatedAt?: DateTimeFilter<"Medicine"> | Date | string
  }

  export type MedicineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    stock?: SortOrder
    simrsId?: SortOrderInput | SortOrder
    syncedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    name?: StringFilter<"Medicine"> | string
    unit?: StringFilter<"Medicine"> | string
    stock?: IntFilter<"Medicine"> | number
    simrsId?: StringNullableFilter<"Medicine"> | string | null
    syncedAt?: DateTimeNullableFilter<"Medicine"> | Date | string | null
    updatedAt?: DateTimeFilter<"Medicine"> | Date | string
  }, "id">

  export type MedicineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    stock?: SortOrder
    simrsId?: SortOrderInput | SortOrder
    syncedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: MedicineCountOrderByAggregateInput
    _avg?: MedicineAvgOrderByAggregateInput
    _max?: MedicineMaxOrderByAggregateInput
    _min?: MedicineMinOrderByAggregateInput
    _sum?: MedicineSumOrderByAggregateInput
  }

  export type MedicineScalarWhereWithAggregatesInput = {
    AND?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    OR?: MedicineScalarWhereWithAggregatesInput[]
    NOT?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Medicine"> | string
    name?: StringWithAggregatesFilter<"Medicine"> | string
    unit?: StringWithAggregatesFilter<"Medicine"> | string
    stock?: IntWithAggregatesFilter<"Medicine"> | number
    simrsId?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    syncedAt?: DateTimeNullableWithAggregatesFilter<"Medicine"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Medicine"> | Date | string
  }

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
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
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
    patient?: PatientOrderByWithRelationInput
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
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
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

  export type ReservationCreateInput = {
    id?: string
    reservationDate: Date | string
    queueNumber: string
    qrCodeUrl: string
    status?: $Enums.ReservationStatus
    referralFile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutReservationsInput
    medicalCategory: MedicalCategoryCreateNestedOneWithoutReservationsInput
    doctor: DoctorCreateNestedOneWithoutReservationsInput
    patientPayment: PatientPaymentCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateInput = {
    id?: string
    patientId: string
    medicalCategoryId: string
    doctorId: string
    reservationDate: Date | string
    queueNumber: string
    qrCodeUrl: string
    status?: $Enums.ReservationStatus
    referralFile?: string | null
    patientPaymentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    queueNumber?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    referralFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutReservationsNestedInput
    medicalCategory?: MedicalCategoryUpdateOneRequiredWithoutReservationsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutReservationsNestedInput
    patientPayment?: PatientPaymentUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    medicalCategoryId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    queueNumber?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    referralFile?: NullableStringFieldUpdateOperationsInput | string | null
    patientPaymentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateManyInput = {
    id?: string
    patientId: string
    medicalCategoryId: string
    doctorId: string
    reservationDate: Date | string
    queueNumber: string
    qrCodeUrl: string
    status?: $Enums.ReservationStatus
    referralFile?: string | null
    patientPaymentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    queueNumber?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    referralFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    medicalCategoryId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    queueNumber?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    referralFile?: NullableStringFieldUpdateOperationsInput | string | null
    patientPaymentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateInput = {
    id: string
    name: string
    simrsId?: string | null
    nik?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutPatientInput
    payments?: PatientPaymentCreateNestedManyWithoutPatientInput
    emergencyRequests?: EmergencyRequestCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id: string
    name: string
    simrsId?: string | null
    nik?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutPatientInput
    payments?: PatientPaymentUncheckedCreateNestedManyWithoutPatientInput
    emergencyRequests?: EmergencyRequestUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    simrsId?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutPatientNestedInput
    payments?: PatientPaymentUpdateManyWithoutPatientNestedInput
    emergencyRequests?: EmergencyRequestUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    simrsId?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutPatientNestedInput
    payments?: PatientPaymentUncheckedUpdateManyWithoutPatientNestedInput
    emergencyRequests?: EmergencyRequestUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id: string
    name: string
    simrsId?: string | null
    nik?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    simrsId?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    simrsId?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patients?: PatientPaymentCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patients?: PatientPaymentUncheckedCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientPaymentUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientPaymentUncheckedUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientPaymentCreateInput = {
    id?: string
    participantId: string
    paymentFile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutPaymentsInput
    paymentMethod: PaymentMethodCreateNestedOneWithoutPatientsInput
    reservations?: ReservationCreateNestedManyWithoutPatientPaymentInput
  }

  export type PatientPaymentUncheckedCreateInput = {
    id?: string
    patientId: string
    paymentMethodId: string
    participantId: string
    paymentFile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutPatientPaymentInput
  }

  export type PatientPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    paymentFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutPaymentsNestedInput
    paymentMethod?: PaymentMethodUpdateOneRequiredWithoutPatientsNestedInput
    reservations?: ReservationUpdateManyWithoutPatientPaymentNestedInput
  }

  export type PatientPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    paymentMethodId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    paymentFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutPatientPaymentNestedInput
  }

  export type PatientPaymentCreateManyInput = {
    id?: string
    patientId: string
    paymentMethodId: string
    participantId: string
    paymentFile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    paymentFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    paymentMethodId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    paymentFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalCategoryCreateInput = {
    id?: string
    simrsId: string
    name: string
    syncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutMedicalCategoryInput
    doctors?: DoctorMedicalCategoryCreateNestedManyWithoutMedicalCategoryInput
  }

  export type MedicalCategoryUncheckedCreateInput = {
    id?: string
    simrsId: string
    name: string
    syncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutMedicalCategoryInput
    doctors?: DoctorMedicalCategoryUncheckedCreateNestedManyWithoutMedicalCategoryInput
  }

  export type MedicalCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutMedicalCategoryNestedInput
    doctors?: DoctorMedicalCategoryUpdateManyWithoutMedicalCategoryNestedInput
  }

  export type MedicalCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutMedicalCategoryNestedInput
    doctors?: DoctorMedicalCategoryUncheckedUpdateManyWithoutMedicalCategoryNestedInput
  }

  export type MedicalCategoryCreateManyInput = {
    id?: string
    simrsId: string
    name: string
    syncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorCreateInput = {
    id?: string
    simrsId: string
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutDoctorInput
    schedules?: DoctorScheduleCreateNestedManyWithoutDoctorInput
    medicalCategories?: DoctorMedicalCategoryCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    id?: string
    simrsId: string
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutDoctorInput
    schedules?: DoctorScheduleUncheckedCreateNestedManyWithoutDoctorInput
    medicalCategories?: DoctorMedicalCategoryUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutDoctorNestedInput
    schedules?: DoctorScheduleUpdateManyWithoutDoctorNestedInput
    medicalCategories?: DoctorMedicalCategoryUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutDoctorNestedInput
    schedules?: DoctorScheduleUncheckedUpdateManyWithoutDoctorNestedInput
    medicalCategories?: DoctorMedicalCategoryUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    id?: string
    simrsId: string
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorMedicalCategoryCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutMedicalCategoriesInput
    medicalCategory: MedicalCategoryCreateNestedOneWithoutDoctorsInput
  }

  export type DoctorMedicalCategoryUncheckedCreateInput = {
    id?: string
    doctorId: string
    medicalCategoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorMedicalCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutMedicalCategoriesNestedInput
    medicalCategory?: MedicalCategoryUpdateOneRequiredWithoutDoctorsNestedInput
  }

  export type DoctorMedicalCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    medicalCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorMedicalCategoryCreateManyInput = {
    id?: string
    doctorId: string
    medicalCategoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorMedicalCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorMedicalCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    medicalCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorScheduleCreateInput = {
    id?: string
    simrsId: string
    specialization: string
    day: string
    startTime: string
    endTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutSchedulesInput
  }

  export type DoctorScheduleUncheckedCreateInput = {
    id?: string
    simrsId: string
    doctorId: string
    specialization: string
    day: string
    startTime: string
    endTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type DoctorScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorScheduleCreateManyInput = {
    id?: string
    simrsId: string
    doctorId: string
    specialization: string
    day: string
    startTime: string
    endTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineCreateInput = {
    id?: string
    name: string
    unit: string
    stock: number
    simrsId?: string | null
    syncedAt?: Date | string | null
    updatedAt: Date | string
  }

  export type MedicineUncheckedCreateInput = {
    id?: string
    name: string
    unit: string
    stock: number
    simrsId?: string | null
    syncedAt?: Date | string | null
    updatedAt: Date | string
  }

  export type MedicineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    simrsId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    simrsId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineCreateManyInput = {
    id?: string
    name: string
    unit: string
    stock: number
    simrsId?: string | null
    syncedAt?: Date | string | null
    updatedAt: Date | string
  }

  export type MedicineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    simrsId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    simrsId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyRequestCreateInput = {
    id?: string
    location: string
    note?: string | null
    status?: $Enums.EmergencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutEmergencyRequestsInput
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
    location?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutEmergencyRequestsNestedInput
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

  export type EnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
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

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type MedicalCategoryScalarRelationFilter = {
    is?: MedicalCategoryWhereInput
    isNot?: MedicalCategoryWhereInput
  }

  export type DoctorScalarRelationFilter = {
    is?: DoctorWhereInput
    isNot?: DoctorWhereInput
  }

  export type PatientPaymentScalarRelationFilter = {
    is?: PatientPaymentWhereInput
    isNot?: PatientPaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    medicalCategoryId?: SortOrder
    doctorId?: SortOrder
    reservationDate?: SortOrder
    queueNumber?: SortOrder
    qrCodeUrl?: SortOrder
    status?: SortOrder
    referralFile?: SortOrder
    patientPaymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    medicalCategoryId?: SortOrder
    doctorId?: SortOrder
    reservationDate?: SortOrder
    queueNumber?: SortOrder
    qrCodeUrl?: SortOrder
    status?: SortOrder
    referralFile?: SortOrder
    patientPaymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    medicalCategoryId?: SortOrder
    doctorId?: SortOrder
    reservationDate?: SortOrder
    queueNumber?: SortOrder
    qrCodeUrl?: SortOrder
    status?: SortOrder
    referralFile?: SortOrder
    patientPaymentId?: SortOrder
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

  export type EnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
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

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type PatientPaymentListRelationFilter = {
    every?: PatientPaymentWhereInput
    some?: PatientPaymentWhereInput
    none?: PatientPaymentWhereInput
  }

  export type EmergencyRequestListRelationFilter = {
    every?: EmergencyRequestWhereInput
    some?: EmergencyRequestWhereInput
    none?: EmergencyRequestWhereInput
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmergencyRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    simrsId?: SortOrder
    nik?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    simrsId?: SortOrder
    nik?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    simrsId?: SortOrder
    nik?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMethodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMethodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMethodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMethodScalarRelationFilter = {
    is?: PaymentMethodWhereInput
    isNot?: PaymentMethodWhereInput
  }

  export type PatientPaymentPatientIdPaymentMethodIdCompoundUniqueInput = {
    patientId: string
    paymentMethodId: string
  }

  export type PatientPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    paymentMethodId?: SortOrder
    participantId?: SortOrder
    paymentFile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    paymentMethodId?: SortOrder
    participantId?: SortOrder
    paymentFile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    paymentMethodId?: SortOrder
    participantId?: SortOrder
    paymentFile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DoctorMedicalCategoryListRelationFilter = {
    every?: DoctorMedicalCategoryWhereInput
    some?: DoctorMedicalCategoryWhereInput
    none?: DoctorMedicalCategoryWhereInput
  }

  export type DoctorMedicalCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicalCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    simrsId?: SortOrder
    name?: SortOrder
    syncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    simrsId?: SortOrder
    name?: SortOrder
    syncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    simrsId?: SortOrder
    name?: SortOrder
    syncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DoctorScheduleListRelationFilter = {
    every?: DoctorScheduleWhereInput
    some?: DoctorScheduleWhereInput
    none?: DoctorScheduleWhereInput
  }

  export type DoctorScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    simrsId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    simrsId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    simrsId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorMedicalCategoryDoctorIdMedicalCategoryIdCompoundUniqueInput = {
    doctorId: string
    medicalCategoryId: string
  }

  export type DoctorMedicalCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    medicalCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorMedicalCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    medicalCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorMedicalCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    medicalCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    simrsId?: SortOrder
    doctorId?: SortOrder
    specialization?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    simrsId?: SortOrder
    doctorId?: SortOrder
    specialization?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    simrsId?: SortOrder
    doctorId?: SortOrder
    specialization?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type MedicineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    stock?: SortOrder
    simrsId?: SortOrder
    syncedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineAvgOrderByAggregateInput = {
    stock?: SortOrder
  }

  export type MedicineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    stock?: SortOrder
    simrsId?: SortOrder
    syncedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    stock?: SortOrder
    simrsId?: SortOrder
    syncedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineSumOrderByAggregateInput = {
    stock?: SortOrder
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

  export type EnumEmergencyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmergencyStatus | EnumEmergencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmergencyStatusFilter<$PrismaModel> | $Enums.EmergencyStatus
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

  export type EnumEmergencyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmergencyStatus | EnumEmergencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmergencyStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmergencyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmergencyStatusFilter<$PrismaModel>
    _max?: NestedEnumEmergencyStatusFilter<$PrismaModel>
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

  export type PatientCreateNestedOneWithoutReservationsInput = {
    create?: XOR<PatientCreateWithoutReservationsInput, PatientUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutReservationsInput
    connect?: PatientWhereUniqueInput
  }

  export type MedicalCategoryCreateNestedOneWithoutReservationsInput = {
    create?: XOR<MedicalCategoryCreateWithoutReservationsInput, MedicalCategoryUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: MedicalCategoryCreateOrConnectWithoutReservationsInput
    connect?: MedicalCategoryWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutReservationsInput = {
    create?: XOR<DoctorCreateWithoutReservationsInput, DoctorUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutReservationsInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientPaymentCreateNestedOneWithoutReservationsInput = {
    create?: XOR<PatientPaymentCreateWithoutReservationsInput, PatientPaymentUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: PatientPaymentCreateOrConnectWithoutReservationsInput
    connect?: PatientPaymentWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumReservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReservationStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PatientUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<PatientCreateWithoutReservationsInput, PatientUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutReservationsInput
    upsert?: PatientUpsertWithoutReservationsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutReservationsInput, PatientUpdateWithoutReservationsInput>, PatientUncheckedUpdateWithoutReservationsInput>
  }

  export type MedicalCategoryUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<MedicalCategoryCreateWithoutReservationsInput, MedicalCategoryUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: MedicalCategoryCreateOrConnectWithoutReservationsInput
    upsert?: MedicalCategoryUpsertWithoutReservationsInput
    connect?: MedicalCategoryWhereUniqueInput
    update?: XOR<XOR<MedicalCategoryUpdateToOneWithWhereWithoutReservationsInput, MedicalCategoryUpdateWithoutReservationsInput>, MedicalCategoryUncheckedUpdateWithoutReservationsInput>
  }

  export type DoctorUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<DoctorCreateWithoutReservationsInput, DoctorUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutReservationsInput
    upsert?: DoctorUpsertWithoutReservationsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutReservationsInput, DoctorUpdateWithoutReservationsInput>, DoctorUncheckedUpdateWithoutReservationsInput>
  }

  export type PatientPaymentUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<PatientPaymentCreateWithoutReservationsInput, PatientPaymentUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: PatientPaymentCreateOrConnectWithoutReservationsInput
    upsert?: PatientPaymentUpsertWithoutReservationsInput
    connect?: PatientPaymentWhereUniqueInput
    update?: XOR<XOR<PatientPaymentUpdateToOneWithWhereWithoutReservationsInput, PatientPaymentUpdateWithoutReservationsInput>, PatientPaymentUncheckedUpdateWithoutReservationsInput>
  }

  export type ReservationCreateNestedManyWithoutPatientInput = {
    create?: XOR<ReservationCreateWithoutPatientInput, ReservationUncheckedCreateWithoutPatientInput> | ReservationCreateWithoutPatientInput[] | ReservationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutPatientInput | ReservationCreateOrConnectWithoutPatientInput[]
    createMany?: ReservationCreateManyPatientInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type PatientPaymentCreateNestedManyWithoutPatientInput = {
    create?: XOR<PatientPaymentCreateWithoutPatientInput, PatientPaymentUncheckedCreateWithoutPatientInput> | PatientPaymentCreateWithoutPatientInput[] | PatientPaymentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientPaymentCreateOrConnectWithoutPatientInput | PatientPaymentCreateOrConnectWithoutPatientInput[]
    createMany?: PatientPaymentCreateManyPatientInputEnvelope
    connect?: PatientPaymentWhereUniqueInput | PatientPaymentWhereUniqueInput[]
  }

  export type EmergencyRequestCreateNestedManyWithoutPatientInput = {
    create?: XOR<EmergencyRequestCreateWithoutPatientInput, EmergencyRequestUncheckedCreateWithoutPatientInput> | EmergencyRequestCreateWithoutPatientInput[] | EmergencyRequestUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: EmergencyRequestCreateOrConnectWithoutPatientInput | EmergencyRequestCreateOrConnectWithoutPatientInput[]
    createMany?: EmergencyRequestCreateManyPatientInputEnvelope
    connect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<ReservationCreateWithoutPatientInput, ReservationUncheckedCreateWithoutPatientInput> | ReservationCreateWithoutPatientInput[] | ReservationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutPatientInput | ReservationCreateOrConnectWithoutPatientInput[]
    createMany?: ReservationCreateManyPatientInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type PatientPaymentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<PatientPaymentCreateWithoutPatientInput, PatientPaymentUncheckedCreateWithoutPatientInput> | PatientPaymentCreateWithoutPatientInput[] | PatientPaymentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientPaymentCreateOrConnectWithoutPatientInput | PatientPaymentCreateOrConnectWithoutPatientInput[]
    createMany?: PatientPaymentCreateManyPatientInputEnvelope
    connect?: PatientPaymentWhereUniqueInput | PatientPaymentWhereUniqueInput[]
  }

  export type EmergencyRequestUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<EmergencyRequestCreateWithoutPatientInput, EmergencyRequestUncheckedCreateWithoutPatientInput> | EmergencyRequestCreateWithoutPatientInput[] | EmergencyRequestUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: EmergencyRequestCreateOrConnectWithoutPatientInput | EmergencyRequestCreateOrConnectWithoutPatientInput[]
    createMany?: EmergencyRequestCreateManyPatientInputEnvelope
    connect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
  }

  export type ReservationUpdateManyWithoutPatientNestedInput = {
    create?: XOR<ReservationCreateWithoutPatientInput, ReservationUncheckedCreateWithoutPatientInput> | ReservationCreateWithoutPatientInput[] | ReservationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutPatientInput | ReservationCreateOrConnectWithoutPatientInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutPatientInput | ReservationUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: ReservationCreateManyPatientInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutPatientInput | ReservationUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutPatientInput | ReservationUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type PatientPaymentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PatientPaymentCreateWithoutPatientInput, PatientPaymentUncheckedCreateWithoutPatientInput> | PatientPaymentCreateWithoutPatientInput[] | PatientPaymentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientPaymentCreateOrConnectWithoutPatientInput | PatientPaymentCreateOrConnectWithoutPatientInput[]
    upsert?: PatientPaymentUpsertWithWhereUniqueWithoutPatientInput | PatientPaymentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PatientPaymentCreateManyPatientInputEnvelope
    set?: PatientPaymentWhereUniqueInput | PatientPaymentWhereUniqueInput[]
    disconnect?: PatientPaymentWhereUniqueInput | PatientPaymentWhereUniqueInput[]
    delete?: PatientPaymentWhereUniqueInput | PatientPaymentWhereUniqueInput[]
    connect?: PatientPaymentWhereUniqueInput | PatientPaymentWhereUniqueInput[]
    update?: PatientPaymentUpdateWithWhereUniqueWithoutPatientInput | PatientPaymentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PatientPaymentUpdateManyWithWhereWithoutPatientInput | PatientPaymentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PatientPaymentScalarWhereInput | PatientPaymentScalarWhereInput[]
  }

  export type EmergencyRequestUpdateManyWithoutPatientNestedInput = {
    create?: XOR<EmergencyRequestCreateWithoutPatientInput, EmergencyRequestUncheckedCreateWithoutPatientInput> | EmergencyRequestCreateWithoutPatientInput[] | EmergencyRequestUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: EmergencyRequestCreateOrConnectWithoutPatientInput | EmergencyRequestCreateOrConnectWithoutPatientInput[]
    upsert?: EmergencyRequestUpsertWithWhereUniqueWithoutPatientInput | EmergencyRequestUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: EmergencyRequestCreateManyPatientInputEnvelope
    set?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    disconnect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    delete?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    connect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    update?: EmergencyRequestUpdateWithWhereUniqueWithoutPatientInput | EmergencyRequestUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: EmergencyRequestUpdateManyWithWhereWithoutPatientInput | EmergencyRequestUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: EmergencyRequestScalarWhereInput | EmergencyRequestScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<ReservationCreateWithoutPatientInput, ReservationUncheckedCreateWithoutPatientInput> | ReservationCreateWithoutPatientInput[] | ReservationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutPatientInput | ReservationCreateOrConnectWithoutPatientInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutPatientInput | ReservationUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: ReservationCreateManyPatientInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutPatientInput | ReservationUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutPatientInput | ReservationUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type PatientPaymentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PatientPaymentCreateWithoutPatientInput, PatientPaymentUncheckedCreateWithoutPatientInput> | PatientPaymentCreateWithoutPatientInput[] | PatientPaymentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientPaymentCreateOrConnectWithoutPatientInput | PatientPaymentCreateOrConnectWithoutPatientInput[]
    upsert?: PatientPaymentUpsertWithWhereUniqueWithoutPatientInput | PatientPaymentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PatientPaymentCreateManyPatientInputEnvelope
    set?: PatientPaymentWhereUniqueInput | PatientPaymentWhereUniqueInput[]
    disconnect?: PatientPaymentWhereUniqueInput | PatientPaymentWhereUniqueInput[]
    delete?: PatientPaymentWhereUniqueInput | PatientPaymentWhereUniqueInput[]
    connect?: PatientPaymentWhereUniqueInput | PatientPaymentWhereUniqueInput[]
    update?: PatientPaymentUpdateWithWhereUniqueWithoutPatientInput | PatientPaymentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PatientPaymentUpdateManyWithWhereWithoutPatientInput | PatientPaymentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PatientPaymentScalarWhereInput | PatientPaymentScalarWhereInput[]
  }

  export type EmergencyRequestUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<EmergencyRequestCreateWithoutPatientInput, EmergencyRequestUncheckedCreateWithoutPatientInput> | EmergencyRequestCreateWithoutPatientInput[] | EmergencyRequestUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: EmergencyRequestCreateOrConnectWithoutPatientInput | EmergencyRequestCreateOrConnectWithoutPatientInput[]
    upsert?: EmergencyRequestUpsertWithWhereUniqueWithoutPatientInput | EmergencyRequestUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: EmergencyRequestCreateManyPatientInputEnvelope
    set?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    disconnect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    delete?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    connect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    update?: EmergencyRequestUpdateWithWhereUniqueWithoutPatientInput | EmergencyRequestUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: EmergencyRequestUpdateManyWithWhereWithoutPatientInput | EmergencyRequestUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: EmergencyRequestScalarWhereInput | EmergencyRequestScalarWhereInput[]
  }

  export type PatientPaymentCreateNestedManyWithoutPaymentMethodInput = {
    create?: XOR<PatientPaymentCreateWithoutPaymentMethodInput, PatientPaymentUncheckedCreateWithoutPaymentMethodInput> | PatientPaymentCreateWithoutPaymentMethodInput[] | PatientPaymentUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: PatientPaymentCreateOrConnectWithoutPaymentMethodInput | PatientPaymentCreateOrConnectWithoutPaymentMethodInput[]
    createMany?: PatientPaymentCreateManyPaymentMethodInputEnvelope
    connect?: PatientPaymentWhereUniqueInput | PatientPaymentWhereUniqueInput[]
  }

  export type PatientPaymentUncheckedCreateNestedManyWithoutPaymentMethodInput = {
    create?: XOR<PatientPaymentCreateWithoutPaymentMethodInput, PatientPaymentUncheckedCreateWithoutPaymentMethodInput> | PatientPaymentCreateWithoutPaymentMethodInput[] | PatientPaymentUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: PatientPaymentCreateOrConnectWithoutPaymentMethodInput | PatientPaymentCreateOrConnectWithoutPaymentMethodInput[]
    createMany?: PatientPaymentCreateManyPaymentMethodInputEnvelope
    connect?: PatientPaymentWhereUniqueInput | PatientPaymentWhereUniqueInput[]
  }

  export type PatientPaymentUpdateManyWithoutPaymentMethodNestedInput = {
    create?: XOR<PatientPaymentCreateWithoutPaymentMethodInput, PatientPaymentUncheckedCreateWithoutPaymentMethodInput> | PatientPaymentCreateWithoutPaymentMethodInput[] | PatientPaymentUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: PatientPaymentCreateOrConnectWithoutPaymentMethodInput | PatientPaymentCreateOrConnectWithoutPaymentMethodInput[]
    upsert?: PatientPaymentUpsertWithWhereUniqueWithoutPaymentMethodInput | PatientPaymentUpsertWithWhereUniqueWithoutPaymentMethodInput[]
    createMany?: PatientPaymentCreateManyPaymentMethodInputEnvelope
    set?: PatientPaymentWhereUniqueInput | PatientPaymentWhereUniqueInput[]
    disconnect?: PatientPaymentWhereUniqueInput | PatientPaymentWhereUniqueInput[]
    delete?: PatientPaymentWhereUniqueInput | PatientPaymentWhereUniqueInput[]
    connect?: PatientPaymentWhereUniqueInput | PatientPaymentWhereUniqueInput[]
    update?: PatientPaymentUpdateWithWhereUniqueWithoutPaymentMethodInput | PatientPaymentUpdateWithWhereUniqueWithoutPaymentMethodInput[]
    updateMany?: PatientPaymentUpdateManyWithWhereWithoutPaymentMethodInput | PatientPaymentUpdateManyWithWhereWithoutPaymentMethodInput[]
    deleteMany?: PatientPaymentScalarWhereInput | PatientPaymentScalarWhereInput[]
  }

  export type PatientPaymentUncheckedUpdateManyWithoutPaymentMethodNestedInput = {
    create?: XOR<PatientPaymentCreateWithoutPaymentMethodInput, PatientPaymentUncheckedCreateWithoutPaymentMethodInput> | PatientPaymentCreateWithoutPaymentMethodInput[] | PatientPaymentUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: PatientPaymentCreateOrConnectWithoutPaymentMethodInput | PatientPaymentCreateOrConnectWithoutPaymentMethodInput[]
    upsert?: PatientPaymentUpsertWithWhereUniqueWithoutPaymentMethodInput | PatientPaymentUpsertWithWhereUniqueWithoutPaymentMethodInput[]
    createMany?: PatientPaymentCreateManyPaymentMethodInputEnvelope
    set?: PatientPaymentWhereUniqueInput | PatientPaymentWhereUniqueInput[]
    disconnect?: PatientPaymentWhereUniqueInput | PatientPaymentWhereUniqueInput[]
    delete?: PatientPaymentWhereUniqueInput | PatientPaymentWhereUniqueInput[]
    connect?: PatientPaymentWhereUniqueInput | PatientPaymentWhereUniqueInput[]
    update?: PatientPaymentUpdateWithWhereUniqueWithoutPaymentMethodInput | PatientPaymentUpdateWithWhereUniqueWithoutPaymentMethodInput[]
    updateMany?: PatientPaymentUpdateManyWithWhereWithoutPaymentMethodInput | PatientPaymentUpdateManyWithWhereWithoutPaymentMethodInput[]
    deleteMany?: PatientPaymentScalarWhereInput | PatientPaymentScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<PatientCreateWithoutPaymentsInput, PatientUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPaymentsInput
    connect?: PatientWhereUniqueInput
  }

  export type PaymentMethodCreateNestedOneWithoutPatientsInput = {
    create?: XOR<PaymentMethodCreateWithoutPatientsInput, PaymentMethodUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutPatientsInput
    connect?: PaymentMethodWhereUniqueInput
  }

  export type ReservationCreateNestedManyWithoutPatientPaymentInput = {
    create?: XOR<ReservationCreateWithoutPatientPaymentInput, ReservationUncheckedCreateWithoutPatientPaymentInput> | ReservationCreateWithoutPatientPaymentInput[] | ReservationUncheckedCreateWithoutPatientPaymentInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutPatientPaymentInput | ReservationCreateOrConnectWithoutPatientPaymentInput[]
    createMany?: ReservationCreateManyPatientPaymentInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutPatientPaymentInput = {
    create?: XOR<ReservationCreateWithoutPatientPaymentInput, ReservationUncheckedCreateWithoutPatientPaymentInput> | ReservationCreateWithoutPatientPaymentInput[] | ReservationUncheckedCreateWithoutPatientPaymentInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutPatientPaymentInput | ReservationCreateOrConnectWithoutPatientPaymentInput[]
    createMany?: ReservationCreateManyPatientPaymentInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type PatientUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<PatientCreateWithoutPaymentsInput, PatientUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPaymentsInput
    upsert?: PatientUpsertWithoutPaymentsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutPaymentsInput, PatientUpdateWithoutPaymentsInput>, PatientUncheckedUpdateWithoutPaymentsInput>
  }

  export type PaymentMethodUpdateOneRequiredWithoutPatientsNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutPatientsInput, PaymentMethodUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutPatientsInput
    upsert?: PaymentMethodUpsertWithoutPatientsInput
    connect?: PaymentMethodWhereUniqueInput
    update?: XOR<XOR<PaymentMethodUpdateToOneWithWhereWithoutPatientsInput, PaymentMethodUpdateWithoutPatientsInput>, PaymentMethodUncheckedUpdateWithoutPatientsInput>
  }

  export type ReservationUpdateManyWithoutPatientPaymentNestedInput = {
    create?: XOR<ReservationCreateWithoutPatientPaymentInput, ReservationUncheckedCreateWithoutPatientPaymentInput> | ReservationCreateWithoutPatientPaymentInput[] | ReservationUncheckedCreateWithoutPatientPaymentInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutPatientPaymentInput | ReservationCreateOrConnectWithoutPatientPaymentInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutPatientPaymentInput | ReservationUpsertWithWhereUniqueWithoutPatientPaymentInput[]
    createMany?: ReservationCreateManyPatientPaymentInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutPatientPaymentInput | ReservationUpdateWithWhereUniqueWithoutPatientPaymentInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutPatientPaymentInput | ReservationUpdateManyWithWhereWithoutPatientPaymentInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutPatientPaymentNestedInput = {
    create?: XOR<ReservationCreateWithoutPatientPaymentInput, ReservationUncheckedCreateWithoutPatientPaymentInput> | ReservationCreateWithoutPatientPaymentInput[] | ReservationUncheckedCreateWithoutPatientPaymentInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutPatientPaymentInput | ReservationCreateOrConnectWithoutPatientPaymentInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutPatientPaymentInput | ReservationUpsertWithWhereUniqueWithoutPatientPaymentInput[]
    createMany?: ReservationCreateManyPatientPaymentInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutPatientPaymentInput | ReservationUpdateWithWhereUniqueWithoutPatientPaymentInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutPatientPaymentInput | ReservationUpdateManyWithWhereWithoutPatientPaymentInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationCreateNestedManyWithoutMedicalCategoryInput = {
    create?: XOR<ReservationCreateWithoutMedicalCategoryInput, ReservationUncheckedCreateWithoutMedicalCategoryInput> | ReservationCreateWithoutMedicalCategoryInput[] | ReservationUncheckedCreateWithoutMedicalCategoryInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutMedicalCategoryInput | ReservationCreateOrConnectWithoutMedicalCategoryInput[]
    createMany?: ReservationCreateManyMedicalCategoryInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type DoctorMedicalCategoryCreateNestedManyWithoutMedicalCategoryInput = {
    create?: XOR<DoctorMedicalCategoryCreateWithoutMedicalCategoryInput, DoctorMedicalCategoryUncheckedCreateWithoutMedicalCategoryInput> | DoctorMedicalCategoryCreateWithoutMedicalCategoryInput[] | DoctorMedicalCategoryUncheckedCreateWithoutMedicalCategoryInput[]
    connectOrCreate?: DoctorMedicalCategoryCreateOrConnectWithoutMedicalCategoryInput | DoctorMedicalCategoryCreateOrConnectWithoutMedicalCategoryInput[]
    createMany?: DoctorMedicalCategoryCreateManyMedicalCategoryInputEnvelope
    connect?: DoctorMedicalCategoryWhereUniqueInput | DoctorMedicalCategoryWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutMedicalCategoryInput = {
    create?: XOR<ReservationCreateWithoutMedicalCategoryInput, ReservationUncheckedCreateWithoutMedicalCategoryInput> | ReservationCreateWithoutMedicalCategoryInput[] | ReservationUncheckedCreateWithoutMedicalCategoryInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutMedicalCategoryInput | ReservationCreateOrConnectWithoutMedicalCategoryInput[]
    createMany?: ReservationCreateManyMedicalCategoryInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type DoctorMedicalCategoryUncheckedCreateNestedManyWithoutMedicalCategoryInput = {
    create?: XOR<DoctorMedicalCategoryCreateWithoutMedicalCategoryInput, DoctorMedicalCategoryUncheckedCreateWithoutMedicalCategoryInput> | DoctorMedicalCategoryCreateWithoutMedicalCategoryInput[] | DoctorMedicalCategoryUncheckedCreateWithoutMedicalCategoryInput[]
    connectOrCreate?: DoctorMedicalCategoryCreateOrConnectWithoutMedicalCategoryInput | DoctorMedicalCategoryCreateOrConnectWithoutMedicalCategoryInput[]
    createMany?: DoctorMedicalCategoryCreateManyMedicalCategoryInputEnvelope
    connect?: DoctorMedicalCategoryWhereUniqueInput | DoctorMedicalCategoryWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ReservationUpdateManyWithoutMedicalCategoryNestedInput = {
    create?: XOR<ReservationCreateWithoutMedicalCategoryInput, ReservationUncheckedCreateWithoutMedicalCategoryInput> | ReservationCreateWithoutMedicalCategoryInput[] | ReservationUncheckedCreateWithoutMedicalCategoryInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutMedicalCategoryInput | ReservationCreateOrConnectWithoutMedicalCategoryInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutMedicalCategoryInput | ReservationUpsertWithWhereUniqueWithoutMedicalCategoryInput[]
    createMany?: ReservationCreateManyMedicalCategoryInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutMedicalCategoryInput | ReservationUpdateWithWhereUniqueWithoutMedicalCategoryInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutMedicalCategoryInput | ReservationUpdateManyWithWhereWithoutMedicalCategoryInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type DoctorMedicalCategoryUpdateManyWithoutMedicalCategoryNestedInput = {
    create?: XOR<DoctorMedicalCategoryCreateWithoutMedicalCategoryInput, DoctorMedicalCategoryUncheckedCreateWithoutMedicalCategoryInput> | DoctorMedicalCategoryCreateWithoutMedicalCategoryInput[] | DoctorMedicalCategoryUncheckedCreateWithoutMedicalCategoryInput[]
    connectOrCreate?: DoctorMedicalCategoryCreateOrConnectWithoutMedicalCategoryInput | DoctorMedicalCategoryCreateOrConnectWithoutMedicalCategoryInput[]
    upsert?: DoctorMedicalCategoryUpsertWithWhereUniqueWithoutMedicalCategoryInput | DoctorMedicalCategoryUpsertWithWhereUniqueWithoutMedicalCategoryInput[]
    createMany?: DoctorMedicalCategoryCreateManyMedicalCategoryInputEnvelope
    set?: DoctorMedicalCategoryWhereUniqueInput | DoctorMedicalCategoryWhereUniqueInput[]
    disconnect?: DoctorMedicalCategoryWhereUniqueInput | DoctorMedicalCategoryWhereUniqueInput[]
    delete?: DoctorMedicalCategoryWhereUniqueInput | DoctorMedicalCategoryWhereUniqueInput[]
    connect?: DoctorMedicalCategoryWhereUniqueInput | DoctorMedicalCategoryWhereUniqueInput[]
    update?: DoctorMedicalCategoryUpdateWithWhereUniqueWithoutMedicalCategoryInput | DoctorMedicalCategoryUpdateWithWhereUniqueWithoutMedicalCategoryInput[]
    updateMany?: DoctorMedicalCategoryUpdateManyWithWhereWithoutMedicalCategoryInput | DoctorMedicalCategoryUpdateManyWithWhereWithoutMedicalCategoryInput[]
    deleteMany?: DoctorMedicalCategoryScalarWhereInput | DoctorMedicalCategoryScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutMedicalCategoryNestedInput = {
    create?: XOR<ReservationCreateWithoutMedicalCategoryInput, ReservationUncheckedCreateWithoutMedicalCategoryInput> | ReservationCreateWithoutMedicalCategoryInput[] | ReservationUncheckedCreateWithoutMedicalCategoryInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutMedicalCategoryInput | ReservationCreateOrConnectWithoutMedicalCategoryInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutMedicalCategoryInput | ReservationUpsertWithWhereUniqueWithoutMedicalCategoryInput[]
    createMany?: ReservationCreateManyMedicalCategoryInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutMedicalCategoryInput | ReservationUpdateWithWhereUniqueWithoutMedicalCategoryInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutMedicalCategoryInput | ReservationUpdateManyWithWhereWithoutMedicalCategoryInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type DoctorMedicalCategoryUncheckedUpdateManyWithoutMedicalCategoryNestedInput = {
    create?: XOR<DoctorMedicalCategoryCreateWithoutMedicalCategoryInput, DoctorMedicalCategoryUncheckedCreateWithoutMedicalCategoryInput> | DoctorMedicalCategoryCreateWithoutMedicalCategoryInput[] | DoctorMedicalCategoryUncheckedCreateWithoutMedicalCategoryInput[]
    connectOrCreate?: DoctorMedicalCategoryCreateOrConnectWithoutMedicalCategoryInput | DoctorMedicalCategoryCreateOrConnectWithoutMedicalCategoryInput[]
    upsert?: DoctorMedicalCategoryUpsertWithWhereUniqueWithoutMedicalCategoryInput | DoctorMedicalCategoryUpsertWithWhereUniqueWithoutMedicalCategoryInput[]
    createMany?: DoctorMedicalCategoryCreateManyMedicalCategoryInputEnvelope
    set?: DoctorMedicalCategoryWhereUniqueInput | DoctorMedicalCategoryWhereUniqueInput[]
    disconnect?: DoctorMedicalCategoryWhereUniqueInput | DoctorMedicalCategoryWhereUniqueInput[]
    delete?: DoctorMedicalCategoryWhereUniqueInput | DoctorMedicalCategoryWhereUniqueInput[]
    connect?: DoctorMedicalCategoryWhereUniqueInput | DoctorMedicalCategoryWhereUniqueInput[]
    update?: DoctorMedicalCategoryUpdateWithWhereUniqueWithoutMedicalCategoryInput | DoctorMedicalCategoryUpdateWithWhereUniqueWithoutMedicalCategoryInput[]
    updateMany?: DoctorMedicalCategoryUpdateManyWithWhereWithoutMedicalCategoryInput | DoctorMedicalCategoryUpdateManyWithWhereWithoutMedicalCategoryInput[]
    deleteMany?: DoctorMedicalCategoryScalarWhereInput | DoctorMedicalCategoryScalarWhereInput[]
  }

  export type ReservationCreateNestedManyWithoutDoctorInput = {
    create?: XOR<ReservationCreateWithoutDoctorInput, ReservationUncheckedCreateWithoutDoctorInput> | ReservationCreateWithoutDoctorInput[] | ReservationUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutDoctorInput | ReservationCreateOrConnectWithoutDoctorInput[]
    createMany?: ReservationCreateManyDoctorInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type DoctorScheduleCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorScheduleCreateWithoutDoctorInput, DoctorScheduleUncheckedCreateWithoutDoctorInput> | DoctorScheduleCreateWithoutDoctorInput[] | DoctorScheduleUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorScheduleCreateOrConnectWithoutDoctorInput | DoctorScheduleCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorScheduleCreateManyDoctorInputEnvelope
    connect?: DoctorScheduleWhereUniqueInput | DoctorScheduleWhereUniqueInput[]
  }

  export type DoctorMedicalCategoryCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorMedicalCategoryCreateWithoutDoctorInput, DoctorMedicalCategoryUncheckedCreateWithoutDoctorInput> | DoctorMedicalCategoryCreateWithoutDoctorInput[] | DoctorMedicalCategoryUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorMedicalCategoryCreateOrConnectWithoutDoctorInput | DoctorMedicalCategoryCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorMedicalCategoryCreateManyDoctorInputEnvelope
    connect?: DoctorMedicalCategoryWhereUniqueInput | DoctorMedicalCategoryWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<ReservationCreateWithoutDoctorInput, ReservationUncheckedCreateWithoutDoctorInput> | ReservationCreateWithoutDoctorInput[] | ReservationUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutDoctorInput | ReservationCreateOrConnectWithoutDoctorInput[]
    createMany?: ReservationCreateManyDoctorInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type DoctorScheduleUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorScheduleCreateWithoutDoctorInput, DoctorScheduleUncheckedCreateWithoutDoctorInput> | DoctorScheduleCreateWithoutDoctorInput[] | DoctorScheduleUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorScheduleCreateOrConnectWithoutDoctorInput | DoctorScheduleCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorScheduleCreateManyDoctorInputEnvelope
    connect?: DoctorScheduleWhereUniqueInput | DoctorScheduleWhereUniqueInput[]
  }

  export type DoctorMedicalCategoryUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorMedicalCategoryCreateWithoutDoctorInput, DoctorMedicalCategoryUncheckedCreateWithoutDoctorInput> | DoctorMedicalCategoryCreateWithoutDoctorInput[] | DoctorMedicalCategoryUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorMedicalCategoryCreateOrConnectWithoutDoctorInput | DoctorMedicalCategoryCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorMedicalCategoryCreateManyDoctorInputEnvelope
    connect?: DoctorMedicalCategoryWhereUniqueInput | DoctorMedicalCategoryWhereUniqueInput[]
  }

  export type ReservationUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<ReservationCreateWithoutDoctorInput, ReservationUncheckedCreateWithoutDoctorInput> | ReservationCreateWithoutDoctorInput[] | ReservationUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutDoctorInput | ReservationCreateOrConnectWithoutDoctorInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutDoctorInput | ReservationUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: ReservationCreateManyDoctorInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutDoctorInput | ReservationUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutDoctorInput | ReservationUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type DoctorScheduleUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorScheduleCreateWithoutDoctorInput, DoctorScheduleUncheckedCreateWithoutDoctorInput> | DoctorScheduleCreateWithoutDoctorInput[] | DoctorScheduleUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorScheduleCreateOrConnectWithoutDoctorInput | DoctorScheduleCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorScheduleUpsertWithWhereUniqueWithoutDoctorInput | DoctorScheduleUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorScheduleCreateManyDoctorInputEnvelope
    set?: DoctorScheduleWhereUniqueInput | DoctorScheduleWhereUniqueInput[]
    disconnect?: DoctorScheduleWhereUniqueInput | DoctorScheduleWhereUniqueInput[]
    delete?: DoctorScheduleWhereUniqueInput | DoctorScheduleWhereUniqueInput[]
    connect?: DoctorScheduleWhereUniqueInput | DoctorScheduleWhereUniqueInput[]
    update?: DoctorScheduleUpdateWithWhereUniqueWithoutDoctorInput | DoctorScheduleUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorScheduleUpdateManyWithWhereWithoutDoctorInput | DoctorScheduleUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorScheduleScalarWhereInput | DoctorScheduleScalarWhereInput[]
  }

  export type DoctorMedicalCategoryUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorMedicalCategoryCreateWithoutDoctorInput, DoctorMedicalCategoryUncheckedCreateWithoutDoctorInput> | DoctorMedicalCategoryCreateWithoutDoctorInput[] | DoctorMedicalCategoryUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorMedicalCategoryCreateOrConnectWithoutDoctorInput | DoctorMedicalCategoryCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorMedicalCategoryUpsertWithWhereUniqueWithoutDoctorInput | DoctorMedicalCategoryUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorMedicalCategoryCreateManyDoctorInputEnvelope
    set?: DoctorMedicalCategoryWhereUniqueInput | DoctorMedicalCategoryWhereUniqueInput[]
    disconnect?: DoctorMedicalCategoryWhereUniqueInput | DoctorMedicalCategoryWhereUniqueInput[]
    delete?: DoctorMedicalCategoryWhereUniqueInput | DoctorMedicalCategoryWhereUniqueInput[]
    connect?: DoctorMedicalCategoryWhereUniqueInput | DoctorMedicalCategoryWhereUniqueInput[]
    update?: DoctorMedicalCategoryUpdateWithWhereUniqueWithoutDoctorInput | DoctorMedicalCategoryUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorMedicalCategoryUpdateManyWithWhereWithoutDoctorInput | DoctorMedicalCategoryUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorMedicalCategoryScalarWhereInput | DoctorMedicalCategoryScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<ReservationCreateWithoutDoctorInput, ReservationUncheckedCreateWithoutDoctorInput> | ReservationCreateWithoutDoctorInput[] | ReservationUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutDoctorInput | ReservationCreateOrConnectWithoutDoctorInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutDoctorInput | ReservationUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: ReservationCreateManyDoctorInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutDoctorInput | ReservationUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutDoctorInput | ReservationUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type DoctorScheduleUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorScheduleCreateWithoutDoctorInput, DoctorScheduleUncheckedCreateWithoutDoctorInput> | DoctorScheduleCreateWithoutDoctorInput[] | DoctorScheduleUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorScheduleCreateOrConnectWithoutDoctorInput | DoctorScheduleCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorScheduleUpsertWithWhereUniqueWithoutDoctorInput | DoctorScheduleUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorScheduleCreateManyDoctorInputEnvelope
    set?: DoctorScheduleWhereUniqueInput | DoctorScheduleWhereUniqueInput[]
    disconnect?: DoctorScheduleWhereUniqueInput | DoctorScheduleWhereUniqueInput[]
    delete?: DoctorScheduleWhereUniqueInput | DoctorScheduleWhereUniqueInput[]
    connect?: DoctorScheduleWhereUniqueInput | DoctorScheduleWhereUniqueInput[]
    update?: DoctorScheduleUpdateWithWhereUniqueWithoutDoctorInput | DoctorScheduleUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorScheduleUpdateManyWithWhereWithoutDoctorInput | DoctorScheduleUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorScheduleScalarWhereInput | DoctorScheduleScalarWhereInput[]
  }

  export type DoctorMedicalCategoryUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorMedicalCategoryCreateWithoutDoctorInput, DoctorMedicalCategoryUncheckedCreateWithoutDoctorInput> | DoctorMedicalCategoryCreateWithoutDoctorInput[] | DoctorMedicalCategoryUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorMedicalCategoryCreateOrConnectWithoutDoctorInput | DoctorMedicalCategoryCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorMedicalCategoryUpsertWithWhereUniqueWithoutDoctorInput | DoctorMedicalCategoryUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorMedicalCategoryCreateManyDoctorInputEnvelope
    set?: DoctorMedicalCategoryWhereUniqueInput | DoctorMedicalCategoryWhereUniqueInput[]
    disconnect?: DoctorMedicalCategoryWhereUniqueInput | DoctorMedicalCategoryWhereUniqueInput[]
    delete?: DoctorMedicalCategoryWhereUniqueInput | DoctorMedicalCategoryWhereUniqueInput[]
    connect?: DoctorMedicalCategoryWhereUniqueInput | DoctorMedicalCategoryWhereUniqueInput[]
    update?: DoctorMedicalCategoryUpdateWithWhereUniqueWithoutDoctorInput | DoctorMedicalCategoryUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorMedicalCategoryUpdateManyWithWhereWithoutDoctorInput | DoctorMedicalCategoryUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorMedicalCategoryScalarWhereInput | DoctorMedicalCategoryScalarWhereInput[]
  }

  export type DoctorCreateNestedOneWithoutMedicalCategoriesInput = {
    create?: XOR<DoctorCreateWithoutMedicalCategoriesInput, DoctorUncheckedCreateWithoutMedicalCategoriesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutMedicalCategoriesInput
    connect?: DoctorWhereUniqueInput
  }

  export type MedicalCategoryCreateNestedOneWithoutDoctorsInput = {
    create?: XOR<MedicalCategoryCreateWithoutDoctorsInput, MedicalCategoryUncheckedCreateWithoutDoctorsInput>
    connectOrCreate?: MedicalCategoryCreateOrConnectWithoutDoctorsInput
    connect?: MedicalCategoryWhereUniqueInput
  }

  export type DoctorUpdateOneRequiredWithoutMedicalCategoriesNestedInput = {
    create?: XOR<DoctorCreateWithoutMedicalCategoriesInput, DoctorUncheckedCreateWithoutMedicalCategoriesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutMedicalCategoriesInput
    upsert?: DoctorUpsertWithoutMedicalCategoriesInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutMedicalCategoriesInput, DoctorUpdateWithoutMedicalCategoriesInput>, DoctorUncheckedUpdateWithoutMedicalCategoriesInput>
  }

  export type MedicalCategoryUpdateOneRequiredWithoutDoctorsNestedInput = {
    create?: XOR<MedicalCategoryCreateWithoutDoctorsInput, MedicalCategoryUncheckedCreateWithoutDoctorsInput>
    connectOrCreate?: MedicalCategoryCreateOrConnectWithoutDoctorsInput
    upsert?: MedicalCategoryUpsertWithoutDoctorsInput
    connect?: MedicalCategoryWhereUniqueInput
    update?: XOR<XOR<MedicalCategoryUpdateToOneWithWhereWithoutDoctorsInput, MedicalCategoryUpdateWithoutDoctorsInput>, MedicalCategoryUncheckedUpdateWithoutDoctorsInput>
  }

  export type DoctorCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<DoctorCreateWithoutSchedulesInput, DoctorUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutSchedulesInput
    connect?: DoctorWhereUniqueInput
  }

  export type DoctorUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<DoctorCreateWithoutSchedulesInput, DoctorUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutSchedulesInput
    upsert?: DoctorUpsertWithoutSchedulesInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutSchedulesInput, DoctorUpdateWithoutSchedulesInput>, DoctorUncheckedUpdateWithoutSchedulesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PatientCreateNestedOneWithoutEmergencyRequestsInput = {
    create?: XOR<PatientCreateWithoutEmergencyRequestsInput, PatientUncheckedCreateWithoutEmergencyRequestsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutEmergencyRequestsInput
    connect?: PatientWhereUniqueInput
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

  export type EnumEmergencyStatusFieldUpdateOperationsInput = {
    set?: $Enums.EmergencyStatus
  }

  export type PatientUpdateOneRequiredWithoutEmergencyRequestsNestedInput = {
    create?: XOR<PatientCreateWithoutEmergencyRequestsInput, PatientUncheckedCreateWithoutEmergencyRequestsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutEmergencyRequestsInput
    upsert?: PatientUpsertWithoutEmergencyRequestsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutEmergencyRequestsInput, PatientUpdateWithoutEmergencyRequestsInput>, PatientUncheckedUpdateWithoutEmergencyRequestsInput>
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

  export type NestedEnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
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

  export type NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumEmergencyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmergencyStatus | EnumEmergencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmergencyStatusFilter<$PrismaModel> | $Enums.EmergencyStatus
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

  export type PatientCreateWithoutReservationsInput = {
    id: string
    name: string
    simrsId?: string | null
    nik?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PatientPaymentCreateNestedManyWithoutPatientInput
    emergencyRequests?: EmergencyRequestCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutReservationsInput = {
    id: string
    name: string
    simrsId?: string | null
    nik?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PatientPaymentUncheckedCreateNestedManyWithoutPatientInput
    emergencyRequests?: EmergencyRequestUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutReservationsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutReservationsInput, PatientUncheckedCreateWithoutReservationsInput>
  }

  export type MedicalCategoryCreateWithoutReservationsInput = {
    id?: string
    simrsId: string
    name: string
    syncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctors?: DoctorMedicalCategoryCreateNestedManyWithoutMedicalCategoryInput
  }

  export type MedicalCategoryUncheckedCreateWithoutReservationsInput = {
    id?: string
    simrsId: string
    name: string
    syncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctors?: DoctorMedicalCategoryUncheckedCreateNestedManyWithoutMedicalCategoryInput
  }

  export type MedicalCategoryCreateOrConnectWithoutReservationsInput = {
    where: MedicalCategoryWhereUniqueInput
    create: XOR<MedicalCategoryCreateWithoutReservationsInput, MedicalCategoryUncheckedCreateWithoutReservationsInput>
  }

  export type DoctorCreateWithoutReservationsInput = {
    id?: string
    simrsId: string
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: DoctorScheduleCreateNestedManyWithoutDoctorInput
    medicalCategories?: DoctorMedicalCategoryCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutReservationsInput = {
    id?: string
    simrsId: string
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: DoctorScheduleUncheckedCreateNestedManyWithoutDoctorInput
    medicalCategories?: DoctorMedicalCategoryUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutReservationsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutReservationsInput, DoctorUncheckedCreateWithoutReservationsInput>
  }

  export type PatientPaymentCreateWithoutReservationsInput = {
    id?: string
    participantId: string
    paymentFile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutPaymentsInput
    paymentMethod: PaymentMethodCreateNestedOneWithoutPatientsInput
  }

  export type PatientPaymentUncheckedCreateWithoutReservationsInput = {
    id?: string
    patientId: string
    paymentMethodId: string
    participantId: string
    paymentFile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientPaymentCreateOrConnectWithoutReservationsInput = {
    where: PatientPaymentWhereUniqueInput
    create: XOR<PatientPaymentCreateWithoutReservationsInput, PatientPaymentUncheckedCreateWithoutReservationsInput>
  }

  export type PatientUpsertWithoutReservationsInput = {
    update: XOR<PatientUpdateWithoutReservationsInput, PatientUncheckedUpdateWithoutReservationsInput>
    create: XOR<PatientCreateWithoutReservationsInput, PatientUncheckedCreateWithoutReservationsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutReservationsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutReservationsInput, PatientUncheckedUpdateWithoutReservationsInput>
  }

  export type PatientUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    simrsId?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PatientPaymentUpdateManyWithoutPatientNestedInput
    emergencyRequests?: EmergencyRequestUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    simrsId?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PatientPaymentUncheckedUpdateManyWithoutPatientNestedInput
    emergencyRequests?: EmergencyRequestUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type MedicalCategoryUpsertWithoutReservationsInput = {
    update: XOR<MedicalCategoryUpdateWithoutReservationsInput, MedicalCategoryUncheckedUpdateWithoutReservationsInput>
    create: XOR<MedicalCategoryCreateWithoutReservationsInput, MedicalCategoryUncheckedCreateWithoutReservationsInput>
    where?: MedicalCategoryWhereInput
  }

  export type MedicalCategoryUpdateToOneWithWhereWithoutReservationsInput = {
    where?: MedicalCategoryWhereInput
    data: XOR<MedicalCategoryUpdateWithoutReservationsInput, MedicalCategoryUncheckedUpdateWithoutReservationsInput>
  }

  export type MedicalCategoryUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctors?: DoctorMedicalCategoryUpdateManyWithoutMedicalCategoryNestedInput
  }

  export type MedicalCategoryUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctors?: DoctorMedicalCategoryUncheckedUpdateManyWithoutMedicalCategoryNestedInput
  }

  export type DoctorUpsertWithoutReservationsInput = {
    update: XOR<DoctorUpdateWithoutReservationsInput, DoctorUncheckedUpdateWithoutReservationsInput>
    create: XOR<DoctorCreateWithoutReservationsInput, DoctorUncheckedCreateWithoutReservationsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutReservationsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutReservationsInput, DoctorUncheckedUpdateWithoutReservationsInput>
  }

  export type DoctorUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: DoctorScheduleUpdateManyWithoutDoctorNestedInput
    medicalCategories?: DoctorMedicalCategoryUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: DoctorScheduleUncheckedUpdateManyWithoutDoctorNestedInput
    medicalCategories?: DoctorMedicalCategoryUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PatientPaymentUpsertWithoutReservationsInput = {
    update: XOR<PatientPaymentUpdateWithoutReservationsInput, PatientPaymentUncheckedUpdateWithoutReservationsInput>
    create: XOR<PatientPaymentCreateWithoutReservationsInput, PatientPaymentUncheckedCreateWithoutReservationsInput>
    where?: PatientPaymentWhereInput
  }

  export type PatientPaymentUpdateToOneWithWhereWithoutReservationsInput = {
    where?: PatientPaymentWhereInput
    data: XOR<PatientPaymentUpdateWithoutReservationsInput, PatientPaymentUncheckedUpdateWithoutReservationsInput>
  }

  export type PatientPaymentUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    paymentFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutPaymentsNestedInput
    paymentMethod?: PaymentMethodUpdateOneRequiredWithoutPatientsNestedInput
  }

  export type PatientPaymentUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    paymentMethodId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    paymentFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateWithoutPatientInput = {
    id?: string
    reservationDate: Date | string
    queueNumber: string
    qrCodeUrl: string
    status?: $Enums.ReservationStatus
    referralFile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medicalCategory: MedicalCategoryCreateNestedOneWithoutReservationsInput
    doctor: DoctorCreateNestedOneWithoutReservationsInput
    patientPayment: PatientPaymentCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutPatientInput = {
    id?: string
    medicalCategoryId: string
    doctorId: string
    reservationDate: Date | string
    queueNumber: string
    qrCodeUrl: string
    status?: $Enums.ReservationStatus
    referralFile?: string | null
    patientPaymentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationCreateOrConnectWithoutPatientInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutPatientInput, ReservationUncheckedCreateWithoutPatientInput>
  }

  export type ReservationCreateManyPatientInputEnvelope = {
    data: ReservationCreateManyPatientInput | ReservationCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type PatientPaymentCreateWithoutPatientInput = {
    id?: string
    participantId: string
    paymentFile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentMethod: PaymentMethodCreateNestedOneWithoutPatientsInput
    reservations?: ReservationCreateNestedManyWithoutPatientPaymentInput
  }

  export type PatientPaymentUncheckedCreateWithoutPatientInput = {
    id?: string
    paymentMethodId: string
    participantId: string
    paymentFile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutPatientPaymentInput
  }

  export type PatientPaymentCreateOrConnectWithoutPatientInput = {
    where: PatientPaymentWhereUniqueInput
    create: XOR<PatientPaymentCreateWithoutPatientInput, PatientPaymentUncheckedCreateWithoutPatientInput>
  }

  export type PatientPaymentCreateManyPatientInputEnvelope = {
    data: PatientPaymentCreateManyPatientInput | PatientPaymentCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type EmergencyRequestCreateWithoutPatientInput = {
    id?: string
    location: string
    note?: string | null
    status?: $Enums.EmergencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: AmbulanceStaffCreateNestedOneWithoutEmergencyRequestInput
    histories?: EmergencyHistoryCreateNestedManyWithoutEmergencyRequestInput
  }

  export type EmergencyRequestUncheckedCreateWithoutPatientInput = {
    id?: string
    location: string
    note?: string | null
    status?: $Enums.EmergencyStatus
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    histories?: EmergencyHistoryUncheckedCreateNestedManyWithoutEmergencyRequestInput
  }

  export type EmergencyRequestCreateOrConnectWithoutPatientInput = {
    where: EmergencyRequestWhereUniqueInput
    create: XOR<EmergencyRequestCreateWithoutPatientInput, EmergencyRequestUncheckedCreateWithoutPatientInput>
  }

  export type EmergencyRequestCreateManyPatientInputEnvelope = {
    data: EmergencyRequestCreateManyPatientInput | EmergencyRequestCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type ReservationUpsertWithWhereUniqueWithoutPatientInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutPatientInput, ReservationUncheckedUpdateWithoutPatientInput>
    create: XOR<ReservationCreateWithoutPatientInput, ReservationUncheckedCreateWithoutPatientInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutPatientInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutPatientInput, ReservationUncheckedUpdateWithoutPatientInput>
  }

  export type ReservationUpdateManyWithWhereWithoutPatientInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutPatientInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id?: StringFilter<"Reservation"> | string
    patientId?: StringFilter<"Reservation"> | string
    medicalCategoryId?: StringFilter<"Reservation"> | string
    doctorId?: StringFilter<"Reservation"> | string
    reservationDate?: DateTimeFilter<"Reservation"> | Date | string
    queueNumber?: StringFilter<"Reservation"> | string
    qrCodeUrl?: StringFilter<"Reservation"> | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    referralFile?: StringNullableFilter<"Reservation"> | string | null
    patientPaymentId?: StringFilter<"Reservation"> | string
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
  }

  export type PatientPaymentUpsertWithWhereUniqueWithoutPatientInput = {
    where: PatientPaymentWhereUniqueInput
    update: XOR<PatientPaymentUpdateWithoutPatientInput, PatientPaymentUncheckedUpdateWithoutPatientInput>
    create: XOR<PatientPaymentCreateWithoutPatientInput, PatientPaymentUncheckedCreateWithoutPatientInput>
  }

  export type PatientPaymentUpdateWithWhereUniqueWithoutPatientInput = {
    where: PatientPaymentWhereUniqueInput
    data: XOR<PatientPaymentUpdateWithoutPatientInput, PatientPaymentUncheckedUpdateWithoutPatientInput>
  }

  export type PatientPaymentUpdateManyWithWhereWithoutPatientInput = {
    where: PatientPaymentScalarWhereInput
    data: XOR<PatientPaymentUpdateManyMutationInput, PatientPaymentUncheckedUpdateManyWithoutPatientInput>
  }

  export type PatientPaymentScalarWhereInput = {
    AND?: PatientPaymentScalarWhereInput | PatientPaymentScalarWhereInput[]
    OR?: PatientPaymentScalarWhereInput[]
    NOT?: PatientPaymentScalarWhereInput | PatientPaymentScalarWhereInput[]
    id?: StringFilter<"PatientPayment"> | string
    patientId?: StringFilter<"PatientPayment"> | string
    paymentMethodId?: StringFilter<"PatientPayment"> | string
    participantId?: StringFilter<"PatientPayment"> | string
    paymentFile?: StringNullableFilter<"PatientPayment"> | string | null
    createdAt?: DateTimeFilter<"PatientPayment"> | Date | string
    updatedAt?: DateTimeFilter<"PatientPayment"> | Date | string
  }

  export type EmergencyRequestUpsertWithWhereUniqueWithoutPatientInput = {
    where: EmergencyRequestWhereUniqueInput
    update: XOR<EmergencyRequestUpdateWithoutPatientInput, EmergencyRequestUncheckedUpdateWithoutPatientInput>
    create: XOR<EmergencyRequestCreateWithoutPatientInput, EmergencyRequestUncheckedCreateWithoutPatientInput>
  }

  export type EmergencyRequestUpdateWithWhereUniqueWithoutPatientInput = {
    where: EmergencyRequestWhereUniqueInput
    data: XOR<EmergencyRequestUpdateWithoutPatientInput, EmergencyRequestUncheckedUpdateWithoutPatientInput>
  }

  export type EmergencyRequestUpdateManyWithWhereWithoutPatientInput = {
    where: EmergencyRequestScalarWhereInput
    data: XOR<EmergencyRequestUpdateManyMutationInput, EmergencyRequestUncheckedUpdateManyWithoutPatientInput>
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

  export type PatientPaymentCreateWithoutPaymentMethodInput = {
    id?: string
    participantId: string
    paymentFile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutPaymentsInput
    reservations?: ReservationCreateNestedManyWithoutPatientPaymentInput
  }

  export type PatientPaymentUncheckedCreateWithoutPaymentMethodInput = {
    id?: string
    patientId: string
    participantId: string
    paymentFile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutPatientPaymentInput
  }

  export type PatientPaymentCreateOrConnectWithoutPaymentMethodInput = {
    where: PatientPaymentWhereUniqueInput
    create: XOR<PatientPaymentCreateWithoutPaymentMethodInput, PatientPaymentUncheckedCreateWithoutPaymentMethodInput>
  }

  export type PatientPaymentCreateManyPaymentMethodInputEnvelope = {
    data: PatientPaymentCreateManyPaymentMethodInput | PatientPaymentCreateManyPaymentMethodInput[]
    skipDuplicates?: boolean
  }

  export type PatientPaymentUpsertWithWhereUniqueWithoutPaymentMethodInput = {
    where: PatientPaymentWhereUniqueInput
    update: XOR<PatientPaymentUpdateWithoutPaymentMethodInput, PatientPaymentUncheckedUpdateWithoutPaymentMethodInput>
    create: XOR<PatientPaymentCreateWithoutPaymentMethodInput, PatientPaymentUncheckedCreateWithoutPaymentMethodInput>
  }

  export type PatientPaymentUpdateWithWhereUniqueWithoutPaymentMethodInput = {
    where: PatientPaymentWhereUniqueInput
    data: XOR<PatientPaymentUpdateWithoutPaymentMethodInput, PatientPaymentUncheckedUpdateWithoutPaymentMethodInput>
  }

  export type PatientPaymentUpdateManyWithWhereWithoutPaymentMethodInput = {
    where: PatientPaymentScalarWhereInput
    data: XOR<PatientPaymentUpdateManyMutationInput, PatientPaymentUncheckedUpdateManyWithoutPaymentMethodInput>
  }

  export type PatientCreateWithoutPaymentsInput = {
    id: string
    name: string
    simrsId?: string | null
    nik?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutPatientInput
    emergencyRequests?: EmergencyRequestCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutPaymentsInput = {
    id: string
    name: string
    simrsId?: string | null
    nik?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutPatientInput
    emergencyRequests?: EmergencyRequestUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutPaymentsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutPaymentsInput, PatientUncheckedCreateWithoutPaymentsInput>
  }

  export type PaymentMethodCreateWithoutPatientsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodUncheckedCreateWithoutPatientsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodCreateOrConnectWithoutPatientsInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutPatientsInput, PaymentMethodUncheckedCreateWithoutPatientsInput>
  }

  export type ReservationCreateWithoutPatientPaymentInput = {
    id?: string
    reservationDate: Date | string
    queueNumber: string
    qrCodeUrl: string
    status?: $Enums.ReservationStatus
    referralFile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutReservationsInput
    medicalCategory: MedicalCategoryCreateNestedOneWithoutReservationsInput
    doctor: DoctorCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutPatientPaymentInput = {
    id?: string
    patientId: string
    medicalCategoryId: string
    doctorId: string
    reservationDate: Date | string
    queueNumber: string
    qrCodeUrl: string
    status?: $Enums.ReservationStatus
    referralFile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationCreateOrConnectWithoutPatientPaymentInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutPatientPaymentInput, ReservationUncheckedCreateWithoutPatientPaymentInput>
  }

  export type ReservationCreateManyPatientPaymentInputEnvelope = {
    data: ReservationCreateManyPatientPaymentInput | ReservationCreateManyPatientPaymentInput[]
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithoutPaymentsInput = {
    update: XOR<PatientUpdateWithoutPaymentsInput, PatientUncheckedUpdateWithoutPaymentsInput>
    create: XOR<PatientCreateWithoutPaymentsInput, PatientUncheckedCreateWithoutPaymentsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutPaymentsInput, PatientUncheckedUpdateWithoutPaymentsInput>
  }

  export type PatientUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    simrsId?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutPatientNestedInput
    emergencyRequests?: EmergencyRequestUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    simrsId?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutPatientNestedInput
    emergencyRequests?: EmergencyRequestUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PaymentMethodUpsertWithoutPatientsInput = {
    update: XOR<PaymentMethodUpdateWithoutPatientsInput, PaymentMethodUncheckedUpdateWithoutPatientsInput>
    create: XOR<PaymentMethodCreateWithoutPatientsInput, PaymentMethodUncheckedCreateWithoutPatientsInput>
    where?: PaymentMethodWhereInput
  }

  export type PaymentMethodUpdateToOneWithWhereWithoutPatientsInput = {
    where?: PaymentMethodWhereInput
    data: XOR<PaymentMethodUpdateWithoutPatientsInput, PaymentMethodUncheckedUpdateWithoutPatientsInput>
  }

  export type PaymentMethodUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUncheckedUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUpsertWithWhereUniqueWithoutPatientPaymentInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutPatientPaymentInput, ReservationUncheckedUpdateWithoutPatientPaymentInput>
    create: XOR<ReservationCreateWithoutPatientPaymentInput, ReservationUncheckedCreateWithoutPatientPaymentInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutPatientPaymentInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutPatientPaymentInput, ReservationUncheckedUpdateWithoutPatientPaymentInput>
  }

  export type ReservationUpdateManyWithWhereWithoutPatientPaymentInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutPatientPaymentInput>
  }

  export type ReservationCreateWithoutMedicalCategoryInput = {
    id?: string
    reservationDate: Date | string
    queueNumber: string
    qrCodeUrl: string
    status?: $Enums.ReservationStatus
    referralFile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutReservationsInput
    doctor: DoctorCreateNestedOneWithoutReservationsInput
    patientPayment: PatientPaymentCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutMedicalCategoryInput = {
    id?: string
    patientId: string
    doctorId: string
    reservationDate: Date | string
    queueNumber: string
    qrCodeUrl: string
    status?: $Enums.ReservationStatus
    referralFile?: string | null
    patientPaymentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationCreateOrConnectWithoutMedicalCategoryInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutMedicalCategoryInput, ReservationUncheckedCreateWithoutMedicalCategoryInput>
  }

  export type ReservationCreateManyMedicalCategoryInputEnvelope = {
    data: ReservationCreateManyMedicalCategoryInput | ReservationCreateManyMedicalCategoryInput[]
    skipDuplicates?: boolean
  }

  export type DoctorMedicalCategoryCreateWithoutMedicalCategoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutMedicalCategoriesInput
  }

  export type DoctorMedicalCategoryUncheckedCreateWithoutMedicalCategoryInput = {
    id?: string
    doctorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorMedicalCategoryCreateOrConnectWithoutMedicalCategoryInput = {
    where: DoctorMedicalCategoryWhereUniqueInput
    create: XOR<DoctorMedicalCategoryCreateWithoutMedicalCategoryInput, DoctorMedicalCategoryUncheckedCreateWithoutMedicalCategoryInput>
  }

  export type DoctorMedicalCategoryCreateManyMedicalCategoryInputEnvelope = {
    data: DoctorMedicalCategoryCreateManyMedicalCategoryInput | DoctorMedicalCategoryCreateManyMedicalCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ReservationUpsertWithWhereUniqueWithoutMedicalCategoryInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutMedicalCategoryInput, ReservationUncheckedUpdateWithoutMedicalCategoryInput>
    create: XOR<ReservationCreateWithoutMedicalCategoryInput, ReservationUncheckedCreateWithoutMedicalCategoryInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutMedicalCategoryInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutMedicalCategoryInput, ReservationUncheckedUpdateWithoutMedicalCategoryInput>
  }

  export type ReservationUpdateManyWithWhereWithoutMedicalCategoryInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutMedicalCategoryInput>
  }

  export type DoctorMedicalCategoryUpsertWithWhereUniqueWithoutMedicalCategoryInput = {
    where: DoctorMedicalCategoryWhereUniqueInput
    update: XOR<DoctorMedicalCategoryUpdateWithoutMedicalCategoryInput, DoctorMedicalCategoryUncheckedUpdateWithoutMedicalCategoryInput>
    create: XOR<DoctorMedicalCategoryCreateWithoutMedicalCategoryInput, DoctorMedicalCategoryUncheckedCreateWithoutMedicalCategoryInput>
  }

  export type DoctorMedicalCategoryUpdateWithWhereUniqueWithoutMedicalCategoryInput = {
    where: DoctorMedicalCategoryWhereUniqueInput
    data: XOR<DoctorMedicalCategoryUpdateWithoutMedicalCategoryInput, DoctorMedicalCategoryUncheckedUpdateWithoutMedicalCategoryInput>
  }

  export type DoctorMedicalCategoryUpdateManyWithWhereWithoutMedicalCategoryInput = {
    where: DoctorMedicalCategoryScalarWhereInput
    data: XOR<DoctorMedicalCategoryUpdateManyMutationInput, DoctorMedicalCategoryUncheckedUpdateManyWithoutMedicalCategoryInput>
  }

  export type DoctorMedicalCategoryScalarWhereInput = {
    AND?: DoctorMedicalCategoryScalarWhereInput | DoctorMedicalCategoryScalarWhereInput[]
    OR?: DoctorMedicalCategoryScalarWhereInput[]
    NOT?: DoctorMedicalCategoryScalarWhereInput | DoctorMedicalCategoryScalarWhereInput[]
    id?: StringFilter<"DoctorMedicalCategory"> | string
    doctorId?: StringFilter<"DoctorMedicalCategory"> | string
    medicalCategoryId?: StringFilter<"DoctorMedicalCategory"> | string
    createdAt?: DateTimeFilter<"DoctorMedicalCategory"> | Date | string
    updatedAt?: DateTimeFilter<"DoctorMedicalCategory"> | Date | string
  }

  export type ReservationCreateWithoutDoctorInput = {
    id?: string
    reservationDate: Date | string
    queueNumber: string
    qrCodeUrl: string
    status?: $Enums.ReservationStatus
    referralFile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutReservationsInput
    medicalCategory: MedicalCategoryCreateNestedOneWithoutReservationsInput
    patientPayment: PatientPaymentCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutDoctorInput = {
    id?: string
    patientId: string
    medicalCategoryId: string
    reservationDate: Date | string
    queueNumber: string
    qrCodeUrl: string
    status?: $Enums.ReservationStatus
    referralFile?: string | null
    patientPaymentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationCreateOrConnectWithoutDoctorInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutDoctorInput, ReservationUncheckedCreateWithoutDoctorInput>
  }

  export type ReservationCreateManyDoctorInputEnvelope = {
    data: ReservationCreateManyDoctorInput | ReservationCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type DoctorScheduleCreateWithoutDoctorInput = {
    id?: string
    simrsId: string
    specialization: string
    day: string
    startTime: string
    endTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorScheduleUncheckedCreateWithoutDoctorInput = {
    id?: string
    simrsId: string
    specialization: string
    day: string
    startTime: string
    endTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorScheduleCreateOrConnectWithoutDoctorInput = {
    where: DoctorScheduleWhereUniqueInput
    create: XOR<DoctorScheduleCreateWithoutDoctorInput, DoctorScheduleUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorScheduleCreateManyDoctorInputEnvelope = {
    data: DoctorScheduleCreateManyDoctorInput | DoctorScheduleCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type DoctorMedicalCategoryCreateWithoutDoctorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    medicalCategory: MedicalCategoryCreateNestedOneWithoutDoctorsInput
  }

  export type DoctorMedicalCategoryUncheckedCreateWithoutDoctorInput = {
    id?: string
    medicalCategoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorMedicalCategoryCreateOrConnectWithoutDoctorInput = {
    where: DoctorMedicalCategoryWhereUniqueInput
    create: XOR<DoctorMedicalCategoryCreateWithoutDoctorInput, DoctorMedicalCategoryUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorMedicalCategoryCreateManyDoctorInputEnvelope = {
    data: DoctorMedicalCategoryCreateManyDoctorInput | DoctorMedicalCategoryCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type ReservationUpsertWithWhereUniqueWithoutDoctorInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutDoctorInput, ReservationUncheckedUpdateWithoutDoctorInput>
    create: XOR<ReservationCreateWithoutDoctorInput, ReservationUncheckedCreateWithoutDoctorInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutDoctorInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutDoctorInput, ReservationUncheckedUpdateWithoutDoctorInput>
  }

  export type ReservationUpdateManyWithWhereWithoutDoctorInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorScheduleUpsertWithWhereUniqueWithoutDoctorInput = {
    where: DoctorScheduleWhereUniqueInput
    update: XOR<DoctorScheduleUpdateWithoutDoctorInput, DoctorScheduleUncheckedUpdateWithoutDoctorInput>
    create: XOR<DoctorScheduleCreateWithoutDoctorInput, DoctorScheduleUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorScheduleUpdateWithWhereUniqueWithoutDoctorInput = {
    where: DoctorScheduleWhereUniqueInput
    data: XOR<DoctorScheduleUpdateWithoutDoctorInput, DoctorScheduleUncheckedUpdateWithoutDoctorInput>
  }

  export type DoctorScheduleUpdateManyWithWhereWithoutDoctorInput = {
    where: DoctorScheduleScalarWhereInput
    data: XOR<DoctorScheduleUpdateManyMutationInput, DoctorScheduleUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorScheduleScalarWhereInput = {
    AND?: DoctorScheduleScalarWhereInput | DoctorScheduleScalarWhereInput[]
    OR?: DoctorScheduleScalarWhereInput[]
    NOT?: DoctorScheduleScalarWhereInput | DoctorScheduleScalarWhereInput[]
    id?: StringFilter<"DoctorSchedule"> | string
    simrsId?: StringFilter<"DoctorSchedule"> | string
    doctorId?: StringFilter<"DoctorSchedule"> | string
    specialization?: StringFilter<"DoctorSchedule"> | string
    day?: StringFilter<"DoctorSchedule"> | string
    startTime?: StringFilter<"DoctorSchedule"> | string
    endTime?: StringFilter<"DoctorSchedule"> | string
    createdAt?: DateTimeFilter<"DoctorSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"DoctorSchedule"> | Date | string
  }

  export type DoctorMedicalCategoryUpsertWithWhereUniqueWithoutDoctorInput = {
    where: DoctorMedicalCategoryWhereUniqueInput
    update: XOR<DoctorMedicalCategoryUpdateWithoutDoctorInput, DoctorMedicalCategoryUncheckedUpdateWithoutDoctorInput>
    create: XOR<DoctorMedicalCategoryCreateWithoutDoctorInput, DoctorMedicalCategoryUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorMedicalCategoryUpdateWithWhereUniqueWithoutDoctorInput = {
    where: DoctorMedicalCategoryWhereUniqueInput
    data: XOR<DoctorMedicalCategoryUpdateWithoutDoctorInput, DoctorMedicalCategoryUncheckedUpdateWithoutDoctorInput>
  }

  export type DoctorMedicalCategoryUpdateManyWithWhereWithoutDoctorInput = {
    where: DoctorMedicalCategoryScalarWhereInput
    data: XOR<DoctorMedicalCategoryUpdateManyMutationInput, DoctorMedicalCategoryUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorCreateWithoutMedicalCategoriesInput = {
    id?: string
    simrsId: string
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutDoctorInput
    schedules?: DoctorScheduleCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutMedicalCategoriesInput = {
    id?: string
    simrsId: string
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutDoctorInput
    schedules?: DoctorScheduleUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutMedicalCategoriesInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutMedicalCategoriesInput, DoctorUncheckedCreateWithoutMedicalCategoriesInput>
  }

  export type MedicalCategoryCreateWithoutDoctorsInput = {
    id?: string
    simrsId: string
    name: string
    syncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutMedicalCategoryInput
  }

  export type MedicalCategoryUncheckedCreateWithoutDoctorsInput = {
    id?: string
    simrsId: string
    name: string
    syncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutMedicalCategoryInput
  }

  export type MedicalCategoryCreateOrConnectWithoutDoctorsInput = {
    where: MedicalCategoryWhereUniqueInput
    create: XOR<MedicalCategoryCreateWithoutDoctorsInput, MedicalCategoryUncheckedCreateWithoutDoctorsInput>
  }

  export type DoctorUpsertWithoutMedicalCategoriesInput = {
    update: XOR<DoctorUpdateWithoutMedicalCategoriesInput, DoctorUncheckedUpdateWithoutMedicalCategoriesInput>
    create: XOR<DoctorCreateWithoutMedicalCategoriesInput, DoctorUncheckedCreateWithoutMedicalCategoriesInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutMedicalCategoriesInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutMedicalCategoriesInput, DoctorUncheckedUpdateWithoutMedicalCategoriesInput>
  }

  export type DoctorUpdateWithoutMedicalCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutDoctorNestedInput
    schedules?: DoctorScheduleUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutMedicalCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutDoctorNestedInput
    schedules?: DoctorScheduleUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type MedicalCategoryUpsertWithoutDoctorsInput = {
    update: XOR<MedicalCategoryUpdateWithoutDoctorsInput, MedicalCategoryUncheckedUpdateWithoutDoctorsInput>
    create: XOR<MedicalCategoryCreateWithoutDoctorsInput, MedicalCategoryUncheckedCreateWithoutDoctorsInput>
    where?: MedicalCategoryWhereInput
  }

  export type MedicalCategoryUpdateToOneWithWhereWithoutDoctorsInput = {
    where?: MedicalCategoryWhereInput
    data: XOR<MedicalCategoryUpdateWithoutDoctorsInput, MedicalCategoryUncheckedUpdateWithoutDoctorsInput>
  }

  export type MedicalCategoryUpdateWithoutDoctorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutMedicalCategoryNestedInput
  }

  export type MedicalCategoryUncheckedUpdateWithoutDoctorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    syncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutMedicalCategoryNestedInput
  }

  export type DoctorCreateWithoutSchedulesInput = {
    id?: string
    simrsId: string
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutDoctorInput
    medicalCategories?: DoctorMedicalCategoryCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutSchedulesInput = {
    id?: string
    simrsId: string
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutDoctorInput
    medicalCategories?: DoctorMedicalCategoryUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutSchedulesInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutSchedulesInput, DoctorUncheckedCreateWithoutSchedulesInput>
  }

  export type DoctorUpsertWithoutSchedulesInput = {
    update: XOR<DoctorUpdateWithoutSchedulesInput, DoctorUncheckedUpdateWithoutSchedulesInput>
    create: XOR<DoctorCreateWithoutSchedulesInput, DoctorUncheckedCreateWithoutSchedulesInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutSchedulesInput, DoctorUncheckedUpdateWithoutSchedulesInput>
  }

  export type DoctorUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutDoctorNestedInput
    medicalCategories?: DoctorMedicalCategoryUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutDoctorNestedInput
    medicalCategories?: DoctorMedicalCategoryUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PatientCreateWithoutEmergencyRequestsInput = {
    id: string
    name: string
    simrsId?: string | null
    nik?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutPatientInput
    payments?: PatientPaymentCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutEmergencyRequestsInput = {
    id: string
    name: string
    simrsId?: string | null
    nik?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutPatientInput
    payments?: PatientPaymentUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutEmergencyRequestsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutEmergencyRequestsInput, PatientUncheckedCreateWithoutEmergencyRequestsInput>
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

  export type PatientUpsertWithoutEmergencyRequestsInput = {
    update: XOR<PatientUpdateWithoutEmergencyRequestsInput, PatientUncheckedUpdateWithoutEmergencyRequestsInput>
    create: XOR<PatientCreateWithoutEmergencyRequestsInput, PatientUncheckedCreateWithoutEmergencyRequestsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutEmergencyRequestsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutEmergencyRequestsInput, PatientUncheckedUpdateWithoutEmergencyRequestsInput>
  }

  export type PatientUpdateWithoutEmergencyRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    simrsId?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutPatientNestedInput
    payments?: PatientPaymentUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutEmergencyRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    simrsId?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutPatientNestedInput
    payments?: PatientPaymentUncheckedUpdateManyWithoutPatientNestedInput
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
    location: string
    note?: string | null
    status?: $Enums.EmergencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutEmergencyRequestsInput
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
    location?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutEmergencyRequestsNestedInput
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
    location: string
    note?: string | null
    status?: $Enums.EmergencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutEmergencyRequestsInput
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

  export type ReservationCreateManyPatientInput = {
    id?: string
    medicalCategoryId: string
    doctorId: string
    reservationDate: Date | string
    queueNumber: string
    qrCodeUrl: string
    status?: $Enums.ReservationStatus
    referralFile?: string | null
    patientPaymentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientPaymentCreateManyPatientInput = {
    id?: string
    paymentMethodId: string
    participantId: string
    paymentFile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmergencyRequestCreateManyPatientInput = {
    id?: string
    location: string
    note?: string | null
    status?: $Enums.EmergencyStatus
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    queueNumber?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    referralFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalCategory?: MedicalCategoryUpdateOneRequiredWithoutReservationsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutReservationsNestedInput
    patientPayment?: PatientPaymentUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicalCategoryId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    queueNumber?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    referralFile?: NullableStringFieldUpdateOperationsInput | string | null
    patientPaymentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicalCategoryId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    queueNumber?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    referralFile?: NullableStringFieldUpdateOperationsInput | string | null
    patientPaymentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientPaymentUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    paymentFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: PaymentMethodUpdateOneRequiredWithoutPatientsNestedInput
    reservations?: ReservationUpdateManyWithoutPatientPaymentNestedInput
  }

  export type PatientPaymentUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentMethodId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    paymentFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutPatientPaymentNestedInput
  }

  export type PatientPaymentUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentMethodId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    paymentFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyRequestUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: AmbulanceStaffUpdateOneWithoutEmergencyRequestNestedInput
    histories?: EmergencyHistoryUpdateManyWithoutEmergencyRequestNestedInput
  }

  export type EmergencyRequestUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    histories?: EmergencyHistoryUncheckedUpdateManyWithoutEmergencyRequestNestedInput
  }

  export type EmergencyRequestUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientPaymentCreateManyPaymentMethodInput = {
    id?: string
    patientId: string
    participantId: string
    paymentFile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientPaymentUpdateWithoutPaymentMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    paymentFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutPaymentsNestedInput
    reservations?: ReservationUpdateManyWithoutPatientPaymentNestedInput
  }

  export type PatientPaymentUncheckedUpdateWithoutPaymentMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    paymentFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutPatientPaymentNestedInput
  }

  export type PatientPaymentUncheckedUpdateManyWithoutPaymentMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    paymentFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateManyPatientPaymentInput = {
    id?: string
    patientId: string
    medicalCategoryId: string
    doctorId: string
    reservationDate: Date | string
    queueNumber: string
    qrCodeUrl: string
    status?: $Enums.ReservationStatus
    referralFile?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateWithoutPatientPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    queueNumber?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    referralFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutReservationsNestedInput
    medicalCategory?: MedicalCategoryUpdateOneRequiredWithoutReservationsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutPatientPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    medicalCategoryId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    queueNumber?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    referralFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyWithoutPatientPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    medicalCategoryId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    queueNumber?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    referralFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateManyMedicalCategoryInput = {
    id?: string
    patientId: string
    doctorId: string
    reservationDate: Date | string
    queueNumber: string
    qrCodeUrl: string
    status?: $Enums.ReservationStatus
    referralFile?: string | null
    patientPaymentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorMedicalCategoryCreateManyMedicalCategoryInput = {
    id?: string
    doctorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateWithoutMedicalCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    queueNumber?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    referralFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutReservationsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutReservationsNestedInput
    patientPayment?: PatientPaymentUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutMedicalCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    queueNumber?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    referralFile?: NullableStringFieldUpdateOperationsInput | string | null
    patientPaymentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyWithoutMedicalCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    queueNumber?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    referralFile?: NullableStringFieldUpdateOperationsInput | string | null
    patientPaymentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorMedicalCategoryUpdateWithoutMedicalCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutMedicalCategoriesNestedInput
  }

  export type DoctorMedicalCategoryUncheckedUpdateWithoutMedicalCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorMedicalCategoryUncheckedUpdateManyWithoutMedicalCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateManyDoctorInput = {
    id?: string
    patientId: string
    medicalCategoryId: string
    reservationDate: Date | string
    queueNumber: string
    qrCodeUrl: string
    status?: $Enums.ReservationStatus
    referralFile?: string | null
    patientPaymentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorScheduleCreateManyDoctorInput = {
    id?: string
    simrsId: string
    specialization: string
    day: string
    startTime: string
    endTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorMedicalCategoryCreateManyDoctorInput = {
    id?: string
    medicalCategoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    queueNumber?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    referralFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutReservationsNestedInput
    medicalCategory?: MedicalCategoryUpdateOneRequiredWithoutReservationsNestedInput
    patientPayment?: PatientPaymentUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    medicalCategoryId?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    queueNumber?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    referralFile?: NullableStringFieldUpdateOperationsInput | string | null
    patientPaymentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    medicalCategoryId?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    queueNumber?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    referralFile?: NullableStringFieldUpdateOperationsInput | string | null
    patientPaymentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorScheduleUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorScheduleUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorScheduleUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    simrsId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorMedicalCategoryUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalCategory?: MedicalCategoryUpdateOneRequiredWithoutDoctorsNestedInput
  }

  export type DoctorMedicalCategoryUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicalCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorMedicalCategoryUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicalCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    location?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutEmergencyRequestsNestedInput
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