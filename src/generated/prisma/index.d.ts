
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
 * Model cadastroCandidato
 * 
 */
export type cadastroCandidato = $Result.DefaultSelection<Prisma.$cadastroCandidatoPayload>
/**
 * Model cadastroEmpresa
 * 
 */
export type cadastroEmpresa = $Result.DefaultSelection<Prisma.$cadastroEmpresaPayload>
/**
 * Model cadastrarVaga
 * 
 */
export type cadastrarVaga = $Result.DefaultSelection<Prisma.$cadastrarVagaPayload>
/**
 * Model candidatura
 * 
 */
export type candidatura = $Result.DefaultSelection<Prisma.$candidaturaPayload>
/**
 * Model Endereco
 * 
 */
export type Endereco = $Result.DefaultSelection<Prisma.$EnderecoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CadastroCandidatoes
 * const cadastroCandidatoes = await prisma.cadastroCandidato.findMany()
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
   * // Fetch zero or more CadastroCandidatoes
   * const cadastroCandidatoes = await prisma.cadastroCandidato.findMany()
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
   * `prisma.cadastroCandidato`: Exposes CRUD operations for the **cadastroCandidato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CadastroCandidatoes
    * const cadastroCandidatoes = await prisma.cadastroCandidato.findMany()
    * ```
    */
  get cadastroCandidato(): Prisma.cadastroCandidatoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cadastroEmpresa`: Exposes CRUD operations for the **cadastroEmpresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CadastroEmpresas
    * const cadastroEmpresas = await prisma.cadastroEmpresa.findMany()
    * ```
    */
  get cadastroEmpresa(): Prisma.cadastroEmpresaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cadastrarVaga`: Exposes CRUD operations for the **cadastrarVaga** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CadastrarVagas
    * const cadastrarVagas = await prisma.cadastrarVaga.findMany()
    * ```
    */
  get cadastrarVaga(): Prisma.cadastrarVagaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidatura`: Exposes CRUD operations for the **candidatura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidaturas
    * const candidaturas = await prisma.candidatura.findMany()
    * ```
    */
  get candidatura(): Prisma.candidaturaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.endereco`: Exposes CRUD operations for the **Endereco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enderecos
    * const enderecos = await prisma.endereco.findMany()
    * ```
    */
  get endereco(): Prisma.EnderecoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    cadastroCandidato: 'cadastroCandidato',
    cadastroEmpresa: 'cadastroEmpresa',
    cadastrarVaga: 'cadastrarVaga',
    candidatura: 'candidatura',
    Endereco: 'Endereco'
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
      modelProps: "cadastroCandidato" | "cadastroEmpresa" | "cadastrarVaga" | "candidatura" | "endereco"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cadastroCandidato: {
        payload: Prisma.$cadastroCandidatoPayload<ExtArgs>
        fields: Prisma.cadastroCandidatoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cadastroCandidatoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroCandidatoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cadastroCandidatoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroCandidatoPayload>
          }
          findFirst: {
            args: Prisma.cadastroCandidatoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroCandidatoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cadastroCandidatoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroCandidatoPayload>
          }
          findMany: {
            args: Prisma.cadastroCandidatoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroCandidatoPayload>[]
          }
          create: {
            args: Prisma.cadastroCandidatoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroCandidatoPayload>
          }
          createMany: {
            args: Prisma.cadastroCandidatoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cadastroCandidatoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroCandidatoPayload>[]
          }
          delete: {
            args: Prisma.cadastroCandidatoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroCandidatoPayload>
          }
          update: {
            args: Prisma.cadastroCandidatoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroCandidatoPayload>
          }
          deleteMany: {
            args: Prisma.cadastroCandidatoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cadastroCandidatoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cadastroCandidatoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroCandidatoPayload>[]
          }
          upsert: {
            args: Prisma.cadastroCandidatoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroCandidatoPayload>
          }
          aggregate: {
            args: Prisma.CadastroCandidatoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCadastroCandidato>
          }
          groupBy: {
            args: Prisma.cadastroCandidatoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CadastroCandidatoGroupByOutputType>[]
          }
          count: {
            args: Prisma.cadastroCandidatoCountArgs<ExtArgs>
            result: $Utils.Optional<CadastroCandidatoCountAggregateOutputType> | number
          }
        }
      }
      cadastroEmpresa: {
        payload: Prisma.$cadastroEmpresaPayload<ExtArgs>
        fields: Prisma.cadastroEmpresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cadastroEmpresaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroEmpresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cadastroEmpresaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroEmpresaPayload>
          }
          findFirst: {
            args: Prisma.cadastroEmpresaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroEmpresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cadastroEmpresaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroEmpresaPayload>
          }
          findMany: {
            args: Prisma.cadastroEmpresaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroEmpresaPayload>[]
          }
          create: {
            args: Prisma.cadastroEmpresaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroEmpresaPayload>
          }
          createMany: {
            args: Prisma.cadastroEmpresaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cadastroEmpresaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroEmpresaPayload>[]
          }
          delete: {
            args: Prisma.cadastroEmpresaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroEmpresaPayload>
          }
          update: {
            args: Prisma.cadastroEmpresaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroEmpresaPayload>
          }
          deleteMany: {
            args: Prisma.cadastroEmpresaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cadastroEmpresaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cadastroEmpresaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroEmpresaPayload>[]
          }
          upsert: {
            args: Prisma.cadastroEmpresaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroEmpresaPayload>
          }
          aggregate: {
            args: Prisma.CadastroEmpresaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCadastroEmpresa>
          }
          groupBy: {
            args: Prisma.cadastroEmpresaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CadastroEmpresaGroupByOutputType>[]
          }
          count: {
            args: Prisma.cadastroEmpresaCountArgs<ExtArgs>
            result: $Utils.Optional<CadastroEmpresaCountAggregateOutputType> | number
          }
        }
      }
      cadastrarVaga: {
        payload: Prisma.$cadastrarVagaPayload<ExtArgs>
        fields: Prisma.cadastrarVagaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cadastrarVagaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastrarVagaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cadastrarVagaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastrarVagaPayload>
          }
          findFirst: {
            args: Prisma.cadastrarVagaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastrarVagaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cadastrarVagaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastrarVagaPayload>
          }
          findMany: {
            args: Prisma.cadastrarVagaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastrarVagaPayload>[]
          }
          create: {
            args: Prisma.cadastrarVagaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastrarVagaPayload>
          }
          createMany: {
            args: Prisma.cadastrarVagaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cadastrarVagaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastrarVagaPayload>[]
          }
          delete: {
            args: Prisma.cadastrarVagaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastrarVagaPayload>
          }
          update: {
            args: Prisma.cadastrarVagaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastrarVagaPayload>
          }
          deleteMany: {
            args: Prisma.cadastrarVagaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cadastrarVagaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cadastrarVagaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastrarVagaPayload>[]
          }
          upsert: {
            args: Prisma.cadastrarVagaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastrarVagaPayload>
          }
          aggregate: {
            args: Prisma.CadastrarVagaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCadastrarVaga>
          }
          groupBy: {
            args: Prisma.cadastrarVagaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CadastrarVagaGroupByOutputType>[]
          }
          count: {
            args: Prisma.cadastrarVagaCountArgs<ExtArgs>
            result: $Utils.Optional<CadastrarVagaCountAggregateOutputType> | number
          }
        }
      }
      candidatura: {
        payload: Prisma.$candidaturaPayload<ExtArgs>
        fields: Prisma.candidaturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.candidaturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidaturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.candidaturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidaturaPayload>
          }
          findFirst: {
            args: Prisma.candidaturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidaturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.candidaturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidaturaPayload>
          }
          findMany: {
            args: Prisma.candidaturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidaturaPayload>[]
          }
          create: {
            args: Prisma.candidaturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidaturaPayload>
          }
          createMany: {
            args: Prisma.candidaturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.candidaturaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidaturaPayload>[]
          }
          delete: {
            args: Prisma.candidaturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidaturaPayload>
          }
          update: {
            args: Prisma.candidaturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidaturaPayload>
          }
          deleteMany: {
            args: Prisma.candidaturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.candidaturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.candidaturaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidaturaPayload>[]
          }
          upsert: {
            args: Prisma.candidaturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidaturaPayload>
          }
          aggregate: {
            args: Prisma.CandidaturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidatura>
          }
          groupBy: {
            args: Prisma.candidaturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidaturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.candidaturaCountArgs<ExtArgs>
            result: $Utils.Optional<CandidaturaCountAggregateOutputType> | number
          }
        }
      }
      Endereco: {
        payload: Prisma.$EnderecoPayload<ExtArgs>
        fields: Prisma.EnderecoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnderecoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnderecoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          findFirst: {
            args: Prisma.EnderecoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnderecoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          findMany: {
            args: Prisma.EnderecoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>[]
          }
          create: {
            args: Prisma.EnderecoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          createMany: {
            args: Prisma.EnderecoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnderecoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>[]
          }
          delete: {
            args: Prisma.EnderecoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          update: {
            args: Prisma.EnderecoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          deleteMany: {
            args: Prisma.EnderecoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnderecoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnderecoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>[]
          }
          upsert: {
            args: Prisma.EnderecoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          aggregate: {
            args: Prisma.EnderecoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndereco>
          }
          groupBy: {
            args: Prisma.EnderecoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnderecoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnderecoCountArgs<ExtArgs>
            result: $Utils.Optional<EnderecoCountAggregateOutputType> | number
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
    cadastroCandidato?: cadastroCandidatoOmit
    cadastroEmpresa?: cadastroEmpresaOmit
    cadastrarVaga?: cadastrarVagaOmit
    candidatura?: candidaturaOmit
    endereco?: EnderecoOmit
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
   * Count Type CadastroCandidatoCountOutputType
   */

  export type CadastroCandidatoCountOutputType = {
    candidaturas: number
  }

  export type CadastroCandidatoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidaturas?: boolean | CadastroCandidatoCountOutputTypeCountCandidaturasArgs
  }

  // Custom InputTypes
  /**
   * CadastroCandidatoCountOutputType without action
   */
  export type CadastroCandidatoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CadastroCandidatoCountOutputType
     */
    select?: CadastroCandidatoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CadastroCandidatoCountOutputType without action
   */
  export type CadastroCandidatoCountOutputTypeCountCandidaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: candidaturaWhereInput
  }


  /**
   * Count Type CadastroEmpresaCountOutputType
   */

  export type CadastroEmpresaCountOutputType = {
    vagas: number
  }

  export type CadastroEmpresaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vagas?: boolean | CadastroEmpresaCountOutputTypeCountVagasArgs
  }

  // Custom InputTypes
  /**
   * CadastroEmpresaCountOutputType without action
   */
  export type CadastroEmpresaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CadastroEmpresaCountOutputType
     */
    select?: CadastroEmpresaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CadastroEmpresaCountOutputType without action
   */
  export type CadastroEmpresaCountOutputTypeCountVagasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cadastrarVagaWhereInput
  }


  /**
   * Count Type CadastrarVagaCountOutputType
   */

  export type CadastrarVagaCountOutputType = {
    candidaturas: number
  }

  export type CadastrarVagaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidaturas?: boolean | CadastrarVagaCountOutputTypeCountCandidaturasArgs
  }

  // Custom InputTypes
  /**
   * CadastrarVagaCountOutputType without action
   */
  export type CadastrarVagaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CadastrarVagaCountOutputType
     */
    select?: CadastrarVagaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CadastrarVagaCountOutputType without action
   */
  export type CadastrarVagaCountOutputTypeCountCandidaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: candidaturaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model cadastroCandidato
   */

  export type AggregateCadastroCandidato = {
    _count: CadastroCandidatoCountAggregateOutputType | null
    _avg: CadastroCandidatoAvgAggregateOutputType | null
    _sum: CadastroCandidatoSumAggregateOutputType | null
    _min: CadastroCandidatoMinAggregateOutputType | null
    _max: CadastroCandidatoMaxAggregateOutputType | null
  }

  export type CadastroCandidatoAvgAggregateOutputType = {
    idCandidato: number | null
    enderecoId: number | null
  }

  export type CadastroCandidatoSumAggregateOutputType = {
    idCandidato: number | null
    enderecoId: number | null
  }

  export type CadastroCandidatoMinAggregateOutputType = {
    idCandidato: number | null
    nomeCandidato: string | null
    emailCandidato: string | null
    telefoneCandidato: string | null
    curriculo: string | null
    senhaCandidato: string | null
    enderecoId: number | null
  }

  export type CadastroCandidatoMaxAggregateOutputType = {
    idCandidato: number | null
    nomeCandidato: string | null
    emailCandidato: string | null
    telefoneCandidato: string | null
    curriculo: string | null
    senhaCandidato: string | null
    enderecoId: number | null
  }

  export type CadastroCandidatoCountAggregateOutputType = {
    idCandidato: number
    nomeCandidato: number
    emailCandidato: number
    telefoneCandidato: number
    curriculo: number
    senhaCandidato: number
    enderecoId: number
    _all: number
  }


  export type CadastroCandidatoAvgAggregateInputType = {
    idCandidato?: true
    enderecoId?: true
  }

  export type CadastroCandidatoSumAggregateInputType = {
    idCandidato?: true
    enderecoId?: true
  }

  export type CadastroCandidatoMinAggregateInputType = {
    idCandidato?: true
    nomeCandidato?: true
    emailCandidato?: true
    telefoneCandidato?: true
    curriculo?: true
    senhaCandidato?: true
    enderecoId?: true
  }

  export type CadastroCandidatoMaxAggregateInputType = {
    idCandidato?: true
    nomeCandidato?: true
    emailCandidato?: true
    telefoneCandidato?: true
    curriculo?: true
    senhaCandidato?: true
    enderecoId?: true
  }

  export type CadastroCandidatoCountAggregateInputType = {
    idCandidato?: true
    nomeCandidato?: true
    emailCandidato?: true
    telefoneCandidato?: true
    curriculo?: true
    senhaCandidato?: true
    enderecoId?: true
    _all?: true
  }

  export type CadastroCandidatoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cadastroCandidato to aggregate.
     */
    where?: cadastroCandidatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastroCandidatoes to fetch.
     */
    orderBy?: cadastroCandidatoOrderByWithRelationInput | cadastroCandidatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cadastroCandidatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastroCandidatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastroCandidatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cadastroCandidatoes
    **/
    _count?: true | CadastroCandidatoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CadastroCandidatoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CadastroCandidatoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CadastroCandidatoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CadastroCandidatoMaxAggregateInputType
  }

  export type GetCadastroCandidatoAggregateType<T extends CadastroCandidatoAggregateArgs> = {
        [P in keyof T & keyof AggregateCadastroCandidato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCadastroCandidato[P]>
      : GetScalarType<T[P], AggregateCadastroCandidato[P]>
  }




  export type cadastroCandidatoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cadastroCandidatoWhereInput
    orderBy?: cadastroCandidatoOrderByWithAggregationInput | cadastroCandidatoOrderByWithAggregationInput[]
    by: CadastroCandidatoScalarFieldEnum[] | CadastroCandidatoScalarFieldEnum
    having?: cadastroCandidatoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CadastroCandidatoCountAggregateInputType | true
    _avg?: CadastroCandidatoAvgAggregateInputType
    _sum?: CadastroCandidatoSumAggregateInputType
    _min?: CadastroCandidatoMinAggregateInputType
    _max?: CadastroCandidatoMaxAggregateInputType
  }

  export type CadastroCandidatoGroupByOutputType = {
    idCandidato: number
    nomeCandidato: string
    emailCandidato: string
    telefoneCandidato: string
    curriculo: string
    senhaCandidato: string
    enderecoId: number
    _count: CadastroCandidatoCountAggregateOutputType | null
    _avg: CadastroCandidatoAvgAggregateOutputType | null
    _sum: CadastroCandidatoSumAggregateOutputType | null
    _min: CadastroCandidatoMinAggregateOutputType | null
    _max: CadastroCandidatoMaxAggregateOutputType | null
  }

  type GetCadastroCandidatoGroupByPayload<T extends cadastroCandidatoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CadastroCandidatoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CadastroCandidatoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CadastroCandidatoGroupByOutputType[P]>
            : GetScalarType<T[P], CadastroCandidatoGroupByOutputType[P]>
        }
      >
    >


  export type cadastroCandidatoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCandidato?: boolean
    nomeCandidato?: boolean
    emailCandidato?: boolean
    telefoneCandidato?: boolean
    curriculo?: boolean
    senhaCandidato?: boolean
    enderecoId?: boolean
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
    candidaturas?: boolean | cadastroCandidato$candidaturasArgs<ExtArgs>
    _count?: boolean | CadastroCandidatoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cadastroCandidato"]>

  export type cadastroCandidatoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCandidato?: boolean
    nomeCandidato?: boolean
    emailCandidato?: boolean
    telefoneCandidato?: boolean
    curriculo?: boolean
    senhaCandidato?: boolean
    enderecoId?: boolean
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cadastroCandidato"]>

  export type cadastroCandidatoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCandidato?: boolean
    nomeCandidato?: boolean
    emailCandidato?: boolean
    telefoneCandidato?: boolean
    curriculo?: boolean
    senhaCandidato?: boolean
    enderecoId?: boolean
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cadastroCandidato"]>

  export type cadastroCandidatoSelectScalar = {
    idCandidato?: boolean
    nomeCandidato?: boolean
    emailCandidato?: boolean
    telefoneCandidato?: boolean
    curriculo?: boolean
    senhaCandidato?: boolean
    enderecoId?: boolean
  }

  export type cadastroCandidatoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idCandidato" | "nomeCandidato" | "emailCandidato" | "telefoneCandidato" | "curriculo" | "senhaCandidato" | "enderecoId", ExtArgs["result"]["cadastroCandidato"]>
  export type cadastroCandidatoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
    candidaturas?: boolean | cadastroCandidato$candidaturasArgs<ExtArgs>
    _count?: boolean | CadastroCandidatoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cadastroCandidatoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
  }
  export type cadastroCandidatoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
  }

  export type $cadastroCandidatoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cadastroCandidato"
    objects: {
      endereco: Prisma.$EnderecoPayload<ExtArgs>
      candidaturas: Prisma.$candidaturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idCandidato: number
      nomeCandidato: string
      emailCandidato: string
      telefoneCandidato: string
      curriculo: string
      senhaCandidato: string
      enderecoId: number
    }, ExtArgs["result"]["cadastroCandidato"]>
    composites: {}
  }

  type cadastroCandidatoGetPayload<S extends boolean | null | undefined | cadastroCandidatoDefaultArgs> = $Result.GetResult<Prisma.$cadastroCandidatoPayload, S>

  type cadastroCandidatoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cadastroCandidatoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CadastroCandidatoCountAggregateInputType | true
    }

  export interface cadastroCandidatoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cadastroCandidato'], meta: { name: 'cadastroCandidato' } }
    /**
     * Find zero or one CadastroCandidato that matches the filter.
     * @param {cadastroCandidatoFindUniqueArgs} args - Arguments to find a CadastroCandidato
     * @example
     * // Get one CadastroCandidato
     * const cadastroCandidato = await prisma.cadastroCandidato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cadastroCandidatoFindUniqueArgs>(args: SelectSubset<T, cadastroCandidatoFindUniqueArgs<ExtArgs>>): Prisma__cadastroCandidatoClient<$Result.GetResult<Prisma.$cadastroCandidatoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CadastroCandidato that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cadastroCandidatoFindUniqueOrThrowArgs} args - Arguments to find a CadastroCandidato
     * @example
     * // Get one CadastroCandidato
     * const cadastroCandidato = await prisma.cadastroCandidato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cadastroCandidatoFindUniqueOrThrowArgs>(args: SelectSubset<T, cadastroCandidatoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cadastroCandidatoClient<$Result.GetResult<Prisma.$cadastroCandidatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CadastroCandidato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroCandidatoFindFirstArgs} args - Arguments to find a CadastroCandidato
     * @example
     * // Get one CadastroCandidato
     * const cadastroCandidato = await prisma.cadastroCandidato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cadastroCandidatoFindFirstArgs>(args?: SelectSubset<T, cadastroCandidatoFindFirstArgs<ExtArgs>>): Prisma__cadastroCandidatoClient<$Result.GetResult<Prisma.$cadastroCandidatoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CadastroCandidato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroCandidatoFindFirstOrThrowArgs} args - Arguments to find a CadastroCandidato
     * @example
     * // Get one CadastroCandidato
     * const cadastroCandidato = await prisma.cadastroCandidato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cadastroCandidatoFindFirstOrThrowArgs>(args?: SelectSubset<T, cadastroCandidatoFindFirstOrThrowArgs<ExtArgs>>): Prisma__cadastroCandidatoClient<$Result.GetResult<Prisma.$cadastroCandidatoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CadastroCandidatoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroCandidatoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CadastroCandidatoes
     * const cadastroCandidatoes = await prisma.cadastroCandidato.findMany()
     * 
     * // Get first 10 CadastroCandidatoes
     * const cadastroCandidatoes = await prisma.cadastroCandidato.findMany({ take: 10 })
     * 
     * // Only select the `idCandidato`
     * const cadastroCandidatoWithIdCandidatoOnly = await prisma.cadastroCandidato.findMany({ select: { idCandidato: true } })
     * 
     */
    findMany<T extends cadastroCandidatoFindManyArgs>(args?: SelectSubset<T, cadastroCandidatoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cadastroCandidatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CadastroCandidato.
     * @param {cadastroCandidatoCreateArgs} args - Arguments to create a CadastroCandidato.
     * @example
     * // Create one CadastroCandidato
     * const CadastroCandidato = await prisma.cadastroCandidato.create({
     *   data: {
     *     // ... data to create a CadastroCandidato
     *   }
     * })
     * 
     */
    create<T extends cadastroCandidatoCreateArgs>(args: SelectSubset<T, cadastroCandidatoCreateArgs<ExtArgs>>): Prisma__cadastroCandidatoClient<$Result.GetResult<Prisma.$cadastroCandidatoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CadastroCandidatoes.
     * @param {cadastroCandidatoCreateManyArgs} args - Arguments to create many CadastroCandidatoes.
     * @example
     * // Create many CadastroCandidatoes
     * const cadastroCandidato = await prisma.cadastroCandidato.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cadastroCandidatoCreateManyArgs>(args?: SelectSubset<T, cadastroCandidatoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CadastroCandidatoes and returns the data saved in the database.
     * @param {cadastroCandidatoCreateManyAndReturnArgs} args - Arguments to create many CadastroCandidatoes.
     * @example
     * // Create many CadastroCandidatoes
     * const cadastroCandidato = await prisma.cadastroCandidato.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CadastroCandidatoes and only return the `idCandidato`
     * const cadastroCandidatoWithIdCandidatoOnly = await prisma.cadastroCandidato.createManyAndReturn({
     *   select: { idCandidato: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cadastroCandidatoCreateManyAndReturnArgs>(args?: SelectSubset<T, cadastroCandidatoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cadastroCandidatoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CadastroCandidato.
     * @param {cadastroCandidatoDeleteArgs} args - Arguments to delete one CadastroCandidato.
     * @example
     * // Delete one CadastroCandidato
     * const CadastroCandidato = await prisma.cadastroCandidato.delete({
     *   where: {
     *     // ... filter to delete one CadastroCandidato
     *   }
     * })
     * 
     */
    delete<T extends cadastroCandidatoDeleteArgs>(args: SelectSubset<T, cadastroCandidatoDeleteArgs<ExtArgs>>): Prisma__cadastroCandidatoClient<$Result.GetResult<Prisma.$cadastroCandidatoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CadastroCandidato.
     * @param {cadastroCandidatoUpdateArgs} args - Arguments to update one CadastroCandidato.
     * @example
     * // Update one CadastroCandidato
     * const cadastroCandidato = await prisma.cadastroCandidato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cadastroCandidatoUpdateArgs>(args: SelectSubset<T, cadastroCandidatoUpdateArgs<ExtArgs>>): Prisma__cadastroCandidatoClient<$Result.GetResult<Prisma.$cadastroCandidatoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CadastroCandidatoes.
     * @param {cadastroCandidatoDeleteManyArgs} args - Arguments to filter CadastroCandidatoes to delete.
     * @example
     * // Delete a few CadastroCandidatoes
     * const { count } = await prisma.cadastroCandidato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cadastroCandidatoDeleteManyArgs>(args?: SelectSubset<T, cadastroCandidatoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CadastroCandidatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroCandidatoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CadastroCandidatoes
     * const cadastroCandidato = await prisma.cadastroCandidato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cadastroCandidatoUpdateManyArgs>(args: SelectSubset<T, cadastroCandidatoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CadastroCandidatoes and returns the data updated in the database.
     * @param {cadastroCandidatoUpdateManyAndReturnArgs} args - Arguments to update many CadastroCandidatoes.
     * @example
     * // Update many CadastroCandidatoes
     * const cadastroCandidato = await prisma.cadastroCandidato.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CadastroCandidatoes and only return the `idCandidato`
     * const cadastroCandidatoWithIdCandidatoOnly = await prisma.cadastroCandidato.updateManyAndReturn({
     *   select: { idCandidato: true },
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
    updateManyAndReturn<T extends cadastroCandidatoUpdateManyAndReturnArgs>(args: SelectSubset<T, cadastroCandidatoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cadastroCandidatoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CadastroCandidato.
     * @param {cadastroCandidatoUpsertArgs} args - Arguments to update or create a CadastroCandidato.
     * @example
     * // Update or create a CadastroCandidato
     * const cadastroCandidato = await prisma.cadastroCandidato.upsert({
     *   create: {
     *     // ... data to create a CadastroCandidato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CadastroCandidato we want to update
     *   }
     * })
     */
    upsert<T extends cadastroCandidatoUpsertArgs>(args: SelectSubset<T, cadastroCandidatoUpsertArgs<ExtArgs>>): Prisma__cadastroCandidatoClient<$Result.GetResult<Prisma.$cadastroCandidatoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CadastroCandidatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroCandidatoCountArgs} args - Arguments to filter CadastroCandidatoes to count.
     * @example
     * // Count the number of CadastroCandidatoes
     * const count = await prisma.cadastroCandidato.count({
     *   where: {
     *     // ... the filter for the CadastroCandidatoes we want to count
     *   }
     * })
    **/
    count<T extends cadastroCandidatoCountArgs>(
      args?: Subset<T, cadastroCandidatoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CadastroCandidatoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CadastroCandidato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CadastroCandidatoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CadastroCandidatoAggregateArgs>(args: Subset<T, CadastroCandidatoAggregateArgs>): Prisma.PrismaPromise<GetCadastroCandidatoAggregateType<T>>

    /**
     * Group by CadastroCandidato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroCandidatoGroupByArgs} args - Group by arguments.
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
      T extends cadastroCandidatoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cadastroCandidatoGroupByArgs['orderBy'] }
        : { orderBy?: cadastroCandidatoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cadastroCandidatoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCadastroCandidatoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cadastroCandidato model
   */
  readonly fields: cadastroCandidatoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cadastroCandidato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cadastroCandidatoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    endereco<T extends EnderecoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnderecoDefaultArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidaturas<T extends cadastroCandidato$candidaturasArgs<ExtArgs> = {}>(args?: Subset<T, cadastroCandidato$candidaturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidaturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the cadastroCandidato model
   */
  interface cadastroCandidatoFieldRefs {
    readonly idCandidato: FieldRef<"cadastroCandidato", 'Int'>
    readonly nomeCandidato: FieldRef<"cadastroCandidato", 'String'>
    readonly emailCandidato: FieldRef<"cadastroCandidato", 'String'>
    readonly telefoneCandidato: FieldRef<"cadastroCandidato", 'String'>
    readonly curriculo: FieldRef<"cadastroCandidato", 'String'>
    readonly senhaCandidato: FieldRef<"cadastroCandidato", 'String'>
    readonly enderecoId: FieldRef<"cadastroCandidato", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cadastroCandidato findUnique
   */
  export type cadastroCandidatoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroCandidato
     */
    select?: cadastroCandidatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroCandidato
     */
    omit?: cadastroCandidatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroCandidatoInclude<ExtArgs> | null
    /**
     * Filter, which cadastroCandidato to fetch.
     */
    where: cadastroCandidatoWhereUniqueInput
  }

  /**
   * cadastroCandidato findUniqueOrThrow
   */
  export type cadastroCandidatoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroCandidato
     */
    select?: cadastroCandidatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroCandidato
     */
    omit?: cadastroCandidatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroCandidatoInclude<ExtArgs> | null
    /**
     * Filter, which cadastroCandidato to fetch.
     */
    where: cadastroCandidatoWhereUniqueInput
  }

  /**
   * cadastroCandidato findFirst
   */
  export type cadastroCandidatoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroCandidato
     */
    select?: cadastroCandidatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroCandidato
     */
    omit?: cadastroCandidatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroCandidatoInclude<ExtArgs> | null
    /**
     * Filter, which cadastroCandidato to fetch.
     */
    where?: cadastroCandidatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastroCandidatoes to fetch.
     */
    orderBy?: cadastroCandidatoOrderByWithRelationInput | cadastroCandidatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cadastroCandidatoes.
     */
    cursor?: cadastroCandidatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastroCandidatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastroCandidatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cadastroCandidatoes.
     */
    distinct?: CadastroCandidatoScalarFieldEnum | CadastroCandidatoScalarFieldEnum[]
  }

  /**
   * cadastroCandidato findFirstOrThrow
   */
  export type cadastroCandidatoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroCandidato
     */
    select?: cadastroCandidatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroCandidato
     */
    omit?: cadastroCandidatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroCandidatoInclude<ExtArgs> | null
    /**
     * Filter, which cadastroCandidato to fetch.
     */
    where?: cadastroCandidatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastroCandidatoes to fetch.
     */
    orderBy?: cadastroCandidatoOrderByWithRelationInput | cadastroCandidatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cadastroCandidatoes.
     */
    cursor?: cadastroCandidatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastroCandidatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastroCandidatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cadastroCandidatoes.
     */
    distinct?: CadastroCandidatoScalarFieldEnum | CadastroCandidatoScalarFieldEnum[]
  }

  /**
   * cadastroCandidato findMany
   */
  export type cadastroCandidatoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroCandidato
     */
    select?: cadastroCandidatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroCandidato
     */
    omit?: cadastroCandidatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroCandidatoInclude<ExtArgs> | null
    /**
     * Filter, which cadastroCandidatoes to fetch.
     */
    where?: cadastroCandidatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastroCandidatoes to fetch.
     */
    orderBy?: cadastroCandidatoOrderByWithRelationInput | cadastroCandidatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cadastroCandidatoes.
     */
    cursor?: cadastroCandidatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastroCandidatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastroCandidatoes.
     */
    skip?: number
    distinct?: CadastroCandidatoScalarFieldEnum | CadastroCandidatoScalarFieldEnum[]
  }

  /**
   * cadastroCandidato create
   */
  export type cadastroCandidatoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroCandidato
     */
    select?: cadastroCandidatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroCandidato
     */
    omit?: cadastroCandidatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroCandidatoInclude<ExtArgs> | null
    /**
     * The data needed to create a cadastroCandidato.
     */
    data: XOR<cadastroCandidatoCreateInput, cadastroCandidatoUncheckedCreateInput>
  }

  /**
   * cadastroCandidato createMany
   */
  export type cadastroCandidatoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cadastroCandidatoes.
     */
    data: cadastroCandidatoCreateManyInput | cadastroCandidatoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cadastroCandidato createManyAndReturn
   */
  export type cadastroCandidatoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroCandidato
     */
    select?: cadastroCandidatoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroCandidato
     */
    omit?: cadastroCandidatoOmit<ExtArgs> | null
    /**
     * The data used to create many cadastroCandidatoes.
     */
    data: cadastroCandidatoCreateManyInput | cadastroCandidatoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroCandidatoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cadastroCandidato update
   */
  export type cadastroCandidatoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroCandidato
     */
    select?: cadastroCandidatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroCandidato
     */
    omit?: cadastroCandidatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroCandidatoInclude<ExtArgs> | null
    /**
     * The data needed to update a cadastroCandidato.
     */
    data: XOR<cadastroCandidatoUpdateInput, cadastroCandidatoUncheckedUpdateInput>
    /**
     * Choose, which cadastroCandidato to update.
     */
    where: cadastroCandidatoWhereUniqueInput
  }

  /**
   * cadastroCandidato updateMany
   */
  export type cadastroCandidatoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cadastroCandidatoes.
     */
    data: XOR<cadastroCandidatoUpdateManyMutationInput, cadastroCandidatoUncheckedUpdateManyInput>
    /**
     * Filter which cadastroCandidatoes to update
     */
    where?: cadastroCandidatoWhereInput
    /**
     * Limit how many cadastroCandidatoes to update.
     */
    limit?: number
  }

  /**
   * cadastroCandidato updateManyAndReturn
   */
  export type cadastroCandidatoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroCandidato
     */
    select?: cadastroCandidatoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroCandidato
     */
    omit?: cadastroCandidatoOmit<ExtArgs> | null
    /**
     * The data used to update cadastroCandidatoes.
     */
    data: XOR<cadastroCandidatoUpdateManyMutationInput, cadastroCandidatoUncheckedUpdateManyInput>
    /**
     * Filter which cadastroCandidatoes to update
     */
    where?: cadastroCandidatoWhereInput
    /**
     * Limit how many cadastroCandidatoes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroCandidatoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cadastroCandidato upsert
   */
  export type cadastroCandidatoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroCandidato
     */
    select?: cadastroCandidatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroCandidato
     */
    omit?: cadastroCandidatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroCandidatoInclude<ExtArgs> | null
    /**
     * The filter to search for the cadastroCandidato to update in case it exists.
     */
    where: cadastroCandidatoWhereUniqueInput
    /**
     * In case the cadastroCandidato found by the `where` argument doesn't exist, create a new cadastroCandidato with this data.
     */
    create: XOR<cadastroCandidatoCreateInput, cadastroCandidatoUncheckedCreateInput>
    /**
     * In case the cadastroCandidato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cadastroCandidatoUpdateInput, cadastroCandidatoUncheckedUpdateInput>
  }

  /**
   * cadastroCandidato delete
   */
  export type cadastroCandidatoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroCandidato
     */
    select?: cadastroCandidatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroCandidato
     */
    omit?: cadastroCandidatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroCandidatoInclude<ExtArgs> | null
    /**
     * Filter which cadastroCandidato to delete.
     */
    where: cadastroCandidatoWhereUniqueInput
  }

  /**
   * cadastroCandidato deleteMany
   */
  export type cadastroCandidatoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cadastroCandidatoes to delete
     */
    where?: cadastroCandidatoWhereInput
    /**
     * Limit how many cadastroCandidatoes to delete.
     */
    limit?: number
  }

  /**
   * cadastroCandidato.candidaturas
   */
  export type cadastroCandidato$candidaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatura
     */
    select?: candidaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatura
     */
    omit?: candidaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturaInclude<ExtArgs> | null
    where?: candidaturaWhereInput
    orderBy?: candidaturaOrderByWithRelationInput | candidaturaOrderByWithRelationInput[]
    cursor?: candidaturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidaturaScalarFieldEnum | CandidaturaScalarFieldEnum[]
  }

  /**
   * cadastroCandidato without action
   */
  export type cadastroCandidatoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroCandidato
     */
    select?: cadastroCandidatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroCandidato
     */
    omit?: cadastroCandidatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroCandidatoInclude<ExtArgs> | null
  }


  /**
   * Model cadastroEmpresa
   */

  export type AggregateCadastroEmpresa = {
    _count: CadastroEmpresaCountAggregateOutputType | null
    _avg: CadastroEmpresaAvgAggregateOutputType | null
    _sum: CadastroEmpresaSumAggregateOutputType | null
    _min: CadastroEmpresaMinAggregateOutputType | null
    _max: CadastroEmpresaMaxAggregateOutputType | null
  }

  export type CadastroEmpresaAvgAggregateOutputType = {
    idEmpresa: number | null
    enderecoId: number | null
  }

  export type CadastroEmpresaSumAggregateOutputType = {
    idEmpresa: number | null
    enderecoId: number | null
  }

  export type CadastroEmpresaMinAggregateOutputType = {
    idEmpresa: number | null
    nomeEmpresa: string | null
    cnpj: string | null
    segmento: string | null
    emailCorporativo: string | null
    telefoneCorporativo: string | null
    enderecoId: number | null
    senhaEmpresa: string | null
  }

  export type CadastroEmpresaMaxAggregateOutputType = {
    idEmpresa: number | null
    nomeEmpresa: string | null
    cnpj: string | null
    segmento: string | null
    emailCorporativo: string | null
    telefoneCorporativo: string | null
    enderecoId: number | null
    senhaEmpresa: string | null
  }

  export type CadastroEmpresaCountAggregateOutputType = {
    idEmpresa: number
    nomeEmpresa: number
    cnpj: number
    segmento: number
    emailCorporativo: number
    telefoneCorporativo: number
    enderecoId: number
    senhaEmpresa: number
    _all: number
  }


  export type CadastroEmpresaAvgAggregateInputType = {
    idEmpresa?: true
    enderecoId?: true
  }

  export type CadastroEmpresaSumAggregateInputType = {
    idEmpresa?: true
    enderecoId?: true
  }

  export type CadastroEmpresaMinAggregateInputType = {
    idEmpresa?: true
    nomeEmpresa?: true
    cnpj?: true
    segmento?: true
    emailCorporativo?: true
    telefoneCorporativo?: true
    enderecoId?: true
    senhaEmpresa?: true
  }

  export type CadastroEmpresaMaxAggregateInputType = {
    idEmpresa?: true
    nomeEmpresa?: true
    cnpj?: true
    segmento?: true
    emailCorporativo?: true
    telefoneCorporativo?: true
    enderecoId?: true
    senhaEmpresa?: true
  }

  export type CadastroEmpresaCountAggregateInputType = {
    idEmpresa?: true
    nomeEmpresa?: true
    cnpj?: true
    segmento?: true
    emailCorporativo?: true
    telefoneCorporativo?: true
    enderecoId?: true
    senhaEmpresa?: true
    _all?: true
  }

  export type CadastroEmpresaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cadastroEmpresa to aggregate.
     */
    where?: cadastroEmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastroEmpresas to fetch.
     */
    orderBy?: cadastroEmpresaOrderByWithRelationInput | cadastroEmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cadastroEmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastroEmpresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastroEmpresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cadastroEmpresas
    **/
    _count?: true | CadastroEmpresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CadastroEmpresaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CadastroEmpresaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CadastroEmpresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CadastroEmpresaMaxAggregateInputType
  }

  export type GetCadastroEmpresaAggregateType<T extends CadastroEmpresaAggregateArgs> = {
        [P in keyof T & keyof AggregateCadastroEmpresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCadastroEmpresa[P]>
      : GetScalarType<T[P], AggregateCadastroEmpresa[P]>
  }




  export type cadastroEmpresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cadastroEmpresaWhereInput
    orderBy?: cadastroEmpresaOrderByWithAggregationInput | cadastroEmpresaOrderByWithAggregationInput[]
    by: CadastroEmpresaScalarFieldEnum[] | CadastroEmpresaScalarFieldEnum
    having?: cadastroEmpresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CadastroEmpresaCountAggregateInputType | true
    _avg?: CadastroEmpresaAvgAggregateInputType
    _sum?: CadastroEmpresaSumAggregateInputType
    _min?: CadastroEmpresaMinAggregateInputType
    _max?: CadastroEmpresaMaxAggregateInputType
  }

  export type CadastroEmpresaGroupByOutputType = {
    idEmpresa: number
    nomeEmpresa: string
    cnpj: string
    segmento: string
    emailCorporativo: string
    telefoneCorporativo: string
    enderecoId: number
    senhaEmpresa: string
    _count: CadastroEmpresaCountAggregateOutputType | null
    _avg: CadastroEmpresaAvgAggregateOutputType | null
    _sum: CadastroEmpresaSumAggregateOutputType | null
    _min: CadastroEmpresaMinAggregateOutputType | null
    _max: CadastroEmpresaMaxAggregateOutputType | null
  }

  type GetCadastroEmpresaGroupByPayload<T extends cadastroEmpresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CadastroEmpresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CadastroEmpresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CadastroEmpresaGroupByOutputType[P]>
            : GetScalarType<T[P], CadastroEmpresaGroupByOutputType[P]>
        }
      >
    >


  export type cadastroEmpresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idEmpresa?: boolean
    nomeEmpresa?: boolean
    cnpj?: boolean
    segmento?: boolean
    emailCorporativo?: boolean
    telefoneCorporativo?: boolean
    enderecoId?: boolean
    senhaEmpresa?: boolean
    vagas?: boolean | cadastroEmpresa$vagasArgs<ExtArgs>
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
    _count?: boolean | CadastroEmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cadastroEmpresa"]>

  export type cadastroEmpresaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idEmpresa?: boolean
    nomeEmpresa?: boolean
    cnpj?: boolean
    segmento?: boolean
    emailCorporativo?: boolean
    telefoneCorporativo?: boolean
    enderecoId?: boolean
    senhaEmpresa?: boolean
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cadastroEmpresa"]>

  export type cadastroEmpresaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idEmpresa?: boolean
    nomeEmpresa?: boolean
    cnpj?: boolean
    segmento?: boolean
    emailCorporativo?: boolean
    telefoneCorporativo?: boolean
    enderecoId?: boolean
    senhaEmpresa?: boolean
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cadastroEmpresa"]>

  export type cadastroEmpresaSelectScalar = {
    idEmpresa?: boolean
    nomeEmpresa?: boolean
    cnpj?: boolean
    segmento?: boolean
    emailCorporativo?: boolean
    telefoneCorporativo?: boolean
    enderecoId?: boolean
    senhaEmpresa?: boolean
  }

  export type cadastroEmpresaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idEmpresa" | "nomeEmpresa" | "cnpj" | "segmento" | "emailCorporativo" | "telefoneCorporativo" | "enderecoId" | "senhaEmpresa", ExtArgs["result"]["cadastroEmpresa"]>
  export type cadastroEmpresaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vagas?: boolean | cadastroEmpresa$vagasArgs<ExtArgs>
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
    _count?: boolean | CadastroEmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cadastroEmpresaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
  }
  export type cadastroEmpresaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
  }

  export type $cadastroEmpresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cadastroEmpresa"
    objects: {
      vagas: Prisma.$cadastrarVagaPayload<ExtArgs>[]
      endereco: Prisma.$EnderecoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idEmpresa: number
      nomeEmpresa: string
      cnpj: string
      segmento: string
      emailCorporativo: string
      telefoneCorporativo: string
      enderecoId: number
      senhaEmpresa: string
    }, ExtArgs["result"]["cadastroEmpresa"]>
    composites: {}
  }

  type cadastroEmpresaGetPayload<S extends boolean | null | undefined | cadastroEmpresaDefaultArgs> = $Result.GetResult<Prisma.$cadastroEmpresaPayload, S>

  type cadastroEmpresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cadastroEmpresaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CadastroEmpresaCountAggregateInputType | true
    }

  export interface cadastroEmpresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cadastroEmpresa'], meta: { name: 'cadastroEmpresa' } }
    /**
     * Find zero or one CadastroEmpresa that matches the filter.
     * @param {cadastroEmpresaFindUniqueArgs} args - Arguments to find a CadastroEmpresa
     * @example
     * // Get one CadastroEmpresa
     * const cadastroEmpresa = await prisma.cadastroEmpresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cadastroEmpresaFindUniqueArgs>(args: SelectSubset<T, cadastroEmpresaFindUniqueArgs<ExtArgs>>): Prisma__cadastroEmpresaClient<$Result.GetResult<Prisma.$cadastroEmpresaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CadastroEmpresa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cadastroEmpresaFindUniqueOrThrowArgs} args - Arguments to find a CadastroEmpresa
     * @example
     * // Get one CadastroEmpresa
     * const cadastroEmpresa = await prisma.cadastroEmpresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cadastroEmpresaFindUniqueOrThrowArgs>(args: SelectSubset<T, cadastroEmpresaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cadastroEmpresaClient<$Result.GetResult<Prisma.$cadastroEmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CadastroEmpresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroEmpresaFindFirstArgs} args - Arguments to find a CadastroEmpresa
     * @example
     * // Get one CadastroEmpresa
     * const cadastroEmpresa = await prisma.cadastroEmpresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cadastroEmpresaFindFirstArgs>(args?: SelectSubset<T, cadastroEmpresaFindFirstArgs<ExtArgs>>): Prisma__cadastroEmpresaClient<$Result.GetResult<Prisma.$cadastroEmpresaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CadastroEmpresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroEmpresaFindFirstOrThrowArgs} args - Arguments to find a CadastroEmpresa
     * @example
     * // Get one CadastroEmpresa
     * const cadastroEmpresa = await prisma.cadastroEmpresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cadastroEmpresaFindFirstOrThrowArgs>(args?: SelectSubset<T, cadastroEmpresaFindFirstOrThrowArgs<ExtArgs>>): Prisma__cadastroEmpresaClient<$Result.GetResult<Prisma.$cadastroEmpresaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CadastroEmpresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroEmpresaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CadastroEmpresas
     * const cadastroEmpresas = await prisma.cadastroEmpresa.findMany()
     * 
     * // Get first 10 CadastroEmpresas
     * const cadastroEmpresas = await prisma.cadastroEmpresa.findMany({ take: 10 })
     * 
     * // Only select the `idEmpresa`
     * const cadastroEmpresaWithIdEmpresaOnly = await prisma.cadastroEmpresa.findMany({ select: { idEmpresa: true } })
     * 
     */
    findMany<T extends cadastroEmpresaFindManyArgs>(args?: SelectSubset<T, cadastroEmpresaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cadastroEmpresaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CadastroEmpresa.
     * @param {cadastroEmpresaCreateArgs} args - Arguments to create a CadastroEmpresa.
     * @example
     * // Create one CadastroEmpresa
     * const CadastroEmpresa = await prisma.cadastroEmpresa.create({
     *   data: {
     *     // ... data to create a CadastroEmpresa
     *   }
     * })
     * 
     */
    create<T extends cadastroEmpresaCreateArgs>(args: SelectSubset<T, cadastroEmpresaCreateArgs<ExtArgs>>): Prisma__cadastroEmpresaClient<$Result.GetResult<Prisma.$cadastroEmpresaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CadastroEmpresas.
     * @param {cadastroEmpresaCreateManyArgs} args - Arguments to create many CadastroEmpresas.
     * @example
     * // Create many CadastroEmpresas
     * const cadastroEmpresa = await prisma.cadastroEmpresa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cadastroEmpresaCreateManyArgs>(args?: SelectSubset<T, cadastroEmpresaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CadastroEmpresas and returns the data saved in the database.
     * @param {cadastroEmpresaCreateManyAndReturnArgs} args - Arguments to create many CadastroEmpresas.
     * @example
     * // Create many CadastroEmpresas
     * const cadastroEmpresa = await prisma.cadastroEmpresa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CadastroEmpresas and only return the `idEmpresa`
     * const cadastroEmpresaWithIdEmpresaOnly = await prisma.cadastroEmpresa.createManyAndReturn({
     *   select: { idEmpresa: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cadastroEmpresaCreateManyAndReturnArgs>(args?: SelectSubset<T, cadastroEmpresaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cadastroEmpresaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CadastroEmpresa.
     * @param {cadastroEmpresaDeleteArgs} args - Arguments to delete one CadastroEmpresa.
     * @example
     * // Delete one CadastroEmpresa
     * const CadastroEmpresa = await prisma.cadastroEmpresa.delete({
     *   where: {
     *     // ... filter to delete one CadastroEmpresa
     *   }
     * })
     * 
     */
    delete<T extends cadastroEmpresaDeleteArgs>(args: SelectSubset<T, cadastroEmpresaDeleteArgs<ExtArgs>>): Prisma__cadastroEmpresaClient<$Result.GetResult<Prisma.$cadastroEmpresaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CadastroEmpresa.
     * @param {cadastroEmpresaUpdateArgs} args - Arguments to update one CadastroEmpresa.
     * @example
     * // Update one CadastroEmpresa
     * const cadastroEmpresa = await prisma.cadastroEmpresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cadastroEmpresaUpdateArgs>(args: SelectSubset<T, cadastroEmpresaUpdateArgs<ExtArgs>>): Prisma__cadastroEmpresaClient<$Result.GetResult<Prisma.$cadastroEmpresaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CadastroEmpresas.
     * @param {cadastroEmpresaDeleteManyArgs} args - Arguments to filter CadastroEmpresas to delete.
     * @example
     * // Delete a few CadastroEmpresas
     * const { count } = await prisma.cadastroEmpresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cadastroEmpresaDeleteManyArgs>(args?: SelectSubset<T, cadastroEmpresaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CadastroEmpresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroEmpresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CadastroEmpresas
     * const cadastroEmpresa = await prisma.cadastroEmpresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cadastroEmpresaUpdateManyArgs>(args: SelectSubset<T, cadastroEmpresaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CadastroEmpresas and returns the data updated in the database.
     * @param {cadastroEmpresaUpdateManyAndReturnArgs} args - Arguments to update many CadastroEmpresas.
     * @example
     * // Update many CadastroEmpresas
     * const cadastroEmpresa = await prisma.cadastroEmpresa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CadastroEmpresas and only return the `idEmpresa`
     * const cadastroEmpresaWithIdEmpresaOnly = await prisma.cadastroEmpresa.updateManyAndReturn({
     *   select: { idEmpresa: true },
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
    updateManyAndReturn<T extends cadastroEmpresaUpdateManyAndReturnArgs>(args: SelectSubset<T, cadastroEmpresaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cadastroEmpresaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CadastroEmpresa.
     * @param {cadastroEmpresaUpsertArgs} args - Arguments to update or create a CadastroEmpresa.
     * @example
     * // Update or create a CadastroEmpresa
     * const cadastroEmpresa = await prisma.cadastroEmpresa.upsert({
     *   create: {
     *     // ... data to create a CadastroEmpresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CadastroEmpresa we want to update
     *   }
     * })
     */
    upsert<T extends cadastroEmpresaUpsertArgs>(args: SelectSubset<T, cadastroEmpresaUpsertArgs<ExtArgs>>): Prisma__cadastroEmpresaClient<$Result.GetResult<Prisma.$cadastroEmpresaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CadastroEmpresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroEmpresaCountArgs} args - Arguments to filter CadastroEmpresas to count.
     * @example
     * // Count the number of CadastroEmpresas
     * const count = await prisma.cadastroEmpresa.count({
     *   where: {
     *     // ... the filter for the CadastroEmpresas we want to count
     *   }
     * })
    **/
    count<T extends cadastroEmpresaCountArgs>(
      args?: Subset<T, cadastroEmpresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CadastroEmpresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CadastroEmpresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CadastroEmpresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CadastroEmpresaAggregateArgs>(args: Subset<T, CadastroEmpresaAggregateArgs>): Prisma.PrismaPromise<GetCadastroEmpresaAggregateType<T>>

    /**
     * Group by CadastroEmpresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroEmpresaGroupByArgs} args - Group by arguments.
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
      T extends cadastroEmpresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cadastroEmpresaGroupByArgs['orderBy'] }
        : { orderBy?: cadastroEmpresaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cadastroEmpresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCadastroEmpresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cadastroEmpresa model
   */
  readonly fields: cadastroEmpresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cadastroEmpresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cadastroEmpresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vagas<T extends cadastroEmpresa$vagasArgs<ExtArgs> = {}>(args?: Subset<T, cadastroEmpresa$vagasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cadastrarVagaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    endereco<T extends EnderecoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnderecoDefaultArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the cadastroEmpresa model
   */
  interface cadastroEmpresaFieldRefs {
    readonly idEmpresa: FieldRef<"cadastroEmpresa", 'Int'>
    readonly nomeEmpresa: FieldRef<"cadastroEmpresa", 'String'>
    readonly cnpj: FieldRef<"cadastroEmpresa", 'String'>
    readonly segmento: FieldRef<"cadastroEmpresa", 'String'>
    readonly emailCorporativo: FieldRef<"cadastroEmpresa", 'String'>
    readonly telefoneCorporativo: FieldRef<"cadastroEmpresa", 'String'>
    readonly enderecoId: FieldRef<"cadastroEmpresa", 'Int'>
    readonly senhaEmpresa: FieldRef<"cadastroEmpresa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cadastroEmpresa findUnique
   */
  export type cadastroEmpresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroEmpresa
     */
    select?: cadastroEmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroEmpresa
     */
    omit?: cadastroEmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroEmpresaInclude<ExtArgs> | null
    /**
     * Filter, which cadastroEmpresa to fetch.
     */
    where: cadastroEmpresaWhereUniqueInput
  }

  /**
   * cadastroEmpresa findUniqueOrThrow
   */
  export type cadastroEmpresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroEmpresa
     */
    select?: cadastroEmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroEmpresa
     */
    omit?: cadastroEmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroEmpresaInclude<ExtArgs> | null
    /**
     * Filter, which cadastroEmpresa to fetch.
     */
    where: cadastroEmpresaWhereUniqueInput
  }

  /**
   * cadastroEmpresa findFirst
   */
  export type cadastroEmpresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroEmpresa
     */
    select?: cadastroEmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroEmpresa
     */
    omit?: cadastroEmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroEmpresaInclude<ExtArgs> | null
    /**
     * Filter, which cadastroEmpresa to fetch.
     */
    where?: cadastroEmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastroEmpresas to fetch.
     */
    orderBy?: cadastroEmpresaOrderByWithRelationInput | cadastroEmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cadastroEmpresas.
     */
    cursor?: cadastroEmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastroEmpresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastroEmpresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cadastroEmpresas.
     */
    distinct?: CadastroEmpresaScalarFieldEnum | CadastroEmpresaScalarFieldEnum[]
  }

  /**
   * cadastroEmpresa findFirstOrThrow
   */
  export type cadastroEmpresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroEmpresa
     */
    select?: cadastroEmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroEmpresa
     */
    omit?: cadastroEmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroEmpresaInclude<ExtArgs> | null
    /**
     * Filter, which cadastroEmpresa to fetch.
     */
    where?: cadastroEmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastroEmpresas to fetch.
     */
    orderBy?: cadastroEmpresaOrderByWithRelationInput | cadastroEmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cadastroEmpresas.
     */
    cursor?: cadastroEmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastroEmpresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastroEmpresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cadastroEmpresas.
     */
    distinct?: CadastroEmpresaScalarFieldEnum | CadastroEmpresaScalarFieldEnum[]
  }

  /**
   * cadastroEmpresa findMany
   */
  export type cadastroEmpresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroEmpresa
     */
    select?: cadastroEmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroEmpresa
     */
    omit?: cadastroEmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroEmpresaInclude<ExtArgs> | null
    /**
     * Filter, which cadastroEmpresas to fetch.
     */
    where?: cadastroEmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastroEmpresas to fetch.
     */
    orderBy?: cadastroEmpresaOrderByWithRelationInput | cadastroEmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cadastroEmpresas.
     */
    cursor?: cadastroEmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastroEmpresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastroEmpresas.
     */
    skip?: number
    distinct?: CadastroEmpresaScalarFieldEnum | CadastroEmpresaScalarFieldEnum[]
  }

  /**
   * cadastroEmpresa create
   */
  export type cadastroEmpresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroEmpresa
     */
    select?: cadastroEmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroEmpresa
     */
    omit?: cadastroEmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroEmpresaInclude<ExtArgs> | null
    /**
     * The data needed to create a cadastroEmpresa.
     */
    data: XOR<cadastroEmpresaCreateInput, cadastroEmpresaUncheckedCreateInput>
  }

  /**
   * cadastroEmpresa createMany
   */
  export type cadastroEmpresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cadastroEmpresas.
     */
    data: cadastroEmpresaCreateManyInput | cadastroEmpresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cadastroEmpresa createManyAndReturn
   */
  export type cadastroEmpresaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroEmpresa
     */
    select?: cadastroEmpresaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroEmpresa
     */
    omit?: cadastroEmpresaOmit<ExtArgs> | null
    /**
     * The data used to create many cadastroEmpresas.
     */
    data: cadastroEmpresaCreateManyInput | cadastroEmpresaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroEmpresaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cadastroEmpresa update
   */
  export type cadastroEmpresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroEmpresa
     */
    select?: cadastroEmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroEmpresa
     */
    omit?: cadastroEmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroEmpresaInclude<ExtArgs> | null
    /**
     * The data needed to update a cadastroEmpresa.
     */
    data: XOR<cadastroEmpresaUpdateInput, cadastroEmpresaUncheckedUpdateInput>
    /**
     * Choose, which cadastroEmpresa to update.
     */
    where: cadastroEmpresaWhereUniqueInput
  }

  /**
   * cadastroEmpresa updateMany
   */
  export type cadastroEmpresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cadastroEmpresas.
     */
    data: XOR<cadastroEmpresaUpdateManyMutationInput, cadastroEmpresaUncheckedUpdateManyInput>
    /**
     * Filter which cadastroEmpresas to update
     */
    where?: cadastroEmpresaWhereInput
    /**
     * Limit how many cadastroEmpresas to update.
     */
    limit?: number
  }

  /**
   * cadastroEmpresa updateManyAndReturn
   */
  export type cadastroEmpresaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroEmpresa
     */
    select?: cadastroEmpresaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroEmpresa
     */
    omit?: cadastroEmpresaOmit<ExtArgs> | null
    /**
     * The data used to update cadastroEmpresas.
     */
    data: XOR<cadastroEmpresaUpdateManyMutationInput, cadastroEmpresaUncheckedUpdateManyInput>
    /**
     * Filter which cadastroEmpresas to update
     */
    where?: cadastroEmpresaWhereInput
    /**
     * Limit how many cadastroEmpresas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroEmpresaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cadastroEmpresa upsert
   */
  export type cadastroEmpresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroEmpresa
     */
    select?: cadastroEmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroEmpresa
     */
    omit?: cadastroEmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroEmpresaInclude<ExtArgs> | null
    /**
     * The filter to search for the cadastroEmpresa to update in case it exists.
     */
    where: cadastroEmpresaWhereUniqueInput
    /**
     * In case the cadastroEmpresa found by the `where` argument doesn't exist, create a new cadastroEmpresa with this data.
     */
    create: XOR<cadastroEmpresaCreateInput, cadastroEmpresaUncheckedCreateInput>
    /**
     * In case the cadastroEmpresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cadastroEmpresaUpdateInput, cadastroEmpresaUncheckedUpdateInput>
  }

  /**
   * cadastroEmpresa delete
   */
  export type cadastroEmpresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroEmpresa
     */
    select?: cadastroEmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroEmpresa
     */
    omit?: cadastroEmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroEmpresaInclude<ExtArgs> | null
    /**
     * Filter which cadastroEmpresa to delete.
     */
    where: cadastroEmpresaWhereUniqueInput
  }

  /**
   * cadastroEmpresa deleteMany
   */
  export type cadastroEmpresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cadastroEmpresas to delete
     */
    where?: cadastroEmpresaWhereInput
    /**
     * Limit how many cadastroEmpresas to delete.
     */
    limit?: number
  }

  /**
   * cadastroEmpresa.vagas
   */
  export type cadastroEmpresa$vagasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastrarVaga
     */
    select?: cadastrarVagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastrarVaga
     */
    omit?: cadastrarVagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrarVagaInclude<ExtArgs> | null
    where?: cadastrarVagaWhereInput
    orderBy?: cadastrarVagaOrderByWithRelationInput | cadastrarVagaOrderByWithRelationInput[]
    cursor?: cadastrarVagaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CadastrarVagaScalarFieldEnum | CadastrarVagaScalarFieldEnum[]
  }

  /**
   * cadastroEmpresa without action
   */
  export type cadastroEmpresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroEmpresa
     */
    select?: cadastroEmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroEmpresa
     */
    omit?: cadastroEmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroEmpresaInclude<ExtArgs> | null
  }


  /**
   * Model cadastrarVaga
   */

  export type AggregateCadastrarVaga = {
    _count: CadastrarVagaCountAggregateOutputType | null
    _avg: CadastrarVagaAvgAggregateOutputType | null
    _sum: CadastrarVagaSumAggregateOutputType | null
    _min: CadastrarVagaMinAggregateOutputType | null
    _max: CadastrarVagaMaxAggregateOutputType | null
  }

  export type CadastrarVagaAvgAggregateOutputType = {
    idVaga: number | null
    empresaId: number | null
  }

  export type CadastrarVagaSumAggregateOutputType = {
    idVaga: number | null
    empresaId: number | null
  }

  export type CadastrarVagaMinAggregateOutputType = {
    idVaga: number | null
    titulo: string | null
    descricao: string | null
    requisitos: string | null
    salario: string | null
    tipoContrato: string | null
    modalidade: string | null
    localizacao: string | null
    dataPublicacao: Date | null
    status: string | null
    empresaId: number | null
  }

  export type CadastrarVagaMaxAggregateOutputType = {
    idVaga: number | null
    titulo: string | null
    descricao: string | null
    requisitos: string | null
    salario: string | null
    tipoContrato: string | null
    modalidade: string | null
    localizacao: string | null
    dataPublicacao: Date | null
    status: string | null
    empresaId: number | null
  }

  export type CadastrarVagaCountAggregateOutputType = {
    idVaga: number
    titulo: number
    descricao: number
    requisitos: number
    salario: number
    tipoContrato: number
    modalidade: number
    localizacao: number
    dataPublicacao: number
    status: number
    skills: number
    beneficios: number
    empresaId: number
    _all: number
  }


  export type CadastrarVagaAvgAggregateInputType = {
    idVaga?: true
    empresaId?: true
  }

  export type CadastrarVagaSumAggregateInputType = {
    idVaga?: true
    empresaId?: true
  }

  export type CadastrarVagaMinAggregateInputType = {
    idVaga?: true
    titulo?: true
    descricao?: true
    requisitos?: true
    salario?: true
    tipoContrato?: true
    modalidade?: true
    localizacao?: true
    dataPublicacao?: true
    status?: true
    empresaId?: true
  }

  export type CadastrarVagaMaxAggregateInputType = {
    idVaga?: true
    titulo?: true
    descricao?: true
    requisitos?: true
    salario?: true
    tipoContrato?: true
    modalidade?: true
    localizacao?: true
    dataPublicacao?: true
    status?: true
    empresaId?: true
  }

  export type CadastrarVagaCountAggregateInputType = {
    idVaga?: true
    titulo?: true
    descricao?: true
    requisitos?: true
    salario?: true
    tipoContrato?: true
    modalidade?: true
    localizacao?: true
    dataPublicacao?: true
    status?: true
    skills?: true
    beneficios?: true
    empresaId?: true
    _all?: true
  }

  export type CadastrarVagaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cadastrarVaga to aggregate.
     */
    where?: cadastrarVagaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastrarVagas to fetch.
     */
    orderBy?: cadastrarVagaOrderByWithRelationInput | cadastrarVagaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cadastrarVagaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastrarVagas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastrarVagas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cadastrarVagas
    **/
    _count?: true | CadastrarVagaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CadastrarVagaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CadastrarVagaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CadastrarVagaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CadastrarVagaMaxAggregateInputType
  }

  export type GetCadastrarVagaAggregateType<T extends CadastrarVagaAggregateArgs> = {
        [P in keyof T & keyof AggregateCadastrarVaga]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCadastrarVaga[P]>
      : GetScalarType<T[P], AggregateCadastrarVaga[P]>
  }




  export type cadastrarVagaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cadastrarVagaWhereInput
    orderBy?: cadastrarVagaOrderByWithAggregationInput | cadastrarVagaOrderByWithAggregationInput[]
    by: CadastrarVagaScalarFieldEnum[] | CadastrarVagaScalarFieldEnum
    having?: cadastrarVagaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CadastrarVagaCountAggregateInputType | true
    _avg?: CadastrarVagaAvgAggregateInputType
    _sum?: CadastrarVagaSumAggregateInputType
    _min?: CadastrarVagaMinAggregateInputType
    _max?: CadastrarVagaMaxAggregateInputType
  }

  export type CadastrarVagaGroupByOutputType = {
    idVaga: number
    titulo: string
    descricao: string
    requisitos: string
    salario: string
    tipoContrato: string
    modalidade: string
    localizacao: string
    dataPublicacao: Date
    status: string
    skills: string[]
    beneficios: string[]
    empresaId: number
    _count: CadastrarVagaCountAggregateOutputType | null
    _avg: CadastrarVagaAvgAggregateOutputType | null
    _sum: CadastrarVagaSumAggregateOutputType | null
    _min: CadastrarVagaMinAggregateOutputType | null
    _max: CadastrarVagaMaxAggregateOutputType | null
  }

  type GetCadastrarVagaGroupByPayload<T extends cadastrarVagaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CadastrarVagaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CadastrarVagaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CadastrarVagaGroupByOutputType[P]>
            : GetScalarType<T[P], CadastrarVagaGroupByOutputType[P]>
        }
      >
    >


  export type cadastrarVagaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idVaga?: boolean
    titulo?: boolean
    descricao?: boolean
    requisitos?: boolean
    salario?: boolean
    tipoContrato?: boolean
    modalidade?: boolean
    localizacao?: boolean
    dataPublicacao?: boolean
    status?: boolean
    skills?: boolean
    beneficios?: boolean
    empresaId?: boolean
    empresa?: boolean | cadastroEmpresaDefaultArgs<ExtArgs>
    candidaturas?: boolean | cadastrarVaga$candidaturasArgs<ExtArgs>
    _count?: boolean | CadastrarVagaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cadastrarVaga"]>

  export type cadastrarVagaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idVaga?: boolean
    titulo?: boolean
    descricao?: boolean
    requisitos?: boolean
    salario?: boolean
    tipoContrato?: boolean
    modalidade?: boolean
    localizacao?: boolean
    dataPublicacao?: boolean
    status?: boolean
    skills?: boolean
    beneficios?: boolean
    empresaId?: boolean
    empresa?: boolean | cadastroEmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cadastrarVaga"]>

  export type cadastrarVagaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idVaga?: boolean
    titulo?: boolean
    descricao?: boolean
    requisitos?: boolean
    salario?: boolean
    tipoContrato?: boolean
    modalidade?: boolean
    localizacao?: boolean
    dataPublicacao?: boolean
    status?: boolean
    skills?: boolean
    beneficios?: boolean
    empresaId?: boolean
    empresa?: boolean | cadastroEmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cadastrarVaga"]>

  export type cadastrarVagaSelectScalar = {
    idVaga?: boolean
    titulo?: boolean
    descricao?: boolean
    requisitos?: boolean
    salario?: boolean
    tipoContrato?: boolean
    modalidade?: boolean
    localizacao?: boolean
    dataPublicacao?: boolean
    status?: boolean
    skills?: boolean
    beneficios?: boolean
    empresaId?: boolean
  }

  export type cadastrarVagaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idVaga" | "titulo" | "descricao" | "requisitos" | "salario" | "tipoContrato" | "modalidade" | "localizacao" | "dataPublicacao" | "status" | "skills" | "beneficios" | "empresaId", ExtArgs["result"]["cadastrarVaga"]>
  export type cadastrarVagaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | cadastroEmpresaDefaultArgs<ExtArgs>
    candidaturas?: boolean | cadastrarVaga$candidaturasArgs<ExtArgs>
    _count?: boolean | CadastrarVagaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cadastrarVagaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | cadastroEmpresaDefaultArgs<ExtArgs>
  }
  export type cadastrarVagaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | cadastroEmpresaDefaultArgs<ExtArgs>
  }

  export type $cadastrarVagaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cadastrarVaga"
    objects: {
      empresa: Prisma.$cadastroEmpresaPayload<ExtArgs>
      candidaturas: Prisma.$candidaturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idVaga: number
      titulo: string
      descricao: string
      requisitos: string
      salario: string
      tipoContrato: string
      modalidade: string
      localizacao: string
      dataPublicacao: Date
      status: string
      skills: string[]
      beneficios: string[]
      empresaId: number
    }, ExtArgs["result"]["cadastrarVaga"]>
    composites: {}
  }

  type cadastrarVagaGetPayload<S extends boolean | null | undefined | cadastrarVagaDefaultArgs> = $Result.GetResult<Prisma.$cadastrarVagaPayload, S>

  type cadastrarVagaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cadastrarVagaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CadastrarVagaCountAggregateInputType | true
    }

  export interface cadastrarVagaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cadastrarVaga'], meta: { name: 'cadastrarVaga' } }
    /**
     * Find zero or one CadastrarVaga that matches the filter.
     * @param {cadastrarVagaFindUniqueArgs} args - Arguments to find a CadastrarVaga
     * @example
     * // Get one CadastrarVaga
     * const cadastrarVaga = await prisma.cadastrarVaga.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cadastrarVagaFindUniqueArgs>(args: SelectSubset<T, cadastrarVagaFindUniqueArgs<ExtArgs>>): Prisma__cadastrarVagaClient<$Result.GetResult<Prisma.$cadastrarVagaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CadastrarVaga that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cadastrarVagaFindUniqueOrThrowArgs} args - Arguments to find a CadastrarVaga
     * @example
     * // Get one CadastrarVaga
     * const cadastrarVaga = await prisma.cadastrarVaga.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cadastrarVagaFindUniqueOrThrowArgs>(args: SelectSubset<T, cadastrarVagaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cadastrarVagaClient<$Result.GetResult<Prisma.$cadastrarVagaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CadastrarVaga that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastrarVagaFindFirstArgs} args - Arguments to find a CadastrarVaga
     * @example
     * // Get one CadastrarVaga
     * const cadastrarVaga = await prisma.cadastrarVaga.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cadastrarVagaFindFirstArgs>(args?: SelectSubset<T, cadastrarVagaFindFirstArgs<ExtArgs>>): Prisma__cadastrarVagaClient<$Result.GetResult<Prisma.$cadastrarVagaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CadastrarVaga that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastrarVagaFindFirstOrThrowArgs} args - Arguments to find a CadastrarVaga
     * @example
     * // Get one CadastrarVaga
     * const cadastrarVaga = await prisma.cadastrarVaga.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cadastrarVagaFindFirstOrThrowArgs>(args?: SelectSubset<T, cadastrarVagaFindFirstOrThrowArgs<ExtArgs>>): Prisma__cadastrarVagaClient<$Result.GetResult<Prisma.$cadastrarVagaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CadastrarVagas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastrarVagaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CadastrarVagas
     * const cadastrarVagas = await prisma.cadastrarVaga.findMany()
     * 
     * // Get first 10 CadastrarVagas
     * const cadastrarVagas = await prisma.cadastrarVaga.findMany({ take: 10 })
     * 
     * // Only select the `idVaga`
     * const cadastrarVagaWithIdVagaOnly = await prisma.cadastrarVaga.findMany({ select: { idVaga: true } })
     * 
     */
    findMany<T extends cadastrarVagaFindManyArgs>(args?: SelectSubset<T, cadastrarVagaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cadastrarVagaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CadastrarVaga.
     * @param {cadastrarVagaCreateArgs} args - Arguments to create a CadastrarVaga.
     * @example
     * // Create one CadastrarVaga
     * const CadastrarVaga = await prisma.cadastrarVaga.create({
     *   data: {
     *     // ... data to create a CadastrarVaga
     *   }
     * })
     * 
     */
    create<T extends cadastrarVagaCreateArgs>(args: SelectSubset<T, cadastrarVagaCreateArgs<ExtArgs>>): Prisma__cadastrarVagaClient<$Result.GetResult<Prisma.$cadastrarVagaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CadastrarVagas.
     * @param {cadastrarVagaCreateManyArgs} args - Arguments to create many CadastrarVagas.
     * @example
     * // Create many CadastrarVagas
     * const cadastrarVaga = await prisma.cadastrarVaga.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cadastrarVagaCreateManyArgs>(args?: SelectSubset<T, cadastrarVagaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CadastrarVagas and returns the data saved in the database.
     * @param {cadastrarVagaCreateManyAndReturnArgs} args - Arguments to create many CadastrarVagas.
     * @example
     * // Create many CadastrarVagas
     * const cadastrarVaga = await prisma.cadastrarVaga.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CadastrarVagas and only return the `idVaga`
     * const cadastrarVagaWithIdVagaOnly = await prisma.cadastrarVaga.createManyAndReturn({
     *   select: { idVaga: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cadastrarVagaCreateManyAndReturnArgs>(args?: SelectSubset<T, cadastrarVagaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cadastrarVagaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CadastrarVaga.
     * @param {cadastrarVagaDeleteArgs} args - Arguments to delete one CadastrarVaga.
     * @example
     * // Delete one CadastrarVaga
     * const CadastrarVaga = await prisma.cadastrarVaga.delete({
     *   where: {
     *     // ... filter to delete one CadastrarVaga
     *   }
     * })
     * 
     */
    delete<T extends cadastrarVagaDeleteArgs>(args: SelectSubset<T, cadastrarVagaDeleteArgs<ExtArgs>>): Prisma__cadastrarVagaClient<$Result.GetResult<Prisma.$cadastrarVagaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CadastrarVaga.
     * @param {cadastrarVagaUpdateArgs} args - Arguments to update one CadastrarVaga.
     * @example
     * // Update one CadastrarVaga
     * const cadastrarVaga = await prisma.cadastrarVaga.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cadastrarVagaUpdateArgs>(args: SelectSubset<T, cadastrarVagaUpdateArgs<ExtArgs>>): Prisma__cadastrarVagaClient<$Result.GetResult<Prisma.$cadastrarVagaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CadastrarVagas.
     * @param {cadastrarVagaDeleteManyArgs} args - Arguments to filter CadastrarVagas to delete.
     * @example
     * // Delete a few CadastrarVagas
     * const { count } = await prisma.cadastrarVaga.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cadastrarVagaDeleteManyArgs>(args?: SelectSubset<T, cadastrarVagaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CadastrarVagas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastrarVagaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CadastrarVagas
     * const cadastrarVaga = await prisma.cadastrarVaga.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cadastrarVagaUpdateManyArgs>(args: SelectSubset<T, cadastrarVagaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CadastrarVagas and returns the data updated in the database.
     * @param {cadastrarVagaUpdateManyAndReturnArgs} args - Arguments to update many CadastrarVagas.
     * @example
     * // Update many CadastrarVagas
     * const cadastrarVaga = await prisma.cadastrarVaga.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CadastrarVagas and only return the `idVaga`
     * const cadastrarVagaWithIdVagaOnly = await prisma.cadastrarVaga.updateManyAndReturn({
     *   select: { idVaga: true },
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
    updateManyAndReturn<T extends cadastrarVagaUpdateManyAndReturnArgs>(args: SelectSubset<T, cadastrarVagaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cadastrarVagaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CadastrarVaga.
     * @param {cadastrarVagaUpsertArgs} args - Arguments to update or create a CadastrarVaga.
     * @example
     * // Update or create a CadastrarVaga
     * const cadastrarVaga = await prisma.cadastrarVaga.upsert({
     *   create: {
     *     // ... data to create a CadastrarVaga
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CadastrarVaga we want to update
     *   }
     * })
     */
    upsert<T extends cadastrarVagaUpsertArgs>(args: SelectSubset<T, cadastrarVagaUpsertArgs<ExtArgs>>): Prisma__cadastrarVagaClient<$Result.GetResult<Prisma.$cadastrarVagaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CadastrarVagas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastrarVagaCountArgs} args - Arguments to filter CadastrarVagas to count.
     * @example
     * // Count the number of CadastrarVagas
     * const count = await prisma.cadastrarVaga.count({
     *   where: {
     *     // ... the filter for the CadastrarVagas we want to count
     *   }
     * })
    **/
    count<T extends cadastrarVagaCountArgs>(
      args?: Subset<T, cadastrarVagaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CadastrarVagaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CadastrarVaga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CadastrarVagaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CadastrarVagaAggregateArgs>(args: Subset<T, CadastrarVagaAggregateArgs>): Prisma.PrismaPromise<GetCadastrarVagaAggregateType<T>>

    /**
     * Group by CadastrarVaga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastrarVagaGroupByArgs} args - Group by arguments.
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
      T extends cadastrarVagaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cadastrarVagaGroupByArgs['orderBy'] }
        : { orderBy?: cadastrarVagaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cadastrarVagaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCadastrarVagaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cadastrarVaga model
   */
  readonly fields: cadastrarVagaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cadastrarVaga.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cadastrarVagaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends cadastroEmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cadastroEmpresaDefaultArgs<ExtArgs>>): Prisma__cadastroEmpresaClient<$Result.GetResult<Prisma.$cadastroEmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidaturas<T extends cadastrarVaga$candidaturasArgs<ExtArgs> = {}>(args?: Subset<T, cadastrarVaga$candidaturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidaturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the cadastrarVaga model
   */
  interface cadastrarVagaFieldRefs {
    readonly idVaga: FieldRef<"cadastrarVaga", 'Int'>
    readonly titulo: FieldRef<"cadastrarVaga", 'String'>
    readonly descricao: FieldRef<"cadastrarVaga", 'String'>
    readonly requisitos: FieldRef<"cadastrarVaga", 'String'>
    readonly salario: FieldRef<"cadastrarVaga", 'String'>
    readonly tipoContrato: FieldRef<"cadastrarVaga", 'String'>
    readonly modalidade: FieldRef<"cadastrarVaga", 'String'>
    readonly localizacao: FieldRef<"cadastrarVaga", 'String'>
    readonly dataPublicacao: FieldRef<"cadastrarVaga", 'DateTime'>
    readonly status: FieldRef<"cadastrarVaga", 'String'>
    readonly skills: FieldRef<"cadastrarVaga", 'String[]'>
    readonly beneficios: FieldRef<"cadastrarVaga", 'String[]'>
    readonly empresaId: FieldRef<"cadastrarVaga", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cadastrarVaga findUnique
   */
  export type cadastrarVagaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastrarVaga
     */
    select?: cadastrarVagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastrarVaga
     */
    omit?: cadastrarVagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrarVagaInclude<ExtArgs> | null
    /**
     * Filter, which cadastrarVaga to fetch.
     */
    where: cadastrarVagaWhereUniqueInput
  }

  /**
   * cadastrarVaga findUniqueOrThrow
   */
  export type cadastrarVagaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastrarVaga
     */
    select?: cadastrarVagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastrarVaga
     */
    omit?: cadastrarVagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrarVagaInclude<ExtArgs> | null
    /**
     * Filter, which cadastrarVaga to fetch.
     */
    where: cadastrarVagaWhereUniqueInput
  }

  /**
   * cadastrarVaga findFirst
   */
  export type cadastrarVagaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastrarVaga
     */
    select?: cadastrarVagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastrarVaga
     */
    omit?: cadastrarVagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrarVagaInclude<ExtArgs> | null
    /**
     * Filter, which cadastrarVaga to fetch.
     */
    where?: cadastrarVagaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastrarVagas to fetch.
     */
    orderBy?: cadastrarVagaOrderByWithRelationInput | cadastrarVagaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cadastrarVagas.
     */
    cursor?: cadastrarVagaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastrarVagas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastrarVagas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cadastrarVagas.
     */
    distinct?: CadastrarVagaScalarFieldEnum | CadastrarVagaScalarFieldEnum[]
  }

  /**
   * cadastrarVaga findFirstOrThrow
   */
  export type cadastrarVagaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastrarVaga
     */
    select?: cadastrarVagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastrarVaga
     */
    omit?: cadastrarVagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrarVagaInclude<ExtArgs> | null
    /**
     * Filter, which cadastrarVaga to fetch.
     */
    where?: cadastrarVagaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastrarVagas to fetch.
     */
    orderBy?: cadastrarVagaOrderByWithRelationInput | cadastrarVagaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cadastrarVagas.
     */
    cursor?: cadastrarVagaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastrarVagas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastrarVagas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cadastrarVagas.
     */
    distinct?: CadastrarVagaScalarFieldEnum | CadastrarVagaScalarFieldEnum[]
  }

  /**
   * cadastrarVaga findMany
   */
  export type cadastrarVagaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastrarVaga
     */
    select?: cadastrarVagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastrarVaga
     */
    omit?: cadastrarVagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrarVagaInclude<ExtArgs> | null
    /**
     * Filter, which cadastrarVagas to fetch.
     */
    where?: cadastrarVagaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastrarVagas to fetch.
     */
    orderBy?: cadastrarVagaOrderByWithRelationInput | cadastrarVagaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cadastrarVagas.
     */
    cursor?: cadastrarVagaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastrarVagas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastrarVagas.
     */
    skip?: number
    distinct?: CadastrarVagaScalarFieldEnum | CadastrarVagaScalarFieldEnum[]
  }

  /**
   * cadastrarVaga create
   */
  export type cadastrarVagaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastrarVaga
     */
    select?: cadastrarVagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastrarVaga
     */
    omit?: cadastrarVagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrarVagaInclude<ExtArgs> | null
    /**
     * The data needed to create a cadastrarVaga.
     */
    data: XOR<cadastrarVagaCreateInput, cadastrarVagaUncheckedCreateInput>
  }

  /**
   * cadastrarVaga createMany
   */
  export type cadastrarVagaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cadastrarVagas.
     */
    data: cadastrarVagaCreateManyInput | cadastrarVagaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cadastrarVaga createManyAndReturn
   */
  export type cadastrarVagaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastrarVaga
     */
    select?: cadastrarVagaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cadastrarVaga
     */
    omit?: cadastrarVagaOmit<ExtArgs> | null
    /**
     * The data used to create many cadastrarVagas.
     */
    data: cadastrarVagaCreateManyInput | cadastrarVagaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrarVagaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cadastrarVaga update
   */
  export type cadastrarVagaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastrarVaga
     */
    select?: cadastrarVagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastrarVaga
     */
    omit?: cadastrarVagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrarVagaInclude<ExtArgs> | null
    /**
     * The data needed to update a cadastrarVaga.
     */
    data: XOR<cadastrarVagaUpdateInput, cadastrarVagaUncheckedUpdateInput>
    /**
     * Choose, which cadastrarVaga to update.
     */
    where: cadastrarVagaWhereUniqueInput
  }

  /**
   * cadastrarVaga updateMany
   */
  export type cadastrarVagaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cadastrarVagas.
     */
    data: XOR<cadastrarVagaUpdateManyMutationInput, cadastrarVagaUncheckedUpdateManyInput>
    /**
     * Filter which cadastrarVagas to update
     */
    where?: cadastrarVagaWhereInput
    /**
     * Limit how many cadastrarVagas to update.
     */
    limit?: number
  }

  /**
   * cadastrarVaga updateManyAndReturn
   */
  export type cadastrarVagaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastrarVaga
     */
    select?: cadastrarVagaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cadastrarVaga
     */
    omit?: cadastrarVagaOmit<ExtArgs> | null
    /**
     * The data used to update cadastrarVagas.
     */
    data: XOR<cadastrarVagaUpdateManyMutationInput, cadastrarVagaUncheckedUpdateManyInput>
    /**
     * Filter which cadastrarVagas to update
     */
    where?: cadastrarVagaWhereInput
    /**
     * Limit how many cadastrarVagas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrarVagaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cadastrarVaga upsert
   */
  export type cadastrarVagaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastrarVaga
     */
    select?: cadastrarVagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastrarVaga
     */
    omit?: cadastrarVagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrarVagaInclude<ExtArgs> | null
    /**
     * The filter to search for the cadastrarVaga to update in case it exists.
     */
    where: cadastrarVagaWhereUniqueInput
    /**
     * In case the cadastrarVaga found by the `where` argument doesn't exist, create a new cadastrarVaga with this data.
     */
    create: XOR<cadastrarVagaCreateInput, cadastrarVagaUncheckedCreateInput>
    /**
     * In case the cadastrarVaga was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cadastrarVagaUpdateInput, cadastrarVagaUncheckedUpdateInput>
  }

  /**
   * cadastrarVaga delete
   */
  export type cadastrarVagaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastrarVaga
     */
    select?: cadastrarVagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastrarVaga
     */
    omit?: cadastrarVagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrarVagaInclude<ExtArgs> | null
    /**
     * Filter which cadastrarVaga to delete.
     */
    where: cadastrarVagaWhereUniqueInput
  }

  /**
   * cadastrarVaga deleteMany
   */
  export type cadastrarVagaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cadastrarVagas to delete
     */
    where?: cadastrarVagaWhereInput
    /**
     * Limit how many cadastrarVagas to delete.
     */
    limit?: number
  }

  /**
   * cadastrarVaga.candidaturas
   */
  export type cadastrarVaga$candidaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatura
     */
    select?: candidaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatura
     */
    omit?: candidaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturaInclude<ExtArgs> | null
    where?: candidaturaWhereInput
    orderBy?: candidaturaOrderByWithRelationInput | candidaturaOrderByWithRelationInput[]
    cursor?: candidaturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidaturaScalarFieldEnum | CandidaturaScalarFieldEnum[]
  }

  /**
   * cadastrarVaga without action
   */
  export type cadastrarVagaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastrarVaga
     */
    select?: cadastrarVagaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastrarVaga
     */
    omit?: cadastrarVagaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrarVagaInclude<ExtArgs> | null
  }


  /**
   * Model candidatura
   */

  export type AggregateCandidatura = {
    _count: CandidaturaCountAggregateOutputType | null
    _avg: CandidaturaAvgAggregateOutputType | null
    _sum: CandidaturaSumAggregateOutputType | null
    _min: CandidaturaMinAggregateOutputType | null
    _max: CandidaturaMaxAggregateOutputType | null
  }

  export type CandidaturaAvgAggregateOutputType = {
    idCandidatura: number | null
    candidatoId: number | null
    vagaId: number | null
  }

  export type CandidaturaSumAggregateOutputType = {
    idCandidatura: number | null
    candidatoId: number | null
    vagaId: number | null
  }

  export type CandidaturaMinAggregateOutputType = {
    idCandidatura: number | null
    dataCandidatura: Date | null
    status: string | null
    candidatoId: number | null
    vagaId: number | null
  }

  export type CandidaturaMaxAggregateOutputType = {
    idCandidatura: number | null
    dataCandidatura: Date | null
    status: string | null
    candidatoId: number | null
    vagaId: number | null
  }

  export type CandidaturaCountAggregateOutputType = {
    idCandidatura: number
    dataCandidatura: number
    status: number
    candidatoId: number
    vagaId: number
    _all: number
  }


  export type CandidaturaAvgAggregateInputType = {
    idCandidatura?: true
    candidatoId?: true
    vagaId?: true
  }

  export type CandidaturaSumAggregateInputType = {
    idCandidatura?: true
    candidatoId?: true
    vagaId?: true
  }

  export type CandidaturaMinAggregateInputType = {
    idCandidatura?: true
    dataCandidatura?: true
    status?: true
    candidatoId?: true
    vagaId?: true
  }

  export type CandidaturaMaxAggregateInputType = {
    idCandidatura?: true
    dataCandidatura?: true
    status?: true
    candidatoId?: true
    vagaId?: true
  }

  export type CandidaturaCountAggregateInputType = {
    idCandidatura?: true
    dataCandidatura?: true
    status?: true
    candidatoId?: true
    vagaId?: true
    _all?: true
  }

  export type CandidaturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which candidatura to aggregate.
     */
    where?: candidaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidaturas to fetch.
     */
    orderBy?: candidaturaOrderByWithRelationInput | candidaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: candidaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidaturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned candidaturas
    **/
    _count?: true | CandidaturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidaturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidaturaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidaturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidaturaMaxAggregateInputType
  }

  export type GetCandidaturaAggregateType<T extends CandidaturaAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidatura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidatura[P]>
      : GetScalarType<T[P], AggregateCandidatura[P]>
  }




  export type candidaturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: candidaturaWhereInput
    orderBy?: candidaturaOrderByWithAggregationInput | candidaturaOrderByWithAggregationInput[]
    by: CandidaturaScalarFieldEnum[] | CandidaturaScalarFieldEnum
    having?: candidaturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidaturaCountAggregateInputType | true
    _avg?: CandidaturaAvgAggregateInputType
    _sum?: CandidaturaSumAggregateInputType
    _min?: CandidaturaMinAggregateInputType
    _max?: CandidaturaMaxAggregateInputType
  }

  export type CandidaturaGroupByOutputType = {
    idCandidatura: number
    dataCandidatura: Date
    status: string
    candidatoId: number
    vagaId: number
    _count: CandidaturaCountAggregateOutputType | null
    _avg: CandidaturaAvgAggregateOutputType | null
    _sum: CandidaturaSumAggregateOutputType | null
    _min: CandidaturaMinAggregateOutputType | null
    _max: CandidaturaMaxAggregateOutputType | null
  }

  type GetCandidaturaGroupByPayload<T extends candidaturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidaturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidaturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidaturaGroupByOutputType[P]>
            : GetScalarType<T[P], CandidaturaGroupByOutputType[P]>
        }
      >
    >


  export type candidaturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCandidatura?: boolean
    dataCandidatura?: boolean
    status?: boolean
    candidatoId?: boolean
    vagaId?: boolean
    candidato?: boolean | cadastroCandidatoDefaultArgs<ExtArgs>
    vaga?: boolean | cadastrarVagaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidatura"]>

  export type candidaturaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCandidatura?: boolean
    dataCandidatura?: boolean
    status?: boolean
    candidatoId?: boolean
    vagaId?: boolean
    candidato?: boolean | cadastroCandidatoDefaultArgs<ExtArgs>
    vaga?: boolean | cadastrarVagaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidatura"]>

  export type candidaturaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCandidatura?: boolean
    dataCandidatura?: boolean
    status?: boolean
    candidatoId?: boolean
    vagaId?: boolean
    candidato?: boolean | cadastroCandidatoDefaultArgs<ExtArgs>
    vaga?: boolean | cadastrarVagaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidatura"]>

  export type candidaturaSelectScalar = {
    idCandidatura?: boolean
    dataCandidatura?: boolean
    status?: boolean
    candidatoId?: boolean
    vagaId?: boolean
  }

  export type candidaturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idCandidatura" | "dataCandidatura" | "status" | "candidatoId" | "vagaId", ExtArgs["result"]["candidatura"]>
  export type candidaturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidato?: boolean | cadastroCandidatoDefaultArgs<ExtArgs>
    vaga?: boolean | cadastrarVagaDefaultArgs<ExtArgs>
  }
  export type candidaturaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidato?: boolean | cadastroCandidatoDefaultArgs<ExtArgs>
    vaga?: boolean | cadastrarVagaDefaultArgs<ExtArgs>
  }
  export type candidaturaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidato?: boolean | cadastroCandidatoDefaultArgs<ExtArgs>
    vaga?: boolean | cadastrarVagaDefaultArgs<ExtArgs>
  }

  export type $candidaturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "candidatura"
    objects: {
      candidato: Prisma.$cadastroCandidatoPayload<ExtArgs>
      vaga: Prisma.$cadastrarVagaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idCandidatura: number
      dataCandidatura: Date
      status: string
      candidatoId: number
      vagaId: number
    }, ExtArgs["result"]["candidatura"]>
    composites: {}
  }

  type candidaturaGetPayload<S extends boolean | null | undefined | candidaturaDefaultArgs> = $Result.GetResult<Prisma.$candidaturaPayload, S>

  type candidaturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<candidaturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidaturaCountAggregateInputType | true
    }

  export interface candidaturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['candidatura'], meta: { name: 'candidatura' } }
    /**
     * Find zero or one Candidatura that matches the filter.
     * @param {candidaturaFindUniqueArgs} args - Arguments to find a Candidatura
     * @example
     * // Get one Candidatura
     * const candidatura = await prisma.candidatura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends candidaturaFindUniqueArgs>(args: SelectSubset<T, candidaturaFindUniqueArgs<ExtArgs>>): Prisma__candidaturaClient<$Result.GetResult<Prisma.$candidaturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidatura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {candidaturaFindUniqueOrThrowArgs} args - Arguments to find a Candidatura
     * @example
     * // Get one Candidatura
     * const candidatura = await prisma.candidatura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends candidaturaFindUniqueOrThrowArgs>(args: SelectSubset<T, candidaturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__candidaturaClient<$Result.GetResult<Prisma.$candidaturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidatura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidaturaFindFirstArgs} args - Arguments to find a Candidatura
     * @example
     * // Get one Candidatura
     * const candidatura = await prisma.candidatura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends candidaturaFindFirstArgs>(args?: SelectSubset<T, candidaturaFindFirstArgs<ExtArgs>>): Prisma__candidaturaClient<$Result.GetResult<Prisma.$candidaturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidatura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidaturaFindFirstOrThrowArgs} args - Arguments to find a Candidatura
     * @example
     * // Get one Candidatura
     * const candidatura = await prisma.candidatura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends candidaturaFindFirstOrThrowArgs>(args?: SelectSubset<T, candidaturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__candidaturaClient<$Result.GetResult<Prisma.$candidaturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidaturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidaturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidaturas
     * const candidaturas = await prisma.candidatura.findMany()
     * 
     * // Get first 10 Candidaturas
     * const candidaturas = await prisma.candidatura.findMany({ take: 10 })
     * 
     * // Only select the `idCandidatura`
     * const candidaturaWithIdCandidaturaOnly = await prisma.candidatura.findMany({ select: { idCandidatura: true } })
     * 
     */
    findMany<T extends candidaturaFindManyArgs>(args?: SelectSubset<T, candidaturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidaturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidatura.
     * @param {candidaturaCreateArgs} args - Arguments to create a Candidatura.
     * @example
     * // Create one Candidatura
     * const Candidatura = await prisma.candidatura.create({
     *   data: {
     *     // ... data to create a Candidatura
     *   }
     * })
     * 
     */
    create<T extends candidaturaCreateArgs>(args: SelectSubset<T, candidaturaCreateArgs<ExtArgs>>): Prisma__candidaturaClient<$Result.GetResult<Prisma.$candidaturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidaturas.
     * @param {candidaturaCreateManyArgs} args - Arguments to create many Candidaturas.
     * @example
     * // Create many Candidaturas
     * const candidatura = await prisma.candidatura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends candidaturaCreateManyArgs>(args?: SelectSubset<T, candidaturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidaturas and returns the data saved in the database.
     * @param {candidaturaCreateManyAndReturnArgs} args - Arguments to create many Candidaturas.
     * @example
     * // Create many Candidaturas
     * const candidatura = await prisma.candidatura.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidaturas and only return the `idCandidatura`
     * const candidaturaWithIdCandidaturaOnly = await prisma.candidatura.createManyAndReturn({
     *   select: { idCandidatura: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends candidaturaCreateManyAndReturnArgs>(args?: SelectSubset<T, candidaturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidaturaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidatura.
     * @param {candidaturaDeleteArgs} args - Arguments to delete one Candidatura.
     * @example
     * // Delete one Candidatura
     * const Candidatura = await prisma.candidatura.delete({
     *   where: {
     *     // ... filter to delete one Candidatura
     *   }
     * })
     * 
     */
    delete<T extends candidaturaDeleteArgs>(args: SelectSubset<T, candidaturaDeleteArgs<ExtArgs>>): Prisma__candidaturaClient<$Result.GetResult<Prisma.$candidaturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidatura.
     * @param {candidaturaUpdateArgs} args - Arguments to update one Candidatura.
     * @example
     * // Update one Candidatura
     * const candidatura = await prisma.candidatura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends candidaturaUpdateArgs>(args: SelectSubset<T, candidaturaUpdateArgs<ExtArgs>>): Prisma__candidaturaClient<$Result.GetResult<Prisma.$candidaturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidaturas.
     * @param {candidaturaDeleteManyArgs} args - Arguments to filter Candidaturas to delete.
     * @example
     * // Delete a few Candidaturas
     * const { count } = await prisma.candidatura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends candidaturaDeleteManyArgs>(args?: SelectSubset<T, candidaturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidaturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidaturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidaturas
     * const candidatura = await prisma.candidatura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends candidaturaUpdateManyArgs>(args: SelectSubset<T, candidaturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidaturas and returns the data updated in the database.
     * @param {candidaturaUpdateManyAndReturnArgs} args - Arguments to update many Candidaturas.
     * @example
     * // Update many Candidaturas
     * const candidatura = await prisma.candidatura.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidaturas and only return the `idCandidatura`
     * const candidaturaWithIdCandidaturaOnly = await prisma.candidatura.updateManyAndReturn({
     *   select: { idCandidatura: true },
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
    updateManyAndReturn<T extends candidaturaUpdateManyAndReturnArgs>(args: SelectSubset<T, candidaturaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidaturaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidatura.
     * @param {candidaturaUpsertArgs} args - Arguments to update or create a Candidatura.
     * @example
     * // Update or create a Candidatura
     * const candidatura = await prisma.candidatura.upsert({
     *   create: {
     *     // ... data to create a Candidatura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidatura we want to update
     *   }
     * })
     */
    upsert<T extends candidaturaUpsertArgs>(args: SelectSubset<T, candidaturaUpsertArgs<ExtArgs>>): Prisma__candidaturaClient<$Result.GetResult<Prisma.$candidaturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidaturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidaturaCountArgs} args - Arguments to filter Candidaturas to count.
     * @example
     * // Count the number of Candidaturas
     * const count = await prisma.candidatura.count({
     *   where: {
     *     // ... the filter for the Candidaturas we want to count
     *   }
     * })
    **/
    count<T extends candidaturaCountArgs>(
      args?: Subset<T, candidaturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidaturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidatura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidaturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CandidaturaAggregateArgs>(args: Subset<T, CandidaturaAggregateArgs>): Prisma.PrismaPromise<GetCandidaturaAggregateType<T>>

    /**
     * Group by Candidatura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidaturaGroupByArgs} args - Group by arguments.
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
      T extends candidaturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: candidaturaGroupByArgs['orderBy'] }
        : { orderBy?: candidaturaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, candidaturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidaturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the candidatura model
   */
  readonly fields: candidaturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for candidatura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__candidaturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidato<T extends cadastroCandidatoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cadastroCandidatoDefaultArgs<ExtArgs>>): Prisma__cadastroCandidatoClient<$Result.GetResult<Prisma.$cadastroCandidatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vaga<T extends cadastrarVagaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cadastrarVagaDefaultArgs<ExtArgs>>): Prisma__cadastrarVagaClient<$Result.GetResult<Prisma.$cadastrarVagaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the candidatura model
   */
  interface candidaturaFieldRefs {
    readonly idCandidatura: FieldRef<"candidatura", 'Int'>
    readonly dataCandidatura: FieldRef<"candidatura", 'DateTime'>
    readonly status: FieldRef<"candidatura", 'String'>
    readonly candidatoId: FieldRef<"candidatura", 'Int'>
    readonly vagaId: FieldRef<"candidatura", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * candidatura findUnique
   */
  export type candidaturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatura
     */
    select?: candidaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatura
     */
    omit?: candidaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturaInclude<ExtArgs> | null
    /**
     * Filter, which candidatura to fetch.
     */
    where: candidaturaWhereUniqueInput
  }

  /**
   * candidatura findUniqueOrThrow
   */
  export type candidaturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatura
     */
    select?: candidaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatura
     */
    omit?: candidaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturaInclude<ExtArgs> | null
    /**
     * Filter, which candidatura to fetch.
     */
    where: candidaturaWhereUniqueInput
  }

  /**
   * candidatura findFirst
   */
  export type candidaturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatura
     */
    select?: candidaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatura
     */
    omit?: candidaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturaInclude<ExtArgs> | null
    /**
     * Filter, which candidatura to fetch.
     */
    where?: candidaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidaturas to fetch.
     */
    orderBy?: candidaturaOrderByWithRelationInput | candidaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for candidaturas.
     */
    cursor?: candidaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidaturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of candidaturas.
     */
    distinct?: CandidaturaScalarFieldEnum | CandidaturaScalarFieldEnum[]
  }

  /**
   * candidatura findFirstOrThrow
   */
  export type candidaturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatura
     */
    select?: candidaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatura
     */
    omit?: candidaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturaInclude<ExtArgs> | null
    /**
     * Filter, which candidatura to fetch.
     */
    where?: candidaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidaturas to fetch.
     */
    orderBy?: candidaturaOrderByWithRelationInput | candidaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for candidaturas.
     */
    cursor?: candidaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidaturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of candidaturas.
     */
    distinct?: CandidaturaScalarFieldEnum | CandidaturaScalarFieldEnum[]
  }

  /**
   * candidatura findMany
   */
  export type candidaturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatura
     */
    select?: candidaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatura
     */
    omit?: candidaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturaInclude<ExtArgs> | null
    /**
     * Filter, which candidaturas to fetch.
     */
    where?: candidaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidaturas to fetch.
     */
    orderBy?: candidaturaOrderByWithRelationInput | candidaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing candidaturas.
     */
    cursor?: candidaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidaturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidaturas.
     */
    skip?: number
    distinct?: CandidaturaScalarFieldEnum | CandidaturaScalarFieldEnum[]
  }

  /**
   * candidatura create
   */
  export type candidaturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatura
     */
    select?: candidaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatura
     */
    omit?: candidaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturaInclude<ExtArgs> | null
    /**
     * The data needed to create a candidatura.
     */
    data: XOR<candidaturaCreateInput, candidaturaUncheckedCreateInput>
  }

  /**
   * candidatura createMany
   */
  export type candidaturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many candidaturas.
     */
    data: candidaturaCreateManyInput | candidaturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * candidatura createManyAndReturn
   */
  export type candidaturaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatura
     */
    select?: candidaturaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the candidatura
     */
    omit?: candidaturaOmit<ExtArgs> | null
    /**
     * The data used to create many candidaturas.
     */
    data: candidaturaCreateManyInput | candidaturaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * candidatura update
   */
  export type candidaturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatura
     */
    select?: candidaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatura
     */
    omit?: candidaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturaInclude<ExtArgs> | null
    /**
     * The data needed to update a candidatura.
     */
    data: XOR<candidaturaUpdateInput, candidaturaUncheckedUpdateInput>
    /**
     * Choose, which candidatura to update.
     */
    where: candidaturaWhereUniqueInput
  }

  /**
   * candidatura updateMany
   */
  export type candidaturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update candidaturas.
     */
    data: XOR<candidaturaUpdateManyMutationInput, candidaturaUncheckedUpdateManyInput>
    /**
     * Filter which candidaturas to update
     */
    where?: candidaturaWhereInput
    /**
     * Limit how many candidaturas to update.
     */
    limit?: number
  }

  /**
   * candidatura updateManyAndReturn
   */
  export type candidaturaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatura
     */
    select?: candidaturaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the candidatura
     */
    omit?: candidaturaOmit<ExtArgs> | null
    /**
     * The data used to update candidaturas.
     */
    data: XOR<candidaturaUpdateManyMutationInput, candidaturaUncheckedUpdateManyInput>
    /**
     * Filter which candidaturas to update
     */
    where?: candidaturaWhereInput
    /**
     * Limit how many candidaturas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * candidatura upsert
   */
  export type candidaturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatura
     */
    select?: candidaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatura
     */
    omit?: candidaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturaInclude<ExtArgs> | null
    /**
     * The filter to search for the candidatura to update in case it exists.
     */
    where: candidaturaWhereUniqueInput
    /**
     * In case the candidatura found by the `where` argument doesn't exist, create a new candidatura with this data.
     */
    create: XOR<candidaturaCreateInput, candidaturaUncheckedCreateInput>
    /**
     * In case the candidatura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<candidaturaUpdateInput, candidaturaUncheckedUpdateInput>
  }

  /**
   * candidatura delete
   */
  export type candidaturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatura
     */
    select?: candidaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatura
     */
    omit?: candidaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturaInclude<ExtArgs> | null
    /**
     * Filter which candidatura to delete.
     */
    where: candidaturaWhereUniqueInput
  }

  /**
   * candidatura deleteMany
   */
  export type candidaturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which candidaturas to delete
     */
    where?: candidaturaWhereInput
    /**
     * Limit how many candidaturas to delete.
     */
    limit?: number
  }

  /**
   * candidatura without action
   */
  export type candidaturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatura
     */
    select?: candidaturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatura
     */
    omit?: candidaturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturaInclude<ExtArgs> | null
  }


  /**
   * Model Endereco
   */

  export type AggregateEndereco = {
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  export type EnderecoAvgAggregateOutputType = {
    idEndereco: number | null
    numero: number | null
  }

  export type EnderecoSumAggregateOutputType = {
    idEndereco: number | null
    numero: number | null
  }

  export type EnderecoMinAggregateOutputType = {
    idEndereco: number | null
    cep: string | null
    logradouro: string | null
    numero: number | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
  }

  export type EnderecoMaxAggregateOutputType = {
    idEndereco: number | null
    cep: string | null
    logradouro: string | null
    numero: number | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
  }

  export type EnderecoCountAggregateOutputType = {
    idEndereco: number
    cep: number
    logradouro: number
    numero: number
    complemento: number
    bairro: number
    cidade: number
    estado: number
    _all: number
  }


  export type EnderecoAvgAggregateInputType = {
    idEndereco?: true
    numero?: true
  }

  export type EnderecoSumAggregateInputType = {
    idEndereco?: true
    numero?: true
  }

  export type EnderecoMinAggregateInputType = {
    idEndereco?: true
    cep?: true
    logradouro?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    estado?: true
  }

  export type EnderecoMaxAggregateInputType = {
    idEndereco?: true
    cep?: true
    logradouro?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    estado?: true
  }

  export type EnderecoCountAggregateInputType = {
    idEndereco?: true
    cep?: true
    logradouro?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    estado?: true
    _all?: true
  }

  export type EnderecoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Endereco to aggregate.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enderecos
    **/
    _count?: true | EnderecoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnderecoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnderecoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnderecoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnderecoMaxAggregateInputType
  }

  export type GetEnderecoAggregateType<T extends EnderecoAggregateArgs> = {
        [P in keyof T & keyof AggregateEndereco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndereco[P]>
      : GetScalarType<T[P], AggregateEndereco[P]>
  }




  export type EnderecoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoWhereInput
    orderBy?: EnderecoOrderByWithAggregationInput | EnderecoOrderByWithAggregationInput[]
    by: EnderecoScalarFieldEnum[] | EnderecoScalarFieldEnum
    having?: EnderecoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnderecoCountAggregateInputType | true
    _avg?: EnderecoAvgAggregateInputType
    _sum?: EnderecoSumAggregateInputType
    _min?: EnderecoMinAggregateInputType
    _max?: EnderecoMaxAggregateInputType
  }

  export type EnderecoGroupByOutputType = {
    idEndereco: number
    cep: string
    logradouro: string
    numero: number
    complemento: string | null
    bairro: string
    cidade: string
    estado: string
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  type GetEnderecoGroupByPayload<T extends EnderecoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnderecoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnderecoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
            : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
        }
      >
    >


  export type EnderecoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idEndereco?: boolean
    cep?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    candidato?: boolean | Endereco$candidatoArgs<ExtArgs>
    empresa?: boolean | Endereco$empresaArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>

  export type EnderecoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idEndereco?: boolean
    cep?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
  }, ExtArgs["result"]["endereco"]>

  export type EnderecoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idEndereco?: boolean
    cep?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
  }, ExtArgs["result"]["endereco"]>

  export type EnderecoSelectScalar = {
    idEndereco?: boolean
    cep?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
  }

  export type EnderecoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idEndereco" | "cep" | "logradouro" | "numero" | "complemento" | "bairro" | "cidade" | "estado", ExtArgs["result"]["endereco"]>
  export type EnderecoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidato?: boolean | Endereco$candidatoArgs<ExtArgs>
    empresa?: boolean | Endereco$empresaArgs<ExtArgs>
  }
  export type EnderecoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EnderecoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EnderecoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Endereco"
    objects: {
      candidato: Prisma.$cadastroCandidatoPayload<ExtArgs> | null
      empresa: Prisma.$cadastroEmpresaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      idEndereco: number
      cep: string
      logradouro: string
      numero: number
      complemento: string | null
      bairro: string
      cidade: string
      estado: string
    }, ExtArgs["result"]["endereco"]>
    composites: {}
  }

  type EnderecoGetPayload<S extends boolean | null | undefined | EnderecoDefaultArgs> = $Result.GetResult<Prisma.$EnderecoPayload, S>

  type EnderecoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnderecoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnderecoCountAggregateInputType | true
    }

  export interface EnderecoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Endereco'], meta: { name: 'Endereco' } }
    /**
     * Find zero or one Endereco that matches the filter.
     * @param {EnderecoFindUniqueArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnderecoFindUniqueArgs>(args: SelectSubset<T, EnderecoFindUniqueArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Endereco that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnderecoFindUniqueOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnderecoFindUniqueOrThrowArgs>(args: SelectSubset<T, EnderecoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindFirstArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnderecoFindFirstArgs>(args?: SelectSubset<T, EnderecoFindFirstArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindFirstOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnderecoFindFirstOrThrowArgs>(args?: SelectSubset<T, EnderecoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enderecos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enderecos
     * const enderecos = await prisma.endereco.findMany()
     * 
     * // Get first 10 Enderecos
     * const enderecos = await prisma.endereco.findMany({ take: 10 })
     * 
     * // Only select the `idEndereco`
     * const enderecoWithIdEnderecoOnly = await prisma.endereco.findMany({ select: { idEndereco: true } })
     * 
     */
    findMany<T extends EnderecoFindManyArgs>(args?: SelectSubset<T, EnderecoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Endereco.
     * @param {EnderecoCreateArgs} args - Arguments to create a Endereco.
     * @example
     * // Create one Endereco
     * const Endereco = await prisma.endereco.create({
     *   data: {
     *     // ... data to create a Endereco
     *   }
     * })
     * 
     */
    create<T extends EnderecoCreateArgs>(args: SelectSubset<T, EnderecoCreateArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enderecos.
     * @param {EnderecoCreateManyArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const endereco = await prisma.endereco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnderecoCreateManyArgs>(args?: SelectSubset<T, EnderecoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enderecos and returns the data saved in the database.
     * @param {EnderecoCreateManyAndReturnArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const endereco = await prisma.endereco.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enderecos and only return the `idEndereco`
     * const enderecoWithIdEnderecoOnly = await prisma.endereco.createManyAndReturn({
     *   select: { idEndereco: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnderecoCreateManyAndReturnArgs>(args?: SelectSubset<T, EnderecoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Endereco.
     * @param {EnderecoDeleteArgs} args - Arguments to delete one Endereco.
     * @example
     * // Delete one Endereco
     * const Endereco = await prisma.endereco.delete({
     *   where: {
     *     // ... filter to delete one Endereco
     *   }
     * })
     * 
     */
    delete<T extends EnderecoDeleteArgs>(args: SelectSubset<T, EnderecoDeleteArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Endereco.
     * @param {EnderecoUpdateArgs} args - Arguments to update one Endereco.
     * @example
     * // Update one Endereco
     * const endereco = await prisma.endereco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnderecoUpdateArgs>(args: SelectSubset<T, EnderecoUpdateArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enderecos.
     * @param {EnderecoDeleteManyArgs} args - Arguments to filter Enderecos to delete.
     * @example
     * // Delete a few Enderecos
     * const { count } = await prisma.endereco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnderecoDeleteManyArgs>(args?: SelectSubset<T, EnderecoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnderecoUpdateManyArgs>(args: SelectSubset<T, EnderecoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos and returns the data updated in the database.
     * @param {EnderecoUpdateManyAndReturnArgs} args - Arguments to update many Enderecos.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enderecos and only return the `idEndereco`
     * const enderecoWithIdEnderecoOnly = await prisma.endereco.updateManyAndReturn({
     *   select: { idEndereco: true },
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
    updateManyAndReturn<T extends EnderecoUpdateManyAndReturnArgs>(args: SelectSubset<T, EnderecoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Endereco.
     * @param {EnderecoUpsertArgs} args - Arguments to update or create a Endereco.
     * @example
     * // Update or create a Endereco
     * const endereco = await prisma.endereco.upsert({
     *   create: {
     *     // ... data to create a Endereco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endereco we want to update
     *   }
     * })
     */
    upsert<T extends EnderecoUpsertArgs>(args: SelectSubset<T, EnderecoUpsertArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoCountArgs} args - Arguments to filter Enderecos to count.
     * @example
     * // Count the number of Enderecos
     * const count = await prisma.endereco.count({
     *   where: {
     *     // ... the filter for the Enderecos we want to count
     *   }
     * })
    **/
    count<T extends EnderecoCountArgs>(
      args?: Subset<T, EnderecoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnderecoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnderecoAggregateArgs>(args: Subset<T, EnderecoAggregateArgs>): Prisma.PrismaPromise<GetEnderecoAggregateType<T>>

    /**
     * Group by Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoGroupByArgs} args - Group by arguments.
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
      T extends EnderecoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnderecoGroupByArgs['orderBy'] }
        : { orderBy?: EnderecoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnderecoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnderecoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Endereco model
   */
  readonly fields: EnderecoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Endereco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnderecoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidato<T extends Endereco$candidatoArgs<ExtArgs> = {}>(args?: Subset<T, Endereco$candidatoArgs<ExtArgs>>): Prisma__cadastroCandidatoClient<$Result.GetResult<Prisma.$cadastroCandidatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    empresa<T extends Endereco$empresaArgs<ExtArgs> = {}>(args?: Subset<T, Endereco$empresaArgs<ExtArgs>>): Prisma__cadastroEmpresaClient<$Result.GetResult<Prisma.$cadastroEmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Endereco model
   */
  interface EnderecoFieldRefs {
    readonly idEndereco: FieldRef<"Endereco", 'Int'>
    readonly cep: FieldRef<"Endereco", 'String'>
    readonly logradouro: FieldRef<"Endereco", 'String'>
    readonly numero: FieldRef<"Endereco", 'Int'>
    readonly complemento: FieldRef<"Endereco", 'String'>
    readonly bairro: FieldRef<"Endereco", 'String'>
    readonly cidade: FieldRef<"Endereco", 'String'>
    readonly estado: FieldRef<"Endereco", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Endereco findUnique
   */
  export type EnderecoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco findUniqueOrThrow
   */
  export type EnderecoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco findFirst
   */
  export type EnderecoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco findFirstOrThrow
   */
  export type EnderecoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco findMany
   */
  export type EnderecoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Enderecos to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco create
   */
  export type EnderecoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The data needed to create a Endereco.
     */
    data: XOR<EnderecoCreateInput, EnderecoUncheckedCreateInput>
  }

  /**
   * Endereco createMany
   */
  export type EnderecoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enderecos.
     */
    data: EnderecoCreateManyInput | EnderecoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Endereco createManyAndReturn
   */
  export type EnderecoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * The data used to create many Enderecos.
     */
    data: EnderecoCreateManyInput | EnderecoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Endereco update
   */
  export type EnderecoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The data needed to update a Endereco.
     */
    data: XOR<EnderecoUpdateInput, EnderecoUncheckedUpdateInput>
    /**
     * Choose, which Endereco to update.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco updateMany
   */
  export type EnderecoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enderecos.
     */
    data: XOR<EnderecoUpdateManyMutationInput, EnderecoUncheckedUpdateManyInput>
    /**
     * Filter which Enderecos to update
     */
    where?: EnderecoWhereInput
    /**
     * Limit how many Enderecos to update.
     */
    limit?: number
  }

  /**
   * Endereco updateManyAndReturn
   */
  export type EnderecoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * The data used to update Enderecos.
     */
    data: XOR<EnderecoUpdateManyMutationInput, EnderecoUncheckedUpdateManyInput>
    /**
     * Filter which Enderecos to update
     */
    where?: EnderecoWhereInput
    /**
     * Limit how many Enderecos to update.
     */
    limit?: number
  }

  /**
   * Endereco upsert
   */
  export type EnderecoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The filter to search for the Endereco to update in case it exists.
     */
    where: EnderecoWhereUniqueInput
    /**
     * In case the Endereco found by the `where` argument doesn't exist, create a new Endereco with this data.
     */
    create: XOR<EnderecoCreateInput, EnderecoUncheckedCreateInput>
    /**
     * In case the Endereco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnderecoUpdateInput, EnderecoUncheckedUpdateInput>
  }

  /**
   * Endereco delete
   */
  export type EnderecoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter which Endereco to delete.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco deleteMany
   */
  export type EnderecoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enderecos to delete
     */
    where?: EnderecoWhereInput
    /**
     * Limit how many Enderecos to delete.
     */
    limit?: number
  }

  /**
   * Endereco.candidato
   */
  export type Endereco$candidatoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroCandidato
     */
    select?: cadastroCandidatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroCandidato
     */
    omit?: cadastroCandidatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroCandidatoInclude<ExtArgs> | null
    where?: cadastroCandidatoWhereInput
  }

  /**
   * Endereco.empresa
   */
  export type Endereco$empresaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastroEmpresa
     */
    select?: cadastroEmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastroEmpresa
     */
    omit?: cadastroEmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroEmpresaInclude<ExtArgs> | null
    where?: cadastroEmpresaWhereInput
  }

  /**
   * Endereco without action
   */
  export type EnderecoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
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


  export const CadastroCandidatoScalarFieldEnum: {
    idCandidato: 'idCandidato',
    nomeCandidato: 'nomeCandidato',
    emailCandidato: 'emailCandidato',
    telefoneCandidato: 'telefoneCandidato',
    curriculo: 'curriculo',
    senhaCandidato: 'senhaCandidato',
    enderecoId: 'enderecoId'
  };

  export type CadastroCandidatoScalarFieldEnum = (typeof CadastroCandidatoScalarFieldEnum)[keyof typeof CadastroCandidatoScalarFieldEnum]


  export const CadastroEmpresaScalarFieldEnum: {
    idEmpresa: 'idEmpresa',
    nomeEmpresa: 'nomeEmpresa',
    cnpj: 'cnpj',
    segmento: 'segmento',
    emailCorporativo: 'emailCorporativo',
    telefoneCorporativo: 'telefoneCorporativo',
    enderecoId: 'enderecoId',
    senhaEmpresa: 'senhaEmpresa'
  };

  export type CadastroEmpresaScalarFieldEnum = (typeof CadastroEmpresaScalarFieldEnum)[keyof typeof CadastroEmpresaScalarFieldEnum]


  export const CadastrarVagaScalarFieldEnum: {
    idVaga: 'idVaga',
    titulo: 'titulo',
    descricao: 'descricao',
    requisitos: 'requisitos',
    salario: 'salario',
    tipoContrato: 'tipoContrato',
    modalidade: 'modalidade',
    localizacao: 'localizacao',
    dataPublicacao: 'dataPublicacao',
    status: 'status',
    skills: 'skills',
    beneficios: 'beneficios',
    empresaId: 'empresaId'
  };

  export type CadastrarVagaScalarFieldEnum = (typeof CadastrarVagaScalarFieldEnum)[keyof typeof CadastrarVagaScalarFieldEnum]


  export const CandidaturaScalarFieldEnum: {
    idCandidatura: 'idCandidatura',
    dataCandidatura: 'dataCandidatura',
    status: 'status',
    candidatoId: 'candidatoId',
    vagaId: 'vagaId'
  };

  export type CandidaturaScalarFieldEnum = (typeof CandidaturaScalarFieldEnum)[keyof typeof CandidaturaScalarFieldEnum]


  export const EnderecoScalarFieldEnum: {
    idEndereco: 'idEndereco',
    cep: 'cep',
    logradouro: 'logradouro',
    numero: 'numero',
    complemento: 'complemento',
    bairro: 'bairro',
    cidade: 'cidade',
    estado: 'estado'
  };

  export type EnderecoScalarFieldEnum = (typeof EnderecoScalarFieldEnum)[keyof typeof EnderecoScalarFieldEnum]


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


  export type cadastroCandidatoWhereInput = {
    AND?: cadastroCandidatoWhereInput | cadastroCandidatoWhereInput[]
    OR?: cadastroCandidatoWhereInput[]
    NOT?: cadastroCandidatoWhereInput | cadastroCandidatoWhereInput[]
    idCandidato?: IntFilter<"cadastroCandidato"> | number
    nomeCandidato?: StringFilter<"cadastroCandidato"> | string
    emailCandidato?: StringFilter<"cadastroCandidato"> | string
    telefoneCandidato?: StringFilter<"cadastroCandidato"> | string
    curriculo?: StringFilter<"cadastroCandidato"> | string
    senhaCandidato?: StringFilter<"cadastroCandidato"> | string
    enderecoId?: IntFilter<"cadastroCandidato"> | number
    endereco?: XOR<EnderecoScalarRelationFilter, EnderecoWhereInput>
    candidaturas?: CandidaturaListRelationFilter
  }

  export type cadastroCandidatoOrderByWithRelationInput = {
    idCandidato?: SortOrder
    nomeCandidato?: SortOrder
    emailCandidato?: SortOrder
    telefoneCandidato?: SortOrder
    curriculo?: SortOrder
    senhaCandidato?: SortOrder
    enderecoId?: SortOrder
    endereco?: EnderecoOrderByWithRelationInput
    candidaturas?: candidaturaOrderByRelationAggregateInput
  }

  export type cadastroCandidatoWhereUniqueInput = Prisma.AtLeast<{
    idCandidato?: number
    enderecoId?: number
    AND?: cadastroCandidatoWhereInput | cadastroCandidatoWhereInput[]
    OR?: cadastroCandidatoWhereInput[]
    NOT?: cadastroCandidatoWhereInput | cadastroCandidatoWhereInput[]
    nomeCandidato?: StringFilter<"cadastroCandidato"> | string
    emailCandidato?: StringFilter<"cadastroCandidato"> | string
    telefoneCandidato?: StringFilter<"cadastroCandidato"> | string
    curriculo?: StringFilter<"cadastroCandidato"> | string
    senhaCandidato?: StringFilter<"cadastroCandidato"> | string
    endereco?: XOR<EnderecoScalarRelationFilter, EnderecoWhereInput>
    candidaturas?: CandidaturaListRelationFilter
  }, "idCandidato" | "enderecoId">

  export type cadastroCandidatoOrderByWithAggregationInput = {
    idCandidato?: SortOrder
    nomeCandidato?: SortOrder
    emailCandidato?: SortOrder
    telefoneCandidato?: SortOrder
    curriculo?: SortOrder
    senhaCandidato?: SortOrder
    enderecoId?: SortOrder
    _count?: cadastroCandidatoCountOrderByAggregateInput
    _avg?: cadastroCandidatoAvgOrderByAggregateInput
    _max?: cadastroCandidatoMaxOrderByAggregateInput
    _min?: cadastroCandidatoMinOrderByAggregateInput
    _sum?: cadastroCandidatoSumOrderByAggregateInput
  }

  export type cadastroCandidatoScalarWhereWithAggregatesInput = {
    AND?: cadastroCandidatoScalarWhereWithAggregatesInput | cadastroCandidatoScalarWhereWithAggregatesInput[]
    OR?: cadastroCandidatoScalarWhereWithAggregatesInput[]
    NOT?: cadastroCandidatoScalarWhereWithAggregatesInput | cadastroCandidatoScalarWhereWithAggregatesInput[]
    idCandidato?: IntWithAggregatesFilter<"cadastroCandidato"> | number
    nomeCandidato?: StringWithAggregatesFilter<"cadastroCandidato"> | string
    emailCandidato?: StringWithAggregatesFilter<"cadastroCandidato"> | string
    telefoneCandidato?: StringWithAggregatesFilter<"cadastroCandidato"> | string
    curriculo?: StringWithAggregatesFilter<"cadastroCandidato"> | string
    senhaCandidato?: StringWithAggregatesFilter<"cadastroCandidato"> | string
    enderecoId?: IntWithAggregatesFilter<"cadastroCandidato"> | number
  }

  export type cadastroEmpresaWhereInput = {
    AND?: cadastroEmpresaWhereInput | cadastroEmpresaWhereInput[]
    OR?: cadastroEmpresaWhereInput[]
    NOT?: cadastroEmpresaWhereInput | cadastroEmpresaWhereInput[]
    idEmpresa?: IntFilter<"cadastroEmpresa"> | number
    nomeEmpresa?: StringFilter<"cadastroEmpresa"> | string
    cnpj?: StringFilter<"cadastroEmpresa"> | string
    segmento?: StringFilter<"cadastroEmpresa"> | string
    emailCorporativo?: StringFilter<"cadastroEmpresa"> | string
    telefoneCorporativo?: StringFilter<"cadastroEmpresa"> | string
    enderecoId?: IntFilter<"cadastroEmpresa"> | number
    senhaEmpresa?: StringFilter<"cadastroEmpresa"> | string
    vagas?: CadastrarVagaListRelationFilter
    endereco?: XOR<EnderecoScalarRelationFilter, EnderecoWhereInput>
  }

  export type cadastroEmpresaOrderByWithRelationInput = {
    idEmpresa?: SortOrder
    nomeEmpresa?: SortOrder
    cnpj?: SortOrder
    segmento?: SortOrder
    emailCorporativo?: SortOrder
    telefoneCorporativo?: SortOrder
    enderecoId?: SortOrder
    senhaEmpresa?: SortOrder
    vagas?: cadastrarVagaOrderByRelationAggregateInput
    endereco?: EnderecoOrderByWithRelationInput
  }

  export type cadastroEmpresaWhereUniqueInput = Prisma.AtLeast<{
    idEmpresa?: number
    enderecoId?: number
    AND?: cadastroEmpresaWhereInput | cadastroEmpresaWhereInput[]
    OR?: cadastroEmpresaWhereInput[]
    NOT?: cadastroEmpresaWhereInput | cadastroEmpresaWhereInput[]
    nomeEmpresa?: StringFilter<"cadastroEmpresa"> | string
    cnpj?: StringFilter<"cadastroEmpresa"> | string
    segmento?: StringFilter<"cadastroEmpresa"> | string
    emailCorporativo?: StringFilter<"cadastroEmpresa"> | string
    telefoneCorporativo?: StringFilter<"cadastroEmpresa"> | string
    senhaEmpresa?: StringFilter<"cadastroEmpresa"> | string
    vagas?: CadastrarVagaListRelationFilter
    endereco?: XOR<EnderecoScalarRelationFilter, EnderecoWhereInput>
  }, "idEmpresa" | "enderecoId">

  export type cadastroEmpresaOrderByWithAggregationInput = {
    idEmpresa?: SortOrder
    nomeEmpresa?: SortOrder
    cnpj?: SortOrder
    segmento?: SortOrder
    emailCorporativo?: SortOrder
    telefoneCorporativo?: SortOrder
    enderecoId?: SortOrder
    senhaEmpresa?: SortOrder
    _count?: cadastroEmpresaCountOrderByAggregateInput
    _avg?: cadastroEmpresaAvgOrderByAggregateInput
    _max?: cadastroEmpresaMaxOrderByAggregateInput
    _min?: cadastroEmpresaMinOrderByAggregateInput
    _sum?: cadastroEmpresaSumOrderByAggregateInput
  }

  export type cadastroEmpresaScalarWhereWithAggregatesInput = {
    AND?: cadastroEmpresaScalarWhereWithAggregatesInput | cadastroEmpresaScalarWhereWithAggregatesInput[]
    OR?: cadastroEmpresaScalarWhereWithAggregatesInput[]
    NOT?: cadastroEmpresaScalarWhereWithAggregatesInput | cadastroEmpresaScalarWhereWithAggregatesInput[]
    idEmpresa?: IntWithAggregatesFilter<"cadastroEmpresa"> | number
    nomeEmpresa?: StringWithAggregatesFilter<"cadastroEmpresa"> | string
    cnpj?: StringWithAggregatesFilter<"cadastroEmpresa"> | string
    segmento?: StringWithAggregatesFilter<"cadastroEmpresa"> | string
    emailCorporativo?: StringWithAggregatesFilter<"cadastroEmpresa"> | string
    telefoneCorporativo?: StringWithAggregatesFilter<"cadastroEmpresa"> | string
    enderecoId?: IntWithAggregatesFilter<"cadastroEmpresa"> | number
    senhaEmpresa?: StringWithAggregatesFilter<"cadastroEmpresa"> | string
  }

  export type cadastrarVagaWhereInput = {
    AND?: cadastrarVagaWhereInput | cadastrarVagaWhereInput[]
    OR?: cadastrarVagaWhereInput[]
    NOT?: cadastrarVagaWhereInput | cadastrarVagaWhereInput[]
    idVaga?: IntFilter<"cadastrarVaga"> | number
    titulo?: StringFilter<"cadastrarVaga"> | string
    descricao?: StringFilter<"cadastrarVaga"> | string
    requisitos?: StringFilter<"cadastrarVaga"> | string
    salario?: StringFilter<"cadastrarVaga"> | string
    tipoContrato?: StringFilter<"cadastrarVaga"> | string
    modalidade?: StringFilter<"cadastrarVaga"> | string
    localizacao?: StringFilter<"cadastrarVaga"> | string
    dataPublicacao?: DateTimeFilter<"cadastrarVaga"> | Date | string
    status?: StringFilter<"cadastrarVaga"> | string
    skills?: StringNullableListFilter<"cadastrarVaga">
    beneficios?: StringNullableListFilter<"cadastrarVaga">
    empresaId?: IntFilter<"cadastrarVaga"> | number
    empresa?: XOR<CadastroEmpresaScalarRelationFilter, cadastroEmpresaWhereInput>
    candidaturas?: CandidaturaListRelationFilter
  }

  export type cadastrarVagaOrderByWithRelationInput = {
    idVaga?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    requisitos?: SortOrder
    salario?: SortOrder
    tipoContrato?: SortOrder
    modalidade?: SortOrder
    localizacao?: SortOrder
    dataPublicacao?: SortOrder
    status?: SortOrder
    skills?: SortOrder
    beneficios?: SortOrder
    empresaId?: SortOrder
    empresa?: cadastroEmpresaOrderByWithRelationInput
    candidaturas?: candidaturaOrderByRelationAggregateInput
  }

  export type cadastrarVagaWhereUniqueInput = Prisma.AtLeast<{
    idVaga?: number
    AND?: cadastrarVagaWhereInput | cadastrarVagaWhereInput[]
    OR?: cadastrarVagaWhereInput[]
    NOT?: cadastrarVagaWhereInput | cadastrarVagaWhereInput[]
    titulo?: StringFilter<"cadastrarVaga"> | string
    descricao?: StringFilter<"cadastrarVaga"> | string
    requisitos?: StringFilter<"cadastrarVaga"> | string
    salario?: StringFilter<"cadastrarVaga"> | string
    tipoContrato?: StringFilter<"cadastrarVaga"> | string
    modalidade?: StringFilter<"cadastrarVaga"> | string
    localizacao?: StringFilter<"cadastrarVaga"> | string
    dataPublicacao?: DateTimeFilter<"cadastrarVaga"> | Date | string
    status?: StringFilter<"cadastrarVaga"> | string
    skills?: StringNullableListFilter<"cadastrarVaga">
    beneficios?: StringNullableListFilter<"cadastrarVaga">
    empresaId?: IntFilter<"cadastrarVaga"> | number
    empresa?: XOR<CadastroEmpresaScalarRelationFilter, cadastroEmpresaWhereInput>
    candidaturas?: CandidaturaListRelationFilter
  }, "idVaga">

  export type cadastrarVagaOrderByWithAggregationInput = {
    idVaga?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    requisitos?: SortOrder
    salario?: SortOrder
    tipoContrato?: SortOrder
    modalidade?: SortOrder
    localizacao?: SortOrder
    dataPublicacao?: SortOrder
    status?: SortOrder
    skills?: SortOrder
    beneficios?: SortOrder
    empresaId?: SortOrder
    _count?: cadastrarVagaCountOrderByAggregateInput
    _avg?: cadastrarVagaAvgOrderByAggregateInput
    _max?: cadastrarVagaMaxOrderByAggregateInput
    _min?: cadastrarVagaMinOrderByAggregateInput
    _sum?: cadastrarVagaSumOrderByAggregateInput
  }

  export type cadastrarVagaScalarWhereWithAggregatesInput = {
    AND?: cadastrarVagaScalarWhereWithAggregatesInput | cadastrarVagaScalarWhereWithAggregatesInput[]
    OR?: cadastrarVagaScalarWhereWithAggregatesInput[]
    NOT?: cadastrarVagaScalarWhereWithAggregatesInput | cadastrarVagaScalarWhereWithAggregatesInput[]
    idVaga?: IntWithAggregatesFilter<"cadastrarVaga"> | number
    titulo?: StringWithAggregatesFilter<"cadastrarVaga"> | string
    descricao?: StringWithAggregatesFilter<"cadastrarVaga"> | string
    requisitos?: StringWithAggregatesFilter<"cadastrarVaga"> | string
    salario?: StringWithAggregatesFilter<"cadastrarVaga"> | string
    tipoContrato?: StringWithAggregatesFilter<"cadastrarVaga"> | string
    modalidade?: StringWithAggregatesFilter<"cadastrarVaga"> | string
    localizacao?: StringWithAggregatesFilter<"cadastrarVaga"> | string
    dataPublicacao?: DateTimeWithAggregatesFilter<"cadastrarVaga"> | Date | string
    status?: StringWithAggregatesFilter<"cadastrarVaga"> | string
    skills?: StringNullableListFilter<"cadastrarVaga">
    beneficios?: StringNullableListFilter<"cadastrarVaga">
    empresaId?: IntWithAggregatesFilter<"cadastrarVaga"> | number
  }

  export type candidaturaWhereInput = {
    AND?: candidaturaWhereInput | candidaturaWhereInput[]
    OR?: candidaturaWhereInput[]
    NOT?: candidaturaWhereInput | candidaturaWhereInput[]
    idCandidatura?: IntFilter<"candidatura"> | number
    dataCandidatura?: DateTimeFilter<"candidatura"> | Date | string
    status?: StringFilter<"candidatura"> | string
    candidatoId?: IntFilter<"candidatura"> | number
    vagaId?: IntFilter<"candidatura"> | number
    candidato?: XOR<CadastroCandidatoScalarRelationFilter, cadastroCandidatoWhereInput>
    vaga?: XOR<CadastrarVagaScalarRelationFilter, cadastrarVagaWhereInput>
  }

  export type candidaturaOrderByWithRelationInput = {
    idCandidatura?: SortOrder
    dataCandidatura?: SortOrder
    status?: SortOrder
    candidatoId?: SortOrder
    vagaId?: SortOrder
    candidato?: cadastroCandidatoOrderByWithRelationInput
    vaga?: cadastrarVagaOrderByWithRelationInput
  }

  export type candidaturaWhereUniqueInput = Prisma.AtLeast<{
    idCandidatura?: number
    AND?: candidaturaWhereInput | candidaturaWhereInput[]
    OR?: candidaturaWhereInput[]
    NOT?: candidaturaWhereInput | candidaturaWhereInput[]
    dataCandidatura?: DateTimeFilter<"candidatura"> | Date | string
    status?: StringFilter<"candidatura"> | string
    candidatoId?: IntFilter<"candidatura"> | number
    vagaId?: IntFilter<"candidatura"> | number
    candidato?: XOR<CadastroCandidatoScalarRelationFilter, cadastroCandidatoWhereInput>
    vaga?: XOR<CadastrarVagaScalarRelationFilter, cadastrarVagaWhereInput>
  }, "idCandidatura">

  export type candidaturaOrderByWithAggregationInput = {
    idCandidatura?: SortOrder
    dataCandidatura?: SortOrder
    status?: SortOrder
    candidatoId?: SortOrder
    vagaId?: SortOrder
    _count?: candidaturaCountOrderByAggregateInput
    _avg?: candidaturaAvgOrderByAggregateInput
    _max?: candidaturaMaxOrderByAggregateInput
    _min?: candidaturaMinOrderByAggregateInput
    _sum?: candidaturaSumOrderByAggregateInput
  }

  export type candidaturaScalarWhereWithAggregatesInput = {
    AND?: candidaturaScalarWhereWithAggregatesInput | candidaturaScalarWhereWithAggregatesInput[]
    OR?: candidaturaScalarWhereWithAggregatesInput[]
    NOT?: candidaturaScalarWhereWithAggregatesInput | candidaturaScalarWhereWithAggregatesInput[]
    idCandidatura?: IntWithAggregatesFilter<"candidatura"> | number
    dataCandidatura?: DateTimeWithAggregatesFilter<"candidatura"> | Date | string
    status?: StringWithAggregatesFilter<"candidatura"> | string
    candidatoId?: IntWithAggregatesFilter<"candidatura"> | number
    vagaId?: IntWithAggregatesFilter<"candidatura"> | number
  }

  export type EnderecoWhereInput = {
    AND?: EnderecoWhereInput | EnderecoWhereInput[]
    OR?: EnderecoWhereInput[]
    NOT?: EnderecoWhereInput | EnderecoWhereInput[]
    idEndereco?: IntFilter<"Endereco"> | number
    cep?: StringFilter<"Endereco"> | string
    logradouro?: StringFilter<"Endereco"> | string
    numero?: IntFilter<"Endereco"> | number
    complemento?: StringNullableFilter<"Endereco"> | string | null
    bairro?: StringFilter<"Endereco"> | string
    cidade?: StringFilter<"Endereco"> | string
    estado?: StringFilter<"Endereco"> | string
    candidato?: XOR<CadastroCandidatoNullableScalarRelationFilter, cadastroCandidatoWhereInput> | null
    empresa?: XOR<CadastroEmpresaNullableScalarRelationFilter, cadastroEmpresaWhereInput> | null
  }

  export type EnderecoOrderByWithRelationInput = {
    idEndereco?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrderInput | SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    candidato?: cadastroCandidatoOrderByWithRelationInput
    empresa?: cadastroEmpresaOrderByWithRelationInput
  }

  export type EnderecoWhereUniqueInput = Prisma.AtLeast<{
    idEndereco?: number
    AND?: EnderecoWhereInput | EnderecoWhereInput[]
    OR?: EnderecoWhereInput[]
    NOT?: EnderecoWhereInput | EnderecoWhereInput[]
    cep?: StringFilter<"Endereco"> | string
    logradouro?: StringFilter<"Endereco"> | string
    numero?: IntFilter<"Endereco"> | number
    complemento?: StringNullableFilter<"Endereco"> | string | null
    bairro?: StringFilter<"Endereco"> | string
    cidade?: StringFilter<"Endereco"> | string
    estado?: StringFilter<"Endereco"> | string
    candidato?: XOR<CadastroCandidatoNullableScalarRelationFilter, cadastroCandidatoWhereInput> | null
    empresa?: XOR<CadastroEmpresaNullableScalarRelationFilter, cadastroEmpresaWhereInput> | null
  }, "idEndereco">

  export type EnderecoOrderByWithAggregationInput = {
    idEndereco?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrderInput | SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    _count?: EnderecoCountOrderByAggregateInput
    _avg?: EnderecoAvgOrderByAggregateInput
    _max?: EnderecoMaxOrderByAggregateInput
    _min?: EnderecoMinOrderByAggregateInput
    _sum?: EnderecoSumOrderByAggregateInput
  }

  export type EnderecoScalarWhereWithAggregatesInput = {
    AND?: EnderecoScalarWhereWithAggregatesInput | EnderecoScalarWhereWithAggregatesInput[]
    OR?: EnderecoScalarWhereWithAggregatesInput[]
    NOT?: EnderecoScalarWhereWithAggregatesInput | EnderecoScalarWhereWithAggregatesInput[]
    idEndereco?: IntWithAggregatesFilter<"Endereco"> | number
    cep?: StringWithAggregatesFilter<"Endereco"> | string
    logradouro?: StringWithAggregatesFilter<"Endereco"> | string
    numero?: IntWithAggregatesFilter<"Endereco"> | number
    complemento?: StringNullableWithAggregatesFilter<"Endereco"> | string | null
    bairro?: StringWithAggregatesFilter<"Endereco"> | string
    cidade?: StringWithAggregatesFilter<"Endereco"> | string
    estado?: StringWithAggregatesFilter<"Endereco"> | string
  }

  export type cadastroCandidatoCreateInput = {
    nomeCandidato: string
    emailCandidato: string
    telefoneCandidato: string
    curriculo?: string
    senhaCandidato: string
    endereco: EnderecoCreateNestedOneWithoutCandidatoInput
    candidaturas?: candidaturaCreateNestedManyWithoutCandidatoInput
  }

  export type cadastroCandidatoUncheckedCreateInput = {
    idCandidato?: number
    nomeCandidato: string
    emailCandidato: string
    telefoneCandidato: string
    curriculo?: string
    senhaCandidato: string
    enderecoId: number
    candidaturas?: candidaturaUncheckedCreateNestedManyWithoutCandidatoInput
  }

  export type cadastroCandidatoUpdateInput = {
    nomeCandidato?: StringFieldUpdateOperationsInput | string
    emailCandidato?: StringFieldUpdateOperationsInput | string
    telefoneCandidato?: StringFieldUpdateOperationsInput | string
    curriculo?: StringFieldUpdateOperationsInput | string
    senhaCandidato?: StringFieldUpdateOperationsInput | string
    endereco?: EnderecoUpdateOneRequiredWithoutCandidatoNestedInput
    candidaturas?: candidaturaUpdateManyWithoutCandidatoNestedInput
  }

  export type cadastroCandidatoUncheckedUpdateInput = {
    idCandidato?: IntFieldUpdateOperationsInput | number
    nomeCandidato?: StringFieldUpdateOperationsInput | string
    emailCandidato?: StringFieldUpdateOperationsInput | string
    telefoneCandidato?: StringFieldUpdateOperationsInput | string
    curriculo?: StringFieldUpdateOperationsInput | string
    senhaCandidato?: StringFieldUpdateOperationsInput | string
    enderecoId?: IntFieldUpdateOperationsInput | number
    candidaturas?: candidaturaUncheckedUpdateManyWithoutCandidatoNestedInput
  }

  export type cadastroCandidatoCreateManyInput = {
    idCandidato?: number
    nomeCandidato: string
    emailCandidato: string
    telefoneCandidato: string
    curriculo?: string
    senhaCandidato: string
    enderecoId: number
  }

  export type cadastroCandidatoUpdateManyMutationInput = {
    nomeCandidato?: StringFieldUpdateOperationsInput | string
    emailCandidato?: StringFieldUpdateOperationsInput | string
    telefoneCandidato?: StringFieldUpdateOperationsInput | string
    curriculo?: StringFieldUpdateOperationsInput | string
    senhaCandidato?: StringFieldUpdateOperationsInput | string
  }

  export type cadastroCandidatoUncheckedUpdateManyInput = {
    idCandidato?: IntFieldUpdateOperationsInput | number
    nomeCandidato?: StringFieldUpdateOperationsInput | string
    emailCandidato?: StringFieldUpdateOperationsInput | string
    telefoneCandidato?: StringFieldUpdateOperationsInput | string
    curriculo?: StringFieldUpdateOperationsInput | string
    senhaCandidato?: StringFieldUpdateOperationsInput | string
    enderecoId?: IntFieldUpdateOperationsInput | number
  }

  export type cadastroEmpresaCreateInput = {
    nomeEmpresa: string
    cnpj: string
    segmento: string
    emailCorporativo: string
    telefoneCorporativo: string
    senhaEmpresa: string
    vagas?: cadastrarVagaCreateNestedManyWithoutEmpresaInput
    endereco: EnderecoCreateNestedOneWithoutEmpresaInput
  }

  export type cadastroEmpresaUncheckedCreateInput = {
    idEmpresa?: number
    nomeEmpresa: string
    cnpj: string
    segmento: string
    emailCorporativo: string
    telefoneCorporativo: string
    enderecoId: number
    senhaEmpresa: string
    vagas?: cadastrarVagaUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type cadastroEmpresaUpdateInput = {
    nomeEmpresa?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    segmento?: StringFieldUpdateOperationsInput | string
    emailCorporativo?: StringFieldUpdateOperationsInput | string
    telefoneCorporativo?: StringFieldUpdateOperationsInput | string
    senhaEmpresa?: StringFieldUpdateOperationsInput | string
    vagas?: cadastrarVagaUpdateManyWithoutEmpresaNestedInput
    endereco?: EnderecoUpdateOneRequiredWithoutEmpresaNestedInput
  }

  export type cadastroEmpresaUncheckedUpdateInput = {
    idEmpresa?: IntFieldUpdateOperationsInput | number
    nomeEmpresa?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    segmento?: StringFieldUpdateOperationsInput | string
    emailCorporativo?: StringFieldUpdateOperationsInput | string
    telefoneCorporativo?: StringFieldUpdateOperationsInput | string
    enderecoId?: IntFieldUpdateOperationsInput | number
    senhaEmpresa?: StringFieldUpdateOperationsInput | string
    vagas?: cadastrarVagaUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type cadastroEmpresaCreateManyInput = {
    idEmpresa?: number
    nomeEmpresa: string
    cnpj: string
    segmento: string
    emailCorporativo: string
    telefoneCorporativo: string
    enderecoId: number
    senhaEmpresa: string
  }

  export type cadastroEmpresaUpdateManyMutationInput = {
    nomeEmpresa?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    segmento?: StringFieldUpdateOperationsInput | string
    emailCorporativo?: StringFieldUpdateOperationsInput | string
    telefoneCorporativo?: StringFieldUpdateOperationsInput | string
    senhaEmpresa?: StringFieldUpdateOperationsInput | string
  }

  export type cadastroEmpresaUncheckedUpdateManyInput = {
    idEmpresa?: IntFieldUpdateOperationsInput | number
    nomeEmpresa?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    segmento?: StringFieldUpdateOperationsInput | string
    emailCorporativo?: StringFieldUpdateOperationsInput | string
    telefoneCorporativo?: StringFieldUpdateOperationsInput | string
    enderecoId?: IntFieldUpdateOperationsInput | number
    senhaEmpresa?: StringFieldUpdateOperationsInput | string
  }

  export type cadastrarVagaCreateInput = {
    titulo: string
    descricao: string
    requisitos: string
    salario: string
    tipoContrato: string
    modalidade: string
    localizacao: string
    dataPublicacao?: Date | string
    status?: string
    skills?: cadastrarVagaCreateskillsInput | string[]
    beneficios?: cadastrarVagaCreatebeneficiosInput | string[]
    empresa: cadastroEmpresaCreateNestedOneWithoutVagasInput
    candidaturas?: candidaturaCreateNestedManyWithoutVagaInput
  }

  export type cadastrarVagaUncheckedCreateInput = {
    idVaga?: number
    titulo: string
    descricao: string
    requisitos: string
    salario: string
    tipoContrato: string
    modalidade: string
    localizacao: string
    dataPublicacao?: Date | string
    status?: string
    skills?: cadastrarVagaCreateskillsInput | string[]
    beneficios?: cadastrarVagaCreatebeneficiosInput | string[]
    empresaId: number
    candidaturas?: candidaturaUncheckedCreateNestedManyWithoutVagaInput
  }

  export type cadastrarVagaUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    requisitos?: StringFieldUpdateOperationsInput | string
    salario?: StringFieldUpdateOperationsInput | string
    tipoContrato?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    skills?: cadastrarVagaUpdateskillsInput | string[]
    beneficios?: cadastrarVagaUpdatebeneficiosInput | string[]
    empresa?: cadastroEmpresaUpdateOneRequiredWithoutVagasNestedInput
    candidaturas?: candidaturaUpdateManyWithoutVagaNestedInput
  }

  export type cadastrarVagaUncheckedUpdateInput = {
    idVaga?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    requisitos?: StringFieldUpdateOperationsInput | string
    salario?: StringFieldUpdateOperationsInput | string
    tipoContrato?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    skills?: cadastrarVagaUpdateskillsInput | string[]
    beneficios?: cadastrarVagaUpdatebeneficiosInput | string[]
    empresaId?: IntFieldUpdateOperationsInput | number
    candidaturas?: candidaturaUncheckedUpdateManyWithoutVagaNestedInput
  }

  export type cadastrarVagaCreateManyInput = {
    idVaga?: number
    titulo: string
    descricao: string
    requisitos: string
    salario: string
    tipoContrato: string
    modalidade: string
    localizacao: string
    dataPublicacao?: Date | string
    status?: string
    skills?: cadastrarVagaCreateskillsInput | string[]
    beneficios?: cadastrarVagaCreatebeneficiosInput | string[]
    empresaId: number
  }

  export type cadastrarVagaUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    requisitos?: StringFieldUpdateOperationsInput | string
    salario?: StringFieldUpdateOperationsInput | string
    tipoContrato?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    skills?: cadastrarVagaUpdateskillsInput | string[]
    beneficios?: cadastrarVagaUpdatebeneficiosInput | string[]
  }

  export type cadastrarVagaUncheckedUpdateManyInput = {
    idVaga?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    requisitos?: StringFieldUpdateOperationsInput | string
    salario?: StringFieldUpdateOperationsInput | string
    tipoContrato?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    skills?: cadastrarVagaUpdateskillsInput | string[]
    beneficios?: cadastrarVagaUpdatebeneficiosInput | string[]
    empresaId?: IntFieldUpdateOperationsInput | number
  }

  export type candidaturaCreateInput = {
    dataCandidatura?: Date | string
    status?: string
    candidato: cadastroCandidatoCreateNestedOneWithoutCandidaturasInput
    vaga: cadastrarVagaCreateNestedOneWithoutCandidaturasInput
  }

  export type candidaturaUncheckedCreateInput = {
    idCandidatura?: number
    dataCandidatura?: Date | string
    status?: string
    candidatoId: number
    vagaId: number
  }

  export type candidaturaUpdateInput = {
    dataCandidatura?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    candidato?: cadastroCandidatoUpdateOneRequiredWithoutCandidaturasNestedInput
    vaga?: cadastrarVagaUpdateOneRequiredWithoutCandidaturasNestedInput
  }

  export type candidaturaUncheckedUpdateInput = {
    idCandidatura?: IntFieldUpdateOperationsInput | number
    dataCandidatura?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    candidatoId?: IntFieldUpdateOperationsInput | number
    vagaId?: IntFieldUpdateOperationsInput | number
  }

  export type candidaturaCreateManyInput = {
    idCandidatura?: number
    dataCandidatura?: Date | string
    status?: string
    candidatoId: number
    vagaId: number
  }

  export type candidaturaUpdateManyMutationInput = {
    dataCandidatura?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type candidaturaUncheckedUpdateManyInput = {
    idCandidatura?: IntFieldUpdateOperationsInput | number
    dataCandidatura?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    candidatoId?: IntFieldUpdateOperationsInput | number
    vagaId?: IntFieldUpdateOperationsInput | number
  }

  export type EnderecoCreateInput = {
    cep: string
    logradouro: string
    numero: number
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    candidato?: cadastroCandidatoCreateNestedOneWithoutEnderecoInput
    empresa?: cadastroEmpresaCreateNestedOneWithoutEnderecoInput
  }

  export type EnderecoUncheckedCreateInput = {
    idEndereco?: number
    cep: string
    logradouro: string
    numero: number
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    candidato?: cadastroCandidatoUncheckedCreateNestedOneWithoutEnderecoInput
    empresa?: cadastroEmpresaUncheckedCreateNestedOneWithoutEnderecoInput
  }

  export type EnderecoUpdateInput = {
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    candidato?: cadastroCandidatoUpdateOneWithoutEnderecoNestedInput
    empresa?: cadastroEmpresaUpdateOneWithoutEnderecoNestedInput
  }

  export type EnderecoUncheckedUpdateInput = {
    idEndereco?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    candidato?: cadastroCandidatoUncheckedUpdateOneWithoutEnderecoNestedInput
    empresa?: cadastroEmpresaUncheckedUpdateOneWithoutEnderecoNestedInput
  }

  export type EnderecoCreateManyInput = {
    idEndereco?: number
    cep: string
    logradouro: string
    numero: number
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
  }

  export type EnderecoUpdateManyMutationInput = {
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoUncheckedUpdateManyInput = {
    idEndereco?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
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

  export type EnderecoScalarRelationFilter = {
    is?: EnderecoWhereInput
    isNot?: EnderecoWhereInput
  }

  export type CandidaturaListRelationFilter = {
    every?: candidaturaWhereInput
    some?: candidaturaWhereInput
    none?: candidaturaWhereInput
  }

  export type candidaturaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cadastroCandidatoCountOrderByAggregateInput = {
    idCandidato?: SortOrder
    nomeCandidato?: SortOrder
    emailCandidato?: SortOrder
    telefoneCandidato?: SortOrder
    curriculo?: SortOrder
    senhaCandidato?: SortOrder
    enderecoId?: SortOrder
  }

  export type cadastroCandidatoAvgOrderByAggregateInput = {
    idCandidato?: SortOrder
    enderecoId?: SortOrder
  }

  export type cadastroCandidatoMaxOrderByAggregateInput = {
    idCandidato?: SortOrder
    nomeCandidato?: SortOrder
    emailCandidato?: SortOrder
    telefoneCandidato?: SortOrder
    curriculo?: SortOrder
    senhaCandidato?: SortOrder
    enderecoId?: SortOrder
  }

  export type cadastroCandidatoMinOrderByAggregateInput = {
    idCandidato?: SortOrder
    nomeCandidato?: SortOrder
    emailCandidato?: SortOrder
    telefoneCandidato?: SortOrder
    curriculo?: SortOrder
    senhaCandidato?: SortOrder
    enderecoId?: SortOrder
  }

  export type cadastroCandidatoSumOrderByAggregateInput = {
    idCandidato?: SortOrder
    enderecoId?: SortOrder
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

  export type CadastrarVagaListRelationFilter = {
    every?: cadastrarVagaWhereInput
    some?: cadastrarVagaWhereInput
    none?: cadastrarVagaWhereInput
  }

  export type cadastrarVagaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cadastroEmpresaCountOrderByAggregateInput = {
    idEmpresa?: SortOrder
    nomeEmpresa?: SortOrder
    cnpj?: SortOrder
    segmento?: SortOrder
    emailCorporativo?: SortOrder
    telefoneCorporativo?: SortOrder
    enderecoId?: SortOrder
    senhaEmpresa?: SortOrder
  }

  export type cadastroEmpresaAvgOrderByAggregateInput = {
    idEmpresa?: SortOrder
    enderecoId?: SortOrder
  }

  export type cadastroEmpresaMaxOrderByAggregateInput = {
    idEmpresa?: SortOrder
    nomeEmpresa?: SortOrder
    cnpj?: SortOrder
    segmento?: SortOrder
    emailCorporativo?: SortOrder
    telefoneCorporativo?: SortOrder
    enderecoId?: SortOrder
    senhaEmpresa?: SortOrder
  }

  export type cadastroEmpresaMinOrderByAggregateInput = {
    idEmpresa?: SortOrder
    nomeEmpresa?: SortOrder
    cnpj?: SortOrder
    segmento?: SortOrder
    emailCorporativo?: SortOrder
    telefoneCorporativo?: SortOrder
    enderecoId?: SortOrder
    senhaEmpresa?: SortOrder
  }

  export type cadastroEmpresaSumOrderByAggregateInput = {
    idEmpresa?: SortOrder
    enderecoId?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CadastroEmpresaScalarRelationFilter = {
    is?: cadastroEmpresaWhereInput
    isNot?: cadastroEmpresaWhereInput
  }

  export type cadastrarVagaCountOrderByAggregateInput = {
    idVaga?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    requisitos?: SortOrder
    salario?: SortOrder
    tipoContrato?: SortOrder
    modalidade?: SortOrder
    localizacao?: SortOrder
    dataPublicacao?: SortOrder
    status?: SortOrder
    skills?: SortOrder
    beneficios?: SortOrder
    empresaId?: SortOrder
  }

  export type cadastrarVagaAvgOrderByAggregateInput = {
    idVaga?: SortOrder
    empresaId?: SortOrder
  }

  export type cadastrarVagaMaxOrderByAggregateInput = {
    idVaga?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    requisitos?: SortOrder
    salario?: SortOrder
    tipoContrato?: SortOrder
    modalidade?: SortOrder
    localizacao?: SortOrder
    dataPublicacao?: SortOrder
    status?: SortOrder
    empresaId?: SortOrder
  }

  export type cadastrarVagaMinOrderByAggregateInput = {
    idVaga?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    requisitos?: SortOrder
    salario?: SortOrder
    tipoContrato?: SortOrder
    modalidade?: SortOrder
    localizacao?: SortOrder
    dataPublicacao?: SortOrder
    status?: SortOrder
    empresaId?: SortOrder
  }

  export type cadastrarVagaSumOrderByAggregateInput = {
    idVaga?: SortOrder
    empresaId?: SortOrder
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

  export type CadastroCandidatoScalarRelationFilter = {
    is?: cadastroCandidatoWhereInput
    isNot?: cadastroCandidatoWhereInput
  }

  export type CadastrarVagaScalarRelationFilter = {
    is?: cadastrarVagaWhereInput
    isNot?: cadastrarVagaWhereInput
  }

  export type candidaturaCountOrderByAggregateInput = {
    idCandidatura?: SortOrder
    dataCandidatura?: SortOrder
    status?: SortOrder
    candidatoId?: SortOrder
    vagaId?: SortOrder
  }

  export type candidaturaAvgOrderByAggregateInput = {
    idCandidatura?: SortOrder
    candidatoId?: SortOrder
    vagaId?: SortOrder
  }

  export type candidaturaMaxOrderByAggregateInput = {
    idCandidatura?: SortOrder
    dataCandidatura?: SortOrder
    status?: SortOrder
    candidatoId?: SortOrder
    vagaId?: SortOrder
  }

  export type candidaturaMinOrderByAggregateInput = {
    idCandidatura?: SortOrder
    dataCandidatura?: SortOrder
    status?: SortOrder
    candidatoId?: SortOrder
    vagaId?: SortOrder
  }

  export type candidaturaSumOrderByAggregateInput = {
    idCandidatura?: SortOrder
    candidatoId?: SortOrder
    vagaId?: SortOrder
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

  export type CadastroCandidatoNullableScalarRelationFilter = {
    is?: cadastroCandidatoWhereInput | null
    isNot?: cadastroCandidatoWhereInput | null
  }

  export type CadastroEmpresaNullableScalarRelationFilter = {
    is?: cadastroEmpresaWhereInput | null
    isNot?: cadastroEmpresaWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EnderecoCountOrderByAggregateInput = {
    idEndereco?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
  }

  export type EnderecoAvgOrderByAggregateInput = {
    idEndereco?: SortOrder
    numero?: SortOrder
  }

  export type EnderecoMaxOrderByAggregateInput = {
    idEndereco?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
  }

  export type EnderecoMinOrderByAggregateInput = {
    idEndereco?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
  }

  export type EnderecoSumOrderByAggregateInput = {
    idEndereco?: SortOrder
    numero?: SortOrder
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

  export type EnderecoCreateNestedOneWithoutCandidatoInput = {
    create?: XOR<EnderecoCreateWithoutCandidatoInput, EnderecoUncheckedCreateWithoutCandidatoInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutCandidatoInput
    connect?: EnderecoWhereUniqueInput
  }

  export type candidaturaCreateNestedManyWithoutCandidatoInput = {
    create?: XOR<candidaturaCreateWithoutCandidatoInput, candidaturaUncheckedCreateWithoutCandidatoInput> | candidaturaCreateWithoutCandidatoInput[] | candidaturaUncheckedCreateWithoutCandidatoInput[]
    connectOrCreate?: candidaturaCreateOrConnectWithoutCandidatoInput | candidaturaCreateOrConnectWithoutCandidatoInput[]
    createMany?: candidaturaCreateManyCandidatoInputEnvelope
    connect?: candidaturaWhereUniqueInput | candidaturaWhereUniqueInput[]
  }

  export type candidaturaUncheckedCreateNestedManyWithoutCandidatoInput = {
    create?: XOR<candidaturaCreateWithoutCandidatoInput, candidaturaUncheckedCreateWithoutCandidatoInput> | candidaturaCreateWithoutCandidatoInput[] | candidaturaUncheckedCreateWithoutCandidatoInput[]
    connectOrCreate?: candidaturaCreateOrConnectWithoutCandidatoInput | candidaturaCreateOrConnectWithoutCandidatoInput[]
    createMany?: candidaturaCreateManyCandidatoInputEnvelope
    connect?: candidaturaWhereUniqueInput | candidaturaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnderecoUpdateOneRequiredWithoutCandidatoNestedInput = {
    create?: XOR<EnderecoCreateWithoutCandidatoInput, EnderecoUncheckedCreateWithoutCandidatoInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutCandidatoInput
    upsert?: EnderecoUpsertWithoutCandidatoInput
    connect?: EnderecoWhereUniqueInput
    update?: XOR<XOR<EnderecoUpdateToOneWithWhereWithoutCandidatoInput, EnderecoUpdateWithoutCandidatoInput>, EnderecoUncheckedUpdateWithoutCandidatoInput>
  }

  export type candidaturaUpdateManyWithoutCandidatoNestedInput = {
    create?: XOR<candidaturaCreateWithoutCandidatoInput, candidaturaUncheckedCreateWithoutCandidatoInput> | candidaturaCreateWithoutCandidatoInput[] | candidaturaUncheckedCreateWithoutCandidatoInput[]
    connectOrCreate?: candidaturaCreateOrConnectWithoutCandidatoInput | candidaturaCreateOrConnectWithoutCandidatoInput[]
    upsert?: candidaturaUpsertWithWhereUniqueWithoutCandidatoInput | candidaturaUpsertWithWhereUniqueWithoutCandidatoInput[]
    createMany?: candidaturaCreateManyCandidatoInputEnvelope
    set?: candidaturaWhereUniqueInput | candidaturaWhereUniqueInput[]
    disconnect?: candidaturaWhereUniqueInput | candidaturaWhereUniqueInput[]
    delete?: candidaturaWhereUniqueInput | candidaturaWhereUniqueInput[]
    connect?: candidaturaWhereUniqueInput | candidaturaWhereUniqueInput[]
    update?: candidaturaUpdateWithWhereUniqueWithoutCandidatoInput | candidaturaUpdateWithWhereUniqueWithoutCandidatoInput[]
    updateMany?: candidaturaUpdateManyWithWhereWithoutCandidatoInput | candidaturaUpdateManyWithWhereWithoutCandidatoInput[]
    deleteMany?: candidaturaScalarWhereInput | candidaturaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type candidaturaUncheckedUpdateManyWithoutCandidatoNestedInput = {
    create?: XOR<candidaturaCreateWithoutCandidatoInput, candidaturaUncheckedCreateWithoutCandidatoInput> | candidaturaCreateWithoutCandidatoInput[] | candidaturaUncheckedCreateWithoutCandidatoInput[]
    connectOrCreate?: candidaturaCreateOrConnectWithoutCandidatoInput | candidaturaCreateOrConnectWithoutCandidatoInput[]
    upsert?: candidaturaUpsertWithWhereUniqueWithoutCandidatoInput | candidaturaUpsertWithWhereUniqueWithoutCandidatoInput[]
    createMany?: candidaturaCreateManyCandidatoInputEnvelope
    set?: candidaturaWhereUniqueInput | candidaturaWhereUniqueInput[]
    disconnect?: candidaturaWhereUniqueInput | candidaturaWhereUniqueInput[]
    delete?: candidaturaWhereUniqueInput | candidaturaWhereUniqueInput[]
    connect?: candidaturaWhereUniqueInput | candidaturaWhereUniqueInput[]
    update?: candidaturaUpdateWithWhereUniqueWithoutCandidatoInput | candidaturaUpdateWithWhereUniqueWithoutCandidatoInput[]
    updateMany?: candidaturaUpdateManyWithWhereWithoutCandidatoInput | candidaturaUpdateManyWithWhereWithoutCandidatoInput[]
    deleteMany?: candidaturaScalarWhereInput | candidaturaScalarWhereInput[]
  }

  export type cadastrarVagaCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<cadastrarVagaCreateWithoutEmpresaInput, cadastrarVagaUncheckedCreateWithoutEmpresaInput> | cadastrarVagaCreateWithoutEmpresaInput[] | cadastrarVagaUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: cadastrarVagaCreateOrConnectWithoutEmpresaInput | cadastrarVagaCreateOrConnectWithoutEmpresaInput[]
    createMany?: cadastrarVagaCreateManyEmpresaInputEnvelope
    connect?: cadastrarVagaWhereUniqueInput | cadastrarVagaWhereUniqueInput[]
  }

  export type EnderecoCreateNestedOneWithoutEmpresaInput = {
    create?: XOR<EnderecoCreateWithoutEmpresaInput, EnderecoUncheckedCreateWithoutEmpresaInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutEmpresaInput
    connect?: EnderecoWhereUniqueInput
  }

  export type cadastrarVagaUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<cadastrarVagaCreateWithoutEmpresaInput, cadastrarVagaUncheckedCreateWithoutEmpresaInput> | cadastrarVagaCreateWithoutEmpresaInput[] | cadastrarVagaUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: cadastrarVagaCreateOrConnectWithoutEmpresaInput | cadastrarVagaCreateOrConnectWithoutEmpresaInput[]
    createMany?: cadastrarVagaCreateManyEmpresaInputEnvelope
    connect?: cadastrarVagaWhereUniqueInput | cadastrarVagaWhereUniqueInput[]
  }

  export type cadastrarVagaUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<cadastrarVagaCreateWithoutEmpresaInput, cadastrarVagaUncheckedCreateWithoutEmpresaInput> | cadastrarVagaCreateWithoutEmpresaInput[] | cadastrarVagaUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: cadastrarVagaCreateOrConnectWithoutEmpresaInput | cadastrarVagaCreateOrConnectWithoutEmpresaInput[]
    upsert?: cadastrarVagaUpsertWithWhereUniqueWithoutEmpresaInput | cadastrarVagaUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: cadastrarVagaCreateManyEmpresaInputEnvelope
    set?: cadastrarVagaWhereUniqueInput | cadastrarVagaWhereUniqueInput[]
    disconnect?: cadastrarVagaWhereUniqueInput | cadastrarVagaWhereUniqueInput[]
    delete?: cadastrarVagaWhereUniqueInput | cadastrarVagaWhereUniqueInput[]
    connect?: cadastrarVagaWhereUniqueInput | cadastrarVagaWhereUniqueInput[]
    update?: cadastrarVagaUpdateWithWhereUniqueWithoutEmpresaInput | cadastrarVagaUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: cadastrarVagaUpdateManyWithWhereWithoutEmpresaInput | cadastrarVagaUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: cadastrarVagaScalarWhereInput | cadastrarVagaScalarWhereInput[]
  }

  export type EnderecoUpdateOneRequiredWithoutEmpresaNestedInput = {
    create?: XOR<EnderecoCreateWithoutEmpresaInput, EnderecoUncheckedCreateWithoutEmpresaInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutEmpresaInput
    upsert?: EnderecoUpsertWithoutEmpresaInput
    connect?: EnderecoWhereUniqueInput
    update?: XOR<XOR<EnderecoUpdateToOneWithWhereWithoutEmpresaInput, EnderecoUpdateWithoutEmpresaInput>, EnderecoUncheckedUpdateWithoutEmpresaInput>
  }

  export type cadastrarVagaUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<cadastrarVagaCreateWithoutEmpresaInput, cadastrarVagaUncheckedCreateWithoutEmpresaInput> | cadastrarVagaCreateWithoutEmpresaInput[] | cadastrarVagaUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: cadastrarVagaCreateOrConnectWithoutEmpresaInput | cadastrarVagaCreateOrConnectWithoutEmpresaInput[]
    upsert?: cadastrarVagaUpsertWithWhereUniqueWithoutEmpresaInput | cadastrarVagaUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: cadastrarVagaCreateManyEmpresaInputEnvelope
    set?: cadastrarVagaWhereUniqueInput | cadastrarVagaWhereUniqueInput[]
    disconnect?: cadastrarVagaWhereUniqueInput | cadastrarVagaWhereUniqueInput[]
    delete?: cadastrarVagaWhereUniqueInput | cadastrarVagaWhereUniqueInput[]
    connect?: cadastrarVagaWhereUniqueInput | cadastrarVagaWhereUniqueInput[]
    update?: cadastrarVagaUpdateWithWhereUniqueWithoutEmpresaInput | cadastrarVagaUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: cadastrarVagaUpdateManyWithWhereWithoutEmpresaInput | cadastrarVagaUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: cadastrarVagaScalarWhereInput | cadastrarVagaScalarWhereInput[]
  }

  export type cadastrarVagaCreateskillsInput = {
    set: string[]
  }

  export type cadastrarVagaCreatebeneficiosInput = {
    set: string[]
  }

  export type cadastroEmpresaCreateNestedOneWithoutVagasInput = {
    create?: XOR<cadastroEmpresaCreateWithoutVagasInput, cadastroEmpresaUncheckedCreateWithoutVagasInput>
    connectOrCreate?: cadastroEmpresaCreateOrConnectWithoutVagasInput
    connect?: cadastroEmpresaWhereUniqueInput
  }

  export type candidaturaCreateNestedManyWithoutVagaInput = {
    create?: XOR<candidaturaCreateWithoutVagaInput, candidaturaUncheckedCreateWithoutVagaInput> | candidaturaCreateWithoutVagaInput[] | candidaturaUncheckedCreateWithoutVagaInput[]
    connectOrCreate?: candidaturaCreateOrConnectWithoutVagaInput | candidaturaCreateOrConnectWithoutVagaInput[]
    createMany?: candidaturaCreateManyVagaInputEnvelope
    connect?: candidaturaWhereUniqueInput | candidaturaWhereUniqueInput[]
  }

  export type candidaturaUncheckedCreateNestedManyWithoutVagaInput = {
    create?: XOR<candidaturaCreateWithoutVagaInput, candidaturaUncheckedCreateWithoutVagaInput> | candidaturaCreateWithoutVagaInput[] | candidaturaUncheckedCreateWithoutVagaInput[]
    connectOrCreate?: candidaturaCreateOrConnectWithoutVagaInput | candidaturaCreateOrConnectWithoutVagaInput[]
    createMany?: candidaturaCreateManyVagaInputEnvelope
    connect?: candidaturaWhereUniqueInput | candidaturaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type cadastrarVagaUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type cadastrarVagaUpdatebeneficiosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type cadastroEmpresaUpdateOneRequiredWithoutVagasNestedInput = {
    create?: XOR<cadastroEmpresaCreateWithoutVagasInput, cadastroEmpresaUncheckedCreateWithoutVagasInput>
    connectOrCreate?: cadastroEmpresaCreateOrConnectWithoutVagasInput
    upsert?: cadastroEmpresaUpsertWithoutVagasInput
    connect?: cadastroEmpresaWhereUniqueInput
    update?: XOR<XOR<cadastroEmpresaUpdateToOneWithWhereWithoutVagasInput, cadastroEmpresaUpdateWithoutVagasInput>, cadastroEmpresaUncheckedUpdateWithoutVagasInput>
  }

  export type candidaturaUpdateManyWithoutVagaNestedInput = {
    create?: XOR<candidaturaCreateWithoutVagaInput, candidaturaUncheckedCreateWithoutVagaInput> | candidaturaCreateWithoutVagaInput[] | candidaturaUncheckedCreateWithoutVagaInput[]
    connectOrCreate?: candidaturaCreateOrConnectWithoutVagaInput | candidaturaCreateOrConnectWithoutVagaInput[]
    upsert?: candidaturaUpsertWithWhereUniqueWithoutVagaInput | candidaturaUpsertWithWhereUniqueWithoutVagaInput[]
    createMany?: candidaturaCreateManyVagaInputEnvelope
    set?: candidaturaWhereUniqueInput | candidaturaWhereUniqueInput[]
    disconnect?: candidaturaWhereUniqueInput | candidaturaWhereUniqueInput[]
    delete?: candidaturaWhereUniqueInput | candidaturaWhereUniqueInput[]
    connect?: candidaturaWhereUniqueInput | candidaturaWhereUniqueInput[]
    update?: candidaturaUpdateWithWhereUniqueWithoutVagaInput | candidaturaUpdateWithWhereUniqueWithoutVagaInput[]
    updateMany?: candidaturaUpdateManyWithWhereWithoutVagaInput | candidaturaUpdateManyWithWhereWithoutVagaInput[]
    deleteMany?: candidaturaScalarWhereInput | candidaturaScalarWhereInput[]
  }

  export type candidaturaUncheckedUpdateManyWithoutVagaNestedInput = {
    create?: XOR<candidaturaCreateWithoutVagaInput, candidaturaUncheckedCreateWithoutVagaInput> | candidaturaCreateWithoutVagaInput[] | candidaturaUncheckedCreateWithoutVagaInput[]
    connectOrCreate?: candidaturaCreateOrConnectWithoutVagaInput | candidaturaCreateOrConnectWithoutVagaInput[]
    upsert?: candidaturaUpsertWithWhereUniqueWithoutVagaInput | candidaturaUpsertWithWhereUniqueWithoutVagaInput[]
    createMany?: candidaturaCreateManyVagaInputEnvelope
    set?: candidaturaWhereUniqueInput | candidaturaWhereUniqueInput[]
    disconnect?: candidaturaWhereUniqueInput | candidaturaWhereUniqueInput[]
    delete?: candidaturaWhereUniqueInput | candidaturaWhereUniqueInput[]
    connect?: candidaturaWhereUniqueInput | candidaturaWhereUniqueInput[]
    update?: candidaturaUpdateWithWhereUniqueWithoutVagaInput | candidaturaUpdateWithWhereUniqueWithoutVagaInput[]
    updateMany?: candidaturaUpdateManyWithWhereWithoutVagaInput | candidaturaUpdateManyWithWhereWithoutVagaInput[]
    deleteMany?: candidaturaScalarWhereInput | candidaturaScalarWhereInput[]
  }

  export type cadastroCandidatoCreateNestedOneWithoutCandidaturasInput = {
    create?: XOR<cadastroCandidatoCreateWithoutCandidaturasInput, cadastroCandidatoUncheckedCreateWithoutCandidaturasInput>
    connectOrCreate?: cadastroCandidatoCreateOrConnectWithoutCandidaturasInput
    connect?: cadastroCandidatoWhereUniqueInput
  }

  export type cadastrarVagaCreateNestedOneWithoutCandidaturasInput = {
    create?: XOR<cadastrarVagaCreateWithoutCandidaturasInput, cadastrarVagaUncheckedCreateWithoutCandidaturasInput>
    connectOrCreate?: cadastrarVagaCreateOrConnectWithoutCandidaturasInput
    connect?: cadastrarVagaWhereUniqueInput
  }

  export type cadastroCandidatoUpdateOneRequiredWithoutCandidaturasNestedInput = {
    create?: XOR<cadastroCandidatoCreateWithoutCandidaturasInput, cadastroCandidatoUncheckedCreateWithoutCandidaturasInput>
    connectOrCreate?: cadastroCandidatoCreateOrConnectWithoutCandidaturasInput
    upsert?: cadastroCandidatoUpsertWithoutCandidaturasInput
    connect?: cadastroCandidatoWhereUniqueInput
    update?: XOR<XOR<cadastroCandidatoUpdateToOneWithWhereWithoutCandidaturasInput, cadastroCandidatoUpdateWithoutCandidaturasInput>, cadastroCandidatoUncheckedUpdateWithoutCandidaturasInput>
  }

  export type cadastrarVagaUpdateOneRequiredWithoutCandidaturasNestedInput = {
    create?: XOR<cadastrarVagaCreateWithoutCandidaturasInput, cadastrarVagaUncheckedCreateWithoutCandidaturasInput>
    connectOrCreate?: cadastrarVagaCreateOrConnectWithoutCandidaturasInput
    upsert?: cadastrarVagaUpsertWithoutCandidaturasInput
    connect?: cadastrarVagaWhereUniqueInput
    update?: XOR<XOR<cadastrarVagaUpdateToOneWithWhereWithoutCandidaturasInput, cadastrarVagaUpdateWithoutCandidaturasInput>, cadastrarVagaUncheckedUpdateWithoutCandidaturasInput>
  }

  export type cadastroCandidatoCreateNestedOneWithoutEnderecoInput = {
    create?: XOR<cadastroCandidatoCreateWithoutEnderecoInput, cadastroCandidatoUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: cadastroCandidatoCreateOrConnectWithoutEnderecoInput
    connect?: cadastroCandidatoWhereUniqueInput
  }

  export type cadastroEmpresaCreateNestedOneWithoutEnderecoInput = {
    create?: XOR<cadastroEmpresaCreateWithoutEnderecoInput, cadastroEmpresaUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: cadastroEmpresaCreateOrConnectWithoutEnderecoInput
    connect?: cadastroEmpresaWhereUniqueInput
  }

  export type cadastroCandidatoUncheckedCreateNestedOneWithoutEnderecoInput = {
    create?: XOR<cadastroCandidatoCreateWithoutEnderecoInput, cadastroCandidatoUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: cadastroCandidatoCreateOrConnectWithoutEnderecoInput
    connect?: cadastroCandidatoWhereUniqueInput
  }

  export type cadastroEmpresaUncheckedCreateNestedOneWithoutEnderecoInput = {
    create?: XOR<cadastroEmpresaCreateWithoutEnderecoInput, cadastroEmpresaUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: cadastroEmpresaCreateOrConnectWithoutEnderecoInput
    connect?: cadastroEmpresaWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type cadastroCandidatoUpdateOneWithoutEnderecoNestedInput = {
    create?: XOR<cadastroCandidatoCreateWithoutEnderecoInput, cadastroCandidatoUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: cadastroCandidatoCreateOrConnectWithoutEnderecoInput
    upsert?: cadastroCandidatoUpsertWithoutEnderecoInput
    disconnect?: cadastroCandidatoWhereInput | boolean
    delete?: cadastroCandidatoWhereInput | boolean
    connect?: cadastroCandidatoWhereUniqueInput
    update?: XOR<XOR<cadastroCandidatoUpdateToOneWithWhereWithoutEnderecoInput, cadastroCandidatoUpdateWithoutEnderecoInput>, cadastroCandidatoUncheckedUpdateWithoutEnderecoInput>
  }

  export type cadastroEmpresaUpdateOneWithoutEnderecoNestedInput = {
    create?: XOR<cadastroEmpresaCreateWithoutEnderecoInput, cadastroEmpresaUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: cadastroEmpresaCreateOrConnectWithoutEnderecoInput
    upsert?: cadastroEmpresaUpsertWithoutEnderecoInput
    disconnect?: cadastroEmpresaWhereInput | boolean
    delete?: cadastroEmpresaWhereInput | boolean
    connect?: cadastroEmpresaWhereUniqueInput
    update?: XOR<XOR<cadastroEmpresaUpdateToOneWithWhereWithoutEnderecoInput, cadastroEmpresaUpdateWithoutEnderecoInput>, cadastroEmpresaUncheckedUpdateWithoutEnderecoInput>
  }

  export type cadastroCandidatoUncheckedUpdateOneWithoutEnderecoNestedInput = {
    create?: XOR<cadastroCandidatoCreateWithoutEnderecoInput, cadastroCandidatoUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: cadastroCandidatoCreateOrConnectWithoutEnderecoInput
    upsert?: cadastroCandidatoUpsertWithoutEnderecoInput
    disconnect?: cadastroCandidatoWhereInput | boolean
    delete?: cadastroCandidatoWhereInput | boolean
    connect?: cadastroCandidatoWhereUniqueInput
    update?: XOR<XOR<cadastroCandidatoUpdateToOneWithWhereWithoutEnderecoInput, cadastroCandidatoUpdateWithoutEnderecoInput>, cadastroCandidatoUncheckedUpdateWithoutEnderecoInput>
  }

  export type cadastroEmpresaUncheckedUpdateOneWithoutEnderecoNestedInput = {
    create?: XOR<cadastroEmpresaCreateWithoutEnderecoInput, cadastroEmpresaUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: cadastroEmpresaCreateOrConnectWithoutEnderecoInput
    upsert?: cadastroEmpresaUpsertWithoutEnderecoInput
    disconnect?: cadastroEmpresaWhereInput | boolean
    delete?: cadastroEmpresaWhereInput | boolean
    connect?: cadastroEmpresaWhereUniqueInput
    update?: XOR<XOR<cadastroEmpresaUpdateToOneWithWhereWithoutEnderecoInput, cadastroEmpresaUpdateWithoutEnderecoInput>, cadastroEmpresaUncheckedUpdateWithoutEnderecoInput>
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

  export type EnderecoCreateWithoutCandidatoInput = {
    cep: string
    logradouro: string
    numero: number
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    empresa?: cadastroEmpresaCreateNestedOneWithoutEnderecoInput
  }

  export type EnderecoUncheckedCreateWithoutCandidatoInput = {
    idEndereco?: number
    cep: string
    logradouro: string
    numero: number
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    empresa?: cadastroEmpresaUncheckedCreateNestedOneWithoutEnderecoInput
  }

  export type EnderecoCreateOrConnectWithoutCandidatoInput = {
    where: EnderecoWhereUniqueInput
    create: XOR<EnderecoCreateWithoutCandidatoInput, EnderecoUncheckedCreateWithoutCandidatoInput>
  }

  export type candidaturaCreateWithoutCandidatoInput = {
    dataCandidatura?: Date | string
    status?: string
    vaga: cadastrarVagaCreateNestedOneWithoutCandidaturasInput
  }

  export type candidaturaUncheckedCreateWithoutCandidatoInput = {
    idCandidatura?: number
    dataCandidatura?: Date | string
    status?: string
    vagaId: number
  }

  export type candidaturaCreateOrConnectWithoutCandidatoInput = {
    where: candidaturaWhereUniqueInput
    create: XOR<candidaturaCreateWithoutCandidatoInput, candidaturaUncheckedCreateWithoutCandidatoInput>
  }

  export type candidaturaCreateManyCandidatoInputEnvelope = {
    data: candidaturaCreateManyCandidatoInput | candidaturaCreateManyCandidatoInput[]
    skipDuplicates?: boolean
  }

  export type EnderecoUpsertWithoutCandidatoInput = {
    update: XOR<EnderecoUpdateWithoutCandidatoInput, EnderecoUncheckedUpdateWithoutCandidatoInput>
    create: XOR<EnderecoCreateWithoutCandidatoInput, EnderecoUncheckedCreateWithoutCandidatoInput>
    where?: EnderecoWhereInput
  }

  export type EnderecoUpdateToOneWithWhereWithoutCandidatoInput = {
    where?: EnderecoWhereInput
    data: XOR<EnderecoUpdateWithoutCandidatoInput, EnderecoUncheckedUpdateWithoutCandidatoInput>
  }

  export type EnderecoUpdateWithoutCandidatoInput = {
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    empresa?: cadastroEmpresaUpdateOneWithoutEnderecoNestedInput
  }

  export type EnderecoUncheckedUpdateWithoutCandidatoInput = {
    idEndereco?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    empresa?: cadastroEmpresaUncheckedUpdateOneWithoutEnderecoNestedInput
  }

  export type candidaturaUpsertWithWhereUniqueWithoutCandidatoInput = {
    where: candidaturaWhereUniqueInput
    update: XOR<candidaturaUpdateWithoutCandidatoInput, candidaturaUncheckedUpdateWithoutCandidatoInput>
    create: XOR<candidaturaCreateWithoutCandidatoInput, candidaturaUncheckedCreateWithoutCandidatoInput>
  }

  export type candidaturaUpdateWithWhereUniqueWithoutCandidatoInput = {
    where: candidaturaWhereUniqueInput
    data: XOR<candidaturaUpdateWithoutCandidatoInput, candidaturaUncheckedUpdateWithoutCandidatoInput>
  }

  export type candidaturaUpdateManyWithWhereWithoutCandidatoInput = {
    where: candidaturaScalarWhereInput
    data: XOR<candidaturaUpdateManyMutationInput, candidaturaUncheckedUpdateManyWithoutCandidatoInput>
  }

  export type candidaturaScalarWhereInput = {
    AND?: candidaturaScalarWhereInput | candidaturaScalarWhereInput[]
    OR?: candidaturaScalarWhereInput[]
    NOT?: candidaturaScalarWhereInput | candidaturaScalarWhereInput[]
    idCandidatura?: IntFilter<"candidatura"> | number
    dataCandidatura?: DateTimeFilter<"candidatura"> | Date | string
    status?: StringFilter<"candidatura"> | string
    candidatoId?: IntFilter<"candidatura"> | number
    vagaId?: IntFilter<"candidatura"> | number
  }

  export type cadastrarVagaCreateWithoutEmpresaInput = {
    titulo: string
    descricao: string
    requisitos: string
    salario: string
    tipoContrato: string
    modalidade: string
    localizacao: string
    dataPublicacao?: Date | string
    status?: string
    skills?: cadastrarVagaCreateskillsInput | string[]
    beneficios?: cadastrarVagaCreatebeneficiosInput | string[]
    candidaturas?: candidaturaCreateNestedManyWithoutVagaInput
  }

  export type cadastrarVagaUncheckedCreateWithoutEmpresaInput = {
    idVaga?: number
    titulo: string
    descricao: string
    requisitos: string
    salario: string
    tipoContrato: string
    modalidade: string
    localizacao: string
    dataPublicacao?: Date | string
    status?: string
    skills?: cadastrarVagaCreateskillsInput | string[]
    beneficios?: cadastrarVagaCreatebeneficiosInput | string[]
    candidaturas?: candidaturaUncheckedCreateNestedManyWithoutVagaInput
  }

  export type cadastrarVagaCreateOrConnectWithoutEmpresaInput = {
    where: cadastrarVagaWhereUniqueInput
    create: XOR<cadastrarVagaCreateWithoutEmpresaInput, cadastrarVagaUncheckedCreateWithoutEmpresaInput>
  }

  export type cadastrarVagaCreateManyEmpresaInputEnvelope = {
    data: cadastrarVagaCreateManyEmpresaInput | cadastrarVagaCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type EnderecoCreateWithoutEmpresaInput = {
    cep: string
    logradouro: string
    numero: number
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    candidato?: cadastroCandidatoCreateNestedOneWithoutEnderecoInput
  }

  export type EnderecoUncheckedCreateWithoutEmpresaInput = {
    idEndereco?: number
    cep: string
    logradouro: string
    numero: number
    complemento?: string | null
    bairro: string
    cidade: string
    estado: string
    candidato?: cadastroCandidatoUncheckedCreateNestedOneWithoutEnderecoInput
  }

  export type EnderecoCreateOrConnectWithoutEmpresaInput = {
    where: EnderecoWhereUniqueInput
    create: XOR<EnderecoCreateWithoutEmpresaInput, EnderecoUncheckedCreateWithoutEmpresaInput>
  }

  export type cadastrarVagaUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: cadastrarVagaWhereUniqueInput
    update: XOR<cadastrarVagaUpdateWithoutEmpresaInput, cadastrarVagaUncheckedUpdateWithoutEmpresaInput>
    create: XOR<cadastrarVagaCreateWithoutEmpresaInput, cadastrarVagaUncheckedCreateWithoutEmpresaInput>
  }

  export type cadastrarVagaUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: cadastrarVagaWhereUniqueInput
    data: XOR<cadastrarVagaUpdateWithoutEmpresaInput, cadastrarVagaUncheckedUpdateWithoutEmpresaInput>
  }

  export type cadastrarVagaUpdateManyWithWhereWithoutEmpresaInput = {
    where: cadastrarVagaScalarWhereInput
    data: XOR<cadastrarVagaUpdateManyMutationInput, cadastrarVagaUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type cadastrarVagaScalarWhereInput = {
    AND?: cadastrarVagaScalarWhereInput | cadastrarVagaScalarWhereInput[]
    OR?: cadastrarVagaScalarWhereInput[]
    NOT?: cadastrarVagaScalarWhereInput | cadastrarVagaScalarWhereInput[]
    idVaga?: IntFilter<"cadastrarVaga"> | number
    titulo?: StringFilter<"cadastrarVaga"> | string
    descricao?: StringFilter<"cadastrarVaga"> | string
    requisitos?: StringFilter<"cadastrarVaga"> | string
    salario?: StringFilter<"cadastrarVaga"> | string
    tipoContrato?: StringFilter<"cadastrarVaga"> | string
    modalidade?: StringFilter<"cadastrarVaga"> | string
    localizacao?: StringFilter<"cadastrarVaga"> | string
    dataPublicacao?: DateTimeFilter<"cadastrarVaga"> | Date | string
    status?: StringFilter<"cadastrarVaga"> | string
    skills?: StringNullableListFilter<"cadastrarVaga">
    beneficios?: StringNullableListFilter<"cadastrarVaga">
    empresaId?: IntFilter<"cadastrarVaga"> | number
  }

  export type EnderecoUpsertWithoutEmpresaInput = {
    update: XOR<EnderecoUpdateWithoutEmpresaInput, EnderecoUncheckedUpdateWithoutEmpresaInput>
    create: XOR<EnderecoCreateWithoutEmpresaInput, EnderecoUncheckedCreateWithoutEmpresaInput>
    where?: EnderecoWhereInput
  }

  export type EnderecoUpdateToOneWithWhereWithoutEmpresaInput = {
    where?: EnderecoWhereInput
    data: XOR<EnderecoUpdateWithoutEmpresaInput, EnderecoUncheckedUpdateWithoutEmpresaInput>
  }

  export type EnderecoUpdateWithoutEmpresaInput = {
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    candidato?: cadastroCandidatoUpdateOneWithoutEnderecoNestedInput
  }

  export type EnderecoUncheckedUpdateWithoutEmpresaInput = {
    idEndereco?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    candidato?: cadastroCandidatoUncheckedUpdateOneWithoutEnderecoNestedInput
  }

  export type cadastroEmpresaCreateWithoutVagasInput = {
    nomeEmpresa: string
    cnpj: string
    segmento: string
    emailCorporativo: string
    telefoneCorporativo: string
    senhaEmpresa: string
    endereco: EnderecoCreateNestedOneWithoutEmpresaInput
  }

  export type cadastroEmpresaUncheckedCreateWithoutVagasInput = {
    idEmpresa?: number
    nomeEmpresa: string
    cnpj: string
    segmento: string
    emailCorporativo: string
    telefoneCorporativo: string
    enderecoId: number
    senhaEmpresa: string
  }

  export type cadastroEmpresaCreateOrConnectWithoutVagasInput = {
    where: cadastroEmpresaWhereUniqueInput
    create: XOR<cadastroEmpresaCreateWithoutVagasInput, cadastroEmpresaUncheckedCreateWithoutVagasInput>
  }

  export type candidaturaCreateWithoutVagaInput = {
    dataCandidatura?: Date | string
    status?: string
    candidato: cadastroCandidatoCreateNestedOneWithoutCandidaturasInput
  }

  export type candidaturaUncheckedCreateWithoutVagaInput = {
    idCandidatura?: number
    dataCandidatura?: Date | string
    status?: string
    candidatoId: number
  }

  export type candidaturaCreateOrConnectWithoutVagaInput = {
    where: candidaturaWhereUniqueInput
    create: XOR<candidaturaCreateWithoutVagaInput, candidaturaUncheckedCreateWithoutVagaInput>
  }

  export type candidaturaCreateManyVagaInputEnvelope = {
    data: candidaturaCreateManyVagaInput | candidaturaCreateManyVagaInput[]
    skipDuplicates?: boolean
  }

  export type cadastroEmpresaUpsertWithoutVagasInput = {
    update: XOR<cadastroEmpresaUpdateWithoutVagasInput, cadastroEmpresaUncheckedUpdateWithoutVagasInput>
    create: XOR<cadastroEmpresaCreateWithoutVagasInput, cadastroEmpresaUncheckedCreateWithoutVagasInput>
    where?: cadastroEmpresaWhereInput
  }

  export type cadastroEmpresaUpdateToOneWithWhereWithoutVagasInput = {
    where?: cadastroEmpresaWhereInput
    data: XOR<cadastroEmpresaUpdateWithoutVagasInput, cadastroEmpresaUncheckedUpdateWithoutVagasInput>
  }

  export type cadastroEmpresaUpdateWithoutVagasInput = {
    nomeEmpresa?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    segmento?: StringFieldUpdateOperationsInput | string
    emailCorporativo?: StringFieldUpdateOperationsInput | string
    telefoneCorporativo?: StringFieldUpdateOperationsInput | string
    senhaEmpresa?: StringFieldUpdateOperationsInput | string
    endereco?: EnderecoUpdateOneRequiredWithoutEmpresaNestedInput
  }

  export type cadastroEmpresaUncheckedUpdateWithoutVagasInput = {
    idEmpresa?: IntFieldUpdateOperationsInput | number
    nomeEmpresa?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    segmento?: StringFieldUpdateOperationsInput | string
    emailCorporativo?: StringFieldUpdateOperationsInput | string
    telefoneCorporativo?: StringFieldUpdateOperationsInput | string
    enderecoId?: IntFieldUpdateOperationsInput | number
    senhaEmpresa?: StringFieldUpdateOperationsInput | string
  }

  export type candidaturaUpsertWithWhereUniqueWithoutVagaInput = {
    where: candidaturaWhereUniqueInput
    update: XOR<candidaturaUpdateWithoutVagaInput, candidaturaUncheckedUpdateWithoutVagaInput>
    create: XOR<candidaturaCreateWithoutVagaInput, candidaturaUncheckedCreateWithoutVagaInput>
  }

  export type candidaturaUpdateWithWhereUniqueWithoutVagaInput = {
    where: candidaturaWhereUniqueInput
    data: XOR<candidaturaUpdateWithoutVagaInput, candidaturaUncheckedUpdateWithoutVagaInput>
  }

  export type candidaturaUpdateManyWithWhereWithoutVagaInput = {
    where: candidaturaScalarWhereInput
    data: XOR<candidaturaUpdateManyMutationInput, candidaturaUncheckedUpdateManyWithoutVagaInput>
  }

  export type cadastroCandidatoCreateWithoutCandidaturasInput = {
    nomeCandidato: string
    emailCandidato: string
    telefoneCandidato: string
    curriculo?: string
    senhaCandidato: string
    endereco: EnderecoCreateNestedOneWithoutCandidatoInput
  }

  export type cadastroCandidatoUncheckedCreateWithoutCandidaturasInput = {
    idCandidato?: number
    nomeCandidato: string
    emailCandidato: string
    telefoneCandidato: string
    curriculo?: string
    senhaCandidato: string
    enderecoId: number
  }

  export type cadastroCandidatoCreateOrConnectWithoutCandidaturasInput = {
    where: cadastroCandidatoWhereUniqueInput
    create: XOR<cadastroCandidatoCreateWithoutCandidaturasInput, cadastroCandidatoUncheckedCreateWithoutCandidaturasInput>
  }

  export type cadastrarVagaCreateWithoutCandidaturasInput = {
    titulo: string
    descricao: string
    requisitos: string
    salario: string
    tipoContrato: string
    modalidade: string
    localizacao: string
    dataPublicacao?: Date | string
    status?: string
    skills?: cadastrarVagaCreateskillsInput | string[]
    beneficios?: cadastrarVagaCreatebeneficiosInput | string[]
    empresa: cadastroEmpresaCreateNestedOneWithoutVagasInput
  }

  export type cadastrarVagaUncheckedCreateWithoutCandidaturasInput = {
    idVaga?: number
    titulo: string
    descricao: string
    requisitos: string
    salario: string
    tipoContrato: string
    modalidade: string
    localizacao: string
    dataPublicacao?: Date | string
    status?: string
    skills?: cadastrarVagaCreateskillsInput | string[]
    beneficios?: cadastrarVagaCreatebeneficiosInput | string[]
    empresaId: number
  }

  export type cadastrarVagaCreateOrConnectWithoutCandidaturasInput = {
    where: cadastrarVagaWhereUniqueInput
    create: XOR<cadastrarVagaCreateWithoutCandidaturasInput, cadastrarVagaUncheckedCreateWithoutCandidaturasInput>
  }

  export type cadastroCandidatoUpsertWithoutCandidaturasInput = {
    update: XOR<cadastroCandidatoUpdateWithoutCandidaturasInput, cadastroCandidatoUncheckedUpdateWithoutCandidaturasInput>
    create: XOR<cadastroCandidatoCreateWithoutCandidaturasInput, cadastroCandidatoUncheckedCreateWithoutCandidaturasInput>
    where?: cadastroCandidatoWhereInput
  }

  export type cadastroCandidatoUpdateToOneWithWhereWithoutCandidaturasInput = {
    where?: cadastroCandidatoWhereInput
    data: XOR<cadastroCandidatoUpdateWithoutCandidaturasInput, cadastroCandidatoUncheckedUpdateWithoutCandidaturasInput>
  }

  export type cadastroCandidatoUpdateWithoutCandidaturasInput = {
    nomeCandidato?: StringFieldUpdateOperationsInput | string
    emailCandidato?: StringFieldUpdateOperationsInput | string
    telefoneCandidato?: StringFieldUpdateOperationsInput | string
    curriculo?: StringFieldUpdateOperationsInput | string
    senhaCandidato?: StringFieldUpdateOperationsInput | string
    endereco?: EnderecoUpdateOneRequiredWithoutCandidatoNestedInput
  }

  export type cadastroCandidatoUncheckedUpdateWithoutCandidaturasInput = {
    idCandidato?: IntFieldUpdateOperationsInput | number
    nomeCandidato?: StringFieldUpdateOperationsInput | string
    emailCandidato?: StringFieldUpdateOperationsInput | string
    telefoneCandidato?: StringFieldUpdateOperationsInput | string
    curriculo?: StringFieldUpdateOperationsInput | string
    senhaCandidato?: StringFieldUpdateOperationsInput | string
    enderecoId?: IntFieldUpdateOperationsInput | number
  }

  export type cadastrarVagaUpsertWithoutCandidaturasInput = {
    update: XOR<cadastrarVagaUpdateWithoutCandidaturasInput, cadastrarVagaUncheckedUpdateWithoutCandidaturasInput>
    create: XOR<cadastrarVagaCreateWithoutCandidaturasInput, cadastrarVagaUncheckedCreateWithoutCandidaturasInput>
    where?: cadastrarVagaWhereInput
  }

  export type cadastrarVagaUpdateToOneWithWhereWithoutCandidaturasInput = {
    where?: cadastrarVagaWhereInput
    data: XOR<cadastrarVagaUpdateWithoutCandidaturasInput, cadastrarVagaUncheckedUpdateWithoutCandidaturasInput>
  }

  export type cadastrarVagaUpdateWithoutCandidaturasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    requisitos?: StringFieldUpdateOperationsInput | string
    salario?: StringFieldUpdateOperationsInput | string
    tipoContrato?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    skills?: cadastrarVagaUpdateskillsInput | string[]
    beneficios?: cadastrarVagaUpdatebeneficiosInput | string[]
    empresa?: cadastroEmpresaUpdateOneRequiredWithoutVagasNestedInput
  }

  export type cadastrarVagaUncheckedUpdateWithoutCandidaturasInput = {
    idVaga?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    requisitos?: StringFieldUpdateOperationsInput | string
    salario?: StringFieldUpdateOperationsInput | string
    tipoContrato?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    skills?: cadastrarVagaUpdateskillsInput | string[]
    beneficios?: cadastrarVagaUpdatebeneficiosInput | string[]
    empresaId?: IntFieldUpdateOperationsInput | number
  }

  export type cadastroCandidatoCreateWithoutEnderecoInput = {
    nomeCandidato: string
    emailCandidato: string
    telefoneCandidato: string
    curriculo?: string
    senhaCandidato: string
    candidaturas?: candidaturaCreateNestedManyWithoutCandidatoInput
  }

  export type cadastroCandidatoUncheckedCreateWithoutEnderecoInput = {
    idCandidato?: number
    nomeCandidato: string
    emailCandidato: string
    telefoneCandidato: string
    curriculo?: string
    senhaCandidato: string
    candidaturas?: candidaturaUncheckedCreateNestedManyWithoutCandidatoInput
  }

  export type cadastroCandidatoCreateOrConnectWithoutEnderecoInput = {
    where: cadastroCandidatoWhereUniqueInput
    create: XOR<cadastroCandidatoCreateWithoutEnderecoInput, cadastroCandidatoUncheckedCreateWithoutEnderecoInput>
  }

  export type cadastroEmpresaCreateWithoutEnderecoInput = {
    nomeEmpresa: string
    cnpj: string
    segmento: string
    emailCorporativo: string
    telefoneCorporativo: string
    senhaEmpresa: string
    vagas?: cadastrarVagaCreateNestedManyWithoutEmpresaInput
  }

  export type cadastroEmpresaUncheckedCreateWithoutEnderecoInput = {
    idEmpresa?: number
    nomeEmpresa: string
    cnpj: string
    segmento: string
    emailCorporativo: string
    telefoneCorporativo: string
    senhaEmpresa: string
    vagas?: cadastrarVagaUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type cadastroEmpresaCreateOrConnectWithoutEnderecoInput = {
    where: cadastroEmpresaWhereUniqueInput
    create: XOR<cadastroEmpresaCreateWithoutEnderecoInput, cadastroEmpresaUncheckedCreateWithoutEnderecoInput>
  }

  export type cadastroCandidatoUpsertWithoutEnderecoInput = {
    update: XOR<cadastroCandidatoUpdateWithoutEnderecoInput, cadastroCandidatoUncheckedUpdateWithoutEnderecoInput>
    create: XOR<cadastroCandidatoCreateWithoutEnderecoInput, cadastroCandidatoUncheckedCreateWithoutEnderecoInput>
    where?: cadastroCandidatoWhereInput
  }

  export type cadastroCandidatoUpdateToOneWithWhereWithoutEnderecoInput = {
    where?: cadastroCandidatoWhereInput
    data: XOR<cadastroCandidatoUpdateWithoutEnderecoInput, cadastroCandidatoUncheckedUpdateWithoutEnderecoInput>
  }

  export type cadastroCandidatoUpdateWithoutEnderecoInput = {
    nomeCandidato?: StringFieldUpdateOperationsInput | string
    emailCandidato?: StringFieldUpdateOperationsInput | string
    telefoneCandidato?: StringFieldUpdateOperationsInput | string
    curriculo?: StringFieldUpdateOperationsInput | string
    senhaCandidato?: StringFieldUpdateOperationsInput | string
    candidaturas?: candidaturaUpdateManyWithoutCandidatoNestedInput
  }

  export type cadastroCandidatoUncheckedUpdateWithoutEnderecoInput = {
    idCandidato?: IntFieldUpdateOperationsInput | number
    nomeCandidato?: StringFieldUpdateOperationsInput | string
    emailCandidato?: StringFieldUpdateOperationsInput | string
    telefoneCandidato?: StringFieldUpdateOperationsInput | string
    curriculo?: StringFieldUpdateOperationsInput | string
    senhaCandidato?: StringFieldUpdateOperationsInput | string
    candidaturas?: candidaturaUncheckedUpdateManyWithoutCandidatoNestedInput
  }

  export type cadastroEmpresaUpsertWithoutEnderecoInput = {
    update: XOR<cadastroEmpresaUpdateWithoutEnderecoInput, cadastroEmpresaUncheckedUpdateWithoutEnderecoInput>
    create: XOR<cadastroEmpresaCreateWithoutEnderecoInput, cadastroEmpresaUncheckedCreateWithoutEnderecoInput>
    where?: cadastroEmpresaWhereInput
  }

  export type cadastroEmpresaUpdateToOneWithWhereWithoutEnderecoInput = {
    where?: cadastroEmpresaWhereInput
    data: XOR<cadastroEmpresaUpdateWithoutEnderecoInput, cadastroEmpresaUncheckedUpdateWithoutEnderecoInput>
  }

  export type cadastroEmpresaUpdateWithoutEnderecoInput = {
    nomeEmpresa?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    segmento?: StringFieldUpdateOperationsInput | string
    emailCorporativo?: StringFieldUpdateOperationsInput | string
    telefoneCorporativo?: StringFieldUpdateOperationsInput | string
    senhaEmpresa?: StringFieldUpdateOperationsInput | string
    vagas?: cadastrarVagaUpdateManyWithoutEmpresaNestedInput
  }

  export type cadastroEmpresaUncheckedUpdateWithoutEnderecoInput = {
    idEmpresa?: IntFieldUpdateOperationsInput | number
    nomeEmpresa?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    segmento?: StringFieldUpdateOperationsInput | string
    emailCorporativo?: StringFieldUpdateOperationsInput | string
    telefoneCorporativo?: StringFieldUpdateOperationsInput | string
    senhaEmpresa?: StringFieldUpdateOperationsInput | string
    vagas?: cadastrarVagaUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type candidaturaCreateManyCandidatoInput = {
    idCandidatura?: number
    dataCandidatura?: Date | string
    status?: string
    vagaId: number
  }

  export type candidaturaUpdateWithoutCandidatoInput = {
    dataCandidatura?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    vaga?: cadastrarVagaUpdateOneRequiredWithoutCandidaturasNestedInput
  }

  export type candidaturaUncheckedUpdateWithoutCandidatoInput = {
    idCandidatura?: IntFieldUpdateOperationsInput | number
    dataCandidatura?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    vagaId?: IntFieldUpdateOperationsInput | number
  }

  export type candidaturaUncheckedUpdateManyWithoutCandidatoInput = {
    idCandidatura?: IntFieldUpdateOperationsInput | number
    dataCandidatura?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    vagaId?: IntFieldUpdateOperationsInput | number
  }

  export type cadastrarVagaCreateManyEmpresaInput = {
    idVaga?: number
    titulo: string
    descricao: string
    requisitos: string
    salario: string
    tipoContrato: string
    modalidade: string
    localizacao: string
    dataPublicacao?: Date | string
    status?: string
    skills?: cadastrarVagaCreateskillsInput | string[]
    beneficios?: cadastrarVagaCreatebeneficiosInput | string[]
  }

  export type cadastrarVagaUpdateWithoutEmpresaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    requisitos?: StringFieldUpdateOperationsInput | string
    salario?: StringFieldUpdateOperationsInput | string
    tipoContrato?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    skills?: cadastrarVagaUpdateskillsInput | string[]
    beneficios?: cadastrarVagaUpdatebeneficiosInput | string[]
    candidaturas?: candidaturaUpdateManyWithoutVagaNestedInput
  }

  export type cadastrarVagaUncheckedUpdateWithoutEmpresaInput = {
    idVaga?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    requisitos?: StringFieldUpdateOperationsInput | string
    salario?: StringFieldUpdateOperationsInput | string
    tipoContrato?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    skills?: cadastrarVagaUpdateskillsInput | string[]
    beneficios?: cadastrarVagaUpdatebeneficiosInput | string[]
    candidaturas?: candidaturaUncheckedUpdateManyWithoutVagaNestedInput
  }

  export type cadastrarVagaUncheckedUpdateManyWithoutEmpresaInput = {
    idVaga?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    requisitos?: StringFieldUpdateOperationsInput | string
    salario?: StringFieldUpdateOperationsInput | string
    tipoContrato?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    skills?: cadastrarVagaUpdateskillsInput | string[]
    beneficios?: cadastrarVagaUpdatebeneficiosInput | string[]
  }

  export type candidaturaCreateManyVagaInput = {
    idCandidatura?: number
    dataCandidatura?: Date | string
    status?: string
    candidatoId: number
  }

  export type candidaturaUpdateWithoutVagaInput = {
    dataCandidatura?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    candidato?: cadastroCandidatoUpdateOneRequiredWithoutCandidaturasNestedInput
  }

  export type candidaturaUncheckedUpdateWithoutVagaInput = {
    idCandidatura?: IntFieldUpdateOperationsInput | number
    dataCandidatura?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    candidatoId?: IntFieldUpdateOperationsInput | number
  }

  export type candidaturaUncheckedUpdateManyWithoutVagaInput = {
    idCandidatura?: IntFieldUpdateOperationsInput | number
    dataCandidatura?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    candidatoId?: IntFieldUpdateOperationsInput | number
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