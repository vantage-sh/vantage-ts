import { expectTypeOf, test } from "vitest";
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
  expectTypeOf<"cost_type">().toMatchTypeOf<FinancialCommitmentGrouping>();
  expectTypeOf<"tag:owner">().toMatchTypeOf<FinancialCommitmentGrouping>();
  expectTypeOf<"cluster_id">().toMatchTypeOf<KubernetesEfficiencyGrouping>();
  expectTypeOf<"label:app">().toMatchTypeOf<KubernetesEfficiencyGrouping>();
  expectTypeOf<"label:app">().toMatchTypeOf<KubernetesEfficiencyExportGrouping>();

  expectTypeOf<string>().not.toMatchTypeOf<FinancialCommitmentGrouping>();
  expectTypeOf<"label:owner">().not.toMatchTypeOf<FinancialCommitmentGrouping>();
  expectTypeOf<string>().not.toMatchTypeOf<KubernetesEfficiencyGrouping>();
  expectTypeOf<"tag:app">().not.toMatchTypeOf<KubernetesEfficiencyGrouping>();
});
