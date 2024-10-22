/**
 * @packageDocumentation
 * @module api.functional
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, IPropagation, Resolved } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

/**
 * @controller AppController.getHello
 * @path GET /
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getHello(
  connection: IConnection,
): Promise<getHello.Output> {
  return !!connection.simulate
    ? getHello.simulate(connection)
    : PlainFetcher.propagate<any>(connection, {
        ...getHello.METADATA,
        template: getHello.METADATA.path,
        path: getHello.path(),
      });
}
export namespace getHello {
  export type Output = IPropagation<
    {
      200: {
        message: string;
        date: string;
      };
    },
    200
  >;

  export const METADATA = {
    method: "GET",
    path: "/",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = () => "/";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<{
    message: string;
    date: string;
  }> =>
    typia.random<{
      message: string;
      date: string;
    }>(g);
  export const simulate = (connection: IConnection): Output => {
    return {
      success: true,
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
      data: random(
        "object" === typeof connection.simulate && null !== connection.simulate
          ? connection.simulate
          : undefined,
      ),
    } as Output;
  };
}
