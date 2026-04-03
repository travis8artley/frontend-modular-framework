# Decisions

## ADR-001: Registry-driven route assembly

- Status: accepted
- Decision: Use a typed `ModuleRegistry` instead of ad-hoc arrays.
- Why: Makes route ownership explicit and catches duplicates early.

## ADR-002: Feature-first boundaries

- Status: accepted
- Decision: Features export metadata consumed by framework code.
- Why: Keeps domain logic independent from infrastructure concerns.

## ADR-003: Deterministic route ordering

- Status: accepted
- Decision: Sort route output by path in `list()`.
- Why: Produces stable snapshots and easier test assertions.
