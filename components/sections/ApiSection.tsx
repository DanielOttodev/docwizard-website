import Link from "next/link";
import { CopyCodeButton } from "./CopyCodeButton";

const CODE_TEXT = `# Generate a single document
curl -X POST https://api.docwizard.app/api/documents \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "templateId": "019f91ca-4d8a-70cc-b0a8-9d6a543db815",
    "documentName": "invoice-acme",
    "dataJson": {
      "ClientName": "Acme Corp",
      "Amount": "1500"
    }
  }'

# Response
{ "id": "019fa8f0-c281-7ebf-aa53-aeca9da7cfa5" }`;

export function ApiSection() {
  return (
    <section id="api" className="api-section">
      <div className="container">
        <div className="api-grid">
          <div>
            <span className="eyebrow">For developers</span>
            <h2>Generate documents from your own code</h2>
            <p>
              Every feature in DocWizard is available through a simple REST API. Create an API
              key from your dashboard and start generating documents in minutes.
            </p>
            <Link href="#" className="btn btn-outline">
              Read the API docs
            </Link>
          </div>

          <div className="code-window">
            <div className="code-window-bar">
              <div className="code-window-dots">
                <span />
                <span />
                <span />
              </div>
              <CopyCodeButton codeText={CODE_TEXT} />
            </div>
            <pre>
              <code>
                <span className="c"># Generate a single document</span>
                {"\n"}
                <span className="k">curl</span> -X POST https://api.docwizard.app/api/documents \
                {"\n"}
                {"  "}-H <span className="s">&quot;X-API-Key: YOUR_API_KEY&quot;</span> \
                {"\n"}
                {"  "}-H <span className="s">&quot;Content-Type: application/json&quot;</span> \
                {"\n"}
                {"  "}-d <span className="s">{"'{"}</span>
                {"\n"}
                <span className="s">{"    \"templateId\": \"019f91ca-4d8a-70cc-b0a8-9d6a543db815\","}</span>
                {"\n"}
                <span className="s">{"    \"documentName\": \"invoice-acme\","}</span>
                {"\n"}
                <span className="s">{"    \"dataJson\": {"}</span>
                {"\n"}
                <span className="s">{"      \"ClientName\": \"Acme Corp\","}</span>
                {"\n"}
                <span className="s">{"      \"Amount\": \"1500\""}</span>
                {"\n"}
                <span className="s">{"    }"}</span>
                {"\n"}
                <span className="s">{"  }'"}</span>
                {"\n\n"}
                <span className="c"># Response</span>
                {"\n"}
                <span className="p">{'{ "id": "019fa8f0-c281-7ebf-aa53-aeca9da7cfa5" }'}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
