
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
 * Model DoctorRating
 * 
 */
export type DoctorRating = $Result.DefaultSelection<Prisma.$DoctorRatingPayload>
/**
 * Model UnitRating
 * 
 */
export type UnitRating = $Result.DefaultSelection<Prisma.$UnitRatingPayload>
/**
 * Model Facility
 * 
 */
export type Facility = $Result.DefaultSelection<Prisma.$FacilityPayload>
/**
 * Model FacilityRating
 * 
 */
export type FacilityRating = $Result.DefaultSelection<Prisma.$FacilityRatingPayload>
/**
 * Model FacilityPhoto
 * 
 */
export type FacilityPhoto = $Result.DefaultSelection<Prisma.$FacilityPhotoPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Gallery
 * 
 */
export type Gallery = $Result.DefaultSelection<Prisma.$GalleryPayload>
/**
 * Model GalleryPhoto
 * 
 */
export type GalleryPhoto = $Result.DefaultSelection<Prisma.$GalleryPhotoPayload>
/**
 * Model Banner
 * 
 */
export type Banner = $Result.DefaultSelection<Prisma.$BannerPayload>
/**
 * Model Nurse
 * 
 */
export type Nurse = $Result.DefaultSelection<Prisma.$NursePayload>
/**
 * Model NurseSchedule
 * 
 */
export type NurseSchedule = $Result.DefaultSelection<Prisma.$NurseSchedulePayload>
/**
 * Model NurseRating
 * 
 */
