import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Resume from "@/views/resume/Resume.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(Resume, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
