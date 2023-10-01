import { createClient } from "@supabase/supabase-js";

const apiUrl = "https://zwajikcqjfpgkhhkkfyx.supabase.co";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3YWppa2NxamZwZ2toaGtrZnl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxNDUwNDQsImV4cCI6MjAxMTcyMTA0NH0.yQN9vhdk8Yr0zafQ3IKkl8E4kDKUva8r7E0_Ak9QCnU";

export const supabase = createClient(apiUrl, apiKey);
