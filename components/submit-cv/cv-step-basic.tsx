"use client";

import { SelectItem } from "@/components/ui/select";
import { LOCATIONS } from "@/lib/candidate-options";

type FormApi = {
  AppField: React.ComponentType<{ name: string; children: (field: any) => React.ReactNode }>;
  AppForm: React.ComponentType<{ children: React.ReactNode }>;
  Subscribe: React.ComponentType<{
    selector: (state: any) => any;
    children: (value: any) => React.ReactNode;
  }>;
};

export function CVStepBasic({ form }: { form: FormApi }) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-1">
      <div className="grid gap-6 sm:grid-cols-2">
        <form.AppField name="fullName">
          {(field: any) => <field.Input label="Full Name *" required />}
        </form.AppField>
        <form.AppField name="email">
          {(field: any) => <field.Input label="Email Address *" type="email" required />}
        </form.AppField>
        <form.AppField name="mobileNumber">
          {(field: any) => <field.Input label="Mobile Number *" required />}
        </form.AppField>
        <form.AppField name="location">
          {(field: any) => (
            <field.Select label="Preferred Location *">
              {LOCATIONS.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </field.Select>
          )}
        </form.AppField>
        <form.Subscribe selector={(state: any) => state.values.location}>
          {(location: string) =>
            location === "Outside Bangladesh" && (
              <form.AppField name="nationality">
                {(field: any) => (
                  <field.Input
                    label="Nationality"
                    placeholder="Enter your nationality"
                    required
                  />
                )}
              </form.AppField>
            )
          }
        </form.Subscribe>
      </div>
    </div>
  );
}
