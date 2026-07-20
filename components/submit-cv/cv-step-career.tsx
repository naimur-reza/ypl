"use client";

import { SelectWithOthers } from "@/components/ui/select-with-others";
import {
  INDUSTRIES,
  POSITIONS,
  QUALIFICATIONS_ACADEMIC,
  QUALIFICATIONS_PROFESSIONAL,
} from "@/lib/candidate-options";
import type { DepartmentOption, RoleOption } from "@/hooks/use-departments-and-roles";

type FormApi = {
  AppField: React.ComponentType<{ name: string; children: (field: any) => React.ReactNode }>;
  Subscribe: React.ComponentType<{
    selector: (state: any) => any;
    children: (value: any) => React.ReactNode;
  }>;
  setFieldValue: (name: string, value: string) => void;
  values: Record<string, any>;
};

export function CVStepCareer({
  form,
  departments,
  roles,
  onDepartmentNameChange,
}: {
  form: FormApi;
  departments: DepartmentOption[];
  roles: RoleOption[];
  onDepartmentNameChange: (name: string, resetRole: () => void) => void;
}) {
  // Filter out any "Others" entries from database to avoid duplicates
  const departmentNames = [...new Set(departments.map((d) => d.name).filter((n) => n && !n.toLowerCase().startsWith("other")))];
  const roleNames = [...new Set(roles.map((r) => r.name).filter((n) => n && !n.toLowerCase().startsWith("other")))];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-1">
      <div className="grid gap-6 sm:grid-cols-2">
        <form.AppField name="department">
          {(field: any) => (
            <SelectWithOthers
              label="Primary Department"
              value={field.state.value}
              onValueChange={(val: string) => {
                field.handleChange(val);
                onDepartmentNameChange(val, () => form.setFieldValue("role", ""));
              }}
              options={departmentNames}
              othersPlaceholder="e.g. Legal, Research & Development"
            />
          )}
        </form.AppField>
        <form.Subscribe selector={(state: any) => [state.values.department, state.values.role] as const}>
          {([deptName, roleName]: [string, string]) => (
            <form.AppField name="role">
              {(field: any) => (
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Specific Role
                  </label>
                  <SelectWithOthers
                    value={field.state.value}
                    onValueChange={field.handleChange}
                    options={roleNames}
                    disabled={!deptName}
                    placeholder={deptName ? "Select a role" : "Select a department first"}
                    othersPlaceholder="e.g. Data Analyst, Product Manager"
                  />
                </div>
              )}
            </form.AppField>
          )}
        </form.Subscribe>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <form.AppField name="currentPosition">
          {(field: any) => (
            <SelectWithOthers
              label="Position Level"
              value={field.state.value}
              onValueChange={field.handleChange}
              options={[...POSITIONS]}
              othersPlaceholder="e.g. Senior Manager, Director, VP"
            />
          )}
        </form.AppField>
        <form.AppField name="industry">
          {(field: any) => (
            <SelectWithOthers
              label="Target Industry"
              value={field.state.value}
              onValueChange={field.handleChange}
              options={[...INDUSTRIES]}
              othersPlaceholder="e.g. Pharmaceuticals, FMCG"
            />
          )}
        </form.AppField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <form.AppField name="totalExperience">
          {(field: any) => (
            <field.Input
              label="Total Experience"
              placeholder="e.g. 5 years or 3 years 6 months"
            />
          )}
        </form.AppField>
        <form.AppField name="educationalQualification">
          {(field: any) => (
            <SelectWithOthers
              label="Academic Qualification"
              value={field.state.value}
              onValueChange={field.handleChange}
              options={[...QUALIFICATIONS_ACADEMIC]}
              othersPlaceholder="e.g. BSc in Computer Science"
            />
          )}
        </form.AppField>
        <form.AppField name="professionalQualification">
          {(field: any) => (
            <SelectWithOthers
              label="Professional Qualification"
              value={field.state.value}
              onValueChange={field.handleChange}
              options={[...QUALIFICATIONS_PROFESSIONAL]}
              othersPlaceholder="e.g. PMP, Six Sigma"
            />
          )}
        </form.AppField>
      </div>
    </div>
  );
}