export type NurseRating = $Result.DefaultSelection<Prisma.$NurseRatingPayload>

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

  /**
   * `prisma.doctorRating`: Exposes CRUD operations for the **DoctorRating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorRatings
    * const doctorRatings = await prisma.doctorRating.findMany()
    * ```
    */
  get doctorRating(): Prisma.DoctorRatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unitRating`: Exposes CRUD operations for the **UnitRating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnitRatings
    * const unitRatings = await prisma.unitRating.findMany()
    * ```
    */
  get unitRating(): Prisma.UnitRatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facility`: Exposes CRUD operations for the **Facility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facilities
    * const facilities = await prisma.facility.findMany()
    * ```
    */
  get facility(): Prisma.FacilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facilityRating`: Exposes CRUD operations for the **FacilityRating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacilityRatings
    * const facilityRatings = await prisma.facilityRating.findMany()
    * ```
    */
  get facilityRating(): Prisma.FacilityRatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facilityPhoto`: Exposes CRUD operations for the **FacilityPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacilityPhotos
    * const facilityPhotos = await prisma.facilityPhoto.findMany()
    * ```
    */
  get facilityPhoto(): Prisma.FacilityPhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gallery`: Exposes CRUD operations for the **Gallery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Galleries
    * const galleries = await prisma.gallery.findMany()
    * ```
    */
  get gallery(): Prisma.GalleryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galleryPhoto`: Exposes CRUD operations for the **GalleryPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GalleryPhotos
    * const galleryPhotos = await prisma.galleryPhoto.findMany()
    * ```
    */
  get galleryPhoto(): Prisma.GalleryPhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.banner`: Exposes CRUD operations for the **Banner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banner.findMany()
    * ```
    */
  get banner(): Prisma.BannerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nurse`: Exposes CRUD operations for the **Nurse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nurses
    * const nurses = await prisma.nurse.findMany()
    * ```
    */
  get nurse(): Prisma.NurseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nurseSchedule`: Exposes CRUD operations for the **NurseSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NurseSchedules
    * const nurseSchedules = await prisma.nurseSchedule.findMany()
    * ```
    */
  get nurseSchedule(): Prisma.NurseScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nurseRating`: Exposes CRUD operations for the **NurseRating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NurseRatings
    * const nurseRatings = await prisma.nurseRating.findMany()
    * ```
    */
  get nurseRating(): Prisma.NurseRatingDelegate<ExtArgs, ClientOptions>;
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
    HospitalLocation: 'HospitalLocation',
    DoctorRating: 'DoctorRating',
    UnitRating: 'UnitRating',
    Facility: 'Facility',
    FacilityRating: 'FacilityRating',
    FacilityPhoto: 'FacilityPhoto',
    Post: 'Post',
    Gallery: 'Gallery',
    GalleryPhoto: 'GalleryPhoto',
    Banner: 'Banner',
    Nurse: 'Nurse',
    NurseSchedule: 'NurseSchedule',
    NurseRating: 'NurseRating'
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
      modelProps: "emergencyRequest" | "emergencyHistory" | "ambulanceStaff" | "reservationQRCode" | "hospitalLocation" | "doctorRating" | "unitRating" | "facility" | "facilityRating" | "facilityPhoto" | "post" | "gallery" | "galleryPhoto" | "banner" | "nurse" | "nurseSchedule" | "nurseRating"
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
      DoctorRating: {
        payload: Prisma.$DoctorRatingPayload<ExtArgs>
        fields: Prisma.DoctorRatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorRatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorRatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorRatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorRatingPayload>
          }
          findFirst: {
            args: Prisma.DoctorRatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorRatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorRatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorRatingPayload>
          }
          findMany: {
            args: Prisma.DoctorRatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorRatingPayload>[]
          }
          create: {
            args: Prisma.DoctorRatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorRatingPayload>
          }
          createMany: {
            args: Prisma.DoctorRatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorRatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorRatingPayload>[]
          }
          delete: {
            args: Prisma.DoctorRatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorRatingPayload>
          }
          update: {
            args: Prisma.DoctorRatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorRatingPayload>
          }
          deleteMany: {
            args: Prisma.DoctorRatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorRatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorRatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorRatingPayload>[]
          }
          upsert: {
            args: Prisma.DoctorRatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorRatingPayload>
          }
          aggregate: {
            args: Prisma.DoctorRatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorRating>
          }
          groupBy: {
            args: Prisma.DoctorRatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorRatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorRatingCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorRatingCountAggregateOutputType> | number
          }
        }
      }
      UnitRating: {
        payload: Prisma.$UnitRatingPayload<ExtArgs>
        fields: Prisma.UnitRatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitRatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitRatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitRatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitRatingPayload>
          }
          findFirst: {
            args: Prisma.UnitRatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitRatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitRatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitRatingPayload>
          }
          findMany: {
            args: Prisma.UnitRatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitRatingPayload>[]
          }
          create: {
            args: Prisma.UnitRatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitRatingPayload>
          }
          createMany: {
            args: Prisma.UnitRatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitRatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitRatingPayload>[]
          }
          delete: {
            args: Prisma.UnitRatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitRatingPayload>
          }
          update: {
            args: Prisma.UnitRatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitRatingPayload>
          }
          deleteMany: {
            args: Prisma.UnitRatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitRatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitRatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitRatingPayload>[]
          }
          upsert: {
            args: Prisma.UnitRatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitRatingPayload>
          }
          aggregate: {
            args: Prisma.UnitRatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnitRating>
          }
          groupBy: {
            args: Prisma.UnitRatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitRatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitRatingCountArgs<ExtArgs>
            result: $Utils.Optional<UnitRatingCountAggregateOutputType> | number
          }
        }
      }
      Facility: {
        payload: Prisma.$FacilityPayload<ExtArgs>
        fields: Prisma.FacilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          findFirst: {
            args: Prisma.FacilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          findMany: {
            args: Prisma.FacilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>[]
          }
          create: {
            args: Prisma.FacilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          createMany: {
            args: Prisma.FacilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>[]
          }
          delete: {
            args: Prisma.FacilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          update: {
            args: Prisma.FacilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          deleteMany: {
            args: Prisma.FacilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>[]
          }
          upsert: {
            args: Prisma.FacilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          aggregate: {
            args: Prisma.FacilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacility>
          }
          groupBy: {
            args: Prisma.FacilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacilityCountArgs<ExtArgs>
            result: $Utils.Optional<FacilityCountAggregateOutputType> | number
          }
        }
      }
      FacilityRating: {
        payload: Prisma.$FacilityRatingPayload<ExtArgs>
        fields: Prisma.FacilityRatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacilityRatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityRatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacilityRatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityRatingPayload>
          }
          findFirst: {
            args: Prisma.FacilityRatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityRatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacilityRatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityRatingPayload>
          }
          findMany: {
            args: Prisma.FacilityRatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityRatingPayload>[]
          }
          create: {
            args: Prisma.FacilityRatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityRatingPayload>
          }
          createMany: {
            args: Prisma.FacilityRatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacilityRatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityRatingPayload>[]
          }
          delete: {
            args: Prisma.FacilityRatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityRatingPayload>
          }
          update: {
            args: Prisma.FacilityRatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityRatingPayload>
          }
          deleteMany: {
            args: Prisma.FacilityRatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacilityRatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacilityRatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityRatingPayload>[]
          }
          upsert: {
            args: Prisma.FacilityRatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityRatingPayload>
          }
          aggregate: {
            args: Prisma.FacilityRatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacilityRating>
          }
          groupBy: {
            args: Prisma.FacilityRatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacilityRatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacilityRatingCountArgs<ExtArgs>
            result: $Utils.Optional<FacilityRatingCountAggregateOutputType> | number
          }
        }
      }
      FacilityPhoto: {
        payload: Prisma.$FacilityPhotoPayload<ExtArgs>
        fields: Prisma.FacilityPhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacilityPhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacilityPhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPhotoPayload>
          }
          findFirst: {
            args: Prisma.FacilityPhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacilityPhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPhotoPayload>
          }
          findMany: {
            args: Prisma.FacilityPhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPhotoPayload>[]
          }
          create: {
            args: Prisma.FacilityPhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPhotoPayload>
          }
          createMany: {
            args: Prisma.FacilityPhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacilityPhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPhotoPayload>[]
          }
          delete: {
            args: Prisma.FacilityPhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPhotoPayload>
          }
          update: {
            args: Prisma.FacilityPhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPhotoPayload>
          }
          deleteMany: {
            args: Prisma.FacilityPhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacilityPhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacilityPhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPhotoPayload>[]
          }
          upsert: {
            args: Prisma.FacilityPhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPhotoPayload>
          }
          aggregate: {
            args: Prisma.FacilityPhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacilityPhoto>
          }
          groupBy: {
            args: Prisma.FacilityPhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacilityPhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacilityPhotoCountArgs<ExtArgs>
            result: $Utils.Optional<FacilityPhotoCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Gallery: {
        payload: Prisma.$GalleryPayload<ExtArgs>
        fields: Prisma.GalleryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          findFirst: {
            args: Prisma.GalleryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          findMany: {
            args: Prisma.GalleryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>[]
          }
          create: {
            args: Prisma.GalleryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          createMany: {
            args: Prisma.GalleryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalleryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>[]
          }
          delete: {
            args: Prisma.GalleryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          update: {
            args: Prisma.GalleryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          deleteMany: {
            args: Prisma.GalleryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalleryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>[]
          }
          upsert: {
            args: Prisma.GalleryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          aggregate: {
            args: Prisma.GalleryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGallery>
          }
          groupBy: {
            args: Prisma.GalleryGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryCountAggregateOutputType> | number
          }
        }
      }
      GalleryPhoto: {
        payload: Prisma.$GalleryPhotoPayload<ExtArgs>
        fields: Prisma.GalleryPhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryPhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryPhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPhotoPayload>
          }
          findFirst: {
            args: Prisma.GalleryPhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryPhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPhotoPayload>
          }
          findMany: {
            args: Prisma.GalleryPhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPhotoPayload>[]
          }
          create: {
            args: Prisma.GalleryPhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPhotoPayload>
          }
          createMany: {
            args: Prisma.GalleryPhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalleryPhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPhotoPayload>[]
          }
          delete: {
            args: Prisma.GalleryPhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPhotoPayload>
          }
          update: {
            args: Prisma.GalleryPhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPhotoPayload>
          }
          deleteMany: {
            args: Prisma.GalleryPhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryPhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalleryPhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPhotoPayload>[]
          }
          upsert: {
            args: Prisma.GalleryPhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPhotoPayload>
          }
          aggregate: {
            args: Prisma.GalleryPhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalleryPhoto>
          }
          groupBy: {
            args: Prisma.GalleryPhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryPhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryPhotoCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryPhotoCountAggregateOutputType> | number
          }
        }
      }
      Banner: {
        payload: Prisma.$BannerPayload<ExtArgs>
        fields: Prisma.BannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findFirst: {
            args: Prisma.BannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findMany: {
            args: Prisma.BannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          create: {
            args: Prisma.BannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          createMany: {
            args: Prisma.BannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BannerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          delete: {
            args: Prisma.BannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          update: {
            args: Prisma.BannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          deleteMany: {
            args: Prisma.BannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BannerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          upsert: {
            args: Prisma.BannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          aggregate: {
            args: Prisma.BannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanner>
          }
          groupBy: {
            args: Prisma.BannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BannerCountArgs<ExtArgs>
            result: $Utils.Optional<BannerCountAggregateOutputType> | number
          }
        }
      }
      Nurse: {
        payload: Prisma.$NursePayload<ExtArgs>
        fields: Prisma.NurseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NurseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NurseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>
          }
          findFirst: {
            args: Prisma.NurseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NurseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>
          }
          findMany: {
            args: Prisma.NurseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>[]
          }
          create: {
            args: Prisma.NurseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>
          }
          createMany: {
            args: Prisma.NurseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NurseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>[]
          }
          delete: {
            args: Prisma.NurseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>
          }
          update: {
            args: Prisma.NurseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>
          }
          deleteMany: {
            args: Prisma.NurseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NurseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NurseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>[]
          }
          upsert: {
            args: Prisma.NurseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NursePayload>
          }
          aggregate: {
            args: Prisma.NurseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNurse>
          }
          groupBy: {
            args: Prisma.NurseGroupByArgs<ExtArgs>
            result: $Utils.Optional<NurseGroupByOutputType>[]
          }
          count: {
            args: Prisma.NurseCountArgs<ExtArgs>
            result: $Utils.Optional<NurseCountAggregateOutputType> | number
          }
        }
      }
      NurseSchedule: {
        payload: Prisma.$NurseSchedulePayload<ExtArgs>
        fields: Prisma.NurseScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NurseScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NurseScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseSchedulePayload>
          }
          findFirst: {
            args: Prisma.NurseScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NurseScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseSchedulePayload>
          }
          findMany: {
            args: Prisma.NurseScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseSchedulePayload>[]
          }
          create: {
            args: Prisma.NurseScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseSchedulePayload>
          }
          createMany: {
            args: Prisma.NurseScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NurseScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseSchedulePayload>[]
          }
          delete: {
            args: Prisma.NurseScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseSchedulePayload>
          }
          update: {
            args: Prisma.NurseScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseSchedulePayload>
          }
          deleteMany: {
            args: Prisma.NurseScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NurseScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NurseScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseSchedulePayload>[]
          }
          upsert: {
            args: Prisma.NurseScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseSchedulePayload>
          }
          aggregate: {
            args: Prisma.NurseScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNurseSchedule>
          }
          groupBy: {
            args: Prisma.NurseScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<NurseScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.NurseScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<NurseScheduleCountAggregateOutputType> | number
          }
        }
      }
      NurseRating: {
        payload: Prisma.$NurseRatingPayload<ExtArgs>
        fields: Prisma.NurseRatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NurseRatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseRatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NurseRatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseRatingPayload>
          }
          findFirst: {
            args: Prisma.NurseRatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseRatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NurseRatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseRatingPayload>
          }
          findMany: {
            args: Prisma.NurseRatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseRatingPayload>[]
          }
          create: {
            args: Prisma.NurseRatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseRatingPayload>
          }
          createMany: {
            args: Prisma.NurseRatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NurseRatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseRatingPayload>[]
          }
          delete: {
            args: Prisma.NurseRatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseRatingPayload>
          }
          update: {
            args: Prisma.NurseRatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseRatingPayload>
          }
          deleteMany: {
            args: Prisma.NurseRatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NurseRatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NurseRatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseRatingPayload>[]
          }
          upsert: {
            args: Prisma.NurseRatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseRatingPayload>
          }
          aggregate: {
            args: Prisma.NurseRatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNurseRating>
          }
          groupBy: {
            args: Prisma.NurseRatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<NurseRatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.NurseRatingCountArgs<ExtArgs>
            result: $Utils.Optional<NurseRatingCountAggregateOutputType> | number
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
    doctorRating?: DoctorRatingOmit
    unitRating?: UnitRatingOmit
    facility?: FacilityOmit
    facilityRating?: FacilityRatingOmit
    facilityPhoto?: FacilityPhotoOmit
    post?: PostOmit
    gallery?: GalleryOmit
    galleryPhoto?: GalleryPhotoOmit
    banner?: BannerOmit
    nurse?: NurseOmit
    nurseSchedule?: NurseScheduleOmit
    nurseRating?: NurseRatingOmit
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
   * Count Type FacilityCountOutputType
   */

  export type FacilityCountOutputType = {
    photos: number
    ratings: number
  }

  export type FacilityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | FacilityCountOutputTypeCountPhotosArgs
    ratings?: boolean | FacilityCountOutputTypeCountRatingsArgs
  }

  // Custom InputTypes
  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityCountOutputType
     */
    select?: FacilityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilityPhotoWhereInput
  }

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilityRatingWhereInput
  }


  /**
   * Count Type GalleryCountOutputType
   */

  export type GalleryCountOutputType = {
    photos: number
  }

  export type GalleryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | GalleryCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes
  /**
   * GalleryCountOutputType without action
   */
  export type GalleryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryCountOutputType
     */
    select?: GalleryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GalleryCountOutputType without action
   */
  export type GalleryCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryPhotoWhereInput
  }


  /**
   * Count Type NurseCountOutputType
   */

  export type NurseCountOutputType = {
    schedules: number
    ratings: number
  }

  export type NurseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | NurseCountOutputTypeCountSchedulesArgs
    ratings?: boolean | NurseCountOutputTypeCountRatingsArgs
  }

  // Custom InputTypes
  /**
   * NurseCountOutputType without action
   */
  export type NurseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseCountOutputType
     */
    select?: NurseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NurseCountOutputType without action
   */
  export type NurseCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NurseScheduleWhereInput
  }

  /**
   * NurseCountOutputType without action
   */
  export type NurseCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NurseRatingWhereInput
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
    patientIdentity: string | null
    location: string | null
    note: string | null
    status: $Enums.EmergencyStatus | null
    assignedToId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmergencyRequestMaxAggregateOutputType = {
    id: string | null
    patientIdentity: string | null
    location: string | null
    note: string | null
    status: $Enums.EmergencyStatus | null
    assignedToId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmergencyRequestCountAggregateOutputType = {
    id: number
    patientIdentity: number
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
    patientIdentity?: true
    location?: true
    note?: true
    status?: true
    assignedToId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmergencyRequestMaxAggregateInputType = {
    id?: true
    patientIdentity?: true
    location?: true
    note?: true
    status?: true
    assignedToId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmergencyRequestCountAggregateInputType = {
    id?: true
    patientIdentity?: true
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
    patientIdentity: string
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
    patientIdentity?: boolean
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
    patientIdentity?: boolean
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
    patientIdentity?: boolean
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
    patientIdentity?: boolean
    location?: boolean
    note?: boolean
    status?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmergencyRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientIdentity" | "location" | "note" | "status" | "assignedToId" | "createdAt" | "updatedAt", ExtArgs["result"]["emergencyRequest"]>
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
      patientIdentity: string
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
    readonly patientIdentity: FieldRef<"EmergencyRequest", 'String'>
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
    identity: string | null
    name: string | null
    phone: string | null
    email: string | null
    photo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AmbulanceStaffMaxAggregateOutputType = {
    identity: string | null
    name: string | null
    phone: string | null
    email: string | null
    photo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AmbulanceStaffCountAggregateOutputType = {
    identity: number
    name: number
    phone: number
    email: number
    photo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AmbulanceStaffMinAggregateInputType = {
    identity?: true
    name?: true
    phone?: true
    email?: true
    photo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AmbulanceStaffMaxAggregateInputType = {
    identity?: true
    name?: true
    phone?: true
    email?: true
    photo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AmbulanceStaffCountAggregateInputType = {
    identity?: true
    name?: true
    phone?: true
    email?: true
    photo?: true
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
    identity: string
    name: string
    phone: string
    email: string
    photo: string | null
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
    identity?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    photo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    EmergencyRequest?: boolean | AmbulanceStaff$EmergencyRequestArgs<ExtArgs>
    _count?: boolean | AmbulanceStaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ambulanceStaff"]>

  export type AmbulanceStaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identity?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    photo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ambulanceStaff"]>

  export type AmbulanceStaffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identity?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    photo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ambulanceStaff"]>

  export type AmbulanceStaffSelectScalar = {
    identity?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    photo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AmbulanceStaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identity" | "name" | "phone" | "email" | "photo" | "createdAt" | "updatedAt", ExtArgs["result"]["ambulanceStaff"]>
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
      identity: string
      name: string
      phone: string
      email: string
      photo: string | null
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
     * // Only select the `identity`
     * const ambulanceStaffWithIdentityOnly = await prisma.ambulanceStaff.findMany({ select: { identity: true } })
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
     * // Create many AmbulanceStaffs and only return the `identity`
     * const ambulanceStaffWithIdentityOnly = await prisma.ambulanceStaff.createManyAndReturn({
     *   select: { identity: true },
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
     * // Update zero or more AmbulanceStaffs and only return the `identity`
     * const ambulanceStaffWithIdentityOnly = await prisma.ambulanceStaff.updateManyAndReturn({
     *   select: { identity: true },
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
    readonly identity: FieldRef<"AmbulanceStaff", 'String'>
    readonly name: FieldRef<"AmbulanceStaff", 'String'>
    readonly phone: FieldRef<"AmbulanceStaff", 'String'>
    readonly email: FieldRef<"AmbulanceStaff", 'String'>
    readonly photo: FieldRef<"AmbulanceStaff", 'String'>
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
   * Model DoctorRating
   */

  export type AggregateDoctorRating = {
    _count: DoctorRatingCountAggregateOutputType | null
    _avg: DoctorRatingAvgAggregateOutputType | null
    _sum: DoctorRatingSumAggregateOutputType | null
    _min: DoctorRatingMinAggregateOutputType | null
    _max: DoctorRatingMaxAggregateOutputType | null
  }

  export type DoctorRatingAvgAggregateOutputType = {
    doctorId: number | null
    rating: number | null
  }

  export type DoctorRatingSumAggregateOutputType = {
    doctorId: number | null
    rating: number | null
  }

  export type DoctorRatingMinAggregateOutputType = {
    id: string | null
    reservationId: string | null
    doctorId: number | null
    patientId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorRatingMaxAggregateOutputType = {
    id: string | null
    reservationId: string | null
    doctorId: number | null
    patientId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorRatingCountAggregateOutputType = {
    id: number
    reservationId: number
    doctorId: number
    patientId: number
    rating: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DoctorRatingAvgAggregateInputType = {
    doctorId?: true
    rating?: true
  }

  export type DoctorRatingSumAggregateInputType = {
    doctorId?: true
    rating?: true
  }

  export type DoctorRatingMinAggregateInputType = {
    id?: true
    reservationId?: true
    doctorId?: true
    patientId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorRatingMaxAggregateInputType = {
    id?: true
    reservationId?: true
    doctorId?: true
    patientId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorRatingCountAggregateInputType = {
    id?: true
    reservationId?: true
    doctorId?: true
    patientId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DoctorRatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorRating to aggregate.
     */
    where?: DoctorRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorRatings to fetch.
     */
    orderBy?: DoctorRatingOrderByWithRelationInput | DoctorRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorRatings
    **/
    _count?: true | DoctorRatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorRatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorRatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorRatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorRatingMaxAggregateInputType
  }

  export type GetDoctorRatingAggregateType<T extends DoctorRatingAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorRating[P]>
      : GetScalarType<T[P], AggregateDoctorRating[P]>
  }




  export type DoctorRatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorRatingWhereInput
    orderBy?: DoctorRatingOrderByWithAggregationInput | DoctorRatingOrderByWithAggregationInput[]
    by: DoctorRatingScalarFieldEnum[] | DoctorRatingScalarFieldEnum
    having?: DoctorRatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorRatingCountAggregateInputType | true
    _avg?: DoctorRatingAvgAggregateInputType
    _sum?: DoctorRatingSumAggregateInputType
    _min?: DoctorRatingMinAggregateInputType
    _max?: DoctorRatingMaxAggregateInputType
  }

  export type DoctorRatingGroupByOutputType = {
    id: string
    reservationId: string
    doctorId: number
    patientId: string
    rating: number
    comment: string | null
    createdAt: Date
    updatedAt: Date
    _count: DoctorRatingCountAggregateOutputType | null
    _avg: DoctorRatingAvgAggregateOutputType | null
    _sum: DoctorRatingSumAggregateOutputType | null
    _min: DoctorRatingMinAggregateOutputType | null
    _max: DoctorRatingMaxAggregateOutputType | null
  }

  type GetDoctorRatingGroupByPayload<T extends DoctorRatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorRatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorRatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorRatingGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorRatingGroupByOutputType[P]>
        }
      >
    >


  export type DoctorRatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    doctorId?: boolean
    patientId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["doctorRating"]>

  export type DoctorRatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    doctorId?: boolean
    patientId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["doctorRating"]>

  export type DoctorRatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    doctorId?: boolean
    patientId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["doctorRating"]>

  export type DoctorRatingSelectScalar = {
    id?: boolean
    reservationId?: boolean
    doctorId?: boolean
    patientId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DoctorRatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reservationId" | "doctorId" | "patientId" | "rating" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["doctorRating"]>

  export type $DoctorRatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorRating"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reservationId: string
      doctorId: number
      patientId: string
      rating: number
      comment: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["doctorRating"]>
    composites: {}
  }

  type DoctorRatingGetPayload<S extends boolean | null | undefined | DoctorRatingDefaultArgs> = $Result.GetResult<Prisma.$DoctorRatingPayload, S>

  type DoctorRatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorRatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorRatingCountAggregateInputType | true
    }

  export interface DoctorRatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorRating'], meta: { name: 'DoctorRating' } }
    /**
     * Find zero or one DoctorRating that matches the filter.
     * @param {DoctorRatingFindUniqueArgs} args - Arguments to find a DoctorRating
     * @example
     * // Get one DoctorRating
     * const doctorRating = await prisma.doctorRating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorRatingFindUniqueArgs>(args: SelectSubset<T, DoctorRatingFindUniqueArgs<ExtArgs>>): Prisma__DoctorRatingClient<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorRating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorRatingFindUniqueOrThrowArgs} args - Arguments to find a DoctorRating
     * @example
     * // Get one DoctorRating
     * const doctorRating = await prisma.doctorRating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorRatingFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorRatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorRatingClient<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorRating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorRatingFindFirstArgs} args - Arguments to find a DoctorRating
     * @example
     * // Get one DoctorRating
     * const doctorRating = await prisma.doctorRating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorRatingFindFirstArgs>(args?: SelectSubset<T, DoctorRatingFindFirstArgs<ExtArgs>>): Prisma__DoctorRatingClient<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorRating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorRatingFindFirstOrThrowArgs} args - Arguments to find a DoctorRating
     * @example
     * // Get one DoctorRating
     * const doctorRating = await prisma.doctorRating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorRatingFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorRatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorRatingClient<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorRatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorRatings
     * const doctorRatings = await prisma.doctorRating.findMany()
     * 
     * // Get first 10 DoctorRatings
     * const doctorRatings = await prisma.doctorRating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorRatingWithIdOnly = await prisma.doctorRating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorRatingFindManyArgs>(args?: SelectSubset<T, DoctorRatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorRating.
     * @param {DoctorRatingCreateArgs} args - Arguments to create a DoctorRating.
     * @example
     * // Create one DoctorRating
     * const DoctorRating = await prisma.doctorRating.create({
     *   data: {
     *     // ... data to create a DoctorRating
     *   }
     * })
     * 
     */
    create<T extends DoctorRatingCreateArgs>(args: SelectSubset<T, DoctorRatingCreateArgs<ExtArgs>>): Prisma__DoctorRatingClient<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorRatings.
     * @param {DoctorRatingCreateManyArgs} args - Arguments to create many DoctorRatings.
     * @example
     * // Create many DoctorRatings
     * const doctorRating = await prisma.doctorRating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorRatingCreateManyArgs>(args?: SelectSubset<T, DoctorRatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoctorRatings and returns the data saved in the database.
     * @param {DoctorRatingCreateManyAndReturnArgs} args - Arguments to create many DoctorRatings.
     * @example
     * // Create many DoctorRatings
     * const doctorRating = await prisma.doctorRating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoctorRatings and only return the `id`
     * const doctorRatingWithIdOnly = await prisma.doctorRating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorRatingCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorRatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoctorRating.
     * @param {DoctorRatingDeleteArgs} args - Arguments to delete one DoctorRating.
     * @example
     * // Delete one DoctorRating
     * const DoctorRating = await prisma.doctorRating.delete({
     *   where: {
     *     // ... filter to delete one DoctorRating
     *   }
     * })
     * 
     */
    delete<T extends DoctorRatingDeleteArgs>(args: SelectSubset<T, DoctorRatingDeleteArgs<ExtArgs>>): Prisma__DoctorRatingClient<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorRating.
     * @param {DoctorRatingUpdateArgs} args - Arguments to update one DoctorRating.
     * @example
     * // Update one DoctorRating
     * const doctorRating = await prisma.doctorRating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorRatingUpdateArgs>(args: SelectSubset<T, DoctorRatingUpdateArgs<ExtArgs>>): Prisma__DoctorRatingClient<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorRatings.
     * @param {DoctorRatingDeleteManyArgs} args - Arguments to filter DoctorRatings to delete.
     * @example
     * // Delete a few DoctorRatings
     * const { count } = await prisma.doctorRating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorRatingDeleteManyArgs>(args?: SelectSubset<T, DoctorRatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorRatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorRatings
     * const doctorRating = await prisma.doctorRating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorRatingUpdateManyArgs>(args: SelectSubset<T, DoctorRatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorRatings and returns the data updated in the database.
     * @param {DoctorRatingUpdateManyAndReturnArgs} args - Arguments to update many DoctorRatings.
     * @example
     * // Update many DoctorRatings
     * const doctorRating = await prisma.doctorRating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoctorRatings and only return the `id`
     * const doctorRatingWithIdOnly = await prisma.doctorRating.updateManyAndReturn({
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
    updateManyAndReturn<T extends DoctorRatingUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorRatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoctorRating.
     * @param {DoctorRatingUpsertArgs} args - Arguments to update or create a DoctorRating.
     * @example
     * // Update or create a DoctorRating
     * const doctorRating = await prisma.doctorRating.upsert({
     *   create: {
     *     // ... data to create a DoctorRating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorRating we want to update
     *   }
     * })
     */
    upsert<T extends DoctorRatingUpsertArgs>(args: SelectSubset<T, DoctorRatingUpsertArgs<ExtArgs>>): Prisma__DoctorRatingClient<$Result.GetResult<Prisma.$DoctorRatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorRatingCountArgs} args - Arguments to filter DoctorRatings to count.
     * @example
     * // Count the number of DoctorRatings
     * const count = await prisma.doctorRating.count({
     *   where: {
     *     // ... the filter for the DoctorRatings we want to count
     *   }
     * })
    **/
    count<T extends DoctorRatingCountArgs>(
      args?: Subset<T, DoctorRatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorRatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorRatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorRatingAggregateArgs>(args: Subset<T, DoctorRatingAggregateArgs>): Prisma.PrismaPromise<GetDoctorRatingAggregateType<T>>

    /**
     * Group by DoctorRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorRatingGroupByArgs} args - Group by arguments.
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
      T extends DoctorRatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorRatingGroupByArgs['orderBy'] }
        : { orderBy?: DoctorRatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorRating model
   */
  readonly fields: DoctorRatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorRating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorRatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DoctorRating model
   */
  interface DoctorRatingFieldRefs {
    readonly id: FieldRef<"DoctorRating", 'String'>
    readonly reservationId: FieldRef<"DoctorRating", 'String'>
    readonly doctorId: FieldRef<"DoctorRating", 'Int'>
    readonly patientId: FieldRef<"DoctorRating", 'String'>
    readonly rating: FieldRef<"DoctorRating", 'Int'>
    readonly comment: FieldRef<"DoctorRating", 'String'>
    readonly createdAt: FieldRef<"DoctorRating", 'DateTime'>
    readonly updatedAt: FieldRef<"DoctorRating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DoctorRating findUnique
   */
  export type DoctorRatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * Filter, which DoctorRating to fetch.
     */
    where: DoctorRatingWhereUniqueInput
  }

  /**
   * DoctorRating findUniqueOrThrow
   */
  export type DoctorRatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * Filter, which DoctorRating to fetch.
     */
    where: DoctorRatingWhereUniqueInput
  }

  /**
   * DoctorRating findFirst
   */
  export type DoctorRatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * Filter, which DoctorRating to fetch.
     */
    where?: DoctorRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorRatings to fetch.
     */
    orderBy?: DoctorRatingOrderByWithRelationInput | DoctorRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorRatings.
     */
    cursor?: DoctorRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorRatings.
     */
    distinct?: DoctorRatingScalarFieldEnum | DoctorRatingScalarFieldEnum[]
  }

  /**
   * DoctorRating findFirstOrThrow
   */
  export type DoctorRatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * Filter, which DoctorRating to fetch.
     */
    where?: DoctorRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorRatings to fetch.
     */
    orderBy?: DoctorRatingOrderByWithRelationInput | DoctorRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorRatings.
     */
    cursor?: DoctorRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorRatings.
     */
    distinct?: DoctorRatingScalarFieldEnum | DoctorRatingScalarFieldEnum[]
  }

  /**
   * DoctorRating findMany
   */
  export type DoctorRatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * Filter, which DoctorRatings to fetch.
     */
    where?: DoctorRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorRatings to fetch.
     */
    orderBy?: DoctorRatingOrderByWithRelationInput | DoctorRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorRatings.
     */
    cursor?: DoctorRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorRatings.
     */
    skip?: number
    distinct?: DoctorRatingScalarFieldEnum | DoctorRatingScalarFieldEnum[]
  }

  /**
   * DoctorRating create
   */
  export type DoctorRatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * The data needed to create a DoctorRating.
     */
    data: XOR<DoctorRatingCreateInput, DoctorRatingUncheckedCreateInput>
  }

  /**
   * DoctorRating createMany
   */
  export type DoctorRatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorRatings.
     */
    data: DoctorRatingCreateManyInput | DoctorRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorRating createManyAndReturn
   */
  export type DoctorRatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * The data used to create many DoctorRatings.
     */
    data: DoctorRatingCreateManyInput | DoctorRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorRating update
   */
  export type DoctorRatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * The data needed to update a DoctorRating.
     */
    data: XOR<DoctorRatingUpdateInput, DoctorRatingUncheckedUpdateInput>
    /**
     * Choose, which DoctorRating to update.
     */
    where: DoctorRatingWhereUniqueInput
  }

  /**
   * DoctorRating updateMany
   */
  export type DoctorRatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorRatings.
     */
    data: XOR<DoctorRatingUpdateManyMutationInput, DoctorRatingUncheckedUpdateManyInput>
    /**
     * Filter which DoctorRatings to update
     */
    where?: DoctorRatingWhereInput
    /**
     * Limit how many DoctorRatings to update.
     */
    limit?: number
  }

  /**
   * DoctorRating updateManyAndReturn
   */
  export type DoctorRatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * The data used to update DoctorRatings.
     */
    data: XOR<DoctorRatingUpdateManyMutationInput, DoctorRatingUncheckedUpdateManyInput>
    /**
     * Filter which DoctorRatings to update
     */
    where?: DoctorRatingWhereInput
    /**
     * Limit how many DoctorRatings to update.
     */
    limit?: number
  }

  /**
   * DoctorRating upsert
   */
  export type DoctorRatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * The filter to search for the DoctorRating to update in case it exists.
     */
    where: DoctorRatingWhereUniqueInput
    /**
     * In case the DoctorRating found by the `where` argument doesn't exist, create a new DoctorRating with this data.
     */
    create: XOR<DoctorRatingCreateInput, DoctorRatingUncheckedCreateInput>
    /**
     * In case the DoctorRating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorRatingUpdateInput, DoctorRatingUncheckedUpdateInput>
  }

  /**
   * DoctorRating delete
   */
  export type DoctorRatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
    /**
     * Filter which DoctorRating to delete.
     */
    where: DoctorRatingWhereUniqueInput
  }

  /**
   * DoctorRating deleteMany
   */
  export type DoctorRatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorRatings to delete
     */
    where?: DoctorRatingWhereInput
    /**
     * Limit how many DoctorRatings to delete.
     */
    limit?: number
  }

  /**
   * DoctorRating without action
   */
  export type DoctorRatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorRating
     */
    select?: DoctorRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorRating
     */
    omit?: DoctorRatingOmit<ExtArgs> | null
  }


  /**
   * Model UnitRating
   */

  export type AggregateUnitRating = {
    _count: UnitRatingCountAggregateOutputType | null
    _avg: UnitRatingAvgAggregateOutputType | null
    _sum: UnitRatingSumAggregateOutputType | null
    _min: UnitRatingMinAggregateOutputType | null
    _max: UnitRatingMaxAggregateOutputType | null
  }

  export type UnitRatingAvgAggregateOutputType = {
    unitId: number | null
    rating: number | null
  }

  export type UnitRatingSumAggregateOutputType = {
    unitId: number | null
    rating: number | null
  }

  export type UnitRatingMinAggregateOutputType = {
    id: string | null
    reservationId: string | null
    unitId: number | null
    patientId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitRatingMaxAggregateOutputType = {
    id: string | null
    reservationId: string | null
    unitId: number | null
    patientId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitRatingCountAggregateOutputType = {
    id: number
    reservationId: number
    unitId: number
    patientId: number
    rating: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UnitRatingAvgAggregateInputType = {
    unitId?: true
    rating?: true
  }

  export type UnitRatingSumAggregateInputType = {
    unitId?: true
    rating?: true
  }

  export type UnitRatingMinAggregateInputType = {
    id?: true
    reservationId?: true
    unitId?: true
    patientId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitRatingMaxAggregateInputType = {
    id?: true
    reservationId?: true
    unitId?: true
    patientId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitRatingCountAggregateInputType = {
    id?: true
    reservationId?: true
    unitId?: true
    patientId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UnitRatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnitRating to aggregate.
     */
    where?: UnitRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitRatings to fetch.
     */
    orderBy?: UnitRatingOrderByWithRelationInput | UnitRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnitRatings
    **/
    _count?: true | UnitRatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitRatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitRatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitRatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitRatingMaxAggregateInputType
  }

  export type GetUnitRatingAggregateType<T extends UnitRatingAggregateArgs> = {
        [P in keyof T & keyof AggregateUnitRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnitRating[P]>
      : GetScalarType<T[P], AggregateUnitRating[P]>
  }




  export type UnitRatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitRatingWhereInput
    orderBy?: UnitRatingOrderByWithAggregationInput | UnitRatingOrderByWithAggregationInput[]
    by: UnitRatingScalarFieldEnum[] | UnitRatingScalarFieldEnum
    having?: UnitRatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitRatingCountAggregateInputType | true
    _avg?: UnitRatingAvgAggregateInputType
    _sum?: UnitRatingSumAggregateInputType
    _min?: UnitRatingMinAggregateInputType
    _max?: UnitRatingMaxAggregateInputType
  }

  export type UnitRatingGroupByOutputType = {
    id: string
    reservationId: string
    unitId: number
    patientId: string
    rating: number
    comment: string | null
    createdAt: Date
    updatedAt: Date
    _count: UnitRatingCountAggregateOutputType | null
    _avg: UnitRatingAvgAggregateOutputType | null
    _sum: UnitRatingSumAggregateOutputType | null
    _min: UnitRatingMinAggregateOutputType | null
    _max: UnitRatingMaxAggregateOutputType | null
  }

  type GetUnitRatingGroupByPayload<T extends UnitRatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitRatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitRatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitRatingGroupByOutputType[P]>
            : GetScalarType<T[P], UnitRatingGroupByOutputType[P]>
        }
      >
    >


  export type UnitRatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    unitId?: boolean
    patientId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["unitRating"]>

  export type UnitRatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    unitId?: boolean
    patientId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["unitRating"]>

  export type UnitRatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    unitId?: boolean
    patientId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["unitRating"]>

  export type UnitRatingSelectScalar = {
    id?: boolean
    reservationId?: boolean
    unitId?: boolean
    patientId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UnitRatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reservationId" | "unitId" | "patientId" | "rating" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["unitRating"]>

  export type $UnitRatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnitRating"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reservationId: string
      unitId: number
      patientId: string
      rating: number
      comment: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["unitRating"]>
    composites: {}
  }

  type UnitRatingGetPayload<S extends boolean | null | undefined | UnitRatingDefaultArgs> = $Result.GetResult<Prisma.$UnitRatingPayload, S>

  type UnitRatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitRatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitRatingCountAggregateInputType | true
    }

  export interface UnitRatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnitRating'], meta: { name: 'UnitRating' } }
    /**
     * Find zero or one UnitRating that matches the filter.
     * @param {UnitRatingFindUniqueArgs} args - Arguments to find a UnitRating
     * @example
     * // Get one UnitRating
     * const unitRating = await prisma.unitRating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitRatingFindUniqueArgs>(args: SelectSubset<T, UnitRatingFindUniqueArgs<ExtArgs>>): Prisma__UnitRatingClient<$Result.GetResult<Prisma.$UnitRatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnitRating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitRatingFindUniqueOrThrowArgs} args - Arguments to find a UnitRating
     * @example
     * // Get one UnitRating
     * const unitRating = await prisma.unitRating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitRatingFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitRatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitRatingClient<$Result.GetResult<Prisma.$UnitRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnitRating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitRatingFindFirstArgs} args - Arguments to find a UnitRating
     * @example
     * // Get one UnitRating
     * const unitRating = await prisma.unitRating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitRatingFindFirstArgs>(args?: SelectSubset<T, UnitRatingFindFirstArgs<ExtArgs>>): Prisma__UnitRatingClient<$Result.GetResult<Prisma.$UnitRatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnitRating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitRatingFindFirstOrThrowArgs} args - Arguments to find a UnitRating
     * @example
     * // Get one UnitRating
     * const unitRating = await prisma.unitRating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitRatingFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitRatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitRatingClient<$Result.GetResult<Prisma.$UnitRatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnitRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitRatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnitRatings
     * const unitRatings = await prisma.unitRating.findMany()
     * 
     * // Get first 10 UnitRatings
     * const unitRatings = await prisma.unitRating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitRatingWithIdOnly = await prisma.unitRating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitRatingFindManyArgs>(args?: SelectSubset<T, UnitRatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnitRating.
     * @param {UnitRatingCreateArgs} args - Arguments to create a UnitRating.
     * @example
     * // Create one UnitRating
     * const UnitRating = await prisma.unitRating.create({
     *   data: {
     *     // ... data to create a UnitRating
     *   }
     * })
     * 
     */
    create<T extends UnitRatingCreateArgs>(args: SelectSubset<T, UnitRatingCreateArgs<ExtArgs>>): Prisma__UnitRatingClient<$Result.GetResult<Prisma.$UnitRatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnitRatings.
     * @param {UnitRatingCreateManyArgs} args - Arguments to create many UnitRatings.
     * @example
     * // Create many UnitRatings
     * const unitRating = await prisma.unitRating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitRatingCreateManyArgs>(args?: SelectSubset<T, UnitRatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnitRatings and returns the data saved in the database.
     * @param {UnitRatingCreateManyAndReturnArgs} args - Arguments to create many UnitRatings.
     * @example
     * // Create many UnitRatings
     * const unitRating = await prisma.unitRating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnitRatings and only return the `id`
     * const unitRatingWithIdOnly = await prisma.unitRating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitRatingCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitRatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitRatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UnitRating.
     * @param {UnitRatingDeleteArgs} args - Arguments to delete one UnitRating.
     * @example
     * // Delete one UnitRating
     * const UnitRating = await prisma.unitRating.delete({
     *   where: {
     *     // ... filter to delete one UnitRating
     *   }
     * })
     * 
     */
    delete<T extends UnitRatingDeleteArgs>(args: SelectSubset<T, UnitRatingDeleteArgs<ExtArgs>>): Prisma__UnitRatingClient<$Result.GetResult<Prisma.$UnitRatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnitRating.
     * @param {UnitRatingUpdateArgs} args - Arguments to update one UnitRating.
     * @example
     * // Update one UnitRating
     * const unitRating = await prisma.unitRating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitRatingUpdateArgs>(args: SelectSubset<T, UnitRatingUpdateArgs<ExtArgs>>): Prisma__UnitRatingClient<$Result.GetResult<Prisma.$UnitRatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnitRatings.
     * @param {UnitRatingDeleteManyArgs} args - Arguments to filter UnitRatings to delete.
     * @example
     * // Delete a few UnitRatings
     * const { count } = await prisma.unitRating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitRatingDeleteManyArgs>(args?: SelectSubset<T, UnitRatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnitRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitRatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnitRatings
     * const unitRating = await prisma.unitRating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitRatingUpdateManyArgs>(args: SelectSubset<T, UnitRatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnitRatings and returns the data updated in the database.
     * @param {UnitRatingUpdateManyAndReturnArgs} args - Arguments to update many UnitRatings.
     * @example
     * // Update many UnitRatings
     * const unitRating = await prisma.unitRating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UnitRatings and only return the `id`
     * const unitRatingWithIdOnly = await prisma.unitRating.updateManyAndReturn({
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
    updateManyAndReturn<T extends UnitRatingUpdateManyAndReturnArgs>(args: SelectSubset<T, UnitRatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitRatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UnitRating.
     * @param {UnitRatingUpsertArgs} args - Arguments to update or create a UnitRating.
     * @example
     * // Update or create a UnitRating
     * const unitRating = await prisma.unitRating.upsert({
     *   create: {
     *     // ... data to create a UnitRating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnitRating we want to update
     *   }
     * })
     */
    upsert<T extends UnitRatingUpsertArgs>(args: SelectSubset<T, UnitRatingUpsertArgs<ExtArgs>>): Prisma__UnitRatingClient<$Result.GetResult<Prisma.$UnitRatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnitRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitRatingCountArgs} args - Arguments to filter UnitRatings to count.
     * @example
     * // Count the number of UnitRatings
     * const count = await prisma.unitRating.count({
     *   where: {
     *     // ... the filter for the UnitRatings we want to count
     *   }
     * })
    **/
    count<T extends UnitRatingCountArgs>(
      args?: Subset<T, UnitRatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitRatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnitRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitRatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnitRatingAggregateArgs>(args: Subset<T, UnitRatingAggregateArgs>): Prisma.PrismaPromise<GetUnitRatingAggregateType<T>>

    /**
     * Group by UnitRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitRatingGroupByArgs} args - Group by arguments.
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
      T extends UnitRatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitRatingGroupByArgs['orderBy'] }
        : { orderBy?: UnitRatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnitRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnitRating model
   */
  readonly fields: UnitRatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnitRating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitRatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UnitRating model
   */
  interface UnitRatingFieldRefs {
    readonly id: FieldRef<"UnitRating", 'String'>
    readonly reservationId: FieldRef<"UnitRating", 'String'>
    readonly unitId: FieldRef<"UnitRating", 'Int'>
    readonly patientId: FieldRef<"UnitRating", 'String'>
    readonly rating: FieldRef<"UnitRating", 'Int'>
    readonly comment: FieldRef<"UnitRating", 'String'>
    readonly createdAt: FieldRef<"UnitRating", 'DateTime'>
    readonly updatedAt: FieldRef<"UnitRating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UnitRating findUnique
   */
  export type UnitRatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitRating
     */
    select?: UnitRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitRating
     */
    omit?: UnitRatingOmit<ExtArgs> | null
    /**
     * Filter, which UnitRating to fetch.
     */
    where: UnitRatingWhereUniqueInput
  }

  /**
   * UnitRating findUniqueOrThrow
   */
  export type UnitRatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitRating
     */
    select?: UnitRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitRating
     */
    omit?: UnitRatingOmit<ExtArgs> | null
    /**
     * Filter, which UnitRating to fetch.
     */
    where: UnitRatingWhereUniqueInput
  }

  /**
   * UnitRating findFirst
   */
  export type UnitRatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitRating
     */
    select?: UnitRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitRating
     */
    omit?: UnitRatingOmit<ExtArgs> | null
    /**
     * Filter, which UnitRating to fetch.
     */
    where?: UnitRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitRatings to fetch.
     */
    orderBy?: UnitRatingOrderByWithRelationInput | UnitRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnitRatings.
     */
    cursor?: UnitRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitRatings.
     */
    distinct?: UnitRatingScalarFieldEnum | UnitRatingScalarFieldEnum[]
  }

  /**
   * UnitRating findFirstOrThrow
   */
  export type UnitRatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitRating
     */
    select?: UnitRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitRating
     */
    omit?: UnitRatingOmit<ExtArgs> | null
    /**
     * Filter, which UnitRating to fetch.
     */
    where?: UnitRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitRatings to fetch.
     */
    orderBy?: UnitRatingOrderByWithRelationInput | UnitRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnitRatings.
     */
    cursor?: UnitRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitRatings.
     */
    distinct?: UnitRatingScalarFieldEnum | UnitRatingScalarFieldEnum[]
  }

  /**
   * UnitRating findMany
   */
  export type UnitRatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitRating
     */
    select?: UnitRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitRating
     */
    omit?: UnitRatingOmit<ExtArgs> | null
    /**
     * Filter, which UnitRatings to fetch.
     */
    where?: UnitRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitRatings to fetch.
     */
    orderBy?: UnitRatingOrderByWithRelationInput | UnitRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnitRatings.
     */
    cursor?: UnitRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitRatings.
     */
    skip?: number
    distinct?: UnitRatingScalarFieldEnum | UnitRatingScalarFieldEnum[]
  }

  /**
   * UnitRating create
   */
  export type UnitRatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitRating
     */
    select?: UnitRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitRating
     */
    omit?: UnitRatingOmit<ExtArgs> | null
    /**
     * The data needed to create a UnitRating.
     */
    data: XOR<UnitRatingCreateInput, UnitRatingUncheckedCreateInput>
  }

  /**
   * UnitRating createMany
   */
  export type UnitRatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnitRatings.
     */
    data: UnitRatingCreateManyInput | UnitRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnitRating createManyAndReturn
   */
  export type UnitRatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitRating
     */
    select?: UnitRatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnitRating
     */
    omit?: UnitRatingOmit<ExtArgs> | null
    /**
     * The data used to create many UnitRatings.
     */
    data: UnitRatingCreateManyInput | UnitRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnitRating update
   */
  export type UnitRatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitRating
     */
    select?: UnitRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitRating
     */
    omit?: UnitRatingOmit<ExtArgs> | null
    /**
     * The data needed to update a UnitRating.
     */
    data: XOR<UnitRatingUpdateInput, UnitRatingUncheckedUpdateInput>
    /**
     * Choose, which UnitRating to update.
     */
    where: UnitRatingWhereUniqueInput
  }

  /**
   * UnitRating updateMany
   */
  export type UnitRatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnitRatings.
     */
    data: XOR<UnitRatingUpdateManyMutationInput, UnitRatingUncheckedUpdateManyInput>
    /**
     * Filter which UnitRatings to update
     */
    where?: UnitRatingWhereInput
    /**
     * Limit how many UnitRatings to update.
     */
    limit?: number
  }

  /**
   * UnitRating updateManyAndReturn
   */
  export type UnitRatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitRating
     */
    select?: UnitRatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnitRating
     */
    omit?: UnitRatingOmit<ExtArgs> | null
    /**
     * The data used to update UnitRatings.
     */
    data: XOR<UnitRatingUpdateManyMutationInput, UnitRatingUncheckedUpdateManyInput>
    /**
     * Filter which UnitRatings to update
     */
    where?: UnitRatingWhereInput
    /**
     * Limit how many UnitRatings to update.
     */
    limit?: number
  }

  /**
   * UnitRating upsert
   */
  export type UnitRatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitRating
     */
    select?: UnitRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitRating
     */
    omit?: UnitRatingOmit<ExtArgs> | null
    /**
     * The filter to search for the UnitRating to update in case it exists.
     */
    where: UnitRatingWhereUniqueInput
    /**
     * In case the UnitRating found by the `where` argument doesn't exist, create a new UnitRating with this data.
     */
    create: XOR<UnitRatingCreateInput, UnitRatingUncheckedCreateInput>
    /**
     * In case the UnitRating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitRatingUpdateInput, UnitRatingUncheckedUpdateInput>
  }

  /**
   * UnitRating delete
   */
  export type UnitRatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitRating
     */
    select?: UnitRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitRating
     */
    omit?: UnitRatingOmit<ExtArgs> | null
    /**
     * Filter which UnitRating to delete.
     */
    where: UnitRatingWhereUniqueInput
  }

  /**
   * UnitRating deleteMany
   */
  export type UnitRatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnitRatings to delete
     */
    where?: UnitRatingWhereInput
    /**
     * Limit how many UnitRatings to delete.
     */
    limit?: number
  }

  /**
   * UnitRating without action
   */
  export type UnitRatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitRating
     */
    select?: UnitRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitRating
     */
    omit?: UnitRatingOmit<ExtArgs> | null
  }


  /**
   * Model Facility
   */

  export type AggregateFacility = {
    _count: FacilityCountAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  export type FacilityMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacilityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacilityCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FacilityMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacilityMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacilityCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FacilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facility to aggregate.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facilities
    **/
    _count?: true | FacilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilityMaxAggregateInputType
  }

  export type GetFacilityAggregateType<T extends FacilityAggregateArgs> = {
        [P in keyof T & keyof AggregateFacility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacility[P]>
      : GetScalarType<T[P], AggregateFacility[P]>
  }




  export type FacilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilityWhereInput
    orderBy?: FacilityOrderByWithAggregationInput | FacilityOrderByWithAggregationInput[]
    by: FacilityScalarFieldEnum[] | FacilityScalarFieldEnum
    having?: FacilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilityCountAggregateInputType | true
    _min?: FacilityMinAggregateInputType
    _max?: FacilityMaxAggregateInputType
  }

  export type FacilityGroupByOutputType = {
    id: string
    name: string
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: FacilityCountAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  type GetFacilityGroupByPayload<T extends FacilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilityGroupByOutputType[P]>
            : GetScalarType<T[P], FacilityGroupByOutputType[P]>
        }
      >
    >


  export type FacilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photos?: boolean | Facility$photosArgs<ExtArgs>
    ratings?: boolean | Facility$ratingsArgs<ExtArgs>
    _count?: boolean | FacilityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facility"]>

  export type FacilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["facility"]>

  export type FacilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["facility"]>

  export type FacilitySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FacilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["facility"]>
  export type FacilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | Facility$photosArgs<ExtArgs>
    ratings?: boolean | Facility$ratingsArgs<ExtArgs>
    _count?: boolean | FacilityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FacilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FacilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FacilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Facility"
    objects: {
      photos: Prisma.$FacilityPhotoPayload<ExtArgs>[]
      ratings: Prisma.$FacilityRatingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["facility"]>
    composites: {}
  }

  type FacilityGetPayload<S extends boolean | null | undefined | FacilityDefaultArgs> = $Result.GetResult<Prisma.$FacilityPayload, S>

  type FacilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacilityCountAggregateInputType | true
    }

  export interface FacilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Facility'], meta: { name: 'Facility' } }
    /**
     * Find zero or one Facility that matches the filter.
     * @param {FacilityFindUniqueArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacilityFindUniqueArgs>(args: SelectSubset<T, FacilityFindUniqueArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Facility that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacilityFindUniqueOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacilityFindUniqueOrThrowArgs>(args: SelectSubset<T, FacilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindFirstArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacilityFindFirstArgs>(args?: SelectSubset<T, FacilityFindFirstArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindFirstOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacilityFindFirstOrThrowArgs>(args?: SelectSubset<T, FacilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Facilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facilities
     * const facilities = await prisma.facility.findMany()
     * 
     * // Get first 10 Facilities
     * const facilities = await prisma.facility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facilityWithIdOnly = await prisma.facility.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacilityFindManyArgs>(args?: SelectSubset<T, FacilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Facility.
     * @param {FacilityCreateArgs} args - Arguments to create a Facility.
     * @example
     * // Create one Facility
     * const Facility = await prisma.facility.create({
     *   data: {
     *     // ... data to create a Facility
     *   }
     * })
     * 
     */
    create<T extends FacilityCreateArgs>(args: SelectSubset<T, FacilityCreateArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Facilities.
     * @param {FacilityCreateManyArgs} args - Arguments to create many Facilities.
     * @example
     * // Create many Facilities
     * const facility = await prisma.facility.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacilityCreateManyArgs>(args?: SelectSubset<T, FacilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facilities and returns the data saved in the database.
     * @param {FacilityCreateManyAndReturnArgs} args - Arguments to create many Facilities.
     * @example
     * // Create many Facilities
     * const facility = await prisma.facility.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Facilities and only return the `id`
     * const facilityWithIdOnly = await prisma.facility.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacilityCreateManyAndReturnArgs>(args?: SelectSubset<T, FacilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Facility.
     * @param {FacilityDeleteArgs} args - Arguments to delete one Facility.
     * @example
     * // Delete one Facility
     * const Facility = await prisma.facility.delete({
     *   where: {
     *     // ... filter to delete one Facility
     *   }
     * })
     * 
     */
    delete<T extends FacilityDeleteArgs>(args: SelectSubset<T, FacilityDeleteArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Facility.
     * @param {FacilityUpdateArgs} args - Arguments to update one Facility.
     * @example
     * // Update one Facility
     * const facility = await prisma.facility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacilityUpdateArgs>(args: SelectSubset<T, FacilityUpdateArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Facilities.
     * @param {FacilityDeleteManyArgs} args - Arguments to filter Facilities to delete.
     * @example
     * // Delete a few Facilities
     * const { count } = await prisma.facility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacilityDeleteManyArgs>(args?: SelectSubset<T, FacilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facilities
     * const facility = await prisma.facility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacilityUpdateManyArgs>(args: SelectSubset<T, FacilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facilities and returns the data updated in the database.
     * @param {FacilityUpdateManyAndReturnArgs} args - Arguments to update many Facilities.
     * @example
     * // Update many Facilities
     * const facility = await prisma.facility.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Facilities and only return the `id`
     * const facilityWithIdOnly = await prisma.facility.updateManyAndReturn({
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
    updateManyAndReturn<T extends FacilityUpdateManyAndReturnArgs>(args: SelectSubset<T, FacilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Facility.
     * @param {FacilityUpsertArgs} args - Arguments to update or create a Facility.
     * @example
     * // Update or create a Facility
     * const facility = await prisma.facility.upsert({
     *   create: {
     *     // ... data to create a Facility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facility we want to update
     *   }
     * })
     */
    upsert<T extends FacilityUpsertArgs>(args: SelectSubset<T, FacilityUpsertArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityCountArgs} args - Arguments to filter Facilities to count.
     * @example
     * // Count the number of Facilities
     * const count = await prisma.facility.count({
     *   where: {
     *     // ... the filter for the Facilities we want to count
     *   }
     * })
    **/
    count<T extends FacilityCountArgs>(
      args?: Subset<T, FacilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacilityAggregateArgs>(args: Subset<T, FacilityAggregateArgs>): Prisma.PrismaPromise<GetFacilityAggregateType<T>>

    /**
     * Group by Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityGroupByArgs} args - Group by arguments.
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
      T extends FacilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacilityGroupByArgs['orderBy'] }
        : { orderBy?: FacilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Facility model
   */
  readonly fields: FacilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Facility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    photos<T extends Facility$photosArgs<ExtArgs> = {}>(args?: Subset<T, Facility$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends Facility$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, Facility$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Facility model
   */
  interface FacilityFieldRefs {
    readonly id: FieldRef<"Facility", 'String'>
    readonly name: FieldRef<"Facility", 'String'>
    readonly description: FieldRef<"Facility", 'String'>
    readonly isActive: FieldRef<"Facility", 'Boolean'>
    readonly createdAt: FieldRef<"Facility", 'DateTime'>
    readonly updatedAt: FieldRef<"Facility", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Facility findUnique
   */
  export type FacilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility findUniqueOrThrow
   */
  export type FacilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility findFirst
   */
  export type FacilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * Facility findFirstOrThrow
   */
  export type FacilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * Facility findMany
   */
  export type FacilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facilities to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * Facility create
   */
  export type FacilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Facility.
     */
    data: XOR<FacilityCreateInput, FacilityUncheckedCreateInput>
  }

  /**
   * Facility createMany
   */
  export type FacilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Facilities.
     */
    data: FacilityCreateManyInput | FacilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Facility createManyAndReturn
   */
  export type FacilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * The data used to create many Facilities.
     */
    data: FacilityCreateManyInput | FacilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Facility update
   */
  export type FacilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Facility.
     */
    data: XOR<FacilityUpdateInput, FacilityUncheckedUpdateInput>
    /**
     * Choose, which Facility to update.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility updateMany
   */
  export type FacilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Facilities.
     */
    data: XOR<FacilityUpdateManyMutationInput, FacilityUncheckedUpdateManyInput>
    /**
     * Filter which Facilities to update
     */
    where?: FacilityWhereInput
    /**
     * Limit how many Facilities to update.
     */
    limit?: number
  }

  /**
   * Facility updateManyAndReturn
   */
  export type FacilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * The data used to update Facilities.
     */
    data: XOR<FacilityUpdateManyMutationInput, FacilityUncheckedUpdateManyInput>
    /**
     * Filter which Facilities to update
     */
    where?: FacilityWhereInput
    /**
     * Limit how many Facilities to update.
     */
    limit?: number
  }

  /**
   * Facility upsert
   */
  export type FacilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Facility to update in case it exists.
     */
    where: FacilityWhereUniqueInput
    /**
     * In case the Facility found by the `where` argument doesn't exist, create a new Facility with this data.
     */
    create: XOR<FacilityCreateInput, FacilityUncheckedCreateInput>
    /**
     * In case the Facility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacilityUpdateInput, FacilityUncheckedUpdateInput>
  }

  /**
   * Facility delete
   */
  export type FacilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter which Facility to delete.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility deleteMany
   */
  export type FacilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facilities to delete
     */
    where?: FacilityWhereInput
    /**
     * Limit how many Facilities to delete.
     */
    limit?: number
  }

  /**
   * Facility.photos
   */
  export type Facility$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPhoto
     */
    select?: FacilityPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPhoto
     */
    omit?: FacilityPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPhotoInclude<ExtArgs> | null
    where?: FacilityPhotoWhereInput
    orderBy?: FacilityPhotoOrderByWithRelationInput | FacilityPhotoOrderByWithRelationInput[]
    cursor?: FacilityPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacilityPhotoScalarFieldEnum | FacilityPhotoScalarFieldEnum[]
  }

  /**
   * Facility.ratings
   */
  export type Facility$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityRating
     */
    select?: FacilityRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityRating
     */
    omit?: FacilityRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityRatingInclude<ExtArgs> | null
    where?: FacilityRatingWhereInput
    orderBy?: FacilityRatingOrderByWithRelationInput | FacilityRatingOrderByWithRelationInput[]
    cursor?: FacilityRatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacilityRatingScalarFieldEnum | FacilityRatingScalarFieldEnum[]
  }

  /**
   * Facility without action
   */
  export type FacilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
  }


  /**
   * Model FacilityRating
   */

  export type AggregateFacilityRating = {
    _count: FacilityRatingCountAggregateOutputType | null
    _avg: FacilityRatingAvgAggregateOutputType | null
    _sum: FacilityRatingSumAggregateOutputType | null
    _min: FacilityRatingMinAggregateOutputType | null
    _max: FacilityRatingMaxAggregateOutputType | null
  }

  export type FacilityRatingAvgAggregateOutputType = {
    rating: number | null
  }

  export type FacilityRatingSumAggregateOutputType = {
    rating: number | null
  }

  export type FacilityRatingMinAggregateOutputType = {
    id: string | null
    reservationId: string | null
    facilityId: string | null
    patientId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacilityRatingMaxAggregateOutputType = {
    id: string | null
    reservationId: string | null
    facilityId: string | null
    patientId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacilityRatingCountAggregateOutputType = {
    id: number
    reservationId: number
    facilityId: number
    patientId: number
    rating: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FacilityRatingAvgAggregateInputType = {
    rating?: true
  }

  export type FacilityRatingSumAggregateInputType = {
    rating?: true
  }

  export type FacilityRatingMinAggregateInputType = {
    id?: true
    reservationId?: true
    facilityId?: true
    patientId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacilityRatingMaxAggregateInputType = {
    id?: true
    reservationId?: true
    facilityId?: true
    patientId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacilityRatingCountAggregateInputType = {
    id?: true
    reservationId?: true
    facilityId?: true
    patientId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FacilityRatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacilityRating to aggregate.
     */
    where?: FacilityRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityRatings to fetch.
     */
    orderBy?: FacilityRatingOrderByWithRelationInput | FacilityRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacilityRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacilityRatings
    **/
    _count?: true | FacilityRatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacilityRatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacilityRatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilityRatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilityRatingMaxAggregateInputType
  }

  export type GetFacilityRatingAggregateType<T extends FacilityRatingAggregateArgs> = {
        [P in keyof T & keyof AggregateFacilityRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacilityRating[P]>
      : GetScalarType<T[P], AggregateFacilityRating[P]>
  }




  export type FacilityRatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilityRatingWhereInput
    orderBy?: FacilityRatingOrderByWithAggregationInput | FacilityRatingOrderByWithAggregationInput[]
    by: FacilityRatingScalarFieldEnum[] | FacilityRatingScalarFieldEnum
    having?: FacilityRatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilityRatingCountAggregateInputType | true
    _avg?: FacilityRatingAvgAggregateInputType
    _sum?: FacilityRatingSumAggregateInputType
    _min?: FacilityRatingMinAggregateInputType
    _max?: FacilityRatingMaxAggregateInputType
  }

  export type FacilityRatingGroupByOutputType = {
    id: string
    reservationId: string
    facilityId: string
    patientId: string
    rating: number
    comment: string | null
    createdAt: Date
    updatedAt: Date
    _count: FacilityRatingCountAggregateOutputType | null
    _avg: FacilityRatingAvgAggregateOutputType | null
    _sum: FacilityRatingSumAggregateOutputType | null
    _min: FacilityRatingMinAggregateOutputType | null
    _max: FacilityRatingMaxAggregateOutputType | null
  }

  type GetFacilityRatingGroupByPayload<T extends FacilityRatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacilityRatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilityRatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilityRatingGroupByOutputType[P]>
            : GetScalarType<T[P], FacilityRatingGroupByOutputType[P]>
        }
      >
    >


  export type FacilityRatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    facilityId?: boolean
    patientId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facilityRating"]>

  export type FacilityRatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    facilityId?: boolean
    patientId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facilityRating"]>

  export type FacilityRatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    facilityId?: boolean
    patientId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facilityRating"]>

  export type FacilityRatingSelectScalar = {
    id?: boolean
    reservationId?: boolean
    facilityId?: boolean
    patientId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FacilityRatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reservationId" | "facilityId" | "patientId" | "rating" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["facilityRating"]>
  export type FacilityRatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }
  export type FacilityRatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }
  export type FacilityRatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }

  export type $FacilityRatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacilityRating"
    objects: {
      facility: Prisma.$FacilityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reservationId: string
      facilityId: string
      patientId: string
      rating: number
      comment: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["facilityRating"]>
    composites: {}
  }

  type FacilityRatingGetPayload<S extends boolean | null | undefined | FacilityRatingDefaultArgs> = $Result.GetResult<Prisma.$FacilityRatingPayload, S>

  type FacilityRatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacilityRatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacilityRatingCountAggregateInputType | true
    }

  export interface FacilityRatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacilityRating'], meta: { name: 'FacilityRating' } }
    /**
     * Find zero or one FacilityRating that matches the filter.
     * @param {FacilityRatingFindUniqueArgs} args - Arguments to find a FacilityRating
     * @example
     * // Get one FacilityRating
     * const facilityRating = await prisma.facilityRating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacilityRatingFindUniqueArgs>(args: SelectSubset<T, FacilityRatingFindUniqueArgs<ExtArgs>>): Prisma__FacilityRatingClient<$Result.GetResult<Prisma.$FacilityRatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacilityRating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacilityRatingFindUniqueOrThrowArgs} args - Arguments to find a FacilityRating
     * @example
     * // Get one FacilityRating
     * const facilityRating = await prisma.facilityRating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacilityRatingFindUniqueOrThrowArgs>(args: SelectSubset<T, FacilityRatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacilityRatingClient<$Result.GetResult<Prisma.$FacilityRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacilityRating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityRatingFindFirstArgs} args - Arguments to find a FacilityRating
     * @example
     * // Get one FacilityRating
     * const facilityRating = await prisma.facilityRating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacilityRatingFindFirstArgs>(args?: SelectSubset<T, FacilityRatingFindFirstArgs<ExtArgs>>): Prisma__FacilityRatingClient<$Result.GetResult<Prisma.$FacilityRatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacilityRating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityRatingFindFirstOrThrowArgs} args - Arguments to find a FacilityRating
     * @example
     * // Get one FacilityRating
     * const facilityRating = await prisma.facilityRating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacilityRatingFindFirstOrThrowArgs>(args?: SelectSubset<T, FacilityRatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacilityRatingClient<$Result.GetResult<Prisma.$FacilityRatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacilityRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityRatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacilityRatings
     * const facilityRatings = await prisma.facilityRating.findMany()
     * 
     * // Get first 10 FacilityRatings
     * const facilityRatings = await prisma.facilityRating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facilityRatingWithIdOnly = await prisma.facilityRating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacilityRatingFindManyArgs>(args?: SelectSubset<T, FacilityRatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacilityRating.
     * @param {FacilityRatingCreateArgs} args - Arguments to create a FacilityRating.
     * @example
     * // Create one FacilityRating
     * const FacilityRating = await prisma.facilityRating.create({
     *   data: {
     *     // ... data to create a FacilityRating
     *   }
     * })
     * 
     */
    create<T extends FacilityRatingCreateArgs>(args: SelectSubset<T, FacilityRatingCreateArgs<ExtArgs>>): Prisma__FacilityRatingClient<$Result.GetResult<Prisma.$FacilityRatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacilityRatings.
     * @param {FacilityRatingCreateManyArgs} args - Arguments to create many FacilityRatings.
     * @example
     * // Create many FacilityRatings
     * const facilityRating = await prisma.facilityRating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacilityRatingCreateManyArgs>(args?: SelectSubset<T, FacilityRatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacilityRatings and returns the data saved in the database.
     * @param {FacilityRatingCreateManyAndReturnArgs} args - Arguments to create many FacilityRatings.
     * @example
     * // Create many FacilityRatings
     * const facilityRating = await prisma.facilityRating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacilityRatings and only return the `id`
     * const facilityRatingWithIdOnly = await prisma.facilityRating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacilityRatingCreateManyAndReturnArgs>(args?: SelectSubset<T, FacilityRatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityRatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacilityRating.
     * @param {FacilityRatingDeleteArgs} args - Arguments to delete one FacilityRating.
     * @example
     * // Delete one FacilityRating
     * const FacilityRating = await prisma.facilityRating.delete({
     *   where: {
     *     // ... filter to delete one FacilityRating
     *   }
     * })
     * 
     */
    delete<T extends FacilityRatingDeleteArgs>(args: SelectSubset<T, FacilityRatingDeleteArgs<ExtArgs>>): Prisma__FacilityRatingClient<$Result.GetResult<Prisma.$FacilityRatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacilityRating.
     * @param {FacilityRatingUpdateArgs} args - Arguments to update one FacilityRating.
     * @example
     * // Update one FacilityRating
     * const facilityRating = await prisma.facilityRating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacilityRatingUpdateArgs>(args: SelectSubset<T, FacilityRatingUpdateArgs<ExtArgs>>): Prisma__FacilityRatingClient<$Result.GetResult<Prisma.$FacilityRatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacilityRatings.
     * @param {FacilityRatingDeleteManyArgs} args - Arguments to filter FacilityRatings to delete.
     * @example
     * // Delete a few FacilityRatings
     * const { count } = await prisma.facilityRating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacilityRatingDeleteManyArgs>(args?: SelectSubset<T, FacilityRatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacilityRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityRatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacilityRatings
     * const facilityRating = await prisma.facilityRating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacilityRatingUpdateManyArgs>(args: SelectSubset<T, FacilityRatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacilityRatings and returns the data updated in the database.
     * @param {FacilityRatingUpdateManyAndReturnArgs} args - Arguments to update many FacilityRatings.
     * @example
     * // Update many FacilityRatings
     * const facilityRating = await prisma.facilityRating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacilityRatings and only return the `id`
     * const facilityRatingWithIdOnly = await prisma.facilityRating.updateManyAndReturn({
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
    updateManyAndReturn<T extends FacilityRatingUpdateManyAndReturnArgs>(args: SelectSubset<T, FacilityRatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityRatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacilityRating.
     * @param {FacilityRatingUpsertArgs} args - Arguments to update or create a FacilityRating.
     * @example
     * // Update or create a FacilityRating
     * const facilityRating = await prisma.facilityRating.upsert({
     *   create: {
     *     // ... data to create a FacilityRating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacilityRating we want to update
     *   }
     * })
     */
    upsert<T extends FacilityRatingUpsertArgs>(args: SelectSubset<T, FacilityRatingUpsertArgs<ExtArgs>>): Prisma__FacilityRatingClient<$Result.GetResult<Prisma.$FacilityRatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacilityRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityRatingCountArgs} args - Arguments to filter FacilityRatings to count.
     * @example
     * // Count the number of FacilityRatings
     * const count = await prisma.facilityRating.count({
     *   where: {
     *     // ... the filter for the FacilityRatings we want to count
     *   }
     * })
    **/
    count<T extends FacilityRatingCountArgs>(
      args?: Subset<T, FacilityRatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilityRatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacilityRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityRatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacilityRatingAggregateArgs>(args: Subset<T, FacilityRatingAggregateArgs>): Prisma.PrismaPromise<GetFacilityRatingAggregateType<T>>

    /**
     * Group by FacilityRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityRatingGroupByArgs} args - Group by arguments.
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
      T extends FacilityRatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacilityRatingGroupByArgs['orderBy'] }
        : { orderBy?: FacilityRatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacilityRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilityRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacilityRating model
   */
  readonly fields: FacilityRatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacilityRating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacilityRatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facility<T extends FacilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacilityDefaultArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FacilityRating model
   */
  interface FacilityRatingFieldRefs {
    readonly id: FieldRef<"FacilityRating", 'String'>
    readonly reservationId: FieldRef<"FacilityRating", 'String'>
    readonly facilityId: FieldRef<"FacilityRating", 'String'>
    readonly patientId: FieldRef<"FacilityRating", 'String'>
    readonly rating: FieldRef<"FacilityRating", 'Int'>
    readonly comment: FieldRef<"FacilityRating", 'String'>
    readonly createdAt: FieldRef<"FacilityRating", 'DateTime'>
    readonly updatedAt: FieldRef<"FacilityRating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FacilityRating findUnique
   */
  export type FacilityRatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityRating
     */
    select?: FacilityRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityRating
     */
    omit?: FacilityRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityRatingInclude<ExtArgs> | null
    /**
     * Filter, which FacilityRating to fetch.
     */
    where: FacilityRatingWhereUniqueInput
  }

  /**
   * FacilityRating findUniqueOrThrow
   */
  export type FacilityRatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityRating
     */
    select?: FacilityRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityRating
     */
    omit?: FacilityRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityRatingInclude<ExtArgs> | null
    /**
     * Filter, which FacilityRating to fetch.
     */
    where: FacilityRatingWhereUniqueInput
  }

  /**
   * FacilityRating findFirst
   */
  export type FacilityRatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityRating
     */
    select?: FacilityRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityRating
     */
    omit?: FacilityRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityRatingInclude<ExtArgs> | null
    /**
     * Filter, which FacilityRating to fetch.
     */
    where?: FacilityRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityRatings to fetch.
     */
    orderBy?: FacilityRatingOrderByWithRelationInput | FacilityRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacilityRatings.
     */
    cursor?: FacilityRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacilityRatings.
     */
    distinct?: FacilityRatingScalarFieldEnum | FacilityRatingScalarFieldEnum[]
  }

  /**
   * FacilityRating findFirstOrThrow
   */
  export type FacilityRatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityRating
     */
    select?: FacilityRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityRating
     */
    omit?: FacilityRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityRatingInclude<ExtArgs> | null
    /**
     * Filter, which FacilityRating to fetch.
     */
    where?: FacilityRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityRatings to fetch.
     */
    orderBy?: FacilityRatingOrderByWithRelationInput | FacilityRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacilityRatings.
     */
    cursor?: FacilityRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacilityRatings.
     */
    distinct?: FacilityRatingScalarFieldEnum | FacilityRatingScalarFieldEnum[]
  }

  /**
   * FacilityRating findMany
   */
  export type FacilityRatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityRating
     */
    select?: FacilityRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityRating
     */
    omit?: FacilityRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityRatingInclude<ExtArgs> | null
    /**
     * Filter, which FacilityRatings to fetch.
     */
    where?: FacilityRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityRatings to fetch.
     */
    orderBy?: FacilityRatingOrderByWithRelationInput | FacilityRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacilityRatings.
     */
    cursor?: FacilityRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityRatings.
     */
    skip?: number
    distinct?: FacilityRatingScalarFieldEnum | FacilityRatingScalarFieldEnum[]
  }

  /**
   * FacilityRating create
   */
  export type FacilityRatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityRating
     */
    select?: FacilityRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityRating
     */
    omit?: FacilityRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityRatingInclude<ExtArgs> | null
    /**
     * The data needed to create a FacilityRating.
     */
    data: XOR<FacilityRatingCreateInput, FacilityRatingUncheckedCreateInput>
  }

  /**
   * FacilityRating createMany
   */
  export type FacilityRatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacilityRatings.
     */
    data: FacilityRatingCreateManyInput | FacilityRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacilityRating createManyAndReturn
   */
  export type FacilityRatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityRating
     */
    select?: FacilityRatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityRating
     */
    omit?: FacilityRatingOmit<ExtArgs> | null
    /**
     * The data used to create many FacilityRatings.
     */
    data: FacilityRatingCreateManyInput | FacilityRatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityRatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacilityRating update
   */
  export type FacilityRatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityRating
     */
    select?: FacilityRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityRating
     */
    omit?: FacilityRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityRatingInclude<ExtArgs> | null
    /**
     * The data needed to update a FacilityRating.
     */
    data: XOR<FacilityRatingUpdateInput, FacilityRatingUncheckedUpdateInput>
    /**
     * Choose, which FacilityRating to update.
     */
    where: FacilityRatingWhereUniqueInput
  }

  /**
   * FacilityRating updateMany
   */
  export type FacilityRatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacilityRatings.
     */
    data: XOR<FacilityRatingUpdateManyMutationInput, FacilityRatingUncheckedUpdateManyInput>
    /**
     * Filter which FacilityRatings to update
     */
    where?: FacilityRatingWhereInput
    /**
     * Limit how many FacilityRatings to update.
     */
    limit?: number
  }

  /**
   * FacilityRating updateManyAndReturn
   */
  export type FacilityRatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityRating
     */
    select?: FacilityRatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityRating
     */
    omit?: FacilityRatingOmit<ExtArgs> | null
    /**
     * The data used to update FacilityRatings.
     */
    data: XOR<FacilityRatingUpdateManyMutationInput, FacilityRatingUncheckedUpdateManyInput>
    /**
     * Filter which FacilityRatings to update
     */
    where?: FacilityRatingWhereInput
    /**
     * Limit how many FacilityRatings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityRatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacilityRating upsert
   */
  export type FacilityRatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityRating
     */
    select?: FacilityRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityRating
     */
    omit?: FacilityRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityRatingInclude<ExtArgs> | null
    /**
     * The filter to search for the FacilityRating to update in case it exists.
     */
    where: FacilityRatingWhereUniqueInput
    /**
     * In case the FacilityRating found by the `where` argument doesn't exist, create a new FacilityRating with this data.
     */
    create: XOR<FacilityRatingCreateInput, FacilityRatingUncheckedCreateInput>
    /**
     * In case the FacilityRating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacilityRatingUpdateInput, FacilityRatingUncheckedUpdateInput>
  }

  /**
   * FacilityRating delete
   */
  export type FacilityRatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityRating
     */
    select?: FacilityRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityRating
     */
    omit?: FacilityRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityRatingInclude<ExtArgs> | null
    /**
     * Filter which FacilityRating to delete.
     */
    where: FacilityRatingWhereUniqueInput
  }

  /**
   * FacilityRating deleteMany
   */
  export type FacilityRatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacilityRatings to delete
     */
    where?: FacilityRatingWhereInput
    /**
     * Limit how many FacilityRatings to delete.
     */
    limit?: number
  }

  /**
   * FacilityRating without action
   */
  export type FacilityRatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityRating
     */
    select?: FacilityRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityRating
     */
    omit?: FacilityRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityRatingInclude<ExtArgs> | null
  }


  /**
   * Model FacilityPhoto
   */

  export type AggregateFacilityPhoto = {
    _count: FacilityPhotoCountAggregateOutputType | null
    _min: FacilityPhotoMinAggregateOutputType | null
    _max: FacilityPhotoMaxAggregateOutputType | null
  }

  export type FacilityPhotoMinAggregateOutputType = {
    id: string | null
    facilityId: string | null
    photoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacilityPhotoMaxAggregateOutputType = {
    id: string | null
    facilityId: string | null
    photoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacilityPhotoCountAggregateOutputType = {
    id: number
    facilityId: number
    photoUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FacilityPhotoMinAggregateInputType = {
    id?: true
    facilityId?: true
    photoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacilityPhotoMaxAggregateInputType = {
    id?: true
    facilityId?: true
    photoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacilityPhotoCountAggregateInputType = {
    id?: true
    facilityId?: true
    photoUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FacilityPhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacilityPhoto to aggregate.
     */
    where?: FacilityPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityPhotos to fetch.
     */
    orderBy?: FacilityPhotoOrderByWithRelationInput | FacilityPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacilityPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacilityPhotos
    **/
    _count?: true | FacilityPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilityPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilityPhotoMaxAggregateInputType
  }

  export type GetFacilityPhotoAggregateType<T extends FacilityPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateFacilityPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacilityPhoto[P]>
      : GetScalarType<T[P], AggregateFacilityPhoto[P]>
  }




  export type FacilityPhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilityPhotoWhereInput
    orderBy?: FacilityPhotoOrderByWithAggregationInput | FacilityPhotoOrderByWithAggregationInput[]
    by: FacilityPhotoScalarFieldEnum[] | FacilityPhotoScalarFieldEnum
    having?: FacilityPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilityPhotoCountAggregateInputType | true
    _min?: FacilityPhotoMinAggregateInputType
    _max?: FacilityPhotoMaxAggregateInputType
  }

  export type FacilityPhotoGroupByOutputType = {
    id: string
    facilityId: string
    photoUrl: string
    createdAt: Date
    updatedAt: Date
    _count: FacilityPhotoCountAggregateOutputType | null
    _min: FacilityPhotoMinAggregateOutputType | null
    _max: FacilityPhotoMaxAggregateOutputType | null
  }

  type GetFacilityPhotoGroupByPayload<T extends FacilityPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacilityPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilityPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilityPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], FacilityPhotoGroupByOutputType[P]>
        }
      >
    >


  export type FacilityPhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facilityId?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facilityPhoto"]>

  export type FacilityPhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facilityId?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facilityPhoto"]>

  export type FacilityPhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facilityId?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facilityPhoto"]>

  export type FacilityPhotoSelectScalar = {
    id?: boolean
    facilityId?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FacilityPhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "facilityId" | "photoUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["facilityPhoto"]>
  export type FacilityPhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }
  export type FacilityPhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }
  export type FacilityPhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
  }

  export type $FacilityPhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacilityPhoto"
    objects: {
      facility: Prisma.$FacilityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      facilityId: string
      photoUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["facilityPhoto"]>
    composites: {}
  }

  type FacilityPhotoGetPayload<S extends boolean | null | undefined | FacilityPhotoDefaultArgs> = $Result.GetResult<Prisma.$FacilityPhotoPayload, S>

  type FacilityPhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacilityPhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacilityPhotoCountAggregateInputType | true
    }

  export interface FacilityPhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacilityPhoto'], meta: { name: 'FacilityPhoto' } }
    /**
     * Find zero or one FacilityPhoto that matches the filter.
     * @param {FacilityPhotoFindUniqueArgs} args - Arguments to find a FacilityPhoto
     * @example
     * // Get one FacilityPhoto
     * const facilityPhoto = await prisma.facilityPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacilityPhotoFindUniqueArgs>(args: SelectSubset<T, FacilityPhotoFindUniqueArgs<ExtArgs>>): Prisma__FacilityPhotoClient<$Result.GetResult<Prisma.$FacilityPhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacilityPhoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacilityPhotoFindUniqueOrThrowArgs} args - Arguments to find a FacilityPhoto
     * @example
     * // Get one FacilityPhoto
     * const facilityPhoto = await prisma.facilityPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacilityPhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, FacilityPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacilityPhotoClient<$Result.GetResult<Prisma.$FacilityPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacilityPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityPhotoFindFirstArgs} args - Arguments to find a FacilityPhoto
     * @example
     * // Get one FacilityPhoto
     * const facilityPhoto = await prisma.facilityPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacilityPhotoFindFirstArgs>(args?: SelectSubset<T, FacilityPhotoFindFirstArgs<ExtArgs>>): Prisma__FacilityPhotoClient<$Result.GetResult<Prisma.$FacilityPhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacilityPhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityPhotoFindFirstOrThrowArgs} args - Arguments to find a FacilityPhoto
     * @example
     * // Get one FacilityPhoto
     * const facilityPhoto = await prisma.facilityPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacilityPhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, FacilityPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacilityPhotoClient<$Result.GetResult<Prisma.$FacilityPhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacilityPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityPhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacilityPhotos
     * const facilityPhotos = await prisma.facilityPhoto.findMany()
     * 
     * // Get first 10 FacilityPhotos
     * const facilityPhotos = await prisma.facilityPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facilityPhotoWithIdOnly = await prisma.facilityPhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacilityPhotoFindManyArgs>(args?: SelectSubset<T, FacilityPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacilityPhoto.
     * @param {FacilityPhotoCreateArgs} args - Arguments to create a FacilityPhoto.
     * @example
     * // Create one FacilityPhoto
     * const FacilityPhoto = await prisma.facilityPhoto.create({
     *   data: {
     *     // ... data to create a FacilityPhoto
     *   }
     * })
     * 
     */
    create<T extends FacilityPhotoCreateArgs>(args: SelectSubset<T, FacilityPhotoCreateArgs<ExtArgs>>): Prisma__FacilityPhotoClient<$Result.GetResult<Prisma.$FacilityPhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacilityPhotos.
     * @param {FacilityPhotoCreateManyArgs} args - Arguments to create many FacilityPhotos.
     * @example
     * // Create many FacilityPhotos
     * const facilityPhoto = await prisma.facilityPhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacilityPhotoCreateManyArgs>(args?: SelectSubset<T, FacilityPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacilityPhotos and returns the data saved in the database.
     * @param {FacilityPhotoCreateManyAndReturnArgs} args - Arguments to create many FacilityPhotos.
     * @example
     * // Create many FacilityPhotos
     * const facilityPhoto = await prisma.facilityPhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacilityPhotos and only return the `id`
     * const facilityPhotoWithIdOnly = await prisma.facilityPhoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacilityPhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, FacilityPhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacilityPhoto.
     * @param {FacilityPhotoDeleteArgs} args - Arguments to delete one FacilityPhoto.
     * @example
     * // Delete one FacilityPhoto
     * const FacilityPhoto = await prisma.facilityPhoto.delete({
     *   where: {
     *     // ... filter to delete one FacilityPhoto
     *   }
     * })
     * 
     */
    delete<T extends FacilityPhotoDeleteArgs>(args: SelectSubset<T, FacilityPhotoDeleteArgs<ExtArgs>>): Prisma__FacilityPhotoClient<$Result.GetResult<Prisma.$FacilityPhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacilityPhoto.
     * @param {FacilityPhotoUpdateArgs} args - Arguments to update one FacilityPhoto.
     * @example
     * // Update one FacilityPhoto
     * const facilityPhoto = await prisma.facilityPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacilityPhotoUpdateArgs>(args: SelectSubset<T, FacilityPhotoUpdateArgs<ExtArgs>>): Prisma__FacilityPhotoClient<$Result.GetResult<Prisma.$FacilityPhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacilityPhotos.
     * @param {FacilityPhotoDeleteManyArgs} args - Arguments to filter FacilityPhotos to delete.
     * @example
     * // Delete a few FacilityPhotos
     * const { count } = await prisma.facilityPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacilityPhotoDeleteManyArgs>(args?: SelectSubset<T, FacilityPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacilityPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacilityPhotos
     * const facilityPhoto = await prisma.facilityPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacilityPhotoUpdateManyArgs>(args: SelectSubset<T, FacilityPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacilityPhotos and returns the data updated in the database.
     * @param {FacilityPhotoUpdateManyAndReturnArgs} args - Arguments to update many FacilityPhotos.
     * @example
     * // Update many FacilityPhotos
     * const facilityPhoto = await prisma.facilityPhoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacilityPhotos and only return the `id`
     * const facilityPhotoWithIdOnly = await prisma.facilityPhoto.updateManyAndReturn({
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
    updateManyAndReturn<T extends FacilityPhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, FacilityPhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacilityPhoto.
     * @param {FacilityPhotoUpsertArgs} args - Arguments to update or create a FacilityPhoto.
     * @example
     * // Update or create a FacilityPhoto
     * const facilityPhoto = await prisma.facilityPhoto.upsert({
     *   create: {
     *     // ... data to create a FacilityPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacilityPhoto we want to update
     *   }
     * })
     */
    upsert<T extends FacilityPhotoUpsertArgs>(args: SelectSubset<T, FacilityPhotoUpsertArgs<ExtArgs>>): Prisma__FacilityPhotoClient<$Result.GetResult<Prisma.$FacilityPhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacilityPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityPhotoCountArgs} args - Arguments to filter FacilityPhotos to count.
     * @example
     * // Count the number of FacilityPhotos
     * const count = await prisma.facilityPhoto.count({
     *   where: {
     *     // ... the filter for the FacilityPhotos we want to count
     *   }
     * })
    **/
    count<T extends FacilityPhotoCountArgs>(
      args?: Subset<T, FacilityPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilityPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacilityPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacilityPhotoAggregateArgs>(args: Subset<T, FacilityPhotoAggregateArgs>): Prisma.PrismaPromise<GetFacilityPhotoAggregateType<T>>

    /**
     * Group by FacilityPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityPhotoGroupByArgs} args - Group by arguments.
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
      T extends FacilityPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacilityPhotoGroupByArgs['orderBy'] }
        : { orderBy?: FacilityPhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacilityPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilityPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacilityPhoto model
   */
  readonly fields: FacilityPhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacilityPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacilityPhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facility<T extends FacilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacilityDefaultArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FacilityPhoto model
   */
  interface FacilityPhotoFieldRefs {
    readonly id: FieldRef<"FacilityPhoto", 'String'>
    readonly facilityId: FieldRef<"FacilityPhoto", 'String'>
    readonly photoUrl: FieldRef<"FacilityPhoto", 'String'>
    readonly createdAt: FieldRef<"FacilityPhoto", 'DateTime'>
    readonly updatedAt: FieldRef<"FacilityPhoto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FacilityPhoto findUnique
   */
  export type FacilityPhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPhoto
     */
    select?: FacilityPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPhoto
     */
    omit?: FacilityPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPhotoInclude<ExtArgs> | null
    /**
     * Filter, which FacilityPhoto to fetch.
     */
    where: FacilityPhotoWhereUniqueInput
  }

  /**
   * FacilityPhoto findUniqueOrThrow
   */
  export type FacilityPhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPhoto
     */
    select?: FacilityPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPhoto
     */
    omit?: FacilityPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPhotoInclude<ExtArgs> | null
    /**
     * Filter, which FacilityPhoto to fetch.
     */
    where: FacilityPhotoWhereUniqueInput
  }

  /**
   * FacilityPhoto findFirst
   */
  export type FacilityPhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPhoto
     */
    select?: FacilityPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPhoto
     */
    omit?: FacilityPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPhotoInclude<ExtArgs> | null
    /**
     * Filter, which FacilityPhoto to fetch.
     */
    where?: FacilityPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityPhotos to fetch.
     */
    orderBy?: FacilityPhotoOrderByWithRelationInput | FacilityPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacilityPhotos.
     */
    cursor?: FacilityPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacilityPhotos.
     */
    distinct?: FacilityPhotoScalarFieldEnum | FacilityPhotoScalarFieldEnum[]
  }

  /**
   * FacilityPhoto findFirstOrThrow
   */
  export type FacilityPhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPhoto
     */
    select?: FacilityPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPhoto
     */
    omit?: FacilityPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPhotoInclude<ExtArgs> | null
    /**
     * Filter, which FacilityPhoto to fetch.
     */
    where?: FacilityPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityPhotos to fetch.
     */
    orderBy?: FacilityPhotoOrderByWithRelationInput | FacilityPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacilityPhotos.
     */
    cursor?: FacilityPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacilityPhotos.
     */
    distinct?: FacilityPhotoScalarFieldEnum | FacilityPhotoScalarFieldEnum[]
  }

  /**
   * FacilityPhoto findMany
   */
  export type FacilityPhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPhoto
     */
    select?: FacilityPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPhoto
     */
    omit?: FacilityPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPhotoInclude<ExtArgs> | null
    /**
     * Filter, which FacilityPhotos to fetch.
     */
    where?: FacilityPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityPhotos to fetch.
     */
    orderBy?: FacilityPhotoOrderByWithRelationInput | FacilityPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacilityPhotos.
     */
    cursor?: FacilityPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityPhotos.
     */
    skip?: number
    distinct?: FacilityPhotoScalarFieldEnum | FacilityPhotoScalarFieldEnum[]
  }

  /**
   * FacilityPhoto create
   */
  export type FacilityPhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPhoto
     */
    select?: FacilityPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPhoto
     */
    omit?: FacilityPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a FacilityPhoto.
     */
    data: XOR<FacilityPhotoCreateInput, FacilityPhotoUncheckedCreateInput>
  }

  /**
   * FacilityPhoto createMany
   */
  export type FacilityPhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacilityPhotos.
     */
    data: FacilityPhotoCreateManyInput | FacilityPhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacilityPhoto createManyAndReturn
   */
  export type FacilityPhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPhoto
     */
    select?: FacilityPhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPhoto
     */
    omit?: FacilityPhotoOmit<ExtArgs> | null
    /**
     * The data used to create many FacilityPhotos.
     */
    data: FacilityPhotoCreateManyInput | FacilityPhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacilityPhoto update
   */
  export type FacilityPhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPhoto
     */
    select?: FacilityPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPhoto
     */
    omit?: FacilityPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a FacilityPhoto.
     */
    data: XOR<FacilityPhotoUpdateInput, FacilityPhotoUncheckedUpdateInput>
    /**
     * Choose, which FacilityPhoto to update.
     */
    where: FacilityPhotoWhereUniqueInput
  }

  /**
   * FacilityPhoto updateMany
   */
  export type FacilityPhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacilityPhotos.
     */
    data: XOR<FacilityPhotoUpdateManyMutationInput, FacilityPhotoUncheckedUpdateManyInput>
    /**
     * Filter which FacilityPhotos to update
     */
    where?: FacilityPhotoWhereInput
    /**
     * Limit how many FacilityPhotos to update.
     */
    limit?: number
  }

  /**
   * FacilityPhoto updateManyAndReturn
   */
  export type FacilityPhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPhoto
     */
    select?: FacilityPhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPhoto
     */
    omit?: FacilityPhotoOmit<ExtArgs> | null
    /**
     * The data used to update FacilityPhotos.
     */
    data: XOR<FacilityPhotoUpdateManyMutationInput, FacilityPhotoUncheckedUpdateManyInput>
    /**
     * Filter which FacilityPhotos to update
     */
    where?: FacilityPhotoWhereInput
    /**
     * Limit how many FacilityPhotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacilityPhoto upsert
   */
  export type FacilityPhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPhoto
     */
    select?: FacilityPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPhoto
     */
    omit?: FacilityPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the FacilityPhoto to update in case it exists.
     */
    where: FacilityPhotoWhereUniqueInput
    /**
     * In case the FacilityPhoto found by the `where` argument doesn't exist, create a new FacilityPhoto with this data.
     */
    create: XOR<FacilityPhotoCreateInput, FacilityPhotoUncheckedCreateInput>
    /**
     * In case the FacilityPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacilityPhotoUpdateInput, FacilityPhotoUncheckedUpdateInput>
  }

  /**
   * FacilityPhoto delete
   */
  export type FacilityPhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPhoto
     */
    select?: FacilityPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPhoto
     */
    omit?: FacilityPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPhotoInclude<ExtArgs> | null
    /**
     * Filter which FacilityPhoto to delete.
     */
    where: FacilityPhotoWhereUniqueInput
  }

  /**
   * FacilityPhoto deleteMany
   */
  export type FacilityPhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacilityPhotos to delete
     */
    where?: FacilityPhotoWhereInput
    /**
     * Limit how many FacilityPhotos to delete.
     */
    limit?: number
  }

  /**
   * FacilityPhoto without action
   */
  export type FacilityPhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPhoto
     */
    select?: FacilityPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPhoto
     */
    omit?: FacilityPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPhotoInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    authorId: string | null
    authorName: string | null
    photoUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    authorId: string | null
    authorName: string | null
    photoUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    authorId: number
    authorName: number
    photoUrl: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    authorName?: true
    photoUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    authorName?: true
    photoUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    authorName?: true
    photoUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    title: string
    content: string
    authorId: string
    authorName: string
    photoUrl: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    authorName?: boolean
    photoUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    authorName?: boolean
    photoUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    authorName?: boolean
    photoUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    authorName?: boolean
    photoUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "authorId" | "authorName" | "photoUrl" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      authorId: string
      authorName: string
      photoUrl: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly authorId: FieldRef<"Post", 'String'>
    readonly authorName: FieldRef<"Post", 'String'>
    readonly photoUrl: FieldRef<"Post", 'String'>
    readonly isActive: FieldRef<"Post", 'Boolean'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
  }


  /**
   * Model Gallery
   */

  export type AggregateGallery = {
    _count: GalleryCountAggregateOutputType | null
    _min: GalleryMinAggregateOutputType | null
    _max: GalleryMaxAggregateOutputType | null
  }

  export type GalleryMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GalleryMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GalleryCountAggregateOutputType = {
    id: number
    title: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GalleryMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GalleryMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GalleryCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GalleryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gallery to aggregate.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Galleries
    **/
    _count?: true | GalleryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryMaxAggregateInputType
  }

  export type GetGalleryAggregateType<T extends GalleryAggregateArgs> = {
        [P in keyof T & keyof AggregateGallery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGallery[P]>
      : GetScalarType<T[P], AggregateGallery[P]>
  }




  export type GalleryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryWhereInput
    orderBy?: GalleryOrderByWithAggregationInput | GalleryOrderByWithAggregationInput[]
    by: GalleryScalarFieldEnum[] | GalleryScalarFieldEnum
    having?: GalleryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryCountAggregateInputType | true
    _min?: GalleryMinAggregateInputType
    _max?: GalleryMaxAggregateInputType
  }

  export type GalleryGroupByOutputType = {
    id: string
    title: string
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: GalleryCountAggregateOutputType | null
    _min: GalleryMinAggregateOutputType | null
    _max: GalleryMaxAggregateOutputType | null
  }

  type GetGalleryGroupByPayload<T extends GalleryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryGroupByOutputType[P]>
        }
      >
    >


  export type GallerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photos?: boolean | Gallery$photosArgs<ExtArgs>
    _count?: boolean | GalleryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gallery"]>

  export type GallerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gallery"]>

  export type GallerySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gallery"]>

  export type GallerySelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GalleryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["gallery"]>
  export type GalleryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | Gallery$photosArgs<ExtArgs>
    _count?: boolean | GalleryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GalleryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GalleryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GalleryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gallery"
    objects: {
      photos: Prisma.$GalleryPhotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gallery"]>
    composites: {}
  }

  type GalleryGetPayload<S extends boolean | null | undefined | GalleryDefaultArgs> = $Result.GetResult<Prisma.$GalleryPayload, S>

  type GalleryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryCountAggregateInputType | true
    }

  export interface GalleryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gallery'], meta: { name: 'Gallery' } }
    /**
     * Find zero or one Gallery that matches the filter.
     * @param {GalleryFindUniqueArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryFindUniqueArgs>(args: SelectSubset<T, GalleryFindUniqueArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gallery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryFindUniqueOrThrowArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gallery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindFirstArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryFindFirstArgs>(args?: SelectSubset<T, GalleryFindFirstArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gallery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindFirstOrThrowArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Galleries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Galleries
     * const galleries = await prisma.gallery.findMany()
     * 
     * // Get first 10 Galleries
     * const galleries = await prisma.gallery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryWithIdOnly = await prisma.gallery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryFindManyArgs>(args?: SelectSubset<T, GalleryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gallery.
     * @param {GalleryCreateArgs} args - Arguments to create a Gallery.
     * @example
     * // Create one Gallery
     * const Gallery = await prisma.gallery.create({
     *   data: {
     *     // ... data to create a Gallery
     *   }
     * })
     * 
     */
    create<T extends GalleryCreateArgs>(args: SelectSubset<T, GalleryCreateArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Galleries.
     * @param {GalleryCreateManyArgs} args - Arguments to create many Galleries.
     * @example
     * // Create many Galleries
     * const gallery = await prisma.gallery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryCreateManyArgs>(args?: SelectSubset<T, GalleryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Galleries and returns the data saved in the database.
     * @param {GalleryCreateManyAndReturnArgs} args - Arguments to create many Galleries.
     * @example
     * // Create many Galleries
     * const gallery = await prisma.gallery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Galleries and only return the `id`
     * const galleryWithIdOnly = await prisma.gallery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalleryCreateManyAndReturnArgs>(args?: SelectSubset<T, GalleryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gallery.
     * @param {GalleryDeleteArgs} args - Arguments to delete one Gallery.
     * @example
     * // Delete one Gallery
     * const Gallery = await prisma.gallery.delete({
     *   where: {
     *     // ... filter to delete one Gallery
     *   }
     * })
     * 
     */
    delete<T extends GalleryDeleteArgs>(args: SelectSubset<T, GalleryDeleteArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gallery.
     * @param {GalleryUpdateArgs} args - Arguments to update one Gallery.
     * @example
     * // Update one Gallery
     * const gallery = await prisma.gallery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryUpdateArgs>(args: SelectSubset<T, GalleryUpdateArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Galleries.
     * @param {GalleryDeleteManyArgs} args - Arguments to filter Galleries to delete.
     * @example
     * // Delete a few Galleries
     * const { count } = await prisma.gallery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryDeleteManyArgs>(args?: SelectSubset<T, GalleryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Galleries
     * const gallery = await prisma.gallery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryUpdateManyArgs>(args: SelectSubset<T, GalleryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galleries and returns the data updated in the database.
     * @param {GalleryUpdateManyAndReturnArgs} args - Arguments to update many Galleries.
     * @example
     * // Update many Galleries
     * const gallery = await prisma.gallery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Galleries and only return the `id`
     * const galleryWithIdOnly = await prisma.gallery.updateManyAndReturn({
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
    updateManyAndReturn<T extends GalleryUpdateManyAndReturnArgs>(args: SelectSubset<T, GalleryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gallery.
     * @param {GalleryUpsertArgs} args - Arguments to update or create a Gallery.
     * @example
     * // Update or create a Gallery
     * const gallery = await prisma.gallery.upsert({
     *   create: {
     *     // ... data to create a Gallery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gallery we want to update
     *   }
     * })
     */
    upsert<T extends GalleryUpsertArgs>(args: SelectSubset<T, GalleryUpsertArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Galleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryCountArgs} args - Arguments to filter Galleries to count.
     * @example
     * // Count the number of Galleries
     * const count = await prisma.gallery.count({
     *   where: {
     *     // ... the filter for the Galleries we want to count
     *   }
     * })
    **/
    count<T extends GalleryCountArgs>(
      args?: Subset<T, GalleryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GalleryAggregateArgs>(args: Subset<T, GalleryAggregateArgs>): Prisma.PrismaPromise<GetGalleryAggregateType<T>>

    /**
     * Group by Gallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryGroupByArgs} args - Group by arguments.
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
      T extends GalleryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryGroupByArgs['orderBy'] }
        : { orderBy?: GalleryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GalleryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gallery model
   */
  readonly fields: GalleryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gallery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    photos<T extends Gallery$photosArgs<ExtArgs> = {}>(args?: Subset<T, Gallery$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Gallery model
   */
  interface GalleryFieldRefs {
    readonly id: FieldRef<"Gallery", 'String'>
    readonly title: FieldRef<"Gallery", 'String'>
    readonly description: FieldRef<"Gallery", 'String'>
    readonly isActive: FieldRef<"Gallery", 'Boolean'>
    readonly createdAt: FieldRef<"Gallery", 'DateTime'>
    readonly updatedAt: FieldRef<"Gallery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Gallery findUnique
   */
  export type GalleryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery findUniqueOrThrow
   */
  export type GalleryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery findFirst
   */
  export type GalleryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * Gallery findFirstOrThrow
   */
  export type GalleryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * Gallery findMany
   */
  export type GalleryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Galleries to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * Gallery create
   */
  export type GalleryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * The data needed to create a Gallery.
     */
    data: XOR<GalleryCreateInput, GalleryUncheckedCreateInput>
  }

  /**
   * Gallery createMany
   */
  export type GalleryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Galleries.
     */
    data: GalleryCreateManyInput | GalleryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gallery createManyAndReturn
   */
  export type GalleryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * The data used to create many Galleries.
     */
    data: GalleryCreateManyInput | GalleryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gallery update
   */
  export type GalleryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * The data needed to update a Gallery.
     */
    data: XOR<GalleryUpdateInput, GalleryUncheckedUpdateInput>
    /**
     * Choose, which Gallery to update.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery updateMany
   */
  export type GalleryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Galleries.
     */
    data: XOR<GalleryUpdateManyMutationInput, GalleryUncheckedUpdateManyInput>
    /**
     * Filter which Galleries to update
     */
    where?: GalleryWhereInput
    /**
     * Limit how many Galleries to update.
     */
    limit?: number
  }

  /**
   * Gallery updateManyAndReturn
   */
  export type GalleryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * The data used to update Galleries.
     */
    data: XOR<GalleryUpdateManyMutationInput, GalleryUncheckedUpdateManyInput>
    /**
     * Filter which Galleries to update
     */
    where?: GalleryWhereInput
    /**
     * Limit how many Galleries to update.
     */
    limit?: number
  }

  /**
   * Gallery upsert
   */
  export type GalleryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * The filter to search for the Gallery to update in case it exists.
     */
    where: GalleryWhereUniqueInput
    /**
     * In case the Gallery found by the `where` argument doesn't exist, create a new Gallery with this data.
     */
    create: XOR<GalleryCreateInput, GalleryUncheckedCreateInput>
    /**
     * In case the Gallery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryUpdateInput, GalleryUncheckedUpdateInput>
  }

  /**
   * Gallery delete
   */
  export type GalleryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter which Gallery to delete.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery deleteMany
   */
  export type GalleryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galleries to delete
     */
    where?: GalleryWhereInput
    /**
     * Limit how many Galleries to delete.
     */
    limit?: number
  }

  /**
   * Gallery.photos
   */
  export type Gallery$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoInclude<ExtArgs> | null
    where?: GalleryPhotoWhereInput
    orderBy?: GalleryPhotoOrderByWithRelationInput | GalleryPhotoOrderByWithRelationInput[]
    cursor?: GalleryPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GalleryPhotoScalarFieldEnum | GalleryPhotoScalarFieldEnum[]
  }

  /**
   * Gallery without action
   */
  export type GalleryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
  }


  /**
   * Model GalleryPhoto
   */

  export type AggregateGalleryPhoto = {
    _count: GalleryPhotoCountAggregateOutputType | null
    _min: GalleryPhotoMinAggregateOutputType | null
    _max: GalleryPhotoMaxAggregateOutputType | null
  }

  export type GalleryPhotoMinAggregateOutputType = {
    id: string | null
    galleryId: string | null
    photoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GalleryPhotoMaxAggregateOutputType = {
    id: string | null
    galleryId: string | null
    photoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GalleryPhotoCountAggregateOutputType = {
    id: number
    galleryId: number
    photoUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GalleryPhotoMinAggregateInputType = {
    id?: true
    galleryId?: true
    photoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GalleryPhotoMaxAggregateInputType = {
    id?: true
    galleryId?: true
    photoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GalleryPhotoCountAggregateInputType = {
    id?: true
    galleryId?: true
    photoUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GalleryPhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryPhoto to aggregate.
     */
    where?: GalleryPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryPhotos to fetch.
     */
    orderBy?: GalleryPhotoOrderByWithRelationInput | GalleryPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GalleryPhotos
    **/
    _count?: true | GalleryPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryPhotoMaxAggregateInputType
  }

  export type GetGalleryPhotoAggregateType<T extends GalleryPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateGalleryPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalleryPhoto[P]>
      : GetScalarType<T[P], AggregateGalleryPhoto[P]>
  }




  export type GalleryPhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryPhotoWhereInput
    orderBy?: GalleryPhotoOrderByWithAggregationInput | GalleryPhotoOrderByWithAggregationInput[]
    by: GalleryPhotoScalarFieldEnum[] | GalleryPhotoScalarFieldEnum
    having?: GalleryPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryPhotoCountAggregateInputType | true
    _min?: GalleryPhotoMinAggregateInputType
    _max?: GalleryPhotoMaxAggregateInputType
  }

  export type GalleryPhotoGroupByOutputType = {
    id: string
    galleryId: string
    photoUrl: string
    createdAt: Date
    updatedAt: Date
    _count: GalleryPhotoCountAggregateOutputType | null
    _min: GalleryPhotoMinAggregateOutputType | null
    _max: GalleryPhotoMaxAggregateOutputType | null
  }

  type GetGalleryPhotoGroupByPayload<T extends GalleryPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryPhotoGroupByOutputType[P]>
        }
      >
    >


  export type GalleryPhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    galleryId?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gallery?: boolean | GalleryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryPhoto"]>

  export type GalleryPhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    galleryId?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gallery?: boolean | GalleryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryPhoto"]>

  export type GalleryPhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    galleryId?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gallery?: boolean | GalleryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryPhoto"]>

  export type GalleryPhotoSelectScalar = {
    id?: boolean
    galleryId?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GalleryPhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "galleryId" | "photoUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["galleryPhoto"]>
  export type GalleryPhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gallery?: boolean | GalleryDefaultArgs<ExtArgs>
  }
  export type GalleryPhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gallery?: boolean | GalleryDefaultArgs<ExtArgs>
  }
  export type GalleryPhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gallery?: boolean | GalleryDefaultArgs<ExtArgs>
  }

  export type $GalleryPhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GalleryPhoto"
    objects: {
      gallery: Prisma.$GalleryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      galleryId: string
      photoUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["galleryPhoto"]>
    composites: {}
  }

  type GalleryPhotoGetPayload<S extends boolean | null | undefined | GalleryPhotoDefaultArgs> = $Result.GetResult<Prisma.$GalleryPhotoPayload, S>

  type GalleryPhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryPhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryPhotoCountAggregateInputType | true
    }

  export interface GalleryPhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GalleryPhoto'], meta: { name: 'GalleryPhoto' } }
    /**
     * Find zero or one GalleryPhoto that matches the filter.
     * @param {GalleryPhotoFindUniqueArgs} args - Arguments to find a GalleryPhoto
     * @example
     * // Get one GalleryPhoto
     * const galleryPhoto = await prisma.galleryPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryPhotoFindUniqueArgs>(args: SelectSubset<T, GalleryPhotoFindUniqueArgs<ExtArgs>>): Prisma__GalleryPhotoClient<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GalleryPhoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryPhotoFindUniqueOrThrowArgs} args - Arguments to find a GalleryPhoto
     * @example
     * // Get one GalleryPhoto
     * const galleryPhoto = await prisma.galleryPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryPhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryPhotoClient<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryPhotoFindFirstArgs} args - Arguments to find a GalleryPhoto
     * @example
     * // Get one GalleryPhoto
     * const galleryPhoto = await prisma.galleryPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryPhotoFindFirstArgs>(args?: SelectSubset<T, GalleryPhotoFindFirstArgs<ExtArgs>>): Prisma__GalleryPhotoClient<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryPhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryPhotoFindFirstOrThrowArgs} args - Arguments to find a GalleryPhoto
     * @example
     * // Get one GalleryPhoto
     * const galleryPhoto = await prisma.galleryPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryPhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryPhotoClient<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GalleryPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryPhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GalleryPhotos
     * const galleryPhotos = await prisma.galleryPhoto.findMany()
     * 
     * // Get first 10 GalleryPhotos
     * const galleryPhotos = await prisma.galleryPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryPhotoWithIdOnly = await prisma.galleryPhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryPhotoFindManyArgs>(args?: SelectSubset<T, GalleryPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GalleryPhoto.
     * @param {GalleryPhotoCreateArgs} args - Arguments to create a GalleryPhoto.
     * @example
     * // Create one GalleryPhoto
     * const GalleryPhoto = await prisma.galleryPhoto.create({
     *   data: {
     *     // ... data to create a GalleryPhoto
     *   }
     * })
     * 
     */
    create<T extends GalleryPhotoCreateArgs>(args: SelectSubset<T, GalleryPhotoCreateArgs<ExtArgs>>): Prisma__GalleryPhotoClient<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GalleryPhotos.
     * @param {GalleryPhotoCreateManyArgs} args - Arguments to create many GalleryPhotos.
     * @example
     * // Create many GalleryPhotos
     * const galleryPhoto = await prisma.galleryPhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryPhotoCreateManyArgs>(args?: SelectSubset<T, GalleryPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GalleryPhotos and returns the data saved in the database.
     * @param {GalleryPhotoCreateManyAndReturnArgs} args - Arguments to create many GalleryPhotos.
     * @example
     * // Create many GalleryPhotos
     * const galleryPhoto = await prisma.galleryPhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GalleryPhotos and only return the `id`
     * const galleryPhotoWithIdOnly = await prisma.galleryPhoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalleryPhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, GalleryPhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GalleryPhoto.
     * @param {GalleryPhotoDeleteArgs} args - Arguments to delete one GalleryPhoto.
     * @example
     * // Delete one GalleryPhoto
     * const GalleryPhoto = await prisma.galleryPhoto.delete({
     *   where: {
     *     // ... filter to delete one GalleryPhoto
     *   }
     * })
     * 
     */
    delete<T extends GalleryPhotoDeleteArgs>(args: SelectSubset<T, GalleryPhotoDeleteArgs<ExtArgs>>): Prisma__GalleryPhotoClient<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GalleryPhoto.
     * @param {GalleryPhotoUpdateArgs} args - Arguments to update one GalleryPhoto.
     * @example
     * // Update one GalleryPhoto
     * const galleryPhoto = await prisma.galleryPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryPhotoUpdateArgs>(args: SelectSubset<T, GalleryPhotoUpdateArgs<ExtArgs>>): Prisma__GalleryPhotoClient<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GalleryPhotos.
     * @param {GalleryPhotoDeleteManyArgs} args - Arguments to filter GalleryPhotos to delete.
     * @example
     * // Delete a few GalleryPhotos
     * const { count } = await prisma.galleryPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryPhotoDeleteManyArgs>(args?: SelectSubset<T, GalleryPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GalleryPhotos
     * const galleryPhoto = await prisma.galleryPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryPhotoUpdateManyArgs>(args: SelectSubset<T, GalleryPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryPhotos and returns the data updated in the database.
     * @param {GalleryPhotoUpdateManyAndReturnArgs} args - Arguments to update many GalleryPhotos.
     * @example
     * // Update many GalleryPhotos
     * const galleryPhoto = await prisma.galleryPhoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GalleryPhotos and only return the `id`
     * const galleryPhotoWithIdOnly = await prisma.galleryPhoto.updateManyAndReturn({
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
    updateManyAndReturn<T extends GalleryPhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, GalleryPhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GalleryPhoto.
     * @param {GalleryPhotoUpsertArgs} args - Arguments to update or create a GalleryPhoto.
     * @example
     * // Update or create a GalleryPhoto
     * const galleryPhoto = await prisma.galleryPhoto.upsert({
     *   create: {
     *     // ... data to create a GalleryPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GalleryPhoto we want to update
     *   }
     * })
     */
    upsert<T extends GalleryPhotoUpsertArgs>(args: SelectSubset<T, GalleryPhotoUpsertArgs<ExtArgs>>): Prisma__GalleryPhotoClient<$Result.GetResult<Prisma.$GalleryPhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GalleryPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryPhotoCountArgs} args - Arguments to filter GalleryPhotos to count.
     * @example
     * // Count the number of GalleryPhotos
     * const count = await prisma.galleryPhoto.count({
     *   where: {
     *     // ... the filter for the GalleryPhotos we want to count
     *   }
     * })
    **/
    count<T extends GalleryPhotoCountArgs>(
      args?: Subset<T, GalleryPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GalleryPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GalleryPhotoAggregateArgs>(args: Subset<T, GalleryPhotoAggregateArgs>): Prisma.PrismaPromise<GetGalleryPhotoAggregateType<T>>

    /**
     * Group by GalleryPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryPhotoGroupByArgs} args - Group by arguments.
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
      T extends GalleryPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryPhotoGroupByArgs['orderBy'] }
        : { orderBy?: GalleryPhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GalleryPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GalleryPhoto model
   */
  readonly fields: GalleryPhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GalleryPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryPhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gallery<T extends GalleryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GalleryDefaultArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GalleryPhoto model
   */
  interface GalleryPhotoFieldRefs {
    readonly id: FieldRef<"GalleryPhoto", 'String'>
    readonly galleryId: FieldRef<"GalleryPhoto", 'String'>
    readonly photoUrl: FieldRef<"GalleryPhoto", 'String'>
    readonly createdAt: FieldRef<"GalleryPhoto", 'DateTime'>
    readonly updatedAt: FieldRef<"GalleryPhoto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GalleryPhoto findUnique
   */
  export type GalleryPhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoInclude<ExtArgs> | null
    /**
     * Filter, which GalleryPhoto to fetch.
     */
    where: GalleryPhotoWhereUniqueInput
  }

  /**
   * GalleryPhoto findUniqueOrThrow
   */
  export type GalleryPhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoInclude<ExtArgs> | null
    /**
     * Filter, which GalleryPhoto to fetch.
     */
    where: GalleryPhotoWhereUniqueInput
  }

  /**
   * GalleryPhoto findFirst
   */
  export type GalleryPhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoInclude<ExtArgs> | null
    /**
     * Filter, which GalleryPhoto to fetch.
     */
    where?: GalleryPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryPhotos to fetch.
     */
    orderBy?: GalleryPhotoOrderByWithRelationInput | GalleryPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryPhotos.
     */
    cursor?: GalleryPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryPhotos.
     */
    distinct?: GalleryPhotoScalarFieldEnum | GalleryPhotoScalarFieldEnum[]
  }

  /**
   * GalleryPhoto findFirstOrThrow
   */
  export type GalleryPhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoInclude<ExtArgs> | null
    /**
     * Filter, which GalleryPhoto to fetch.
     */
    where?: GalleryPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryPhotos to fetch.
     */
    orderBy?: GalleryPhotoOrderByWithRelationInput | GalleryPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryPhotos.
     */
    cursor?: GalleryPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryPhotos.
     */
    distinct?: GalleryPhotoScalarFieldEnum | GalleryPhotoScalarFieldEnum[]
  }

  /**
   * GalleryPhoto findMany
   */
  export type GalleryPhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoInclude<ExtArgs> | null
    /**
     * Filter, which GalleryPhotos to fetch.
     */
    where?: GalleryPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryPhotos to fetch.
     */
    orderBy?: GalleryPhotoOrderByWithRelationInput | GalleryPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GalleryPhotos.
     */
    cursor?: GalleryPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryPhotos.
     */
    skip?: number
    distinct?: GalleryPhotoScalarFieldEnum | GalleryPhotoScalarFieldEnum[]
  }

  /**
   * GalleryPhoto create
   */
  export type GalleryPhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a GalleryPhoto.
     */
    data: XOR<GalleryPhotoCreateInput, GalleryPhotoUncheckedCreateInput>
  }

  /**
   * GalleryPhoto createMany
   */
  export type GalleryPhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GalleryPhotos.
     */
    data: GalleryPhotoCreateManyInput | GalleryPhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryPhoto createManyAndReturn
   */
  export type GalleryPhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * The data used to create many GalleryPhotos.
     */
    data: GalleryPhotoCreateManyInput | GalleryPhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GalleryPhoto update
   */
  export type GalleryPhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a GalleryPhoto.
     */
    data: XOR<GalleryPhotoUpdateInput, GalleryPhotoUncheckedUpdateInput>
    /**
     * Choose, which GalleryPhoto to update.
     */
    where: GalleryPhotoWhereUniqueInput
  }

  /**
   * GalleryPhoto updateMany
   */
  export type GalleryPhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GalleryPhotos.
     */
    data: XOR<GalleryPhotoUpdateManyMutationInput, GalleryPhotoUncheckedUpdateManyInput>
    /**
     * Filter which GalleryPhotos to update
     */
    where?: GalleryPhotoWhereInput
    /**
     * Limit how many GalleryPhotos to update.
     */
    limit?: number
  }

  /**
   * GalleryPhoto updateManyAndReturn
   */
  export type GalleryPhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * The data used to update GalleryPhotos.
     */
    data: XOR<GalleryPhotoUpdateManyMutationInput, GalleryPhotoUncheckedUpdateManyInput>
    /**
     * Filter which GalleryPhotos to update
     */
    where?: GalleryPhotoWhereInput
    /**
     * Limit how many GalleryPhotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GalleryPhoto upsert
   */
  export type GalleryPhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the GalleryPhoto to update in case it exists.
     */
    where: GalleryPhotoWhereUniqueInput
    /**
     * In case the GalleryPhoto found by the `where` argument doesn't exist, create a new GalleryPhoto with this data.
     */
    create: XOR<GalleryPhotoCreateInput, GalleryPhotoUncheckedCreateInput>
    /**
     * In case the GalleryPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryPhotoUpdateInput, GalleryPhotoUncheckedUpdateInput>
  }

  /**
   * GalleryPhoto delete
   */
  export type GalleryPhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoInclude<ExtArgs> | null
    /**
     * Filter which GalleryPhoto to delete.
     */
    where: GalleryPhotoWhereUniqueInput
  }

  /**
   * GalleryPhoto deleteMany
   */
  export type GalleryPhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryPhotos to delete
     */
    where?: GalleryPhotoWhereInput
    /**
     * Limit how many GalleryPhotos to delete.
     */
    limit?: number
  }

  /**
   * GalleryPhoto without action
   */
  export type GalleryPhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryPhoto
     */
    select?: GalleryPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryPhoto
     */
    omit?: GalleryPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryPhotoInclude<ExtArgs> | null
  }


  /**
   * Model Banner
   */

  export type AggregateBanner = {
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  export type BannerAvgAggregateOutputType = {
    order: number | null
  }

  export type BannerSumAggregateOutputType = {
    order: number | null
  }

  export type BannerMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BannerMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BannerCountAggregateOutputType = {
    id: number
    title: number
    description: number
    imageUrl: number
    order: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BannerAvgAggregateInputType = {
    order?: true
  }

  export type BannerSumAggregateInputType = {
    order?: true
  }

  export type BannerMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BannerMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BannerCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banner to aggregate.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banners
    **/
    _count?: true | BannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BannerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BannerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerMaxAggregateInputType
  }

  export type GetBannerAggregateType<T extends BannerAggregateArgs> = {
        [P in keyof T & keyof AggregateBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanner[P]>
      : GetScalarType<T[P], AggregateBanner[P]>
  }




  export type BannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
    orderBy?: BannerOrderByWithAggregationInput | BannerOrderByWithAggregationInput[]
    by: BannerScalarFieldEnum[] | BannerScalarFieldEnum
    having?: BannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerCountAggregateInputType | true
    _avg?: BannerAvgAggregateInputType
    _sum?: BannerSumAggregateInputType
    _min?: BannerMinAggregateInputType
    _max?: BannerMaxAggregateInputType
  }

  export type BannerGroupByOutputType = {
    id: string
    title: string
    description: string | null
    imageUrl: string
    order: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  type GetBannerGroupByPayload<T extends BannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerGroupByOutputType[P]>
            : GetScalarType<T[P], BannerGroupByOutputType[P]>
        }
      >
    >


  export type BannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BannerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "imageUrl" | "order" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["banner"]>

  export type $BannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Banner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      imageUrl: string
      order: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["banner"]>
    composites: {}
  }

  type BannerGetPayload<S extends boolean | null | undefined | BannerDefaultArgs> = $Result.GetResult<Prisma.$BannerPayload, S>

  type BannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BannerCountAggregateInputType | true
    }

  export interface BannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banner'], meta: { name: 'Banner' } }
    /**
     * Find zero or one Banner that matches the filter.
     * @param {BannerFindUniqueArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannerFindUniqueArgs>(args: SelectSubset<T, BannerFindUniqueArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BannerFindUniqueOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannerFindUniqueOrThrowArgs>(args: SelectSubset<T, BannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannerFindFirstArgs>(args?: SelectSubset<T, BannerFindFirstArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannerFindFirstOrThrowArgs>(args?: SelectSubset<T, BannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banner.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannerWithIdOnly = await prisma.banner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BannerFindManyArgs>(args?: SelectSubset<T, BannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banner.
     * @param {BannerCreateArgs} args - Arguments to create a Banner.
     * @example
     * // Create one Banner
     * const Banner = await prisma.banner.create({
     *   data: {
     *     // ... data to create a Banner
     *   }
     * })
     * 
     */
    create<T extends BannerCreateArgs>(args: SelectSubset<T, BannerCreateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banners.
     * @param {BannerCreateManyArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BannerCreateManyArgs>(args?: SelectSubset<T, BannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Banners and returns the data saved in the database.
     * @param {BannerCreateManyAndReturnArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BannerCreateManyAndReturnArgs>(args?: SelectSubset<T, BannerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Banner.
     * @param {BannerDeleteArgs} args - Arguments to delete one Banner.
     * @example
     * // Delete one Banner
     * const Banner = await prisma.banner.delete({
     *   where: {
     *     // ... filter to delete one Banner
     *   }
     * })
     * 
     */
    delete<T extends BannerDeleteArgs>(args: SelectSubset<T, BannerDeleteArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banner.
     * @param {BannerUpdateArgs} args - Arguments to update one Banner.
     * @example
     * // Update one Banner
     * const banner = await prisma.banner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BannerUpdateArgs>(args: SelectSubset<T, BannerUpdateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banners.
     * @param {BannerDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BannerDeleteManyArgs>(args?: SelectSubset<T, BannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BannerUpdateManyArgs>(args: SelectSubset<T, BannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners and returns the data updated in the database.
     * @param {BannerUpdateManyAndReturnArgs} args - Arguments to update many Banners.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.updateManyAndReturn({
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
    updateManyAndReturn<T extends BannerUpdateManyAndReturnArgs>(args: SelectSubset<T, BannerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Banner.
     * @param {BannerUpsertArgs} args - Arguments to update or create a Banner.
     * @example
     * // Update or create a Banner
     * const banner = await prisma.banner.upsert({
     *   create: {
     *     // ... data to create a Banner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banner we want to update
     *   }
     * })
     */
    upsert<T extends BannerUpsertArgs>(args: SelectSubset<T, BannerUpsertArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banner.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends BannerCountArgs>(
      args?: Subset<T, BannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BannerAggregateArgs>(args: Subset<T, BannerAggregateArgs>): Prisma.PrismaPromise<GetBannerAggregateType<T>>

    /**
     * Group by Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerGroupByArgs} args - Group by arguments.
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
      T extends BannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannerGroupByArgs['orderBy'] }
        : { orderBy?: BannerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Banner model
   */
  readonly fields: BannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Banner model
   */
  interface BannerFieldRefs {
    readonly id: FieldRef<"Banner", 'String'>
    readonly title: FieldRef<"Banner", 'String'>
    readonly description: FieldRef<"Banner", 'String'>
    readonly imageUrl: FieldRef<"Banner", 'String'>
    readonly order: FieldRef<"Banner", 'Int'>
    readonly isActive: FieldRef<"Banner", 'Boolean'>
    readonly createdAt: FieldRef<"Banner", 'DateTime'>
    readonly updatedAt: FieldRef<"Banner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Banner findUnique
   */
  export type BannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findUniqueOrThrow
   */
  export type BannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findFirst
   */
  export type BannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findFirstOrThrow
   */
  export type BannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findMany
   */
  export type BannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banners to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner create
   */
  export type BannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data needed to create a Banner.
     */
    data: XOR<BannerCreateInput, BannerUncheckedCreateInput>
  }

  /**
   * Banner createMany
   */
  export type BannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner createManyAndReturn
   */
  export type BannerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner update
   */
  export type BannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data needed to update a Banner.
     */
    data: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
    /**
     * Choose, which Banner to update.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner updateMany
   */
  export type BannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to update.
     */
    limit?: number
  }

  /**
   * Banner updateManyAndReturn
   */
  export type BannerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to update.
     */
    limit?: number
  }

  /**
   * Banner upsert
   */
  export type BannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The filter to search for the Banner to update in case it exists.
     */
    where: BannerWhereUniqueInput
    /**
     * In case the Banner found by the `where` argument doesn't exist, create a new Banner with this data.
     */
    create: XOR<BannerCreateInput, BannerUncheckedCreateInput>
    /**
     * In case the Banner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
  }

  /**
   * Banner delete
   */
  export type BannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter which Banner to delete.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner deleteMany
   */
  export type BannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banners to delete
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to delete.
     */
    limit?: number
  }

  /**
   * Banner without action
   */
  export type BannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
  }


  /**
   * Model Nurse
   */

  export type AggregateNurse = {
    _count: NurseCountAggregateOutputType | null
    _min: NurseMinAggregateOutputType | null
    _max: NurseMaxAggregateOutputType | null
  }

  export type NurseMinAggregateOutputType = {
    id: string | null
    name: string | null
    speciality: string | null
    description: string | null
    photoUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NurseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    speciality: string | null
    description: string | null
    photoUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NurseCountAggregateOutputType = {
    id: number
    name: number
    speciality: number
    description: number
    photoUrl: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NurseMinAggregateInputType = {
    id?: true
    name?: true
    speciality?: true
    description?: true
    photoUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NurseMaxAggregateInputType = {
    id?: true
    name?: true
    speciality?: true
    description?: true
    photoUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NurseCountAggregateInputType = {
    id?: true
    name?: true
    speciality?: true
    description?: true
    photoUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NurseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nurse to aggregate.
     */
    where?: NurseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nurses to fetch.
     */
    orderBy?: NurseOrderByWithRelationInput | NurseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NurseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nurses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nurses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nurses
    **/
    _count?: true | NurseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NurseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NurseMaxAggregateInputType
  }

  export type GetNurseAggregateType<T extends NurseAggregateArgs> = {
        [P in keyof T & keyof AggregateNurse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNurse[P]>
      : GetScalarType<T[P], AggregateNurse[P]>
  }




  export type NurseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NurseWhereInput
    orderBy?: NurseOrderByWithAggregationInput | NurseOrderByWithAggregationInput[]
    by: NurseScalarFieldEnum[] | NurseScalarFieldEnum
    having?: NurseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NurseCountAggregateInputType | true
    _min?: NurseMinAggregateInputType
    _max?: NurseMaxAggregateInputType
  }

  export type NurseGroupByOutputType = {
    id: string
    name: string
    speciality: string | null
    description: string | null
    photoUrl: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: NurseCountAggregateOutputType | null
    _min: NurseMinAggregateOutputType | null
    _max: NurseMaxAggregateOutputType | null
  }

  type GetNurseGroupByPayload<T extends NurseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NurseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NurseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NurseGroupByOutputType[P]>
            : GetScalarType<T[P], NurseGroupByOutputType[P]>
        }
      >
    >


  export type NurseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    speciality?: boolean
    description?: boolean
    photoUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schedules?: boolean | Nurse$schedulesArgs<ExtArgs>
    ratings?: boolean | Nurse$ratingsArgs<ExtArgs>
    _count?: boolean | NurseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nurse"]>

  export type NurseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    speciality?: boolean
    description?: boolean
    photoUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nurse"]>

  export type NurseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    speciality?: boolean
    description?: boolean
    photoUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nurse"]>

  export type NurseSelectScalar = {
    id?: boolean
    name?: boolean
    speciality?: boolean
    description?: boolean
    photoUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NurseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "speciality" | "description" | "photoUrl" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["nurse"]>
  export type NurseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | Nurse$schedulesArgs<ExtArgs>
    ratings?: boolean | Nurse$ratingsArgs<ExtArgs>
    _count?: boolean | NurseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NurseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NurseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nurse"
    objects: {
      schedules: Prisma.$NurseSchedulePayload<ExtArgs>[]
      ratings: Prisma.$NurseRatingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      speciality: string | null
      description: string | null
      photoUrl: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nurse"]>
    composites: {}
  }

  type NurseGetPayload<S extends boolean | null | undefined | NurseDefaultArgs> = $Result.GetResult<Prisma.$NursePayload, S>

  type NurseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NurseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NurseCountAggregateInputType | true
    }

  export interface NurseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nurse'], meta: { name: 'Nurse' } }
    /**
     * Find zero or one Nurse that matches the filter.
     * @param {NurseFindUniqueArgs} args - Arguments to find a Nurse
     * @example
     * // Get one Nurse
     * const nurse = await prisma.nurse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NurseFindUniqueArgs>(args: SelectSubset<T, NurseFindUniqueArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nurse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NurseFindUniqueOrThrowArgs} args - Arguments to find a Nurse
     * @example
     * // Get one Nurse
     * const nurse = await prisma.nurse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NurseFindUniqueOrThrowArgs>(args: SelectSubset<T, NurseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nurse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseFindFirstArgs} args - Arguments to find a Nurse
     * @example
     * // Get one Nurse
     * const nurse = await prisma.nurse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NurseFindFirstArgs>(args?: SelectSubset<T, NurseFindFirstArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nurse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseFindFirstOrThrowArgs} args - Arguments to find a Nurse
     * @example
     * // Get one Nurse
     * const nurse = await prisma.nurse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NurseFindFirstOrThrowArgs>(args?: SelectSubset<T, NurseFindFirstOrThrowArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nurses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nurses
     * const nurses = await prisma.nurse.findMany()
     * 
     * // Get first 10 Nurses
     * const nurses = await prisma.nurse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nurseWithIdOnly = await prisma.nurse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NurseFindManyArgs>(args?: SelectSubset<T, NurseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nurse.
     * @param {NurseCreateArgs} args - Arguments to create a Nurse.
     * @example
     * // Create one Nurse
     * const Nurse = await prisma.nurse.create({
     *   data: {
     *     // ... data to create a Nurse
     *   }
     * })
     * 
     */
    create<T extends NurseCreateArgs>(args: SelectSubset<T, NurseCreateArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nurses.
     * @param {NurseCreateManyArgs} args - Arguments to create many Nurses.
     * @example
     * // Create many Nurses
     * const nurse = await prisma.nurse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NurseCreateManyArgs>(args?: SelectSubset<T, NurseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nurses and returns the data saved in the database.
     * @param {NurseCreateManyAndReturnArgs} args - Arguments to create many Nurses.
     * @example
     * // Create many Nurses
     * const nurse = await prisma.nurse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nurses and only return the `id`
     * const nurseWithIdOnly = await prisma.nurse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NurseCreateManyAndReturnArgs>(args?: SelectSubset<T, NurseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nurse.
     * @param {NurseDeleteArgs} args - Arguments to delete one Nurse.
     * @example
     * // Delete one Nurse
     * const Nurse = await prisma.nurse.delete({
     *   where: {
     *     // ... filter to delete one Nurse
     *   }
     * })
     * 
     */
    delete<T extends NurseDeleteArgs>(args: SelectSubset<T, NurseDeleteArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nurse.
     * @param {NurseUpdateArgs} args - Arguments to update one Nurse.
     * @example
     * // Update one Nurse
     * const nurse = await prisma.nurse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NurseUpdateArgs>(args: SelectSubset<T, NurseUpdateArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nurses.
     * @param {NurseDeleteManyArgs} args - Arguments to filter Nurses to delete.
     * @example
     * // Delete a few Nurses
     * const { count } = await prisma.nurse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NurseDeleteManyArgs>(args?: SelectSubset<T, NurseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nurses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nurses
     * const nurse = await prisma.nurse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NurseUpdateManyArgs>(args: SelectSubset<T, NurseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nurses and returns the data updated in the database.
     * @param {NurseUpdateManyAndReturnArgs} args - Arguments to update many Nurses.
     * @example
     * // Update many Nurses
     * const nurse = await prisma.nurse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nurses and only return the `id`
     * const nurseWithIdOnly = await prisma.nurse.updateManyAndReturn({
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
    updateManyAndReturn<T extends NurseUpdateManyAndReturnArgs>(args: SelectSubset<T, NurseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nurse.
     * @param {NurseUpsertArgs} args - Arguments to update or create a Nurse.
     * @example
     * // Update or create a Nurse
     * const nurse = await prisma.nurse.upsert({
     *   create: {
     *     // ... data to create a Nurse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nurse we want to update
     *   }
     * })
     */
    upsert<T extends NurseUpsertArgs>(args: SelectSubset<T, NurseUpsertArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nurses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseCountArgs} args - Arguments to filter Nurses to count.
     * @example
     * // Count the number of Nurses
     * const count = await prisma.nurse.count({
     *   where: {
     *     // ... the filter for the Nurses we want to count
     *   }
     * })
    **/
    count<T extends NurseCountArgs>(
      args?: Subset<T, NurseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NurseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nurse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NurseAggregateArgs>(args: Subset<T, NurseAggregateArgs>): Prisma.PrismaPromise<GetNurseAggregateType<T>>

    /**
     * Group by Nurse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseGroupByArgs} args - Group by arguments.
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
      T extends NurseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NurseGroupByArgs['orderBy'] }
        : { orderBy?: NurseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NurseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNurseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nurse model
   */
  readonly fields: NurseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nurse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NurseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedules<T extends Nurse$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Nurse$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NurseSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends Nurse$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, Nurse$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NurseRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Nurse model
   */
  interface NurseFieldRefs {
    readonly id: FieldRef<"Nurse", 'String'>
    readonly name: FieldRef<"Nurse", 'String'>
    readonly speciality: FieldRef<"Nurse", 'String'>
    readonly description: FieldRef<"Nurse", 'String'>
    readonly photoUrl: FieldRef<"Nurse", 'String'>
    readonly isActive: FieldRef<"Nurse", 'Boolean'>
    readonly createdAt: FieldRef<"Nurse", 'DateTime'>
    readonly updatedAt: FieldRef<"Nurse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Nurse findUnique
   */
  export type NurseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * Filter, which Nurse to fetch.
     */
    where: NurseWhereUniqueInput
  }

  /**
   * Nurse findUniqueOrThrow
   */
  export type NurseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * Filter, which Nurse to fetch.
     */
    where: NurseWhereUniqueInput
  }

  /**
   * Nurse findFirst
   */
  export type NurseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * Filter, which Nurse to fetch.
     */
    where?: NurseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nurses to fetch.
     */
    orderBy?: NurseOrderByWithRelationInput | NurseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nurses.
     */
    cursor?: NurseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nurses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nurses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nurses.
     */
    distinct?: NurseScalarFieldEnum | NurseScalarFieldEnum[]
  }

  /**
   * Nurse findFirstOrThrow
   */
  export type NurseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * Filter, which Nurse to fetch.
     */
    where?: NurseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nurses to fetch.
     */
    orderBy?: NurseOrderByWithRelationInput | NurseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nurses.
     */
    cursor?: NurseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nurses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nurses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nurses.
     */
    distinct?: NurseScalarFieldEnum | NurseScalarFieldEnum[]
  }

  /**
   * Nurse findMany
   */
  export type NurseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * Filter, which Nurses to fetch.
     */
    where?: NurseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nurses to fetch.
     */
    orderBy?: NurseOrderByWithRelationInput | NurseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nurses.
     */
    cursor?: NurseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nurses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nurses.
     */
    skip?: number
    distinct?: NurseScalarFieldEnum | NurseScalarFieldEnum[]
  }

  /**
   * Nurse create
   */
  export type NurseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * The data needed to create a Nurse.
     */
    data: XOR<NurseCreateInput, NurseUncheckedCreateInput>
  }

  /**
   * Nurse createMany
   */
  export type NurseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nurses.
     */
    data: NurseCreateManyInput | NurseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nurse createManyAndReturn
   */
  export type NurseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * The data used to create many Nurses.
     */
    data: NurseCreateManyInput | NurseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nurse update
   */
  export type NurseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * The data needed to update a Nurse.
     */
    data: XOR<NurseUpdateInput, NurseUncheckedUpdateInput>
    /**
     * Choose, which Nurse to update.
     */
    where: NurseWhereUniqueInput
  }

  /**
   * Nurse updateMany
   */
  export type NurseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nurses.
     */
    data: XOR<NurseUpdateManyMutationInput, NurseUncheckedUpdateManyInput>
    /**
     * Filter which Nurses to update
     */
    where?: NurseWhereInput
    /**
     * Limit how many Nurses to update.
     */
    limit?: number
  }

  /**
   * Nurse updateManyAndReturn
   */
  export type NurseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * The data used to update Nurses.
     */
    data: XOR<NurseUpdateManyMutationInput, NurseUncheckedUpdateManyInput>
    /**
     * Filter which Nurses to update
     */
    where?: NurseWhereInput
    /**
     * Limit how many Nurses to update.
     */
    limit?: number
  }

  /**
   * Nurse upsert
   */
  export type NurseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * The filter to search for the Nurse to update in case it exists.
     */
    where: NurseWhereUniqueInput
    /**
     * In case the Nurse found by the `where` argument doesn't exist, create a new Nurse with this data.
     */
    create: XOR<NurseCreateInput, NurseUncheckedCreateInput>
    /**
     * In case the Nurse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NurseUpdateInput, NurseUncheckedUpdateInput>
  }

  /**
   * Nurse delete
   */
  export type NurseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
    /**
     * Filter which Nurse to delete.
     */
    where: NurseWhereUniqueInput
  }

  /**
   * Nurse deleteMany
   */
  export type NurseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nurses to delete
     */
    where?: NurseWhereInput
    /**
     * Limit how many Nurses to delete.
     */
    limit?: number
  }

  /**
   * Nurse.schedules
   */
  export type Nurse$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseSchedule
     */
    select?: NurseScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseSchedule
     */
    omit?: NurseScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseScheduleInclude<ExtArgs> | null
    where?: NurseScheduleWhereInput
    orderBy?: NurseScheduleOrderByWithRelationInput | NurseScheduleOrderByWithRelationInput[]
    cursor?: NurseScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NurseScheduleScalarFieldEnum | NurseScheduleScalarFieldEnum[]
  }

  /**
   * Nurse.ratings
   */
  export type Nurse$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseRating
     */
    select?: NurseRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseRating
     */
    omit?: NurseRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseRatingInclude<ExtArgs> | null
    where?: NurseRatingWhereInput
    orderBy?: NurseRatingOrderByWithRelationInput | NurseRatingOrderByWithRelationInput[]
    cursor?: NurseRatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NurseRatingScalarFieldEnum | NurseRatingScalarFieldEnum[]
  }

  /**
   * Nurse without action
   */
  export type NurseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nurse
     */
    select?: NurseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nurse
     */
    omit?: NurseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseInclude<ExtArgs> | null
  }


  /**
   * Model NurseSchedule
   */

  export type AggregateNurseSchedule = {
    _count: NurseScheduleCountAggregateOutputType | null
    _avg: NurseScheduleAvgAggregateOutputType | null
    _sum: NurseScheduleSumAggregateOutputType | null
    _min: NurseScheduleMinAggregateOutputType | null
    _max: NurseScheduleMaxAggregateOutputType | null
  }

  export type NurseScheduleAvgAggregateOutputType = {
    dayOfWeek: number | null
    quota: number | null
  }

  export type NurseScheduleSumAggregateOutputType = {
    dayOfWeek: number | null
    quota: number | null
  }

  export type NurseScheduleMinAggregateOutputType = {
    id: string | null
    nurseId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    quota: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NurseScheduleMaxAggregateOutputType = {
    id: string | null
    nurseId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    quota: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NurseScheduleCountAggregateOutputType = {
    id: number
    nurseId: number
    dayOfWeek: number
    startTime: number
    endTime: number
    quota: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NurseScheduleAvgAggregateInputType = {
    dayOfWeek?: true
    quota?: true
  }

  export type NurseScheduleSumAggregateInputType = {
    dayOfWeek?: true
    quota?: true
  }

  export type NurseScheduleMinAggregateInputType = {
    id?: true
    nurseId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    quota?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NurseScheduleMaxAggregateInputType = {
    id?: true
    nurseId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    quota?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NurseScheduleCountAggregateInputType = {
    id?: true
    nurseId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    quota?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NurseScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NurseSchedule to aggregate.
     */
    where?: NurseScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NurseSchedules to fetch.
     */
    orderBy?: NurseScheduleOrderByWithRelationInput | NurseScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NurseScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NurseSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NurseSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NurseSchedules
    **/
    _count?: true | NurseScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NurseScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NurseScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NurseScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NurseScheduleMaxAggregateInputType
  }

  export type GetNurseScheduleAggregateType<T extends NurseScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateNurseSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNurseSchedule[P]>
      : GetScalarType<T[P], AggregateNurseSchedule[P]>
  }




  export type NurseScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NurseScheduleWhereInput
    orderBy?: NurseScheduleOrderByWithAggregationInput | NurseScheduleOrderByWithAggregationInput[]
    by: NurseScheduleScalarFieldEnum[] | NurseScheduleScalarFieldEnum
    having?: NurseScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NurseScheduleCountAggregateInputType | true
    _avg?: NurseScheduleAvgAggregateInputType
    _sum?: NurseScheduleSumAggregateInputType
    _min?: NurseScheduleMinAggregateInputType
    _max?: NurseScheduleMaxAggregateInputType
  }

  export type NurseScheduleGroupByOutputType = {
    id: string
    nurseId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    quota: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: NurseScheduleCountAggregateOutputType | null
    _avg: NurseScheduleAvgAggregateOutputType | null
    _sum: NurseScheduleSumAggregateOutputType | null
    _min: NurseScheduleMinAggregateOutputType | null
    _max: NurseScheduleMaxAggregateOutputType | null
  }

  type GetNurseScheduleGroupByPayload<T extends NurseScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NurseScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NurseScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NurseScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], NurseScheduleGroupByOutputType[P]>
        }
      >
    >


  export type NurseScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nurseId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    quota?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nurse?: boolean | NurseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nurseSchedule"]>

  export type NurseScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nurseId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    quota?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nurse?: boolean | NurseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nurseSchedule"]>

  export type NurseScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nurseId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    quota?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nurse?: boolean | NurseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nurseSchedule"]>

  export type NurseScheduleSelectScalar = {
    id?: boolean
    nurseId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    quota?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NurseScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nurseId" | "dayOfWeek" | "startTime" | "endTime" | "quota" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["nurseSchedule"]>
  export type NurseScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nurse?: boolean | NurseDefaultArgs<ExtArgs>
  }
  export type NurseScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nurse?: boolean | NurseDefaultArgs<ExtArgs>
  }
  export type NurseScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nurse?: boolean | NurseDefaultArgs<ExtArgs>
  }

  export type $NurseSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NurseSchedule"
    objects: {
      nurse: Prisma.$NursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nurseId: string
      dayOfWeek: number
      startTime: string
      endTime: string
      quota: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nurseSchedule"]>
    composites: {}
  }

  type NurseScheduleGetPayload<S extends boolean | null | undefined | NurseScheduleDefaultArgs> = $Result.GetResult<Prisma.$NurseSchedulePayload, S>

  type NurseScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NurseScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NurseScheduleCountAggregateInputType | true
    }

  export interface NurseScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NurseSchedule'], meta: { name: 'NurseSchedule' } }
    /**
     * Find zero or one NurseSchedule that matches the filter.
     * @param {NurseScheduleFindUniqueArgs} args - Arguments to find a NurseSchedule
     * @example
     * // Get one NurseSchedule
     * const nurseSchedule = await prisma.nurseSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NurseScheduleFindUniqueArgs>(args: SelectSubset<T, NurseScheduleFindUniqueArgs<ExtArgs>>): Prisma__NurseScheduleClient<$Result.GetResult<Prisma.$NurseSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NurseSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NurseScheduleFindUniqueOrThrowArgs} args - Arguments to find a NurseSchedule
     * @example
     * // Get one NurseSchedule
     * const nurseSchedule = await prisma.nurseSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NurseScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, NurseScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NurseScheduleClient<$Result.GetResult<Prisma.$NurseSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NurseSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseScheduleFindFirstArgs} args - Arguments to find a NurseSchedule
     * @example
     * // Get one NurseSchedule
     * const nurseSchedule = await prisma.nurseSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NurseScheduleFindFirstArgs>(args?: SelectSubset<T, NurseScheduleFindFirstArgs<ExtArgs>>): Prisma__NurseScheduleClient<$Result.GetResult<Prisma.$NurseSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NurseSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseScheduleFindFirstOrThrowArgs} args - Arguments to find a NurseSchedule
     * @example
     * // Get one NurseSchedule
     * const nurseSchedule = await prisma.nurseSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NurseScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, NurseScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__NurseScheduleClient<$Result.GetResult<Prisma.$NurseSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NurseSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NurseSchedules
     * const nurseSchedules = await prisma.nurseSchedule.findMany()
     * 
     * // Get first 10 NurseSchedules
     * const nurseSchedules = await prisma.nurseSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nurseScheduleWithIdOnly = await prisma.nurseSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NurseScheduleFindManyArgs>(args?: SelectSubset<T, NurseScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NurseSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NurseSchedule.
     * @param {NurseScheduleCreateArgs} args - Arguments to create a NurseSchedule.
     * @example
     * // Create one NurseSchedule
     * const NurseSchedule = await prisma.nurseSchedule.create({
     *   data: {
     *     // ... data to create a NurseSchedule
     *   }
     * })
     * 
     */
    create<T extends NurseScheduleCreateArgs>(args: SelectSubset<T, NurseScheduleCreateArgs<ExtArgs>>): Prisma__NurseScheduleClient<$Result.GetResult<Prisma.$NurseSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NurseSchedules.
     * @param {NurseScheduleCreateManyArgs} args - Arguments to create many NurseSchedules.
     * @example
     * // Create many NurseSchedules
     * const nurseSchedule = await prisma.nurseSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NurseScheduleCreateManyArgs>(args?: SelectSubset<T, NurseScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NurseSchedules and returns the data saved in the database.
     * @param {NurseScheduleCreateManyAndReturnArgs} args - Arguments to create many NurseSchedules.
     * @example
     * // Create many NurseSchedules
     * const nurseSchedule = await prisma.nurseSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NurseSchedules and only return the `id`
     * const nurseScheduleWithIdOnly = await prisma.nurseSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NurseScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, NurseScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NurseSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NurseSchedule.
     * @param {NurseScheduleDeleteArgs} args - Arguments to delete one NurseSchedule.
     * @example
     * // Delete one NurseSchedule
     * const NurseSchedule = await prisma.nurseSchedule.delete({
     *   where: {
     *     // ... filter to delete one NurseSchedule
     *   }
     * })
     * 
     */
    delete<T extends NurseScheduleDeleteArgs>(args: SelectSubset<T, NurseScheduleDeleteArgs<ExtArgs>>): Prisma__NurseScheduleClient<$Result.GetResult<Prisma.$NurseSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NurseSchedule.
     * @param {NurseScheduleUpdateArgs} args - Arguments to update one NurseSchedule.
     * @example
     * // Update one NurseSchedule
     * const nurseSchedule = await prisma.nurseSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NurseScheduleUpdateArgs>(args: SelectSubset<T, NurseScheduleUpdateArgs<ExtArgs>>): Prisma__NurseScheduleClient<$Result.GetResult<Prisma.$NurseSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NurseSchedules.
     * @param {NurseScheduleDeleteManyArgs} args - Arguments to filter NurseSchedules to delete.
     * @example
     * // Delete a few NurseSchedules
     * const { count } = await prisma.nurseSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NurseScheduleDeleteManyArgs>(args?: SelectSubset<T, NurseScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NurseSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NurseSchedules
     * const nurseSchedule = await prisma.nurseSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NurseScheduleUpdateManyArgs>(args: SelectSubset<T, NurseScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NurseSchedules and returns the data updated in the database.
     * @param {NurseScheduleUpdateManyAndReturnArgs} args - Arguments to update many NurseSchedules.
     * @example
     * // Update many NurseSchedules
     * const nurseSchedule = await prisma.nurseSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NurseSchedules and only return the `id`
     * const nurseScheduleWithIdOnly = await prisma.nurseSchedule.updateManyAndReturn({
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
    updateManyAndReturn<T extends NurseScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, NurseScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NurseSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NurseSchedule.
     * @param {NurseScheduleUpsertArgs} args - Arguments to update or create a NurseSchedule.
     * @example
     * // Update or create a NurseSchedule
     * const nurseSchedule = await prisma.nurseSchedule.upsert({
     *   create: {
     *     // ... data to create a NurseSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NurseSchedule we want to update
     *   }
     * })
     */
    upsert<T extends NurseScheduleUpsertArgs>(args: SelectSubset<T, NurseScheduleUpsertArgs<ExtArgs>>): Prisma__NurseScheduleClient<$Result.GetResult<Prisma.$NurseSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NurseSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseScheduleCountArgs} args - Arguments to filter NurseSchedules to count.
     * @example
     * // Count the number of NurseSchedules
     * const count = await prisma.nurseSchedule.count({
     *   where: {
     *     // ... the filter for the NurseSchedules we want to count
     *   }
     * })
    **/
    count<T extends NurseScheduleCountArgs>(
      args?: Subset<T, NurseScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NurseScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NurseSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NurseScheduleAggregateArgs>(args: Subset<T, NurseScheduleAggregateArgs>): Prisma.PrismaPromise<GetNurseScheduleAggregateType<T>>

    /**
     * Group by NurseSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseScheduleGroupByArgs} args - Group by arguments.
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
      T extends NurseScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NurseScheduleGroupByArgs['orderBy'] }
        : { orderBy?: NurseScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NurseScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNurseScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NurseSchedule model
   */
  readonly fields: NurseScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NurseSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NurseScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nurse<T extends NurseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NurseDefaultArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NurseSchedule model
   */
  interface NurseScheduleFieldRefs {
    readonly id: FieldRef<"NurseSchedule", 'String'>
    readonly nurseId: FieldRef<"NurseSchedule", 'String'>
    readonly dayOfWeek: FieldRef<"NurseSchedule", 'Int'>
    readonly startTime: FieldRef<"NurseSchedule", 'String'>
    readonly endTime: FieldRef<"NurseSchedule", 'String'>
    readonly quota: FieldRef<"NurseSchedule", 'Int'>
    readonly isActive: FieldRef<"NurseSchedule", 'Boolean'>
    readonly createdAt: FieldRef<"NurseSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"NurseSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NurseSchedule findUnique
   */
  export type NurseScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseSchedule
     */
    select?: NurseScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseSchedule
     */
    omit?: NurseScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseScheduleInclude<ExtArgs> | null
    /**
     * Filter, which NurseSchedule to fetch.
     */
    where: NurseScheduleWhereUniqueInput
  }

  /**
   * NurseSchedule findUniqueOrThrow
   */
  export type NurseScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseSchedule
     */
    select?: NurseScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseSchedule
     */
    omit?: NurseScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseScheduleInclude<ExtArgs> | null
    /**
     * Filter, which NurseSchedule to fetch.
     */
    where: NurseScheduleWhereUniqueInput
  }

  /**
   * NurseSchedule findFirst
   */
  export type NurseScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseSchedule
     */
    select?: NurseScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseSchedule
     */
    omit?: NurseScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseScheduleInclude<ExtArgs> | null
    /**
     * Filter, which NurseSchedule to fetch.
     */
    where?: NurseScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NurseSchedules to fetch.
     */
    orderBy?: NurseScheduleOrderByWithRelationInput | NurseScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NurseSchedules.
     */
    cursor?: NurseScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NurseSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NurseSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NurseSchedules.
     */
    distinct?: NurseScheduleScalarFieldEnum | NurseScheduleScalarFieldEnum[]
  }

  /**
   * NurseSchedule findFirstOrThrow
   */
  export type NurseScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseSchedule
     */
    select?: NurseScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseSchedule
     */
    omit?: NurseScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseScheduleInclude<ExtArgs> | null
    /**
     * Filter, which NurseSchedule to fetch.
     */
    where?: NurseScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NurseSchedules to fetch.
     */
    orderBy?: NurseScheduleOrderByWithRelationInput | NurseScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NurseSchedules.
     */
    cursor?: NurseScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NurseSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NurseSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NurseSchedules.
     */
    distinct?: NurseScheduleScalarFieldEnum | NurseScheduleScalarFieldEnum[]
  }

  /**
   * NurseSchedule findMany
   */
  export type NurseScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseSchedule
     */
    select?: NurseScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseSchedule
     */
    omit?: NurseScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseScheduleInclude<ExtArgs> | null
    /**
     * Filter, which NurseSchedules to fetch.
     */
    where?: NurseScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NurseSchedules to fetch.
     */
    orderBy?: NurseScheduleOrderByWithRelationInput | NurseScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NurseSchedules.
     */
    cursor?: NurseScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NurseSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NurseSchedules.
     */
    skip?: number
    distinct?: NurseScheduleScalarFieldEnum | NurseScheduleScalarFieldEnum[]
  }

  /**
   * NurseSchedule create
   */
  export type NurseScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseSchedule
     */
    select?: NurseScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseSchedule
     */
    omit?: NurseScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a NurseSchedule.
     */
    data: XOR<NurseScheduleCreateInput, NurseScheduleUncheckedCreateInput>
  }

  /**
   * NurseSchedule createMany
   */
  export type NurseScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NurseSchedules.
     */
    data: NurseScheduleCreateManyInput | NurseScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NurseSchedule createManyAndReturn
   */
  export type NurseScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseSchedule
     */
    select?: NurseScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NurseSchedule
     */
    omit?: NurseScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many NurseSchedules.
     */
    data: NurseScheduleCreateManyInput | NurseScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NurseSchedule update
   */
  export type NurseScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseSchedule
     */
    select?: NurseScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseSchedule
     */
    omit?: NurseScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a NurseSchedule.
     */
    data: XOR<NurseScheduleUpdateInput, NurseScheduleUncheckedUpdateInput>
    /**
     * Choose, which NurseSchedule to update.
     */
    where: NurseScheduleWhereUniqueInput
  }

  /**
   * NurseSchedule updateMany
   */
  export type NurseScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NurseSchedules.
     */
    data: XOR<NurseScheduleUpdateManyMutationInput, NurseScheduleUncheckedUpdateManyInput>
    /**
     * Filter which NurseSchedules to update
     */
    where?: NurseScheduleWhereInput
    /**
     * Limit how many NurseSchedules to update.
     */
    limit?: number
  }

  /**
   * NurseSchedule updateManyAndReturn
   */
  export type NurseScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseSchedule
     */
    select?: NurseScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NurseSchedule
     */
    omit?: NurseScheduleOmit<ExtArgs> | null
    /**
     * The data used to update NurseSchedules.
     */
    data: XOR<NurseScheduleUpdateManyMutationInput, NurseScheduleUncheckedUpdateManyInput>
    /**
     * Filter which NurseSchedules to update
     */
    where?: NurseScheduleWhereInput
    /**
     * Limit how many NurseSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NurseSchedule upsert
   */
  export type NurseScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseSchedule
     */
    select?: NurseScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseSchedule
     */
    omit?: NurseScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the NurseSchedule to update in case it exists.
     */
    where: NurseScheduleWhereUniqueInput
    /**
     * In case the NurseSchedule found by the `where` argument doesn't exist, create a new NurseSchedule with this data.
     */
    create: XOR<NurseScheduleCreateInput, NurseScheduleUncheckedCreateInput>
    /**
     * In case the NurseSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NurseScheduleUpdateInput, NurseScheduleUncheckedUpdateInput>
  }

  /**
   * NurseSchedule delete
   */
  export type NurseScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseSchedule
     */
    select?: NurseScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseSchedule
     */
    omit?: NurseScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseScheduleInclude<ExtArgs> | null
    /**
     * Filter which NurseSchedule to delete.
     */
    where: NurseScheduleWhereUniqueInput
  }

  /**
   * NurseSchedule deleteMany
   */
  export type NurseScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NurseSchedules to delete
     */
    where?: NurseScheduleWhereInput
    /**
     * Limit how many NurseSchedules to delete.
     */
    limit?: number
  }

  /**
   * NurseSchedule without action
   */
  export type NurseScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseSchedule
     */
    select?: NurseScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseSchedule
     */
    omit?: NurseScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseScheduleInclude<ExtArgs> | null
  }


  /**
   * Model NurseRating
   */

  export type AggregateNurseRating = {
    _count: NurseRatingCountAggregateOutputType | null
    _avg: NurseRatingAvgAggregateOutputType | null
    _sum: NurseRatingSumAggregateOutputType | null
    _min: NurseRatingMinAggregateOutputType | null
    _max: NurseRatingMaxAggregateOutputType | null
  }

  export type NurseRatingAvgAggregateOutputType = {
    rating: number | null
  }

  export type NurseRatingSumAggregateOutputType = {
    rating: number | null
  }

  export type NurseRatingMinAggregateOutputType = {
    id: string | null
    reservationId: string | null
    nurseId: string | null
    patientId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NurseRatingMaxAggregateOutputType = {
    id: string | null
    reservationId: string | null
    nurseId: string | null
    patientId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NurseRatingCountAggregateOutputType = {
    id: number
    reservationId: number
    nurseId: number
    patientId: number
    rating: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NurseRatingAvgAggregateInputType = {
    rating?: true
  }

  export type NurseRatingSumAggregateInputType = {
    rating?: true
  }

  export type NurseRatingMinAggregateInputType = {
    id?: true
    reservationId?: true
    nurseId?: true
    patientId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NurseRatingMaxAggregateInputType = {
    id?: true
    reservationId?: true
    nurseId?: true
    patientId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NurseRatingCountAggregateInputType = {
    id?: true
    reservationId?: true
    nurseId?: true
    patientId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NurseRatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NurseRating to aggregate.
     */
    where?: NurseRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NurseRatings to fetch.
     */
    orderBy?: NurseRatingOrderByWithRelationInput | NurseRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NurseRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NurseRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NurseRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NurseRatings
    **/
    _count?: true | NurseRatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NurseRatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NurseRatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NurseRatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NurseRatingMaxAggregateInputType
  }

  export type GetNurseRatingAggregateType<T extends NurseRatingAggregateArgs> = {
        [P in keyof T & keyof AggregateNurseRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNurseRating[P]>
      : GetScalarType<T[P], AggregateNurseRating[P]>
  }




  export type NurseRatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NurseRatingWhereInput
    orderBy?: NurseRatingOrderByWithAggregationInput | NurseRatingOrderByWithAggregationInput[]
    by: NurseRatingScalarFieldEnum[] | NurseRatingScalarFieldEnum
    having?: NurseRatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NurseRatingCountAggregateInputType | true
    _avg?: NurseRatingAvgAggregateInputType
    _sum?: NurseRatingSumAggregateInputType
    _min?: NurseRatingMinAggregateInputType
    _max?: NurseRatingMaxAggregateInputType
  }

  export type NurseRatingGroupByOutputType = {
    id: string
    reservationId: string
    nurseId: string
    patientId: string
    rating: number
    comment: string | null
    createdAt: Date
    updatedAt: Date
    _count: NurseRatingCountAggregateOutputType | null
    _avg: NurseRatingAvgAggregateOutputType | null
    _sum: NurseRatingSumAggregateOutputType | null
    _min: NurseRatingMinAggregateOutputType | null
    _max: NurseRatingMaxAggregateOutputType | null
  }

  type GetNurseRatingGroupByPayload<T extends NurseRatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NurseRatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NurseRatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NurseRatingGroupByOutputType[P]>
            : GetScalarType<T[P], NurseRatingGroupByOutputType[P]>
        }
      >
    >


  export type NurseRatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    nurseId?: boolean
    patientId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nurse?: boolean | NurseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nurseRating"]>

  export type NurseRatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    nurseId?: boolean
    patientId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nurse?: boolean | NurseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nurseRating"]>

  export type NurseRatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    nurseId?: boolean
    patientId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nurse?: boolean | NurseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nurseRating"]>

  export type NurseRatingSelectScalar = {
    id?: boolean
    reservationId?: boolean
    nurseId?: boolean
    patientId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NurseRatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reservationId" | "nurseId" | "patientId" | "rating" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["nurseRating"]>
  export type NurseRatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nurse?: boolean | NurseDefaultArgs<ExtArgs>
  }
  export type NurseRatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nurse?: boolean | NurseDefaultArgs<ExtArgs>
  }
  export type NurseRatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nurse?: boolean | NurseDefaultArgs<ExtArgs>
  }

  export type $NurseRatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NurseRating"
    objects: {
      nurse: Prisma.$NursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reservationId: string
      nurseId: string
      patientId: string
      rating: number
      comment: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nurseRating"]>
    composites: {}
  }

  type NurseRatingGetPayload<S extends boolean | null | undefined | NurseRatingDefaultArgs> = $Result.GetResult<Prisma.$NurseRatingPayload, S>

  type NurseRatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NurseRatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NurseRatingCountAggregateInputType | true
    }

  export interface NurseRatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NurseRating'], meta: { name: 'NurseRating' } }
    /**
     * Find zero or one NurseRating that matches the filter.
     * @param {NurseRatingFindUniqueArgs} args - Arguments to find a NurseRating
     * @example
     * // Get one NurseRating
     * const nurseRating = await prisma.nurseRating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NurseRatingFindUniqueArgs>(args: SelectSubset<T, NurseRatingFindUniqueArgs<ExtArgs>>): Prisma__NurseRatingClient<$Result.GetResult<Prisma.$NurseRatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NurseRating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NurseRatingFindUniqueOrThrowArgs} args - Arguments to find a NurseRating
     * @example
     * // Get one NurseRating
     * const nurseRating = await prisma.nurseRating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NurseRatingFindUniqueOrThrowArgs>(args: SelectSubset<T, NurseRatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NurseRatingClient<$Result.GetResult<Prisma.$NurseRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NurseRating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseRatingFindFirstArgs} args - Arguments to find a NurseRating
     * @example
     * // Get one NurseRating
     * const nurseRating = await prisma.nurseRating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NurseRatingFindFirstArgs>(args?: SelectSubset<T, NurseRatingFindFirstArgs<ExtArgs>>): Prisma__NurseRatingClient<$Result.GetResult<Prisma.$NurseRatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NurseRating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseRatingFindFirstOrThrowArgs} args - Arguments to find a NurseRating
     * @example
     * // Get one NurseRating
     * const nurseRating = await prisma.nurseRating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NurseRatingFindFirstOrThrowArgs>(args?: SelectSubset<T, NurseRatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__NurseRatingClient<$Result.GetResult<Prisma.$NurseRatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NurseRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseRatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NurseRatings
     * const nurseRatings = await prisma.nurseRating.findMany()
     * 
     * // Get first 10 NurseRatings
     * const nurseRatings = await prisma.nurseRating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nurseRatingWithIdOnly = await prisma.nurseRating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NurseRatingFindManyArgs>(args?: SelectSubset<T, NurseRatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NurseRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NurseRating.
     * @param {NurseRatingCreateArgs} args - Arguments to create a NurseRating.
     * @example
     * // Create one NurseRating
     * const NurseRating = await prisma.nurseRating.create({
     *   data: {
     *     // ... data to create a NurseRating
     *   }
     * })
     * 
     */
    create<T extends NurseRatingCreateArgs>(args: SelectSubset<T, NurseRatingCreateArgs<ExtArgs>>): Prisma__NurseRatingClient<$Result.GetResult<Prisma.$NurseRatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NurseRatings.
     * @param {NurseRatingCreateManyArgs} args - Arguments to create many NurseRatings.
     * @example
     * // Create many NurseRatings
     * const nurseRating = await prisma.nurseRating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NurseRatingCreateManyArgs>(args?: SelectSubset<T, NurseRatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NurseRatings and returns the data saved in the database.
     * @param {NurseRatingCreateManyAndReturnArgs} args - Arguments to create many NurseRatings.
     * @example
     * // Create many NurseRatings
     * const nurseRating = await prisma.nurseRating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NurseRatings and only return the `id`
     * const nurseRatingWithIdOnly = await prisma.nurseRating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NurseRatingCreateManyAndReturnArgs>(args?: SelectSubset<T, NurseRatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NurseRatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NurseRating.
     * @param {NurseRatingDeleteArgs} args - Arguments to delete one NurseRating.
     * @example
     * // Delete one NurseRating
     * const NurseRating = await prisma.nurseRating.delete({
     *   where: {
     *     // ... filter to delete one NurseRating
     *   }
     * })
     * 
     */
    delete<T extends NurseRatingDeleteArgs>(args: SelectSubset<T, NurseRatingDeleteArgs<ExtArgs>>): Prisma__NurseRatingClient<$Result.GetResult<Prisma.$NurseRatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NurseRating.
     * @param {NurseRatingUpdateArgs} args - Arguments to update one NurseRating.
     * @example
     * // Update one NurseRating
     * const nurseRating = await prisma.nurseRating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NurseRatingUpdateArgs>(args: SelectSubset<T, NurseRatingUpdateArgs<ExtArgs>>): Prisma__NurseRatingClient<$Result.GetResult<Prisma.$NurseRatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NurseRatings.
     * @param {NurseRatingDeleteManyArgs} args - Arguments to filter NurseRatings to delete.
     * @example
     * // Delete a few NurseRatings
     * const { count } = await prisma.nurseRating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NurseRatingDeleteManyArgs>(args?: SelectSubset<T, NurseRatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NurseRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseRatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NurseRatings
     * const nurseRating = await prisma.nurseRating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NurseRatingUpdateManyArgs>(args: SelectSubset<T, NurseRatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NurseRatings and returns the data updated in the database.
     * @param {NurseRatingUpdateManyAndReturnArgs} args - Arguments to update many NurseRatings.
     * @example
     * // Update many NurseRatings
     * const nurseRating = await prisma.nurseRating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NurseRatings and only return the `id`
     * const nurseRatingWithIdOnly = await prisma.nurseRating.updateManyAndReturn({
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
    updateManyAndReturn<T extends NurseRatingUpdateManyAndReturnArgs>(args: SelectSubset<T, NurseRatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NurseRatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NurseRating.
     * @param {NurseRatingUpsertArgs} args - Arguments to update or create a NurseRating.
     * @example
     * // Update or create a NurseRating
     * const nurseRating = await prisma.nurseRating.upsert({
     *   create: {
     *     // ... data to create a NurseRating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NurseRating we want to update
     *   }
     * })
     */
    upsert<T extends NurseRatingUpsertArgs>(args: SelectSubset<T, NurseRatingUpsertArgs<ExtArgs>>): Prisma__NurseRatingClient<$Result.GetResult<Prisma.$NurseRatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NurseRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseRatingCountArgs} args - Arguments to filter NurseRatings to count.
     * @example
     * // Count the number of NurseRatings
     * const count = await prisma.nurseRating.count({
     *   where: {
     *     // ... the filter for the NurseRatings we want to count
     *   }
     * })
    **/
    count<T extends NurseRatingCountArgs>(
      args?: Subset<T, NurseRatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NurseRatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NurseRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseRatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NurseRatingAggregateArgs>(args: Subset<T, NurseRatingAggregateArgs>): Prisma.PrismaPromise<GetNurseRatingAggregateType<T>>

    /**
     * Group by NurseRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseRatingGroupByArgs} args - Group by arguments.
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
      T extends NurseRatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NurseRatingGroupByArgs['orderBy'] }
        : { orderBy?: NurseRatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NurseRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNurseRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NurseRating model
   */
  readonly fields: NurseRatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NurseRating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NurseRatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nurse<T extends NurseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NurseDefaultArgs<ExtArgs>>): Prisma__NurseClient<$Result.GetResult<Prisma.$NursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NurseRating model
   */
  interface NurseRatingFieldRefs {
    readonly id: FieldRef<"NurseRating", 'String'>
    readonly reservationId: FieldRef<"NurseRating", 'String'>
    readonly nurseId: FieldRef<"NurseRating", 'String'>
    readonly patientId: FieldRef<"NurseRating", 'String'>
    readonly rating: FieldRef<"NurseRating", 'Int'>
    readonly comment: FieldRef<"NurseRating", 'String'>
    readonly createdAt: FieldRef<"NurseRating", 'DateTime'>
    readonly updatedAt: FieldRef<"NurseRating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NurseRating findUnique
   */
  export type NurseRatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseRating
     */
    select?: NurseRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseRating
     */
    omit?: NurseRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseRatingInclude<ExtArgs> | null
    /**
     * Filter, which NurseRating to fetch.
     */
    where: NurseRatingWhereUniqueInput
  }

  /**
   * NurseRating findUniqueOrThrow
   */
  export type NurseRatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseRating
     */
    select?: NurseRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseRating
     */
    omit?: NurseRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseRatingInclude<ExtArgs> | null
    /**
     * Filter, which NurseRating to fetch.
     */
    where: NurseRatingWhereUniqueInput
  }

  /**
   * NurseRating findFirst
   */
  export type NurseRatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseRating
     */
    select?: NurseRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseRating
     */
    omit?: NurseRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseRatingInclude<ExtArgs> | null
    /**
     * Filter, which NurseRating to fetch.
     */
    where?: NurseRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NurseRatings to fetch.
     */
    orderBy?: NurseRatingOrderByWithRelationInput | NurseRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NurseRatings.
     */
    cursor?: NurseRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NurseRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NurseRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NurseRatings.
     */
    distinct?: NurseRatingScalarFieldEnum | NurseRatingScalarFieldEnum[]
  }

  /**
   * NurseRating findFirstOrThrow
   */
  export type NurseRatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseRating
     */
    select?: NurseRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseRating
     */
    omit?: NurseRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseRatingInclude<ExtArgs> | null
    /**
     * Filter, which NurseRating to fetch.
     */
    where?: NurseRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NurseRatings to fetch.
     */
    orderBy?: NurseRatingOrderByWithRelationInput | NurseRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NurseRatings.
     */
    cursor?: NurseRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NurseRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NurseRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NurseRatings.
     */
    distinct?: NurseRatingScalarFieldEnum | NurseRatingScalarFieldEnum[]
  }

  /**
   * NurseRating findMany
   */
  export type NurseRatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseRating
     */
    select?: NurseRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseRating
     */
    omit?: NurseRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseRatingInclude<ExtArgs> | null
    /**
     * Filter, which NurseRatings to fetch.
     */
    where?: NurseRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NurseRatings to fetch.
     */
    orderBy?: NurseRatingOrderByWithRelationInput | NurseRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NurseRatings.
     */
    cursor?: NurseRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NurseRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NurseRatings.
     */
    skip?: number
    distinct?: NurseRatingScalarFieldEnum | NurseRatingScalarFieldEnum[]
  }

  /**
   * NurseRating create
   */
  export type NurseRatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseRating
     */
    select?: NurseRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseRating
     */
    omit?: NurseRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseRatingInclude<ExtArgs> | null
    /**
     * The data needed to create a NurseRating.
     */
    data: XOR<NurseRatingCreateInput, NurseRatingUncheckedCreateInput>
  }

  /**
   * NurseRating createMany
   */
  export type NurseRatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NurseRatings.
     */
    data: NurseRatingCreateManyInput | NurseRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NurseRating createManyAndReturn
   */
  export type NurseRatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseRating
     */
    select?: NurseRatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NurseRating
     */
    omit?: NurseRatingOmit<ExtArgs> | null
    /**
     * The data used to create many NurseRatings.
     */
    data: NurseRatingCreateManyInput | NurseRatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseRatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NurseRating update
   */
  export type NurseRatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseRating
     */
    select?: NurseRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseRating
     */
    omit?: NurseRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseRatingInclude<ExtArgs> | null
    /**
     * The data needed to update a NurseRating.
     */
    data: XOR<NurseRatingUpdateInput, NurseRatingUncheckedUpdateInput>
    /**
     * Choose, which NurseRating to update.
     */
    where: NurseRatingWhereUniqueInput
  }

  /**
   * NurseRating updateMany
   */
  export type NurseRatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NurseRatings.
     */
    data: XOR<NurseRatingUpdateManyMutationInput, NurseRatingUncheckedUpdateManyInput>
    /**
     * Filter which NurseRatings to update
     */
    where?: NurseRatingWhereInput
    /**
     * Limit how many NurseRatings to update.
     */
    limit?: number
  }

  /**
   * NurseRating updateManyAndReturn
   */
  export type NurseRatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseRating
     */
    select?: NurseRatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NurseRating
     */
    omit?: NurseRatingOmit<ExtArgs> | null
    /**
     * The data used to update NurseRatings.
     */
    data: XOR<NurseRatingUpdateManyMutationInput, NurseRatingUncheckedUpdateManyInput>
    /**
     * Filter which NurseRatings to update
     */
    where?: NurseRatingWhereInput
    /**
     * Limit how many NurseRatings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseRatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NurseRating upsert
   */
  export type NurseRatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseRating
     */
    select?: NurseRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseRating
     */
    omit?: NurseRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseRatingInclude<ExtArgs> | null
    /**
     * The filter to search for the NurseRating to update in case it exists.
     */
    where: NurseRatingWhereUniqueInput
    /**
     * In case the NurseRating found by the `where` argument doesn't exist, create a new NurseRating with this data.
     */
    create: XOR<NurseRatingCreateInput, NurseRatingUncheckedCreateInput>
    /**
     * In case the NurseRating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NurseRatingUpdateInput, NurseRatingUncheckedUpdateInput>
  }

  /**
   * NurseRating delete
   */
  export type NurseRatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseRating
     */
    select?: NurseRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseRating
     */
    omit?: NurseRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseRatingInclude<ExtArgs> | null
    /**
     * Filter which NurseRating to delete.
     */
    where: NurseRatingWhereUniqueInput
  }

  /**
   * NurseRating deleteMany
   */
  export type NurseRatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NurseRatings to delete
     */
    where?: NurseRatingWhereInput
    /**
     * Limit how many NurseRatings to delete.
     */
    limit?: number
  }

  /**
   * NurseRating without action
   */
  export type NurseRatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseRating
     */
    select?: NurseRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseRating
     */
    omit?: NurseRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseRatingInclude<ExtArgs> | null
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
    patientIdentity: 'patientIdentity',
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
    identity: 'identity',
    name: 'name',
    phone: 'phone',
    email: 'email',
    photo: 'photo',
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


  export const DoctorRatingScalarFieldEnum: {
    id: 'id',
    reservationId: 'reservationId',
    doctorId: 'doctorId',
    patientId: 'patientId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DoctorRatingScalarFieldEnum = (typeof DoctorRatingScalarFieldEnum)[keyof typeof DoctorRatingScalarFieldEnum]


  export const UnitRatingScalarFieldEnum: {
    id: 'id',
    reservationId: 'reservationId',
    unitId: 'unitId',
    patientId: 'patientId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UnitRatingScalarFieldEnum = (typeof UnitRatingScalarFieldEnum)[keyof typeof UnitRatingScalarFieldEnum]


  export const FacilityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FacilityScalarFieldEnum = (typeof FacilityScalarFieldEnum)[keyof typeof FacilityScalarFieldEnum]


  export const FacilityRatingScalarFieldEnum: {
    id: 'id',
    reservationId: 'reservationId',
    facilityId: 'facilityId',
    patientId: 'patientId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FacilityRatingScalarFieldEnum = (typeof FacilityRatingScalarFieldEnum)[keyof typeof FacilityRatingScalarFieldEnum]


  export const FacilityPhotoScalarFieldEnum: {
    id: 'id',
    facilityId: 'facilityId',
    photoUrl: 'photoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FacilityPhotoScalarFieldEnum = (typeof FacilityPhotoScalarFieldEnum)[keyof typeof FacilityPhotoScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    authorId: 'authorId',
    authorName: 'authorName',
    photoUrl: 'photoUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const GalleryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GalleryScalarFieldEnum = (typeof GalleryScalarFieldEnum)[keyof typeof GalleryScalarFieldEnum]


  export const GalleryPhotoScalarFieldEnum: {
    id: 'id',
    galleryId: 'galleryId',
    photoUrl: 'photoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GalleryPhotoScalarFieldEnum = (typeof GalleryPhotoScalarFieldEnum)[keyof typeof GalleryPhotoScalarFieldEnum]


  export const BannerScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl',
    order: 'order',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum]


  export const NurseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    speciality: 'speciality',
    description: 'description',
    photoUrl: 'photoUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NurseScalarFieldEnum = (typeof NurseScalarFieldEnum)[keyof typeof NurseScalarFieldEnum]


  export const NurseScheduleScalarFieldEnum: {
    id: 'id',
    nurseId: 'nurseId',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    quota: 'quota',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NurseScheduleScalarFieldEnum = (typeof NurseScheduleScalarFieldEnum)[keyof typeof NurseScheduleScalarFieldEnum]


  export const NurseRatingScalarFieldEnum: {
    id: 'id',
    reservationId: 'reservationId',
    nurseId: 'nurseId',
    patientId: 'patientId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NurseRatingScalarFieldEnum = (typeof NurseRatingScalarFieldEnum)[keyof typeof NurseRatingScalarFieldEnum]


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
    patientIdentity?: StringFilter<"EmergencyRequest"> | string
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
    patientIdentity?: SortOrder
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
    patientIdentity?: StringFilter<"EmergencyRequest"> | string
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
    patientIdentity?: SortOrder
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
    patientIdentity?: StringWithAggregatesFilter<"EmergencyRequest"> | string
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
    identity?: StringFilter<"AmbulanceStaff"> | string
    name?: StringFilter<"AmbulanceStaff"> | string
    phone?: StringFilter<"AmbulanceStaff"> | string
    email?: StringFilter<"AmbulanceStaff"> | string
    photo?: StringNullableFilter<"AmbulanceStaff"> | string | null
    createdAt?: DateTimeFilter<"AmbulanceStaff"> | Date | string
    updatedAt?: DateTimeFilter<"AmbulanceStaff"> | Date | string
    EmergencyRequest?: EmergencyRequestListRelationFilter
  }

  export type AmbulanceStaffOrderByWithRelationInput = {
    identity?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    photo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    EmergencyRequest?: EmergencyRequestOrderByRelationAggregateInput
  }

  export type AmbulanceStaffWhereUniqueInput = Prisma.AtLeast<{
    identity?: string
    AND?: AmbulanceStaffWhereInput | AmbulanceStaffWhereInput[]
    OR?: AmbulanceStaffWhereInput[]
    NOT?: AmbulanceStaffWhereInput | AmbulanceStaffWhereInput[]
    name?: StringFilter<"AmbulanceStaff"> | string
    phone?: StringFilter<"AmbulanceStaff"> | string
    email?: StringFilter<"AmbulanceStaff"> | string
    photo?: StringNullableFilter<"AmbulanceStaff"> | string | null
    createdAt?: DateTimeFilter<"AmbulanceStaff"> | Date | string
    updatedAt?: DateTimeFilter<"AmbulanceStaff"> | Date | string
    EmergencyRequest?: EmergencyRequestListRelationFilter
  }, "identity" | "identity">

  export type AmbulanceStaffOrderByWithAggregationInput = {
    identity?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    photo?: SortOrderInput | SortOrder
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
    identity?: StringWithAggregatesFilter<"AmbulanceStaff"> | string
    name?: StringWithAggregatesFilter<"AmbulanceStaff"> | string
    phone?: StringWithAggregatesFilter<"AmbulanceStaff"> | string
    email?: StringWithAggregatesFilter<"AmbulanceStaff"> | string
    photo?: StringNullableWithAggregatesFilter<"AmbulanceStaff"> | string | null
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

  export type DoctorRatingWhereInput = {
    AND?: DoctorRatingWhereInput | DoctorRatingWhereInput[]
    OR?: DoctorRatingWhereInput[]
    NOT?: DoctorRatingWhereInput | DoctorRatingWhereInput[]
    id?: StringFilter<"DoctorRating"> | string
    reservationId?: StringFilter<"DoctorRating"> | string
    doctorId?: IntFilter<"DoctorRating"> | number
    patientId?: StringFilter<"DoctorRating"> | string
    rating?: IntFilter<"DoctorRating"> | number
    comment?: StringNullableFilter<"DoctorRating"> | string | null
    createdAt?: DateTimeFilter<"DoctorRating"> | Date | string
    updatedAt?: DateTimeFilter<"DoctorRating"> | Date | string
  }

  export type DoctorRatingOrderByWithRelationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorRatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reservationId?: string
    AND?: DoctorRatingWhereInput | DoctorRatingWhereInput[]
    OR?: DoctorRatingWhereInput[]
    NOT?: DoctorRatingWhereInput | DoctorRatingWhereInput[]
    doctorId?: IntFilter<"DoctorRating"> | number
    patientId?: StringFilter<"DoctorRating"> | string
    rating?: IntFilter<"DoctorRating"> | number
    comment?: StringNullableFilter<"DoctorRating"> | string | null
    createdAt?: DateTimeFilter<"DoctorRating"> | Date | string
    updatedAt?: DateTimeFilter<"DoctorRating"> | Date | string
  }, "id" | "reservationId">

  export type DoctorRatingOrderByWithAggregationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DoctorRatingCountOrderByAggregateInput
    _avg?: DoctorRatingAvgOrderByAggregateInput
    _max?: DoctorRatingMaxOrderByAggregateInput
    _min?: DoctorRatingMinOrderByAggregateInput
    _sum?: DoctorRatingSumOrderByAggregateInput
  }

  export type DoctorRatingScalarWhereWithAggregatesInput = {
    AND?: DoctorRatingScalarWhereWithAggregatesInput | DoctorRatingScalarWhereWithAggregatesInput[]
    OR?: DoctorRatingScalarWhereWithAggregatesInput[]
    NOT?: DoctorRatingScalarWhereWithAggregatesInput | DoctorRatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoctorRating"> | string
    reservationId?: StringWithAggregatesFilter<"DoctorRating"> | string
    doctorId?: IntWithAggregatesFilter<"DoctorRating"> | number
    patientId?: StringWithAggregatesFilter<"DoctorRating"> | string
    rating?: IntWithAggregatesFilter<"DoctorRating"> | number
    comment?: StringNullableWithAggregatesFilter<"DoctorRating"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DoctorRating"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DoctorRating"> | Date | string
  }

  export type UnitRatingWhereInput = {
    AND?: UnitRatingWhereInput | UnitRatingWhereInput[]
    OR?: UnitRatingWhereInput[]
    NOT?: UnitRatingWhereInput | UnitRatingWhereInput[]
    id?: StringFilter<"UnitRating"> | string
    reservationId?: StringFilter<"UnitRating"> | string
    unitId?: IntFilter<"UnitRating"> | number
    patientId?: StringFilter<"UnitRating"> | string
    rating?: IntFilter<"UnitRating"> | number
    comment?: StringNullableFilter<"UnitRating"> | string | null
    createdAt?: DateTimeFilter<"UnitRating"> | Date | string
    updatedAt?: DateTimeFilter<"UnitRating"> | Date | string
  }

  export type UnitRatingOrderByWithRelationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    unitId?: SortOrder
    patientId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitRatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reservationId?: string
    AND?: UnitRatingWhereInput | UnitRatingWhereInput[]
    OR?: UnitRatingWhereInput[]
    NOT?: UnitRatingWhereInput | UnitRatingWhereInput[]
    unitId?: IntFilter<"UnitRating"> | number
    patientId?: StringFilter<"UnitRating"> | string
    rating?: IntFilter<"UnitRating"> | number
    comment?: StringNullableFilter<"UnitRating"> | string | null
    createdAt?: DateTimeFilter<"UnitRating"> | Date | string
    updatedAt?: DateTimeFilter<"UnitRating"> | Date | string
  }, "id" | "reservationId">

  export type UnitRatingOrderByWithAggregationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    unitId?: SortOrder
    patientId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UnitRatingCountOrderByAggregateInput
    _avg?: UnitRatingAvgOrderByAggregateInput
    _max?: UnitRatingMaxOrderByAggregateInput
    _min?: UnitRatingMinOrderByAggregateInput
    _sum?: UnitRatingSumOrderByAggregateInput
  }

  export type UnitRatingScalarWhereWithAggregatesInput = {
    AND?: UnitRatingScalarWhereWithAggregatesInput | UnitRatingScalarWhereWithAggregatesInput[]
    OR?: UnitRatingScalarWhereWithAggregatesInput[]
    NOT?: UnitRatingScalarWhereWithAggregatesInput | UnitRatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UnitRating"> | string
    reservationId?: StringWithAggregatesFilter<"UnitRating"> | string
    unitId?: IntWithAggregatesFilter<"UnitRating"> | number
    patientId?: StringWithAggregatesFilter<"UnitRating"> | string
    rating?: IntWithAggregatesFilter<"UnitRating"> | number
    comment?: StringNullableWithAggregatesFilter<"UnitRating"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UnitRating"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UnitRating"> | Date | string
  }

  export type FacilityWhereInput = {
    AND?: FacilityWhereInput | FacilityWhereInput[]
    OR?: FacilityWhereInput[]
    NOT?: FacilityWhereInput | FacilityWhereInput[]
    id?: StringFilter<"Facility"> | string
    name?: StringFilter<"Facility"> | string
    description?: StringNullableFilter<"Facility"> | string | null
    isActive?: BoolFilter<"Facility"> | boolean
    createdAt?: DateTimeFilter<"Facility"> | Date | string
    updatedAt?: DateTimeFilter<"Facility"> | Date | string
    photos?: FacilityPhotoListRelationFilter
    ratings?: FacilityRatingListRelationFilter
  }

  export type FacilityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photos?: FacilityPhotoOrderByRelationAggregateInput
    ratings?: FacilityRatingOrderByRelationAggregateInput
  }

  export type FacilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FacilityWhereInput | FacilityWhereInput[]
    OR?: FacilityWhereInput[]
    NOT?: FacilityWhereInput | FacilityWhereInput[]
    name?: StringFilter<"Facility"> | string
    description?: StringNullableFilter<"Facility"> | string | null
    isActive?: BoolFilter<"Facility"> | boolean
    createdAt?: DateTimeFilter<"Facility"> | Date | string
    updatedAt?: DateTimeFilter<"Facility"> | Date | string
    photos?: FacilityPhotoListRelationFilter
    ratings?: FacilityRatingListRelationFilter
  }, "id">

  export type FacilityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FacilityCountOrderByAggregateInput
    _max?: FacilityMaxOrderByAggregateInput
    _min?: FacilityMinOrderByAggregateInput
  }

  export type FacilityScalarWhereWithAggregatesInput = {
    AND?: FacilityScalarWhereWithAggregatesInput | FacilityScalarWhereWithAggregatesInput[]
    OR?: FacilityScalarWhereWithAggregatesInput[]
    NOT?: FacilityScalarWhereWithAggregatesInput | FacilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Facility"> | string
    name?: StringWithAggregatesFilter<"Facility"> | string
    description?: StringNullableWithAggregatesFilter<"Facility"> | string | null
    isActive?: BoolWithAggregatesFilter<"Facility"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Facility"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Facility"> | Date | string
  }

  export type FacilityRatingWhereInput = {
    AND?: FacilityRatingWhereInput | FacilityRatingWhereInput[]
    OR?: FacilityRatingWhereInput[]
    NOT?: FacilityRatingWhereInput | FacilityRatingWhereInput[]
    id?: StringFilter<"FacilityRating"> | string
    reservationId?: StringFilter<"FacilityRating"> | string
    facilityId?: StringFilter<"FacilityRating"> | string
    patientId?: StringFilter<"FacilityRating"> | string
    rating?: IntFilter<"FacilityRating"> | number
    comment?: StringNullableFilter<"FacilityRating"> | string | null
    createdAt?: DateTimeFilter<"FacilityRating"> | Date | string
    updatedAt?: DateTimeFilter<"FacilityRating"> | Date | string
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
  }

  export type FacilityRatingOrderByWithRelationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    facilityId?: SortOrder
    patientId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facility?: FacilityOrderByWithRelationInput
  }

  export type FacilityRatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reservationId_facilityId?: FacilityRatingReservationIdFacilityIdCompoundUniqueInput
    AND?: FacilityRatingWhereInput | FacilityRatingWhereInput[]
    OR?: FacilityRatingWhereInput[]
    NOT?: FacilityRatingWhereInput | FacilityRatingWhereInput[]
    reservationId?: StringFilter<"FacilityRating"> | string
    facilityId?: StringFilter<"FacilityRating"> | string
    patientId?: StringFilter<"FacilityRating"> | string
    rating?: IntFilter<"FacilityRating"> | number
    comment?: StringNullableFilter<"FacilityRating"> | string | null
    createdAt?: DateTimeFilter<"FacilityRating"> | Date | string
    updatedAt?: DateTimeFilter<"FacilityRating"> | Date | string
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
  }, "id" | "reservationId_facilityId">

  export type FacilityRatingOrderByWithAggregationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    facilityId?: SortOrder
    patientId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FacilityRatingCountOrderByAggregateInput
    _avg?: FacilityRatingAvgOrderByAggregateInput
    _max?: FacilityRatingMaxOrderByAggregateInput
    _min?: FacilityRatingMinOrderByAggregateInput
    _sum?: FacilityRatingSumOrderByAggregateInput
  }

  export type FacilityRatingScalarWhereWithAggregatesInput = {
    AND?: FacilityRatingScalarWhereWithAggregatesInput | FacilityRatingScalarWhereWithAggregatesInput[]
    OR?: FacilityRatingScalarWhereWithAggregatesInput[]
    NOT?: FacilityRatingScalarWhereWithAggregatesInput | FacilityRatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FacilityRating"> | string
    reservationId?: StringWithAggregatesFilter<"FacilityRating"> | string
    facilityId?: StringWithAggregatesFilter<"FacilityRating"> | string
    patientId?: StringWithAggregatesFilter<"FacilityRating"> | string
    rating?: IntWithAggregatesFilter<"FacilityRating"> | number
    comment?: StringNullableWithAggregatesFilter<"FacilityRating"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FacilityRating"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FacilityRating"> | Date | string
  }

  export type FacilityPhotoWhereInput = {
    AND?: FacilityPhotoWhereInput | FacilityPhotoWhereInput[]
    OR?: FacilityPhotoWhereInput[]
    NOT?: FacilityPhotoWhereInput | FacilityPhotoWhereInput[]
    id?: StringFilter<"FacilityPhoto"> | string
    facilityId?: StringFilter<"FacilityPhoto"> | string
    photoUrl?: StringFilter<"FacilityPhoto"> | string
    createdAt?: DateTimeFilter<"FacilityPhoto"> | Date | string
    updatedAt?: DateTimeFilter<"FacilityPhoto"> | Date | string
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
  }

  export type FacilityPhotoOrderByWithRelationInput = {
    id?: SortOrder
    facilityId?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    facility?: FacilityOrderByWithRelationInput
  }

  export type FacilityPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FacilityPhotoWhereInput | FacilityPhotoWhereInput[]
    OR?: FacilityPhotoWhereInput[]
    NOT?: FacilityPhotoWhereInput | FacilityPhotoWhereInput[]
    facilityId?: StringFilter<"FacilityPhoto"> | string
    photoUrl?: StringFilter<"FacilityPhoto"> | string
    createdAt?: DateTimeFilter<"FacilityPhoto"> | Date | string
    updatedAt?: DateTimeFilter<"FacilityPhoto"> | Date | string
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
  }, "id">

  export type FacilityPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    facilityId?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FacilityPhotoCountOrderByAggregateInput
    _max?: FacilityPhotoMaxOrderByAggregateInput
    _min?: FacilityPhotoMinOrderByAggregateInput
  }

  export type FacilityPhotoScalarWhereWithAggregatesInput = {
    AND?: FacilityPhotoScalarWhereWithAggregatesInput | FacilityPhotoScalarWhereWithAggregatesInput[]
    OR?: FacilityPhotoScalarWhereWithAggregatesInput[]
    NOT?: FacilityPhotoScalarWhereWithAggregatesInput | FacilityPhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FacilityPhoto"> | string
    facilityId?: StringWithAggregatesFilter<"FacilityPhoto"> | string
    photoUrl?: StringWithAggregatesFilter<"FacilityPhoto"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FacilityPhoto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FacilityPhoto"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    authorId?: StringFilter<"Post"> | string
    authorName?: StringFilter<"Post"> | string
    photoUrl?: StringNullableFilter<"Post"> | string | null
    isActive?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    authorId?: StringFilter<"Post"> | string
    authorName?: StringFilter<"Post"> | string
    photoUrl?: StringNullableFilter<"Post"> | string | null
    isActive?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    authorId?: StringWithAggregatesFilter<"Post"> | string
    authorName?: StringWithAggregatesFilter<"Post"> | string
    photoUrl?: StringNullableWithAggregatesFilter<"Post"> | string | null
    isActive?: BoolWithAggregatesFilter<"Post"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type GalleryWhereInput = {
    AND?: GalleryWhereInput | GalleryWhereInput[]
    OR?: GalleryWhereInput[]
    NOT?: GalleryWhereInput | GalleryWhereInput[]
    id?: StringFilter<"Gallery"> | string
    title?: StringFilter<"Gallery"> | string
    description?: StringNullableFilter<"Gallery"> | string | null
    isActive?: BoolFilter<"Gallery"> | boolean
    createdAt?: DateTimeFilter<"Gallery"> | Date | string
    updatedAt?: DateTimeFilter<"Gallery"> | Date | string
    photos?: GalleryPhotoListRelationFilter
  }

  export type GalleryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photos?: GalleryPhotoOrderByRelationAggregateInput
  }

  export type GalleryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GalleryWhereInput | GalleryWhereInput[]
    OR?: GalleryWhereInput[]
    NOT?: GalleryWhereInput | GalleryWhereInput[]
    title?: StringFilter<"Gallery"> | string
    description?: StringNullableFilter<"Gallery"> | string | null
    isActive?: BoolFilter<"Gallery"> | boolean
    createdAt?: DateTimeFilter<"Gallery"> | Date | string
    updatedAt?: DateTimeFilter<"Gallery"> | Date | string
    photos?: GalleryPhotoListRelationFilter
  }, "id">

  export type GalleryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GalleryCountOrderByAggregateInput
    _max?: GalleryMaxOrderByAggregateInput
    _min?: GalleryMinOrderByAggregateInput
  }

  export type GalleryScalarWhereWithAggregatesInput = {
    AND?: GalleryScalarWhereWithAggregatesInput | GalleryScalarWhereWithAggregatesInput[]
    OR?: GalleryScalarWhereWithAggregatesInput[]
    NOT?: GalleryScalarWhereWithAggregatesInput | GalleryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Gallery"> | string
    title?: StringWithAggregatesFilter<"Gallery"> | string
    description?: StringNullableWithAggregatesFilter<"Gallery"> | string | null
    isActive?: BoolWithAggregatesFilter<"Gallery"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Gallery"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Gallery"> | Date | string
  }

  export type GalleryPhotoWhereInput = {
    AND?: GalleryPhotoWhereInput | GalleryPhotoWhereInput[]
    OR?: GalleryPhotoWhereInput[]
    NOT?: GalleryPhotoWhereInput | GalleryPhotoWhereInput[]
    id?: StringFilter<"GalleryPhoto"> | string
    galleryId?: StringFilter<"GalleryPhoto"> | string
    photoUrl?: StringFilter<"GalleryPhoto"> | string
    createdAt?: DateTimeFilter<"GalleryPhoto"> | Date | string
    updatedAt?: DateTimeFilter<"GalleryPhoto"> | Date | string
    gallery?: XOR<GalleryScalarRelationFilter, GalleryWhereInput>
  }

  export type GalleryPhotoOrderByWithRelationInput = {
    id?: SortOrder
    galleryId?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gallery?: GalleryOrderByWithRelationInput
  }

  export type GalleryPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GalleryPhotoWhereInput | GalleryPhotoWhereInput[]
    OR?: GalleryPhotoWhereInput[]
    NOT?: GalleryPhotoWhereInput | GalleryPhotoWhereInput[]
    galleryId?: StringFilter<"GalleryPhoto"> | string
    photoUrl?: StringFilter<"GalleryPhoto"> | string
    createdAt?: DateTimeFilter<"GalleryPhoto"> | Date | string
    updatedAt?: DateTimeFilter<"GalleryPhoto"> | Date | string
    gallery?: XOR<GalleryScalarRelationFilter, GalleryWhereInput>
  }, "id">

  export type GalleryPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    galleryId?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GalleryPhotoCountOrderByAggregateInput
    _max?: GalleryPhotoMaxOrderByAggregateInput
    _min?: GalleryPhotoMinOrderByAggregateInput
  }

  export type GalleryPhotoScalarWhereWithAggregatesInput = {
    AND?: GalleryPhotoScalarWhereWithAggregatesInput | GalleryPhotoScalarWhereWithAggregatesInput[]
    OR?: GalleryPhotoScalarWhereWithAggregatesInput[]
    NOT?: GalleryPhotoScalarWhereWithAggregatesInput | GalleryPhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GalleryPhoto"> | string
    galleryId?: StringWithAggregatesFilter<"GalleryPhoto"> | string
    photoUrl?: StringWithAggregatesFilter<"GalleryPhoto"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GalleryPhoto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GalleryPhoto"> | Date | string
  }

  export type BannerWhereInput = {
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    id?: StringFilter<"Banner"> | string
    title?: StringFilter<"Banner"> | string
    description?: StringNullableFilter<"Banner"> | string | null
    imageUrl?: StringFilter<"Banner"> | string
    order?: IntFilter<"Banner"> | number
    isActive?: BoolFilter<"Banner"> | boolean
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeFilter<"Banner"> | Date | string
  }

  export type BannerOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    title?: StringFilter<"Banner"> | string
    description?: StringNullableFilter<"Banner"> | string | null
    imageUrl?: StringFilter<"Banner"> | string
    order?: IntFilter<"Banner"> | number
    isActive?: BoolFilter<"Banner"> | boolean
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeFilter<"Banner"> | Date | string
  }, "id">

  export type BannerOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BannerCountOrderByAggregateInput
    _avg?: BannerAvgOrderByAggregateInput
    _max?: BannerMaxOrderByAggregateInput
    _min?: BannerMinOrderByAggregateInput
    _sum?: BannerSumOrderByAggregateInput
  }

  export type BannerScalarWhereWithAggregatesInput = {
    AND?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    OR?: BannerScalarWhereWithAggregatesInput[]
    NOT?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Banner"> | string
    title?: StringWithAggregatesFilter<"Banner"> | string
    description?: StringNullableWithAggregatesFilter<"Banner"> | string | null
    imageUrl?: StringWithAggregatesFilter<"Banner"> | string
    order?: IntWithAggregatesFilter<"Banner"> | number
    isActive?: BoolWithAggregatesFilter<"Banner"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
  }

  export type NurseWhereInput = {
    AND?: NurseWhereInput | NurseWhereInput[]
    OR?: NurseWhereInput[]
    NOT?: NurseWhereInput | NurseWhereInput[]
    id?: StringFilter<"Nurse"> | string
    name?: StringFilter<"Nurse"> | string
    speciality?: StringNullableFilter<"Nurse"> | string | null
    description?: StringNullableFilter<"Nurse"> | string | null
    photoUrl?: StringNullableFilter<"Nurse"> | string | null
    isActive?: BoolFilter<"Nurse"> | boolean
    createdAt?: DateTimeFilter<"Nurse"> | Date | string
    updatedAt?: DateTimeFilter<"Nurse"> | Date | string
    schedules?: NurseScheduleListRelationFilter
    ratings?: NurseRatingListRelationFilter
  }

  export type NurseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    speciality?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schedules?: NurseScheduleOrderByRelationAggregateInput
    ratings?: NurseRatingOrderByRelationAggregateInput
  }

  export type NurseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NurseWhereInput | NurseWhereInput[]
    OR?: NurseWhereInput[]
    NOT?: NurseWhereInput | NurseWhereInput[]
    name?: StringFilter<"Nurse"> | string
    speciality?: StringNullableFilter<"Nurse"> | string | null
    description?: StringNullableFilter<"Nurse"> | string | null
    photoUrl?: StringNullableFilter<"Nurse"> | string | null
    isActive?: BoolFilter<"Nurse"> | boolean
    createdAt?: DateTimeFilter<"Nurse"> | Date | string
    updatedAt?: DateTimeFilter<"Nurse"> | Date | string
    schedules?: NurseScheduleListRelationFilter
    ratings?: NurseRatingListRelationFilter
  }, "id">

  export type NurseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    speciality?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NurseCountOrderByAggregateInput
    _max?: NurseMaxOrderByAggregateInput
    _min?: NurseMinOrderByAggregateInput
  }

  export type NurseScalarWhereWithAggregatesInput = {
    AND?: NurseScalarWhereWithAggregatesInput | NurseScalarWhereWithAggregatesInput[]
    OR?: NurseScalarWhereWithAggregatesInput[]
    NOT?: NurseScalarWhereWithAggregatesInput | NurseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Nurse"> | string
    name?: StringWithAggregatesFilter<"Nurse"> | string
    speciality?: StringNullableWithAggregatesFilter<"Nurse"> | string | null
    description?: StringNullableWithAggregatesFilter<"Nurse"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"Nurse"> | string | null
    isActive?: BoolWithAggregatesFilter<"Nurse"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Nurse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Nurse"> | Date | string
  }

  export type NurseScheduleWhereInput = {
    AND?: NurseScheduleWhereInput | NurseScheduleWhereInput[]
    OR?: NurseScheduleWhereInput[]
    NOT?: NurseScheduleWhereInput | NurseScheduleWhereInput[]
    id?: StringFilter<"NurseSchedule"> | string
    nurseId?: StringFilter<"NurseSchedule"> | string
    dayOfWeek?: IntFilter<"NurseSchedule"> | number
    startTime?: StringFilter<"NurseSchedule"> | string
    endTime?: StringFilter<"NurseSchedule"> | string
    quota?: IntFilter<"NurseSchedule"> | number
    isActive?: BoolFilter<"NurseSchedule"> | boolean
    createdAt?: DateTimeFilter<"NurseSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"NurseSchedule"> | Date | string
    nurse?: XOR<NurseScalarRelationFilter, NurseWhereInput>
  }

  export type NurseScheduleOrderByWithRelationInput = {
    id?: SortOrder
    nurseId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    quota?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nurse?: NurseOrderByWithRelationInput
  }

  export type NurseScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NurseScheduleWhereInput | NurseScheduleWhereInput[]
    OR?: NurseScheduleWhereInput[]
    NOT?: NurseScheduleWhereInput | NurseScheduleWhereInput[]
    nurseId?: StringFilter<"NurseSchedule"> | string
    dayOfWeek?: IntFilter<"NurseSchedule"> | number
    startTime?: StringFilter<"NurseSchedule"> | string
    endTime?: StringFilter<"NurseSchedule"> | string
    quota?: IntFilter<"NurseSchedule"> | number
    isActive?: BoolFilter<"NurseSchedule"> | boolean
    createdAt?: DateTimeFilter<"NurseSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"NurseSchedule"> | Date | string
    nurse?: XOR<NurseScalarRelationFilter, NurseWhereInput>
  }, "id">

  export type NurseScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    nurseId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    quota?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NurseScheduleCountOrderByAggregateInput
    _avg?: NurseScheduleAvgOrderByAggregateInput
    _max?: NurseScheduleMaxOrderByAggregateInput
    _min?: NurseScheduleMinOrderByAggregateInput
    _sum?: NurseScheduleSumOrderByAggregateInput
  }

  export type NurseScheduleScalarWhereWithAggregatesInput = {
    AND?: NurseScheduleScalarWhereWithAggregatesInput | NurseScheduleScalarWhereWithAggregatesInput[]
    OR?: NurseScheduleScalarWhereWithAggregatesInput[]
    NOT?: NurseScheduleScalarWhereWithAggregatesInput | NurseScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NurseSchedule"> | string
    nurseId?: StringWithAggregatesFilter<"NurseSchedule"> | string
    dayOfWeek?: IntWithAggregatesFilter<"NurseSchedule"> | number
    startTime?: StringWithAggregatesFilter<"NurseSchedule"> | string
    endTime?: StringWithAggregatesFilter<"NurseSchedule"> | string
    quota?: IntWithAggregatesFilter<"NurseSchedule"> | number
    isActive?: BoolWithAggregatesFilter<"NurseSchedule"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"NurseSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NurseSchedule"> | Date | string
  }

  export type NurseRatingWhereInput = {
    AND?: NurseRatingWhereInput | NurseRatingWhereInput[]
    OR?: NurseRatingWhereInput[]
    NOT?: NurseRatingWhereInput | NurseRatingWhereInput[]
    id?: StringFilter<"NurseRating"> | string
    reservationId?: StringFilter<"NurseRating"> | string
    nurseId?: StringFilter<"NurseRating"> | string
    patientId?: StringFilter<"NurseRating"> | string
    rating?: IntFilter<"NurseRating"> | number
    comment?: StringNullableFilter<"NurseRating"> | string | null
    createdAt?: DateTimeFilter<"NurseRating"> | Date | string
    updatedAt?: DateTimeFilter<"NurseRating"> | Date | string
    nurse?: XOR<NurseScalarRelationFilter, NurseWhereInput>
  }

  export type NurseRatingOrderByWithRelationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    nurseId?: SortOrder
    patientId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nurse?: NurseOrderByWithRelationInput
  }

  export type NurseRatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reservationId_nurseId?: NurseRatingReservationIdNurseIdCompoundUniqueInput
    AND?: NurseRatingWhereInput | NurseRatingWhereInput[]
    OR?: NurseRatingWhereInput[]
    NOT?: NurseRatingWhereInput | NurseRatingWhereInput[]
    reservationId?: StringFilter<"NurseRating"> | string
    nurseId?: StringFilter<"NurseRating"> | string
    patientId?: StringFilter<"NurseRating"> | string
    rating?: IntFilter<"NurseRating"> | number
    comment?: StringNullableFilter<"NurseRating"> | string | null
    createdAt?: DateTimeFilter<"NurseRating"> | Date | string
    updatedAt?: DateTimeFilter<"NurseRating"> | Date | string
    nurse?: XOR<NurseScalarRelationFilter, NurseWhereInput>
  }, "id" | "reservationId_nurseId">

  export type NurseRatingOrderByWithAggregationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    nurseId?: SortOrder
    patientId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NurseRatingCountOrderByAggregateInput
    _avg?: NurseRatingAvgOrderByAggregateInput
    _max?: NurseRatingMaxOrderByAggregateInput
    _min?: NurseRatingMinOrderByAggregateInput
    _sum?: NurseRatingSumOrderByAggregateInput
  }

  export type NurseRatingScalarWhereWithAggregatesInput = {
    AND?: NurseRatingScalarWhereWithAggregatesInput | NurseRatingScalarWhereWithAggregatesInput[]
    OR?: NurseRatingScalarWhereWithAggregatesInput[]
    NOT?: NurseRatingScalarWhereWithAggregatesInput | NurseRatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NurseRating"> | string
    reservationId?: StringWithAggregatesFilter<"NurseRating"> | string
    nurseId?: StringWithAggregatesFilter<"NurseRating"> | string
    patientId?: StringWithAggregatesFilter<"NurseRating"> | string
    rating?: IntWithAggregatesFilter<"NurseRating"> | number
    comment?: StringNullableWithAggregatesFilter<"NurseRating"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NurseRating"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NurseRating"> | Date | string
  }

  export type EmergencyRequestCreateInput = {
    id?: string
    patientIdentity: string
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
    patientIdentity: string
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
    patientIdentity?: StringFieldUpdateOperationsInput | string
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
    patientIdentity?: StringFieldUpdateOperationsInput | string
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
    patientIdentity: string
    location: string
    note?: string | null
    status?: $Enums.EmergencyStatus
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmergencyRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientIdentity?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientIdentity?: StringFieldUpdateOperationsInput | string
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
    identity: string
    name: string
    phone: string
    email: string
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    EmergencyRequest?: EmergencyRequestCreateNestedManyWithoutAssignedToInput
  }

  export type AmbulanceStaffUncheckedCreateInput = {
    identity: string
    name: string
    phone: string
    email: string
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    EmergencyRequest?: EmergencyRequestUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type AmbulanceStaffUpdateInput = {
    identity?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmergencyRequest?: EmergencyRequestUpdateManyWithoutAssignedToNestedInput
  }

  export type AmbulanceStaffUncheckedUpdateInput = {
    identity?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmergencyRequest?: EmergencyRequestUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type AmbulanceStaffCreateManyInput = {
    identity: string
    name: string
    phone: string
    email: string
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AmbulanceStaffUpdateManyMutationInput = {
    identity?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmbulanceStaffUncheckedUpdateManyInput = {
    identity?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type DoctorRatingCreateInput = {
    id?: string
    reservationId: string
    doctorId: number
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorRatingUncheckedCreateInput = {
    id?: string
    reservationId: string
    doctorId: number
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorRatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorRatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorRatingCreateManyInput = {
    id?: string
    reservationId: string
    doctorId: number
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorRatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorRatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitRatingCreateInput = {
    id?: string
    reservationId: string
    unitId: number
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitRatingUncheckedCreateInput = {
    id?: string
    reservationId: string
    unitId: number
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitRatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    unitId?: IntFieldUpdateOperationsInput | number
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitRatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    unitId?: IntFieldUpdateOperationsInput | number
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitRatingCreateManyInput = {
    id?: string
    reservationId: string
    unitId: number
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitRatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    unitId?: IntFieldUpdateOperationsInput | number
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitRatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    unitId?: IntFieldUpdateOperationsInput | number
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityCreateInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: FacilityPhotoCreateNestedManyWithoutFacilityInput
    ratings?: FacilityRatingCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: FacilityPhotoUncheckedCreateNestedManyWithoutFacilityInput
    ratings?: FacilityRatingUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: FacilityPhotoUpdateManyWithoutFacilityNestedInput
    ratings?: FacilityRatingUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: FacilityPhotoUncheckedUpdateManyWithoutFacilityNestedInput
    ratings?: FacilityRatingUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityRatingCreateInput = {
    id?: string
    reservationId: string
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    facility: FacilityCreateNestedOneWithoutRatingsInput
  }

  export type FacilityRatingUncheckedCreateInput = {
    id?: string
    reservationId: string
    facilityId: string
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacilityRatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility?: FacilityUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type FacilityRatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    facilityId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityRatingCreateManyInput = {
    id?: string
    reservationId: string
    facilityId: string
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacilityRatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityRatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    facilityId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityPhotoCreateInput = {
    id?: string
    photoUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facility: FacilityCreateNestedOneWithoutPhotosInput
  }

  export type FacilityPhotoUncheckedCreateInput = {
    id?: string
    facilityId: string
    photoUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacilityPhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility?: FacilityUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type FacilityPhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    facilityId?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityPhotoCreateManyInput = {
    id?: string
    facilityId: string
    photoUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacilityPhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityPhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    facilityId?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    title: string
    content: string
    authorId: string
    authorName: string
    photoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    authorId: string
    authorName: string
    photoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyInput = {
    id?: string
    title: string
    content: string
    authorId: string
    authorName: string
    photoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryCreateInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: GalleryPhotoCreateNestedManyWithoutGalleryInput
  }

  export type GalleryUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: GalleryPhotoUncheckedCreateNestedManyWithoutGalleryInput
  }

  export type GalleryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: GalleryPhotoUpdateManyWithoutGalleryNestedInput
  }

  export type GalleryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: GalleryPhotoUncheckedUpdateManyWithoutGalleryNestedInput
  }

  export type GalleryCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryPhotoCreateInput = {
    id?: string
    photoUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gallery: GalleryCreateNestedOneWithoutPhotosInput
  }

  export type GalleryPhotoUncheckedCreateInput = {
    id?: string
    galleryId: string
    photoUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryPhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gallery?: GalleryUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type GalleryPhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    galleryId?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryPhotoCreateManyInput = {
    id?: string
    galleryId: string
    photoUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryPhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryPhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    galleryId?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerCreateInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl: string
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl: string
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl: string
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NurseCreateInput = {
    id?: string
    name: string
    speciality?: string | null
    description?: string | null
    photoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: NurseScheduleCreateNestedManyWithoutNurseInput
    ratings?: NurseRatingCreateNestedManyWithoutNurseInput
  }

  export type NurseUncheckedCreateInput = {
    id?: string
    name: string
    speciality?: string | null
    description?: string | null
    photoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: NurseScheduleUncheckedCreateNestedManyWithoutNurseInput
    ratings?: NurseRatingUncheckedCreateNestedManyWithoutNurseInput
  }

  export type NurseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    speciality?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: NurseScheduleUpdateManyWithoutNurseNestedInput
    ratings?: NurseRatingUpdateManyWithoutNurseNestedInput
  }

  export type NurseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    speciality?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: NurseScheduleUncheckedUpdateManyWithoutNurseNestedInput
    ratings?: NurseRatingUncheckedUpdateManyWithoutNurseNestedInput
  }

  export type NurseCreateManyInput = {
    id?: string
    name: string
    speciality?: string | null
    description?: string | null
    photoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NurseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    speciality?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NurseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    speciality?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NurseScheduleCreateInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    quota?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    nurse: NurseCreateNestedOneWithoutSchedulesInput
  }

  export type NurseScheduleUncheckedCreateInput = {
    id?: string
    nurseId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    quota?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NurseScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nurse?: NurseUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type NurseScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nurseId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NurseScheduleCreateManyInput = {
    id?: string
    nurseId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    quota?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NurseScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NurseScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nurseId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NurseRatingCreateInput = {
    id?: string
    reservationId: string
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nurse: NurseCreateNestedOneWithoutRatingsInput
  }

  export type NurseRatingUncheckedCreateInput = {
    id?: string
    reservationId: string
    nurseId: string
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NurseRatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nurse?: NurseUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type NurseRatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    nurseId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NurseRatingCreateManyInput = {
    id?: string
    reservationId: string
    nurseId: string
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NurseRatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NurseRatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    nurseId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
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
    patientIdentity?: SortOrder
    location?: SortOrder
    note?: SortOrder
    status?: SortOrder
    assignedToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmergencyRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    patientIdentity?: SortOrder
    location?: SortOrder
    note?: SortOrder
    status?: SortOrder
    assignedToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmergencyRequestMinOrderByAggregateInput = {
    id?: SortOrder
    patientIdentity?: SortOrder
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
    identity?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AmbulanceStaffMaxOrderByAggregateInput = {
    identity?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AmbulanceStaffMinOrderByAggregateInput = {
    identity?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    photo?: SortOrder
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

  export type DoctorRatingCountOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorRatingAvgOrderByAggregateInput = {
    doctorId?: SortOrder
    rating?: SortOrder
  }

  export type DoctorRatingMaxOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorRatingMinOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorRatingSumOrderByAggregateInput = {
    doctorId?: SortOrder
    rating?: SortOrder
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

  export type UnitRatingCountOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    unitId?: SortOrder
    patientId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitRatingAvgOrderByAggregateInput = {
    unitId?: SortOrder
    rating?: SortOrder
  }

  export type UnitRatingMaxOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    unitId?: SortOrder
    patientId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitRatingMinOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    unitId?: SortOrder
    patientId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitRatingSumOrderByAggregateInput = {
    unitId?: SortOrder
    rating?: SortOrder
  }

  export type FacilityPhotoListRelationFilter = {
    every?: FacilityPhotoWhereInput
    some?: FacilityPhotoWhereInput
    none?: FacilityPhotoWhereInput
  }

  export type FacilityRatingListRelationFilter = {
    every?: FacilityRatingWhereInput
    some?: FacilityRatingWhereInput
    none?: FacilityRatingWhereInput
  }

  export type FacilityPhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacilityRatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacilityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacilityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacilityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacilityScalarRelationFilter = {
    is?: FacilityWhereInput
    isNot?: FacilityWhereInput
  }

  export type FacilityRatingReservationIdFacilityIdCompoundUniqueInput = {
    reservationId: string
    facilityId: string
  }

  export type FacilityRatingCountOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    facilityId?: SortOrder
    patientId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacilityRatingAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type FacilityRatingMaxOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    facilityId?: SortOrder
    patientId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacilityRatingMinOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    facilityId?: SortOrder
    patientId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacilityRatingSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type FacilityPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    facilityId?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacilityPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    facilityId?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacilityPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    facilityId?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    photoUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    photoUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    photoUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryPhotoListRelationFilter = {
    every?: GalleryPhotoWhereInput
    some?: GalleryPhotoWhereInput
    none?: GalleryPhotoWhereInput
  }

  export type GalleryPhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GalleryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryScalarRelationFilter = {
    is?: GalleryWhereInput
    isNot?: GalleryWhereInput
  }

  export type GalleryPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    galleryId?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    galleryId?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    galleryId?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type BannerMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type NurseScheduleListRelationFilter = {
    every?: NurseScheduleWhereInput
    some?: NurseScheduleWhereInput
    none?: NurseScheduleWhereInput
  }

  export type NurseRatingListRelationFilter = {
    every?: NurseRatingWhereInput
    some?: NurseRatingWhereInput
    none?: NurseRatingWhereInput
  }

  export type NurseScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NurseRatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NurseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    speciality?: SortOrder
    description?: SortOrder
    photoUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NurseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    speciality?: SortOrder
    description?: SortOrder
    photoUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NurseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    speciality?: SortOrder
    description?: SortOrder
    photoUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NurseScalarRelationFilter = {
    is?: NurseWhereInput
    isNot?: NurseWhereInput
  }

  export type NurseScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    nurseId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    quota?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NurseScheduleAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
    quota?: SortOrder
  }

  export type NurseScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    nurseId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    quota?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NurseScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    nurseId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    quota?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NurseScheduleSumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
    quota?: SortOrder
  }

  export type NurseRatingReservationIdNurseIdCompoundUniqueInput = {
    reservationId: string
    nurseId: string
  }

  export type NurseRatingCountOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    nurseId?: SortOrder
    patientId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NurseRatingAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type NurseRatingMaxOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    nurseId?: SortOrder
    patientId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NurseRatingMinOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    nurseId?: SortOrder
    patientId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NurseRatingSumOrderByAggregateInput = {
    rating?: SortOrder
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FacilityPhotoCreateNestedManyWithoutFacilityInput = {
    create?: XOR<FacilityPhotoCreateWithoutFacilityInput, FacilityPhotoUncheckedCreateWithoutFacilityInput> | FacilityPhotoCreateWithoutFacilityInput[] | FacilityPhotoUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: FacilityPhotoCreateOrConnectWithoutFacilityInput | FacilityPhotoCreateOrConnectWithoutFacilityInput[]
    createMany?: FacilityPhotoCreateManyFacilityInputEnvelope
    connect?: FacilityPhotoWhereUniqueInput | FacilityPhotoWhereUniqueInput[]
  }

  export type FacilityRatingCreateNestedManyWithoutFacilityInput = {
    create?: XOR<FacilityRatingCreateWithoutFacilityInput, FacilityRatingUncheckedCreateWithoutFacilityInput> | FacilityRatingCreateWithoutFacilityInput[] | FacilityRatingUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: FacilityRatingCreateOrConnectWithoutFacilityInput | FacilityRatingCreateOrConnectWithoutFacilityInput[]
    createMany?: FacilityRatingCreateManyFacilityInputEnvelope
    connect?: FacilityRatingWhereUniqueInput | FacilityRatingWhereUniqueInput[]
  }

  export type FacilityPhotoUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<FacilityPhotoCreateWithoutFacilityInput, FacilityPhotoUncheckedCreateWithoutFacilityInput> | FacilityPhotoCreateWithoutFacilityInput[] | FacilityPhotoUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: FacilityPhotoCreateOrConnectWithoutFacilityInput | FacilityPhotoCreateOrConnectWithoutFacilityInput[]
    createMany?: FacilityPhotoCreateManyFacilityInputEnvelope
    connect?: FacilityPhotoWhereUniqueInput | FacilityPhotoWhereUniqueInput[]
  }

  export type FacilityRatingUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<FacilityRatingCreateWithoutFacilityInput, FacilityRatingUncheckedCreateWithoutFacilityInput> | FacilityRatingCreateWithoutFacilityInput[] | FacilityRatingUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: FacilityRatingCreateOrConnectWithoutFacilityInput | FacilityRatingCreateOrConnectWithoutFacilityInput[]
    createMany?: FacilityRatingCreateManyFacilityInputEnvelope
    connect?: FacilityRatingWhereUniqueInput | FacilityRatingWhereUniqueInput[]
  }

  export type FacilityPhotoUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<FacilityPhotoCreateWithoutFacilityInput, FacilityPhotoUncheckedCreateWithoutFacilityInput> | FacilityPhotoCreateWithoutFacilityInput[] | FacilityPhotoUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: FacilityPhotoCreateOrConnectWithoutFacilityInput | FacilityPhotoCreateOrConnectWithoutFacilityInput[]
    upsert?: FacilityPhotoUpsertWithWhereUniqueWithoutFacilityInput | FacilityPhotoUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: FacilityPhotoCreateManyFacilityInputEnvelope
    set?: FacilityPhotoWhereUniqueInput | FacilityPhotoWhereUniqueInput[]
    disconnect?: FacilityPhotoWhereUniqueInput | FacilityPhotoWhereUniqueInput[]
    delete?: FacilityPhotoWhereUniqueInput | FacilityPhotoWhereUniqueInput[]
    connect?: FacilityPhotoWhereUniqueInput | FacilityPhotoWhereUniqueInput[]
    update?: FacilityPhotoUpdateWithWhereUniqueWithoutFacilityInput | FacilityPhotoUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: FacilityPhotoUpdateManyWithWhereWithoutFacilityInput | FacilityPhotoUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: FacilityPhotoScalarWhereInput | FacilityPhotoScalarWhereInput[]
  }

  export type FacilityRatingUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<FacilityRatingCreateWithoutFacilityInput, FacilityRatingUncheckedCreateWithoutFacilityInput> | FacilityRatingCreateWithoutFacilityInput[] | FacilityRatingUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: FacilityRatingCreateOrConnectWithoutFacilityInput | FacilityRatingCreateOrConnectWithoutFacilityInput[]
    upsert?: FacilityRatingUpsertWithWhereUniqueWithoutFacilityInput | FacilityRatingUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: FacilityRatingCreateManyFacilityInputEnvelope
    set?: FacilityRatingWhereUniqueInput | FacilityRatingWhereUniqueInput[]
    disconnect?: FacilityRatingWhereUniqueInput | FacilityRatingWhereUniqueInput[]
    delete?: FacilityRatingWhereUniqueInput | FacilityRatingWhereUniqueInput[]
    connect?: FacilityRatingWhereUniqueInput | FacilityRatingWhereUniqueInput[]
    update?: FacilityRatingUpdateWithWhereUniqueWithoutFacilityInput | FacilityRatingUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: FacilityRatingUpdateManyWithWhereWithoutFacilityInput | FacilityRatingUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: FacilityRatingScalarWhereInput | FacilityRatingScalarWhereInput[]
  }

  export type FacilityPhotoUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<FacilityPhotoCreateWithoutFacilityInput, FacilityPhotoUncheckedCreateWithoutFacilityInput> | FacilityPhotoCreateWithoutFacilityInput[] | FacilityPhotoUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: FacilityPhotoCreateOrConnectWithoutFacilityInput | FacilityPhotoCreateOrConnectWithoutFacilityInput[]
    upsert?: FacilityPhotoUpsertWithWhereUniqueWithoutFacilityInput | FacilityPhotoUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: FacilityPhotoCreateManyFacilityInputEnvelope
    set?: FacilityPhotoWhereUniqueInput | FacilityPhotoWhereUniqueInput[]
    disconnect?: FacilityPhotoWhereUniqueInput | FacilityPhotoWhereUniqueInput[]
    delete?: FacilityPhotoWhereUniqueInput | FacilityPhotoWhereUniqueInput[]
    connect?: FacilityPhotoWhereUniqueInput | FacilityPhotoWhereUniqueInput[]
    update?: FacilityPhotoUpdateWithWhereUniqueWithoutFacilityInput | FacilityPhotoUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: FacilityPhotoUpdateManyWithWhereWithoutFacilityInput | FacilityPhotoUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: FacilityPhotoScalarWhereInput | FacilityPhotoScalarWhereInput[]
  }

  export type FacilityRatingUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<FacilityRatingCreateWithoutFacilityInput, FacilityRatingUncheckedCreateWithoutFacilityInput> | FacilityRatingCreateWithoutFacilityInput[] | FacilityRatingUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: FacilityRatingCreateOrConnectWithoutFacilityInput | FacilityRatingCreateOrConnectWithoutFacilityInput[]
    upsert?: FacilityRatingUpsertWithWhereUniqueWithoutFacilityInput | FacilityRatingUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: FacilityRatingCreateManyFacilityInputEnvelope
    set?: FacilityRatingWhereUniqueInput | FacilityRatingWhereUniqueInput[]
    disconnect?: FacilityRatingWhereUniqueInput | FacilityRatingWhereUniqueInput[]
    delete?: FacilityRatingWhereUniqueInput | FacilityRatingWhereUniqueInput[]
    connect?: FacilityRatingWhereUniqueInput | FacilityRatingWhereUniqueInput[]
    update?: FacilityRatingUpdateWithWhereUniqueWithoutFacilityInput | FacilityRatingUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: FacilityRatingUpdateManyWithWhereWithoutFacilityInput | FacilityRatingUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: FacilityRatingScalarWhereInput | FacilityRatingScalarWhereInput[]
  }

  export type FacilityCreateNestedOneWithoutRatingsInput = {
    create?: XOR<FacilityCreateWithoutRatingsInput, FacilityUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutRatingsInput
    connect?: FacilityWhereUniqueInput
  }

  export type FacilityUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<FacilityCreateWithoutRatingsInput, FacilityUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutRatingsInput
    upsert?: FacilityUpsertWithoutRatingsInput
    connect?: FacilityWhereUniqueInput
    update?: XOR<XOR<FacilityUpdateToOneWithWhereWithoutRatingsInput, FacilityUpdateWithoutRatingsInput>, FacilityUncheckedUpdateWithoutRatingsInput>
  }

  export type FacilityCreateNestedOneWithoutPhotosInput = {
    create?: XOR<FacilityCreateWithoutPhotosInput, FacilityUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutPhotosInput
    connect?: FacilityWhereUniqueInput
  }

  export type FacilityUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<FacilityCreateWithoutPhotosInput, FacilityUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutPhotosInput
    upsert?: FacilityUpsertWithoutPhotosInput
    connect?: FacilityWhereUniqueInput
    update?: XOR<XOR<FacilityUpdateToOneWithWhereWithoutPhotosInput, FacilityUpdateWithoutPhotosInput>, FacilityUncheckedUpdateWithoutPhotosInput>
  }

  export type GalleryPhotoCreateNestedManyWithoutGalleryInput = {
    create?: XOR<GalleryPhotoCreateWithoutGalleryInput, GalleryPhotoUncheckedCreateWithoutGalleryInput> | GalleryPhotoCreateWithoutGalleryInput[] | GalleryPhotoUncheckedCreateWithoutGalleryInput[]
    connectOrCreate?: GalleryPhotoCreateOrConnectWithoutGalleryInput | GalleryPhotoCreateOrConnectWithoutGalleryInput[]
    createMany?: GalleryPhotoCreateManyGalleryInputEnvelope
    connect?: GalleryPhotoWhereUniqueInput | GalleryPhotoWhereUniqueInput[]
  }

  export type GalleryPhotoUncheckedCreateNestedManyWithoutGalleryInput = {
    create?: XOR<GalleryPhotoCreateWithoutGalleryInput, GalleryPhotoUncheckedCreateWithoutGalleryInput> | GalleryPhotoCreateWithoutGalleryInput[] | GalleryPhotoUncheckedCreateWithoutGalleryInput[]
    connectOrCreate?: GalleryPhotoCreateOrConnectWithoutGalleryInput | GalleryPhotoCreateOrConnectWithoutGalleryInput[]
    createMany?: GalleryPhotoCreateManyGalleryInputEnvelope
    connect?: GalleryPhotoWhereUniqueInput | GalleryPhotoWhereUniqueInput[]
  }

  export type GalleryPhotoUpdateManyWithoutGalleryNestedInput = {
    create?: XOR<GalleryPhotoCreateWithoutGalleryInput, GalleryPhotoUncheckedCreateWithoutGalleryInput> | GalleryPhotoCreateWithoutGalleryInput[] | GalleryPhotoUncheckedCreateWithoutGalleryInput[]
    connectOrCreate?: GalleryPhotoCreateOrConnectWithoutGalleryInput | GalleryPhotoCreateOrConnectWithoutGalleryInput[]
    upsert?: GalleryPhotoUpsertWithWhereUniqueWithoutGalleryInput | GalleryPhotoUpsertWithWhereUniqueWithoutGalleryInput[]
    createMany?: GalleryPhotoCreateManyGalleryInputEnvelope
    set?: GalleryPhotoWhereUniqueInput | GalleryPhotoWhereUniqueInput[]
    disconnect?: GalleryPhotoWhereUniqueInput | GalleryPhotoWhereUniqueInput[]
    delete?: GalleryPhotoWhereUniqueInput | GalleryPhotoWhereUniqueInput[]
    connect?: GalleryPhotoWhereUniqueInput | GalleryPhotoWhereUniqueInput[]
    update?: GalleryPhotoUpdateWithWhereUniqueWithoutGalleryInput | GalleryPhotoUpdateWithWhereUniqueWithoutGalleryInput[]
    updateMany?: GalleryPhotoUpdateManyWithWhereWithoutGalleryInput | GalleryPhotoUpdateManyWithWhereWithoutGalleryInput[]
    deleteMany?: GalleryPhotoScalarWhereInput | GalleryPhotoScalarWhereInput[]
  }

  export type GalleryPhotoUncheckedUpdateManyWithoutGalleryNestedInput = {
    create?: XOR<GalleryPhotoCreateWithoutGalleryInput, GalleryPhotoUncheckedCreateWithoutGalleryInput> | GalleryPhotoCreateWithoutGalleryInput[] | GalleryPhotoUncheckedCreateWithoutGalleryInput[]
    connectOrCreate?: GalleryPhotoCreateOrConnectWithoutGalleryInput | GalleryPhotoCreateOrConnectWithoutGalleryInput[]
    upsert?: GalleryPhotoUpsertWithWhereUniqueWithoutGalleryInput | GalleryPhotoUpsertWithWhereUniqueWithoutGalleryInput[]
    createMany?: GalleryPhotoCreateManyGalleryInputEnvelope
    set?: GalleryPhotoWhereUniqueInput | GalleryPhotoWhereUniqueInput[]
    disconnect?: GalleryPhotoWhereUniqueInput | GalleryPhotoWhereUniqueInput[]
    delete?: GalleryPhotoWhereUniqueInput | GalleryPhotoWhereUniqueInput[]
    connect?: GalleryPhotoWhereUniqueInput | GalleryPhotoWhereUniqueInput[]
    update?: GalleryPhotoUpdateWithWhereUniqueWithoutGalleryInput | GalleryPhotoUpdateWithWhereUniqueWithoutGalleryInput[]
    updateMany?: GalleryPhotoUpdateManyWithWhereWithoutGalleryInput | GalleryPhotoUpdateManyWithWhereWithoutGalleryInput[]
    deleteMany?: GalleryPhotoScalarWhereInput | GalleryPhotoScalarWhereInput[]
  }

  export type GalleryCreateNestedOneWithoutPhotosInput = {
    create?: XOR<GalleryCreateWithoutPhotosInput, GalleryUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: GalleryCreateOrConnectWithoutPhotosInput
    connect?: GalleryWhereUniqueInput
  }

  export type GalleryUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<GalleryCreateWithoutPhotosInput, GalleryUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: GalleryCreateOrConnectWithoutPhotosInput
    upsert?: GalleryUpsertWithoutPhotosInput
    connect?: GalleryWhereUniqueInput
    update?: XOR<XOR<GalleryUpdateToOneWithWhereWithoutPhotosInput, GalleryUpdateWithoutPhotosInput>, GalleryUncheckedUpdateWithoutPhotosInput>
  }

  export type NurseScheduleCreateNestedManyWithoutNurseInput = {
    create?: XOR<NurseScheduleCreateWithoutNurseInput, NurseScheduleUncheckedCreateWithoutNurseInput> | NurseScheduleCreateWithoutNurseInput[] | NurseScheduleUncheckedCreateWithoutNurseInput[]
    connectOrCreate?: NurseScheduleCreateOrConnectWithoutNurseInput | NurseScheduleCreateOrConnectWithoutNurseInput[]
    createMany?: NurseScheduleCreateManyNurseInputEnvelope
    connect?: NurseScheduleWhereUniqueInput | NurseScheduleWhereUniqueInput[]
  }

  export type NurseRatingCreateNestedManyWithoutNurseInput = {
    create?: XOR<NurseRatingCreateWithoutNurseInput, NurseRatingUncheckedCreateWithoutNurseInput> | NurseRatingCreateWithoutNurseInput[] | NurseRatingUncheckedCreateWithoutNurseInput[]
    connectOrCreate?: NurseRatingCreateOrConnectWithoutNurseInput | NurseRatingCreateOrConnectWithoutNurseInput[]
    createMany?: NurseRatingCreateManyNurseInputEnvelope
    connect?: NurseRatingWhereUniqueInput | NurseRatingWhereUniqueInput[]
  }

  export type NurseScheduleUncheckedCreateNestedManyWithoutNurseInput = {
    create?: XOR<NurseScheduleCreateWithoutNurseInput, NurseScheduleUncheckedCreateWithoutNurseInput> | NurseScheduleCreateWithoutNurseInput[] | NurseScheduleUncheckedCreateWithoutNurseInput[]
    connectOrCreate?: NurseScheduleCreateOrConnectWithoutNurseInput | NurseScheduleCreateOrConnectWithoutNurseInput[]
    createMany?: NurseScheduleCreateManyNurseInputEnvelope
    connect?: NurseScheduleWhereUniqueInput | NurseScheduleWhereUniqueInput[]
  }

  export type NurseRatingUncheckedCreateNestedManyWithoutNurseInput = {
    create?: XOR<NurseRatingCreateWithoutNurseInput, NurseRatingUncheckedCreateWithoutNurseInput> | NurseRatingCreateWithoutNurseInput[] | NurseRatingUncheckedCreateWithoutNurseInput[]
    connectOrCreate?: NurseRatingCreateOrConnectWithoutNurseInput | NurseRatingCreateOrConnectWithoutNurseInput[]
    createMany?: NurseRatingCreateManyNurseInputEnvelope
    connect?: NurseRatingWhereUniqueInput | NurseRatingWhereUniqueInput[]
  }

  export type NurseScheduleUpdateManyWithoutNurseNestedInput = {
    create?: XOR<NurseScheduleCreateWithoutNurseInput, NurseScheduleUncheckedCreateWithoutNurseInput> | NurseScheduleCreateWithoutNurseInput[] | NurseScheduleUncheckedCreateWithoutNurseInput[]
    connectOrCreate?: NurseScheduleCreateOrConnectWithoutNurseInput | NurseScheduleCreateOrConnectWithoutNurseInput[]
    upsert?: NurseScheduleUpsertWithWhereUniqueWithoutNurseInput | NurseScheduleUpsertWithWhereUniqueWithoutNurseInput[]
    createMany?: NurseScheduleCreateManyNurseInputEnvelope
    set?: NurseScheduleWhereUniqueInput | NurseScheduleWhereUniqueInput[]
    disconnect?: NurseScheduleWhereUniqueInput | NurseScheduleWhereUniqueInput[]
    delete?: NurseScheduleWhereUniqueInput | NurseScheduleWhereUniqueInput[]
    connect?: NurseScheduleWhereUniqueInput | NurseScheduleWhereUniqueInput[]
    update?: NurseScheduleUpdateWithWhereUniqueWithoutNurseInput | NurseScheduleUpdateWithWhereUniqueWithoutNurseInput[]
    updateMany?: NurseScheduleUpdateManyWithWhereWithoutNurseInput | NurseScheduleUpdateManyWithWhereWithoutNurseInput[]
    deleteMany?: NurseScheduleScalarWhereInput | NurseScheduleScalarWhereInput[]
  }

  export type NurseRatingUpdateManyWithoutNurseNestedInput = {
    create?: XOR<NurseRatingCreateWithoutNurseInput, NurseRatingUncheckedCreateWithoutNurseInput> | NurseRatingCreateWithoutNurseInput[] | NurseRatingUncheckedCreateWithoutNurseInput[]
    connectOrCreate?: NurseRatingCreateOrConnectWithoutNurseInput | NurseRatingCreateOrConnectWithoutNurseInput[]
    upsert?: NurseRatingUpsertWithWhereUniqueWithoutNurseInput | NurseRatingUpsertWithWhereUniqueWithoutNurseInput[]
    createMany?: NurseRatingCreateManyNurseInputEnvelope
    set?: NurseRatingWhereUniqueInput | NurseRatingWhereUniqueInput[]
    disconnect?: NurseRatingWhereUniqueInput | NurseRatingWhereUniqueInput[]
    delete?: NurseRatingWhereUniqueInput | NurseRatingWhereUniqueInput[]
    connect?: NurseRatingWhereUniqueInput | NurseRatingWhereUniqueInput[]
    update?: NurseRatingUpdateWithWhereUniqueWithoutNurseInput | NurseRatingUpdateWithWhereUniqueWithoutNurseInput[]
    updateMany?: NurseRatingUpdateManyWithWhereWithoutNurseInput | NurseRatingUpdateManyWithWhereWithoutNurseInput[]
    deleteMany?: NurseRatingScalarWhereInput | NurseRatingScalarWhereInput[]
  }

  export type NurseScheduleUncheckedUpdateManyWithoutNurseNestedInput = {
    create?: XOR<NurseScheduleCreateWithoutNurseInput, NurseScheduleUncheckedCreateWithoutNurseInput> | NurseScheduleCreateWithoutNurseInput[] | NurseScheduleUncheckedCreateWithoutNurseInput[]
    connectOrCreate?: NurseScheduleCreateOrConnectWithoutNurseInput | NurseScheduleCreateOrConnectWithoutNurseInput[]
    upsert?: NurseScheduleUpsertWithWhereUniqueWithoutNurseInput | NurseScheduleUpsertWithWhereUniqueWithoutNurseInput[]
    createMany?: NurseScheduleCreateManyNurseInputEnvelope
    set?: NurseScheduleWhereUniqueInput | NurseScheduleWhereUniqueInput[]
    disconnect?: NurseScheduleWhereUniqueInput | NurseScheduleWhereUniqueInput[]
    delete?: NurseScheduleWhereUniqueInput | NurseScheduleWhereUniqueInput[]
    connect?: NurseScheduleWhereUniqueInput | NurseScheduleWhereUniqueInput[]
    update?: NurseScheduleUpdateWithWhereUniqueWithoutNurseInput | NurseScheduleUpdateWithWhereUniqueWithoutNurseInput[]
    updateMany?: NurseScheduleUpdateManyWithWhereWithoutNurseInput | NurseScheduleUpdateManyWithWhereWithoutNurseInput[]
    deleteMany?: NurseScheduleScalarWhereInput | NurseScheduleScalarWhereInput[]
  }

  export type NurseRatingUncheckedUpdateManyWithoutNurseNestedInput = {
    create?: XOR<NurseRatingCreateWithoutNurseInput, NurseRatingUncheckedCreateWithoutNurseInput> | NurseRatingCreateWithoutNurseInput[] | NurseRatingUncheckedCreateWithoutNurseInput[]
    connectOrCreate?: NurseRatingCreateOrConnectWithoutNurseInput | NurseRatingCreateOrConnectWithoutNurseInput[]
    upsert?: NurseRatingUpsertWithWhereUniqueWithoutNurseInput | NurseRatingUpsertWithWhereUniqueWithoutNurseInput[]
    createMany?: NurseRatingCreateManyNurseInputEnvelope
    set?: NurseRatingWhereUniqueInput | NurseRatingWhereUniqueInput[]
    disconnect?: NurseRatingWhereUniqueInput | NurseRatingWhereUniqueInput[]
    delete?: NurseRatingWhereUniqueInput | NurseRatingWhereUniqueInput[]
    connect?: NurseRatingWhereUniqueInput | NurseRatingWhereUniqueInput[]
    update?: NurseRatingUpdateWithWhereUniqueWithoutNurseInput | NurseRatingUpdateWithWhereUniqueWithoutNurseInput[]
    updateMany?: NurseRatingUpdateManyWithWhereWithoutNurseInput | NurseRatingUpdateManyWithWhereWithoutNurseInput[]
    deleteMany?: NurseRatingScalarWhereInput | NurseRatingScalarWhereInput[]
  }

  export type NurseCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<NurseCreateWithoutSchedulesInput, NurseUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: NurseCreateOrConnectWithoutSchedulesInput
    connect?: NurseWhereUniqueInput
  }

  export type NurseUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<NurseCreateWithoutSchedulesInput, NurseUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: NurseCreateOrConnectWithoutSchedulesInput
    upsert?: NurseUpsertWithoutSchedulesInput
    connect?: NurseWhereUniqueInput
    update?: XOR<XOR<NurseUpdateToOneWithWhereWithoutSchedulesInput, NurseUpdateWithoutSchedulesInput>, NurseUncheckedUpdateWithoutSchedulesInput>
  }

  export type NurseCreateNestedOneWithoutRatingsInput = {
    create?: XOR<NurseCreateWithoutRatingsInput, NurseUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: NurseCreateOrConnectWithoutRatingsInput
    connect?: NurseWhereUniqueInput
  }

  export type NurseUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<NurseCreateWithoutRatingsInput, NurseUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: NurseCreateOrConnectWithoutRatingsInput
    upsert?: NurseUpsertWithoutRatingsInput
    connect?: NurseWhereUniqueInput
    update?: XOR<XOR<NurseUpdateToOneWithWhereWithoutRatingsInput, NurseUpdateWithoutRatingsInput>, NurseUncheckedUpdateWithoutRatingsInput>
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

  export type AmbulanceStaffCreateWithoutEmergencyRequestInput = {
    identity: string
    name: string
    phone: string
    email: string
    photo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AmbulanceStaffUncheckedCreateWithoutEmergencyRequestInput = {
    identity: string
    name: string
    phone: string
    email: string
    photo?: string | null
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
    identity?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmbulanceStaffUncheckedUpdateWithoutEmergencyRequestInput = {
    identity?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
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
    patientIdentity: string
    location: string
    note?: string | null
    status?: $Enums.EmergencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: AmbulanceStaffCreateNestedOneWithoutEmergencyRequestInput
  }

  export type EmergencyRequestUncheckedCreateWithoutHistoriesInput = {
    id?: string
    patientIdentity: string
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
    patientIdentity?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: AmbulanceStaffUpdateOneWithoutEmergencyRequestNestedInput
  }

  export type EmergencyRequestUncheckedUpdateWithoutHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientIdentity?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyRequestCreateWithoutAssignedToInput = {
    id?: string
    patientIdentity: string
    location: string
    note?: string | null
    status?: $Enums.EmergencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    histories?: EmergencyHistoryCreateNestedManyWithoutEmergencyRequestInput
  }

  export type EmergencyRequestUncheckedCreateWithoutAssignedToInput = {
    id?: string
    patientIdentity: string
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
    patientIdentity?: StringFilter<"EmergencyRequest"> | string
    location?: StringFilter<"EmergencyRequest"> | string
    note?: StringNullableFilter<"EmergencyRequest"> | string | null
    status?: EnumEmergencyStatusFilter<"EmergencyRequest"> | $Enums.EmergencyStatus
    assignedToId?: StringNullableFilter<"EmergencyRequest"> | string | null
    createdAt?: DateTimeFilter<"EmergencyRequest"> | Date | string
    updatedAt?: DateTimeFilter<"EmergencyRequest"> | Date | string
  }

  export type FacilityPhotoCreateWithoutFacilityInput = {
    id?: string
    photoUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacilityPhotoUncheckedCreateWithoutFacilityInput = {
    id?: string
    photoUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacilityPhotoCreateOrConnectWithoutFacilityInput = {
    where: FacilityPhotoWhereUniqueInput
    create: XOR<FacilityPhotoCreateWithoutFacilityInput, FacilityPhotoUncheckedCreateWithoutFacilityInput>
  }

  export type FacilityPhotoCreateManyFacilityInputEnvelope = {
    data: FacilityPhotoCreateManyFacilityInput | FacilityPhotoCreateManyFacilityInput[]
    skipDuplicates?: boolean
  }

  export type FacilityRatingCreateWithoutFacilityInput = {
    id?: string
    reservationId: string
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacilityRatingUncheckedCreateWithoutFacilityInput = {
    id?: string
    reservationId: string
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacilityRatingCreateOrConnectWithoutFacilityInput = {
    where: FacilityRatingWhereUniqueInput
    create: XOR<FacilityRatingCreateWithoutFacilityInput, FacilityRatingUncheckedCreateWithoutFacilityInput>
  }

  export type FacilityRatingCreateManyFacilityInputEnvelope = {
    data: FacilityRatingCreateManyFacilityInput | FacilityRatingCreateManyFacilityInput[]
    skipDuplicates?: boolean
  }

  export type FacilityPhotoUpsertWithWhereUniqueWithoutFacilityInput = {
    where: FacilityPhotoWhereUniqueInput
    update: XOR<FacilityPhotoUpdateWithoutFacilityInput, FacilityPhotoUncheckedUpdateWithoutFacilityInput>
    create: XOR<FacilityPhotoCreateWithoutFacilityInput, FacilityPhotoUncheckedCreateWithoutFacilityInput>
  }

  export type FacilityPhotoUpdateWithWhereUniqueWithoutFacilityInput = {
    where: FacilityPhotoWhereUniqueInput
    data: XOR<FacilityPhotoUpdateWithoutFacilityInput, FacilityPhotoUncheckedUpdateWithoutFacilityInput>
  }

  export type FacilityPhotoUpdateManyWithWhereWithoutFacilityInput = {
    where: FacilityPhotoScalarWhereInput
    data: XOR<FacilityPhotoUpdateManyMutationInput, FacilityPhotoUncheckedUpdateManyWithoutFacilityInput>
  }

  export type FacilityPhotoScalarWhereInput = {
    AND?: FacilityPhotoScalarWhereInput | FacilityPhotoScalarWhereInput[]
    OR?: FacilityPhotoScalarWhereInput[]
    NOT?: FacilityPhotoScalarWhereInput | FacilityPhotoScalarWhereInput[]
    id?: StringFilter<"FacilityPhoto"> | string
    facilityId?: StringFilter<"FacilityPhoto"> | string
    photoUrl?: StringFilter<"FacilityPhoto"> | string
    createdAt?: DateTimeFilter<"FacilityPhoto"> | Date | string
    updatedAt?: DateTimeFilter<"FacilityPhoto"> | Date | string
  }

  export type FacilityRatingUpsertWithWhereUniqueWithoutFacilityInput = {
    where: FacilityRatingWhereUniqueInput
    update: XOR<FacilityRatingUpdateWithoutFacilityInput, FacilityRatingUncheckedUpdateWithoutFacilityInput>
    create: XOR<FacilityRatingCreateWithoutFacilityInput, FacilityRatingUncheckedCreateWithoutFacilityInput>
  }

  export type FacilityRatingUpdateWithWhereUniqueWithoutFacilityInput = {
    where: FacilityRatingWhereUniqueInput
    data: XOR<FacilityRatingUpdateWithoutFacilityInput, FacilityRatingUncheckedUpdateWithoutFacilityInput>
  }

  export type FacilityRatingUpdateManyWithWhereWithoutFacilityInput = {
    where: FacilityRatingScalarWhereInput
    data: XOR<FacilityRatingUpdateManyMutationInput, FacilityRatingUncheckedUpdateManyWithoutFacilityInput>
  }

  export type FacilityRatingScalarWhereInput = {
    AND?: FacilityRatingScalarWhereInput | FacilityRatingScalarWhereInput[]
    OR?: FacilityRatingScalarWhereInput[]
    NOT?: FacilityRatingScalarWhereInput | FacilityRatingScalarWhereInput[]
    id?: StringFilter<"FacilityRating"> | string
    reservationId?: StringFilter<"FacilityRating"> | string
    facilityId?: StringFilter<"FacilityRating"> | string
    patientId?: StringFilter<"FacilityRating"> | string
    rating?: IntFilter<"FacilityRating"> | number
    comment?: StringNullableFilter<"FacilityRating"> | string | null
    createdAt?: DateTimeFilter<"FacilityRating"> | Date | string
    updatedAt?: DateTimeFilter<"FacilityRating"> | Date | string
  }

  export type FacilityCreateWithoutRatingsInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: FacilityPhotoCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateWithoutRatingsInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: FacilityPhotoUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityCreateOrConnectWithoutRatingsInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutRatingsInput, FacilityUncheckedCreateWithoutRatingsInput>
  }

  export type FacilityUpsertWithoutRatingsInput = {
    update: XOR<FacilityUpdateWithoutRatingsInput, FacilityUncheckedUpdateWithoutRatingsInput>
    create: XOR<FacilityCreateWithoutRatingsInput, FacilityUncheckedCreateWithoutRatingsInput>
    where?: FacilityWhereInput
  }

  export type FacilityUpdateToOneWithWhereWithoutRatingsInput = {
    where?: FacilityWhereInput
    data: XOR<FacilityUpdateWithoutRatingsInput, FacilityUncheckedUpdateWithoutRatingsInput>
  }

  export type FacilityUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: FacilityPhotoUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: FacilityPhotoUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityCreateWithoutPhotosInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ratings?: FacilityRatingCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateWithoutPhotosInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ratings?: FacilityRatingUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityCreateOrConnectWithoutPhotosInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutPhotosInput, FacilityUncheckedCreateWithoutPhotosInput>
  }

  export type FacilityUpsertWithoutPhotosInput = {
    update: XOR<FacilityUpdateWithoutPhotosInput, FacilityUncheckedUpdateWithoutPhotosInput>
    create: XOR<FacilityCreateWithoutPhotosInput, FacilityUncheckedCreateWithoutPhotosInput>
    where?: FacilityWhereInput
  }

  export type FacilityUpdateToOneWithWhereWithoutPhotosInput = {
    where?: FacilityWhereInput
    data: XOR<FacilityUpdateWithoutPhotosInput, FacilityUncheckedUpdateWithoutPhotosInput>
  }

  export type FacilityUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: FacilityRatingUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: FacilityRatingUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type GalleryPhotoCreateWithoutGalleryInput = {
    id?: string
    photoUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryPhotoUncheckedCreateWithoutGalleryInput = {
    id?: string
    photoUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryPhotoCreateOrConnectWithoutGalleryInput = {
    where: GalleryPhotoWhereUniqueInput
    create: XOR<GalleryPhotoCreateWithoutGalleryInput, GalleryPhotoUncheckedCreateWithoutGalleryInput>
  }

  export type GalleryPhotoCreateManyGalleryInputEnvelope = {
    data: GalleryPhotoCreateManyGalleryInput | GalleryPhotoCreateManyGalleryInput[]
    skipDuplicates?: boolean
  }

  export type GalleryPhotoUpsertWithWhereUniqueWithoutGalleryInput = {
    where: GalleryPhotoWhereUniqueInput
    update: XOR<GalleryPhotoUpdateWithoutGalleryInput, GalleryPhotoUncheckedUpdateWithoutGalleryInput>
    create: XOR<GalleryPhotoCreateWithoutGalleryInput, GalleryPhotoUncheckedCreateWithoutGalleryInput>
  }

  export type GalleryPhotoUpdateWithWhereUniqueWithoutGalleryInput = {
    where: GalleryPhotoWhereUniqueInput
    data: XOR<GalleryPhotoUpdateWithoutGalleryInput, GalleryPhotoUncheckedUpdateWithoutGalleryInput>
  }

  export type GalleryPhotoUpdateManyWithWhereWithoutGalleryInput = {
    where: GalleryPhotoScalarWhereInput
    data: XOR<GalleryPhotoUpdateManyMutationInput, GalleryPhotoUncheckedUpdateManyWithoutGalleryInput>
  }

  export type GalleryPhotoScalarWhereInput = {
    AND?: GalleryPhotoScalarWhereInput | GalleryPhotoScalarWhereInput[]
    OR?: GalleryPhotoScalarWhereInput[]
    NOT?: GalleryPhotoScalarWhereInput | GalleryPhotoScalarWhereInput[]
    id?: StringFilter<"GalleryPhoto"> | string
    galleryId?: StringFilter<"GalleryPhoto"> | string
    photoUrl?: StringFilter<"GalleryPhoto"> | string
    createdAt?: DateTimeFilter<"GalleryPhoto"> | Date | string
    updatedAt?: DateTimeFilter<"GalleryPhoto"> | Date | string
  }

  export type GalleryCreateWithoutPhotosInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryUncheckedCreateWithoutPhotosInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryCreateOrConnectWithoutPhotosInput = {
    where: GalleryWhereUniqueInput
    create: XOR<GalleryCreateWithoutPhotosInput, GalleryUncheckedCreateWithoutPhotosInput>
  }

  export type GalleryUpsertWithoutPhotosInput = {
    update: XOR<GalleryUpdateWithoutPhotosInput, GalleryUncheckedUpdateWithoutPhotosInput>
    create: XOR<GalleryCreateWithoutPhotosInput, GalleryUncheckedCreateWithoutPhotosInput>
    where?: GalleryWhereInput
  }

  export type GalleryUpdateToOneWithWhereWithoutPhotosInput = {
    where?: GalleryWhereInput
    data: XOR<GalleryUpdateWithoutPhotosInput, GalleryUncheckedUpdateWithoutPhotosInput>
  }

  export type GalleryUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NurseScheduleCreateWithoutNurseInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    quota?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NurseScheduleUncheckedCreateWithoutNurseInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    quota?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NurseScheduleCreateOrConnectWithoutNurseInput = {
    where: NurseScheduleWhereUniqueInput
    create: XOR<NurseScheduleCreateWithoutNurseInput, NurseScheduleUncheckedCreateWithoutNurseInput>
  }

  export type NurseScheduleCreateManyNurseInputEnvelope = {
    data: NurseScheduleCreateManyNurseInput | NurseScheduleCreateManyNurseInput[]
    skipDuplicates?: boolean
  }

  export type NurseRatingCreateWithoutNurseInput = {
    id?: string
    reservationId: string
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NurseRatingUncheckedCreateWithoutNurseInput = {
    id?: string
    reservationId: string
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NurseRatingCreateOrConnectWithoutNurseInput = {
    where: NurseRatingWhereUniqueInput
    create: XOR<NurseRatingCreateWithoutNurseInput, NurseRatingUncheckedCreateWithoutNurseInput>
  }

  export type NurseRatingCreateManyNurseInputEnvelope = {
    data: NurseRatingCreateManyNurseInput | NurseRatingCreateManyNurseInput[]
    skipDuplicates?: boolean
  }

  export type NurseScheduleUpsertWithWhereUniqueWithoutNurseInput = {
    where: NurseScheduleWhereUniqueInput
    update: XOR<NurseScheduleUpdateWithoutNurseInput, NurseScheduleUncheckedUpdateWithoutNurseInput>
    create: XOR<NurseScheduleCreateWithoutNurseInput, NurseScheduleUncheckedCreateWithoutNurseInput>
  }

  export type NurseScheduleUpdateWithWhereUniqueWithoutNurseInput = {
    where: NurseScheduleWhereUniqueInput
    data: XOR<NurseScheduleUpdateWithoutNurseInput, NurseScheduleUncheckedUpdateWithoutNurseInput>
  }

  export type NurseScheduleUpdateManyWithWhereWithoutNurseInput = {
    where: NurseScheduleScalarWhereInput
    data: XOR<NurseScheduleUpdateManyMutationInput, NurseScheduleUncheckedUpdateManyWithoutNurseInput>
  }

  export type NurseScheduleScalarWhereInput = {
    AND?: NurseScheduleScalarWhereInput | NurseScheduleScalarWhereInput[]
    OR?: NurseScheduleScalarWhereInput[]
    NOT?: NurseScheduleScalarWhereInput | NurseScheduleScalarWhereInput[]
    id?: StringFilter<"NurseSchedule"> | string
    nurseId?: StringFilter<"NurseSchedule"> | string
    dayOfWeek?: IntFilter<"NurseSchedule"> | number
    startTime?: StringFilter<"NurseSchedule"> | string
    endTime?: StringFilter<"NurseSchedule"> | string
    quota?: IntFilter<"NurseSchedule"> | number
    isActive?: BoolFilter<"NurseSchedule"> | boolean
    createdAt?: DateTimeFilter<"NurseSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"NurseSchedule"> | Date | string
  }

  export type NurseRatingUpsertWithWhereUniqueWithoutNurseInput = {
    where: NurseRatingWhereUniqueInput
    update: XOR<NurseRatingUpdateWithoutNurseInput, NurseRatingUncheckedUpdateWithoutNurseInput>
    create: XOR<NurseRatingCreateWithoutNurseInput, NurseRatingUncheckedCreateWithoutNurseInput>
  }

  export type NurseRatingUpdateWithWhereUniqueWithoutNurseInput = {
    where: NurseRatingWhereUniqueInput
    data: XOR<NurseRatingUpdateWithoutNurseInput, NurseRatingUncheckedUpdateWithoutNurseInput>
  }

  export type NurseRatingUpdateManyWithWhereWithoutNurseInput = {
    where: NurseRatingScalarWhereInput
    data: XOR<NurseRatingUpdateManyMutationInput, NurseRatingUncheckedUpdateManyWithoutNurseInput>
  }

  export type NurseRatingScalarWhereInput = {
    AND?: NurseRatingScalarWhereInput | NurseRatingScalarWhereInput[]
    OR?: NurseRatingScalarWhereInput[]
    NOT?: NurseRatingScalarWhereInput | NurseRatingScalarWhereInput[]
    id?: StringFilter<"NurseRating"> | string
    reservationId?: StringFilter<"NurseRating"> | string
    nurseId?: StringFilter<"NurseRating"> | string
    patientId?: StringFilter<"NurseRating"> | string
    rating?: IntFilter<"NurseRating"> | number
    comment?: StringNullableFilter<"NurseRating"> | string | null
    createdAt?: DateTimeFilter<"NurseRating"> | Date | string
    updatedAt?: DateTimeFilter<"NurseRating"> | Date | string
  }

  export type NurseCreateWithoutSchedulesInput = {
    id?: string
    name: string
    speciality?: string | null
    description?: string | null
    photoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ratings?: NurseRatingCreateNestedManyWithoutNurseInput
  }

  export type NurseUncheckedCreateWithoutSchedulesInput = {
    id?: string
    name: string
    speciality?: string | null
    description?: string | null
    photoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ratings?: NurseRatingUncheckedCreateNestedManyWithoutNurseInput
  }

  export type NurseCreateOrConnectWithoutSchedulesInput = {
    where: NurseWhereUniqueInput
    create: XOR<NurseCreateWithoutSchedulesInput, NurseUncheckedCreateWithoutSchedulesInput>
  }

  export type NurseUpsertWithoutSchedulesInput = {
    update: XOR<NurseUpdateWithoutSchedulesInput, NurseUncheckedUpdateWithoutSchedulesInput>
    create: XOR<NurseCreateWithoutSchedulesInput, NurseUncheckedCreateWithoutSchedulesInput>
    where?: NurseWhereInput
  }

  export type NurseUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: NurseWhereInput
    data: XOR<NurseUpdateWithoutSchedulesInput, NurseUncheckedUpdateWithoutSchedulesInput>
  }

  export type NurseUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    speciality?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: NurseRatingUpdateManyWithoutNurseNestedInput
  }

  export type NurseUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    speciality?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: NurseRatingUncheckedUpdateManyWithoutNurseNestedInput
  }

  export type NurseCreateWithoutRatingsInput = {
    id?: string
    name: string
    speciality?: string | null
    description?: string | null
    photoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: NurseScheduleCreateNestedManyWithoutNurseInput
  }

  export type NurseUncheckedCreateWithoutRatingsInput = {
    id?: string
    name: string
    speciality?: string | null
    description?: string | null
    photoUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: NurseScheduleUncheckedCreateNestedManyWithoutNurseInput
  }

  export type NurseCreateOrConnectWithoutRatingsInput = {
    where: NurseWhereUniqueInput
    create: XOR<NurseCreateWithoutRatingsInput, NurseUncheckedCreateWithoutRatingsInput>
  }

  export type NurseUpsertWithoutRatingsInput = {
    update: XOR<NurseUpdateWithoutRatingsInput, NurseUncheckedUpdateWithoutRatingsInput>
    create: XOR<NurseCreateWithoutRatingsInput, NurseUncheckedCreateWithoutRatingsInput>
    where?: NurseWhereInput
  }

  export type NurseUpdateToOneWithWhereWithoutRatingsInput = {
    where?: NurseWhereInput
    data: XOR<NurseUpdateWithoutRatingsInput, NurseUncheckedUpdateWithoutRatingsInput>
  }

  export type NurseUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    speciality?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: NurseScheduleUpdateManyWithoutNurseNestedInput
  }

  export type NurseUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    speciality?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: NurseScheduleUncheckedUpdateManyWithoutNurseNestedInput
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
    patientIdentity: string
    location: string
    note?: string | null
    status?: $Enums.EmergencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmergencyRequestUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientIdentity?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    histories?: EmergencyHistoryUpdateManyWithoutEmergencyRequestNestedInput
  }

  export type EmergencyRequestUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientIdentity?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    histories?: EmergencyHistoryUncheckedUpdateManyWithoutEmergencyRequestNestedInput
  }

  export type EmergencyRequestUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientIdentity?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityPhotoCreateManyFacilityInput = {
    id?: string
    photoUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacilityRatingCreateManyFacilityInput = {
    id?: string
    reservationId: string
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacilityPhotoUpdateWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityPhotoUncheckedUpdateWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityPhotoUncheckedUpdateManyWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityRatingUpdateWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityRatingUncheckedUpdateWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityRatingUncheckedUpdateManyWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryPhotoCreateManyGalleryInput = {
    id?: string
    photoUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryPhotoUpdateWithoutGalleryInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryPhotoUncheckedUpdateWithoutGalleryInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryPhotoUncheckedUpdateManyWithoutGalleryInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NurseScheduleCreateManyNurseInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    quota?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NurseRatingCreateManyNurseInput = {
    id?: string
    reservationId: string
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NurseScheduleUpdateWithoutNurseInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NurseScheduleUncheckedUpdateWithoutNurseInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NurseScheduleUncheckedUpdateManyWithoutNurseInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NurseRatingUpdateWithoutNurseInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NurseRatingUncheckedUpdateWithoutNurseInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NurseRatingUncheckedUpdateManyWithoutNurseInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
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