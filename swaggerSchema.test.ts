import { expectTypeOf, test } from "vitest";
import { createNonEmptyString } from "./stringTypes";
import type { components, operations } from "./swaggerSchema";

type FinancialCommitmentGrouping = NonNullable<
  components["schemas"]["createFinancialCommitmentReport"]["groupings"]
>[number];
type KubernetesEfficiencyGrouping = NonNullable<
  components["schemas"]["createKubernetesEfficiencyReport"]["groupings"]
>[number];
type KubernetesEfficiencyExportGrouping = NonNullable<
  NonNullable<operations["createKubernetesEfficiencyReportExport"]["parameters"]["query"]>["groupings"]
>[number];

test("generated grouping types preserve fixed and dynamic values", () => {
  const owner = createNonEmptyString("owner");
  const app = createNonEmptyString("app");
  const ownerTag = `tag:${owner}` as const;
  const appLabel = `label:${app}` as const;

  expectTypeOf<"cost_type">().toMatchTypeOf<FinancialCommitmentGrouping>();
  expectTypeOf(ownerTag).toMatchTypeOf<FinancialCommitmentGrouping>();
  expectTypeOf<"cluster_id">().toMatchTypeOf<KubernetesEfficiencyGrouping>();
  expectTypeOf(appLabel).toMatchTypeOf<KubernetesEfficiencyGrouping>();
  expectTypeOf(appLabel).toMatchTypeOf<KubernetesEfficiencyExportGrouping>();

  expectTypeOf<string>().not.toMatchTypeOf<FinancialCommitmentGrouping>();
  expectTypeOf<"tag:">().not.toMatchTypeOf<FinancialCommitmentGrouping>();
  expectTypeOf<"tag:owner">().not.toMatchTypeOf<FinancialCommitmentGrouping>();
  expectTypeOf<"label:owner">().not.toMatchTypeOf<FinancialCommitmentGrouping>();
  expectTypeOf<string>().not.toMatchTypeOf<KubernetesEfficiencyGrouping>();
  expectTypeOf<"label:">().not.toMatchTypeOf<KubernetesEfficiencyGrouping>();
  expectTypeOf<"label:app">().not.toMatchTypeOf<KubernetesEfficiencyGrouping>();
  expectTypeOf<"tag:app">().not.toMatchTypeOf<KubernetesEfficiencyGrouping>();
});
