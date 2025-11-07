import { mergeExpects, mergeTests } from "@playwright/test";
import { test as test1 } from "./demo-fixture"
import { test as test2 } from "./demo-fixture1";

export const test = mergeTests(test1,test2);