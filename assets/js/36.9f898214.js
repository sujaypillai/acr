(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{474:function(e,t,r){"use strict";r.r(t);var s=r(65),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"quickstart-deploy-a-connected-registry-to-kubernetes-cluster"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#quickstart-deploy-a-connected-registry-to-kubernetes-cluster"}},[e._v("#")]),e._v(" Quickstart:  Deploy a connected registry to Kubernetes cluster")]),e._v(" "),r("p",[e._v("In this quickstart, you use "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/container-registry/container-registry-intro",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Container Registry"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://helm.sh/docs/intro/quickstart/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm 3"),r("OutboundLink")],1),e._v(" commands to deploy a connected registry Helm chart to a Kubernetes cluster. You can review the "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/container-registry/intro-connected-registry",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACR connected registry introduction"),r("OutboundLink")],1),e._v(" for details about the connected registry feature of Azure Container Registry. For more details on Helm charts, see "),r("a",{attrs:{href:"https://helm.sh/docs/topics/charts/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm documentation"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"supported-kubernetes-distributions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-kubernetes-distributions"}},[e._v("#")]),e._v(" Supported Kubernetes distributions")]),e._v(" "),r("h2",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/install-azure-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install or upgrade Azure CLI"),r("OutboundLink")],1),e._v(" to version >= 2.30.0\n"),r("ul",[r("li",[e._v("If you're using a local install, sign in with Azure CLI by using the "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/reference-index#az_login",target:"_blank",rel:"noopener noreferrer"}},[e._v("az login"),r("OutboundLink")],1),e._v(" command. To finish the authentication process, follow the steps displayed in your terminal. See "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/authenticate-azure-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sign in with Azure CLI"),r("OutboundLink")],1),e._v(" for additional sign-in options.")])])]),e._v(" "),r("li",[e._v("The Azure CLI commands in this article are formatted for the Bash shell. If you're using a different shell like PowerShell or Command Prompt, you may need to adjust line continuation characters or variable assignment lines accordingly. This article uses variables to minimize the amount of command editing required.")]),e._v(" "),r("li",[e._v("A connected registry resource in Azure as described in the "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/container-registry/quickstart-connected-registry-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create connected registry using the CLI"),r("OutboundLink")],1),e._v(" quickstart guide. Both, "),r("code",[e._v("ReadWrite")]),e._v(" and "),r("code",[e._v("ReadOnly")]),e._v(" modes will work for this scenario.")]),e._v(" "),r("li",[e._v("An up-and-running Kubernetes cluster. If you don't have one, you can create a cluster using one of these options:\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://kind.sigs.k8s.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes in Docker"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://rancher.com/docs/k3s/latest/quick-start/",target:"_blank",rel:"noopener noreferrer"}},[e._v("K3s: Lightweight Kubernetes"),r("OutboundLink")],1),e._v(" cluster.")]),e._v(" "),r("li",[e._v("Self-managed Kubernetes cluster using "),r("a",{attrs:{href:"https://cluster-api.sigs.k8s.io/user/quick-start.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cluster API"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("An "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/aks/kubernetes-walkthrough",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Kubernetes Service"),r("OutboundLink")],1),e._v(" cluster")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://helm.sh/docs/intro/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm 3"),r("OutboundLink")],1),e._v(" installed.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://kubernetes.io/docs/tasks/tools/#kubectl",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubectl"),r("OutboundLink")],1),e._v(" installed.")]),e._v(" "),r("li",[e._v("A "),r("code",[e._v("kubeconfig")]),e._v(" file and context pointing to your cluster.")])]),e._v(" "),r("h2",{attrs:{id:"node-setup-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node-setup-requirements"}},[e._v("#")]),e._v(" Node Setup Requirements")]),e._v(" "),r("p",[e._v('The helm chart installs Kubernetes resources used to run a connected registry on your Kubernetes cluster. The connected registry runs as a singleton pod on one node of the cluster. The user is responsible for configuring each node of the cluster that will pull from this connected registry. To pull from the connected registry over HTTPS, the user is responsible for configuring SSL certs on each node. To pull from the connected registry of HTTP, the user must update their container runtime settings to recognize the connected registry as "insecure". See more information below.')]),e._v(" "),r("blockquote",[r("p",[e._v("[!WARNING]\nPulling from and pushing to the connected registry over HTTP is not secure. It is recommended to setup TLS certificates.")])]),e._v(" "),r("h2",{attrs:{id:"fetch-the-connected-registry-helm-chart"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fetch-the-connected-registry-helm-chart"}},[e._v("#")]),e._v(" Fetch the Connected Registry Helm Chart")]),e._v(" "),r("p",[e._v("From a cluster node, run the following commands to install the connected registry helm chart.")]),e._v(" "),r("ol",[r("li",[e._v("Set environment variable to enable OCI artifact support in the Helm 3 client.")])]),e._v(" "),r("p",[r("code",[e._v("export HELM_EXPERIMENTAL_OCI=1")])]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[e._v("Pull the connected registry helm chart from MCR")])]),e._v(" "),r("p",[r("code",[e._v("helm chart pull mcr.microsoft.com/acr/connected-registry/chart:0.1.0")])]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("Export the helm chart")])]),e._v(" "),r("p",[r("code",[e._v("helm chart export mcr.microsoft.com/acr/connected-registry/chart:0.1.0")])]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[e._v("View the helm chart")])]),e._v(" "),r("p",[r("code",[e._v("helm show chart connected-registry")])]),e._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[e._v("Get the connection string for your connected registry. This command generates "),r("code",[e._v("password1")]),e._v(" of the corresponding sync token resource.")])]),e._v(" "),r("div",{staticClass:"language-cli line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("az acr connected-registry get-settings \\\n  --registry $REGISTRY_NAME \\\n  --name $CONNECTED_REGISTRY_RW \\\n  --generate-password 1 \\\n  --parent-protocol https\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br")])]),r("p",[e._v("Command output includes the registry connection string and related settings. The following example output shows the connection string for the connected registry named "),r("em",[e._v("myconnectedregistry")]),e._v(" with parent registry "),r("em",[e._v("contosoregistry")]),e._v(".")]),e._v(" "),r("div",{staticClass:"language-json line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"ACR_REGISTRY_CONNECTION_STRING"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ConnectedRegistryName=myconnectedregistry;SyncTokenName=myconnectedregistry-sync-token;SyncTokenPassword=xxxxxxxxxxxxxxxx;ParentGatewayEndpoint=contosoregistry.eastus.data.azurecr.io;ParentEndpointProtocol=https"')]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("h2",{attrs:{id:"helm-chart-components"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#helm-chart-components"}},[e._v("#")]),e._v(" Helm Chart Components")]),e._v(" "),r("h3",{attrs:{id:"storage-class"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#storage-class"}},[e._v("#")]),e._v(" Storage Class")]),e._v(" "),r("p",[e._v("Decide what storage class resource is appropriate for your Kubernetes distribution. The user is required to provide an existing storage class resource name when deploying the connected registry. You can research your distribution to learn more on predefined storage classes or how to create your own. For instance, see predefined storage resources on AKS at "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/aks/concepts-storage#storage-classes",target:"_blank",rel:"noopener noreferrer"}},[e._v("Concepts - Storage in Azure Kubernetes Services (AKS)"),r("OutboundLink")],1),e._v(". To view storage class resources on your cluster, run")]),e._v(" "),r("p",[r("code",[e._v("kubectl get sc")])]),e._v(" "),r("h2",{attrs:{id:"https-communication-with-the-connected-registry"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#https-communication-with-the-connected-registry"}},[e._v("#")]),e._v(" HTTPS communication with the connected registry")]),e._v(" "),r("h3",{attrs:{id:"pki-certificate-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pki-certificate-requirements"}},[e._v("#")]),e._v(" PKI Certificate Requirements")]),e._v(" "),r("p",[e._v("To establish a secure HTTPS communication with the connected registry, we use PKI certificates during deployment of the connected registry chart. Here are the general requirements for these PKI certs")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("The certificates and keys must be "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/X.509",target:"_blank",rel:"noopener noreferrer"}},[e._v("X.509"),r("OutboundLink")],1),e._v(" certificates and "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail",target:"_blank",rel:"noopener noreferrer"}},[e._v("Privacy-Enhanced Mail"),r("OutboundLink")],1),e._v(" encoded.")])]),e._v(" "),r("li",[r("p",[e._v("To configure the connected registry (server) certificate during installation, you must provide")])])]),e._v(" "),r("ul",[r("li",[e._v("A public certificate")]),e._v(" "),r("li",[e._v("A private key")])]),e._v(" "),r("blockquote",[r("p",[e._v("[!IMPORTANT]\nFor early proof-of-concept stages, self-signed certificates might be an option but in general, proper PKI certificates signed by a Certificate Authority (CA) should be procured and used.")])]),e._v(" "),r("h3",{attrs:{id:"create-the-pki-certificate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-the-pki-certificate"}},[e._v("#")]),e._v(" Create the PKI certificate")]),e._v(" "),r("ol",[r("li",[e._v("Choose a service cluster IP that you will use to deploy the connected registry. The connected registry will be deployed behind a service that is accessible through this IP. Selecting the IP beforehand allows you to create the SSL cert with the IP as the subject alternate name (SAN).")])]),e._v(" "),r("p",[e._v("Kubernetes uses a set IP range when deploying services. The IP address that you choose must be in the SERVICE_CLUSTER_IP_RANGE CIDR range that is configured for your cluster. You can view the available service cluster ip range in the kube-controller pod by running")]),e._v(" "),r("p",[r("code",[e._v("kubectl get pod kube-controller-manager-<node> -n kube-system -o jsonpath='{.spec.containers[0].command}'")])]),e._v(" "),r("p",[e._v("and viewing the --service-cluster-ip-range setting.")]),e._v(" "),r("p",[e._v("If the selected service IP is invalid, you will see a "),r("code",[e._v("422 Unprocessable Entity")]),e._v(" HTTP error response from Kubernetes at deployment time.")]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[e._v("Create self-signed SSL cert with connected-registry service IP as the SAN\na. "),r("code",[e._v("mkdir /certs")]),e._v("\nb. Run\n"),r("code",[e._v('openssl req -newkey rsa:4096 -nodes -sha256 -keyout /certs/mycert.key -x509 -days 365 -out /certs/mycert.crt -addext "subjectAltName = IP:<service IP>"')])])]),e._v(" "),r("blockquote",[r("p",[e._v("[!IMPORTANT]\nFor early proof-of-concept stages, self-signed certificates might be an option but in general, proper PKI certificates signed by a Certificate Authority (CA) should be procured and used.")])]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("Get base64 encoded strings of the certificate and key files")])]),e._v(" "),r("p",[r("code",[e._v("export TLS_CRT=$(cat mycert.crt | base64 -w0)")]),e._v(" "),r("code",[e._v("export TLS_KEY=$(sudo cat mycert.key | base64 -w0)")])]),e._v(" "),r("h3",{attrs:{id:"deploy-the-connected-registry"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-connected-registry"}},[e._v("#")]),e._v(" Deploy the Connected Registry")]),e._v(" "),r("ol",[r("li",[e._v('Deploy the connected registry, provide your connected registry connection string and existing Kubernetes storage class name. The below command deploys the release "connected-registry". Provide the base64-encoded strings of the public certificate and private key in the  '),r("code",[e._v("tls.crt")]),e._v(" and "),r("code",[e._v("tls.key")]),e._v(" values, respectively.")])]),e._v(" "),r("p",[r("code",[e._v('helm upgrade --namespace connected-registry --create-namespace --install --set connectionString="<insert connection string>" --set pvc.storageClassName="<insert storage class name>" --set image="mcr.microsoft.com/acr/connected-registry:0.6.0" --set tls.crt=$TLS_CRT --set tls.key=$TLS_KEY connected-registry ./connected-registry')])]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[e._v("To view the deployed connected registry resources, run")])]),e._v(" "),r("p",[r("code",[e._v("kubectl get services,deployments,pods,secrets -n connected-registry")])]),e._v(" "),r("p",[e._v("Note: you will see the connected registry service resource running under the cluster IP you selected.")]),e._v(" "),r("h3",{attrs:{id:"configure-each-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configure-each-node"}},[e._v("#")]),e._v(" Configure Each Node")]),e._v(" "),r("p",[e._v("The following steps assume "),r("code",[e._v("containerd")]),e._v(" is the container runtime of the Kubernetes cluster.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Create "),r("code",[e._v("/etc/containerd/certs.d/<service IP>:443")]),e._v(" directory on each node or server that will access this connected registry. Service IP is that of the connected-registry service.")])]),e._v(" "),r("li",[r("p",[e._v("Copy the CA cert corresponding to the SSL cert to this directory.")])])]),e._v(" "),r("p",[e._v("Note: If using a self-signed cert, copy "),r("code",[e._v("mycert.crt")]),e._v(" to "),r("code",[e._v("ca.crt")]),e._v(" and place "),r("code",[e._v("ca.crt")]),e._v(" in this directory.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("You should have the following file structure on the node:\n")])])]),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ tree /etc/containerd/certs.d\n/etc/containerd/certs.d\n└── <service IP>:443\n  └── ca.crt\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br")])]),r("ol",{attrs:{start:"3"}},[r("li",[e._v("Update "),r("code",[e._v("/etc/containerd/config.toml")]),e._v(" so that containerd can find the directory with the trusted CA cert. Containerd will look in this directory first during runtime operations to the connected registry.")])]),e._v(" "),r("p",[e._v("Paste the following section into the file.")]),e._v(" "),r("div",{staticClass:"language-toml line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-toml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),r("span",{pre:!0,attrs:{class:"token table class-name"}},[e._v('plugins."io.containerd.grpc.v1.cri".registry')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token key property"}},[e._v("config_path")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/etc/containerd/certs.d"')]),e._v("     \n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),r("span",{pre:!0,attrs:{class:"token table class-name"}},[e._v('plugins."io.containerd.grpc.v1.cri".registry.configs."<service IP>:443".tls')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token key property"}},[e._v("ca_file")]),e._v("   "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/etc/containerd/certs.d/<service IP>:443/ca.crt"')]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br")])]),r("ol",{attrs:{start:"4"}},[r("li",[e._v("Restart your container runtime. For containerd, use the following command")])]),e._v(" "),r("p",[r("code",[e._v("systemctl restart containerd")])]),e._v(" "),r("h3",{attrs:{id:"pull-from-the-connected-registry"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pull-from-the-connected-registry"}},[e._v("#")]),e._v(" Pull from the Connected Registry")]),e._v(" "),r("p",[e._v("For more information, reference "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/container-registry/pull-images-from-connected-registry",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pull images from a connected registry"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("ol",[r("li",[e._v("Get credentials corresponding to a client token linked to the connected registry. For more information, see "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/container-registry/overview-connected-registry-access#manage-client-tokens",target:"_blank",rel:"noopener noreferrer"}},[e._v("Manage client tokens"),r("OutboundLink")],1),e._v(". The following example generates "),r("code",[e._v("password1")]),e._v(" for token "),r("em",[e._v("pulluser")]),e._v(" and registry "),r("em",[e._v("contosoregistry")]),e._v(".")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("TOKEN_PWD=$(az acr token credential generate \\\n  --name pulluser --registry contosoregistry --expiration-in-days 30 \\\n  --password1 --query 'passwords[0].value' --output tsv)\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("ol",{attrs:{start:"2"}},[r("li",[e._v("Create a secret with client token credentials. This client token must be linked to your connected registry. For more information, see "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/container-registry/overview-connected-registry-access#manage-client-tokens",target:"_blank",rel:"noopener noreferrer"}},[e._v("Manage client tokens"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("p",[r("code",[e._v("kubectl create secret docker-registry regcred --docker-server=<service IP>:443 --docker-username=jeburkeclient --docker-password=<insert TOKEN_PWD> --docker-email=someemail")])]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("Create a deployment that pulls from the connected registry over HTTPS.")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('\tcat <<EOF | kubectl apply -f -\n\tapiVersion: apps/v1\n\tkind: Deployment\n\tmetadata:\n\t  name: hello-world-deployment\n\t  namespace: default\n\t  labels:\n\t    app.kubernetes.io/name: "connected-registry"\n\tspec:\n\t  replicas: 3\n\t  selector:\n\t    matchLabels:\n\t      app.kubernetes.io/name: "connected-registry"\n\t  template:\n\t    metadata:\n\t      labels:\n\t        app.kubernetes.io/name: "connected-registry"\n\t    spec:\n\t      containers:\n\t       - name: hello-world\n\t         image: <service IP>:443/hello-world:v1\n\t      imagePullSecrets:\n\t       - name: regcred\nEOF\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br"),r("span",{staticClass:"line-number"},[e._v("13")]),r("br"),r("span",{staticClass:"line-number"},[e._v("14")]),r("br"),r("span",{staticClass:"line-number"},[e._v("15")]),r("br"),r("span",{staticClass:"line-number"},[e._v("16")]),r("br"),r("span",{staticClass:"line-number"},[e._v("17")]),r("br"),r("span",{staticClass:"line-number"},[e._v("18")]),r("br"),r("span",{staticClass:"line-number"},[e._v("19")]),r("br"),r("span",{staticClass:"line-number"},[e._v("20")]),r("br"),r("span",{staticClass:"line-number"},[e._v("21")]),r("br"),r("span",{staticClass:"line-number"},[e._v("22")]),r("br"),r("span",{staticClass:"line-number"},[e._v("23")]),r("br"),r("span",{staticClass:"line-number"},[e._v("24")]),r("br")])]),r("h2",{attrs:{id:"http-not-secure-communication-with-the-connected-registry"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-not-secure-communication-with-the-connected-registry"}},[e._v("#")]),e._v(" HTTP (not secure) communication with the connected registry")]),e._v(" "),r("blockquote",[r("p",[e._v("[!WARNING]\nPulling from and pushing to the connected registry over HTTP is not secure. It is recommended to setup SSL certificates. You should use this option only during early stages of development.")])]),e._v(" "),r("h3",{attrs:{id:"deploy-the-connected-registry-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-connected-registry-2"}},[e._v("#")]),e._v(" Deploy the Connected Registry")]),e._v(" "),r("ol",[r("li",[e._v('Deploy the connected registry, provide your connected registry connection string and existing Kubernetes storage class name. The below command deploys the release "connected-registry".')])]),e._v(" "),r("p",[r("code",[e._v('helm upgrade --namespace connected-registry --create-namespace --install --set connectionString="<insert connection string>" --set httpEnabled=true --set pvc.storageClassName="<insert storage class name>" --set image="mcr.microsoft.com/acr/connected-registry:0.6.0" connected-registry ./connected-registry')])]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[e._v("View the deployed connected registry resources")])]),e._v(" "),r("p",[r("code",[e._v("kubectl get services,deployments,pods,secrets -n connected-registry")])]),e._v(" "),r("h3",{attrs:{id:"configure-each-node-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configure-each-node-2"}},[e._v("#")]),e._v(" Configure Each Node")]),e._v(" "),r("ol",[r("li",[e._v("Get the cluster IP of the deployed connected registry service. This is the endpoint we will use to pull from the connected registry.")])]),e._v(" "),r("p",[r("code",[e._v("export SERVICE_IP=$(kubectl get svc {connected registry name} -n connected-registry -o jsonpath='{.spec.clusterIP}')")])]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[e._v('Add the connected registry endpoint "$(SERVICE_IP):80" as "insecure" per your container runtime settings on '),r("strong",[e._v("each node")]),e._v(" of your cluster that will access this connected registry. For containerd, go to /etc/containerd/config.toml and add the following settings")])]),e._v(" "),r("div",{staticClass:"language-toml line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-toml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),r("span",{pre:!0,attrs:{class:"token table class-name"}},[e._v('plugins."io.containerd.grpc.v1.cri".registry')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),r("span",{pre:!0,attrs:{class:"token table class-name"}},[e._v('plugins."io.containerd.grpc.v1.cri".registry.mirrors')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),r("span",{pre:!0,attrs:{class:"token table class-name"}},[e._v('plugins."io.containerd.grpc.v1.cri".registry.mirrors."<service IP>:80"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n      "),r("span",{pre:!0,attrs:{class:"token key property"}},[e._v("endpoint")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://<service IP>:80"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),r("span",{pre:!0,attrs:{class:"token table class-name"}},[e._v('plugins."io.containerd.grpc.v1.cri".registry.configs')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),r("span",{pre:!0,attrs:{class:"token table class-name"}},[e._v('plugins."io.containerd.grpc.v1.cri".registry.configs."<service IP>:80".tls')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n      "),r("span",{pre:!0,attrs:{class:"token key property"}},[e._v("insecure_skip_verify")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br")])]),r("ol",{attrs:{start:"3"}},[r("li",[e._v("Restart your container runtime. For containerd, use the following command")])]),e._v(" "),r("p",[r("code",[e._v("systemctl restart containerd")])]),e._v(" "),r("h3",{attrs:{id:"pull-from-the-connected-registry-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pull-from-the-connected-registry-2"}},[e._v("#")]),e._v(" Pull from the Connected Registry")]),e._v(" "),r("p",[e._v("For more information, reference "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/container-registry/pull-images-from-connected-registry",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pull images from a connected registry"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("ol",[r("li",[e._v("Get credentials corresponding to a client token linked to the connected registry. For more information, see "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/container-registry/overview-connected-registry-access#manage-client-tokens",target:"_blank",rel:"noopener noreferrer"}},[e._v("Manage client tokens"),r("OutboundLink")],1),e._v(". The following example generates "),r("code",[e._v("password1")]),e._v(" for token "),r("em",[e._v("pulluser")]),e._v(" and registry "),r("em",[e._v("contosoregistry")]),e._v(".")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("TOKEN_PWD=$(az acr token credential generate \\\n  --name pulluser --registry contosoregistry --expiration-in-days 30 \\\n  --password1 --query 'passwords[0].value' --output tsv)\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("ol",{attrs:{start:"2"}},[r("li",[e._v("Create a secret with client token credentials. This client token must be linked to your connected registry. For more information, see "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/container-registry/overview-connected-registry-access#manage-client-tokens",target:"_blank",rel:"noopener noreferrer"}},[e._v("Manage client tokens"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("p",[r("code",[e._v("kubectl create secret docker-registry regcred --docker-server=<service IP>:80 --docker-username=jeburkeclient --docker-password=<insert TOKEN_PWD> --docker-email=someemail")])]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("Create a deployment that pulls from the connected registry over HTTP.")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('\tcat <<EOF | kubectl apply -f -\n\tapiVersion: apps/v1\n\tkind: Deployment\n\tmetadata:\n\t  name: hello-world-deployment\n\t  namespace: default\n\t  labels:\n\t    app.kubernetes.io/name: "connected-registry"\n\tspec:\n\t  replicas: 3\n\t  selector:\n\t    matchLabels:\n\t      app.kubernetes.io/name: "connected-registry"\n\t  template:\n\t    metadata:\n\t      labels:\n\t        app.kubernetes.io/name: "connected-registry"\n\t    spec:\n\t      containers:\n\t       - name: hello-world\n\t         image: <service IP>:80/hello-world:v1\n\t      imagePullSecrets:\n\t       - name: regcred\nEOF\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br"),r("span",{staticClass:"line-number"},[e._v("13")]),r("br"),r("span",{staticClass:"line-number"},[e._v("14")]),r("br"),r("span",{staticClass:"line-number"},[e._v("15")]),r("br"),r("span",{staticClass:"line-number"},[e._v("16")]),r("br"),r("span",{staticClass:"line-number"},[e._v("17")]),r("br"),r("span",{staticClass:"line-number"},[e._v("18")]),r("br"),r("span",{staticClass:"line-number"},[e._v("19")]),r("br"),r("span",{staticClass:"line-number"},[e._v("20")]),r("br"),r("span",{staticClass:"line-number"},[e._v("21")]),r("br"),r("span",{staticClass:"line-number"},[e._v("22")]),r("br"),r("span",{staticClass:"line-number"},[e._v("23")]),r("br"),r("span",{staticClass:"line-number"},[e._v("24")]),r("br")])]),r("ol",{attrs:{start:"4"}},[r("li",[e._v("Run "),r("code",[e._v("kubectl get pods")]),e._v(" and see your hello-world image was pulled from the connected registry.")])]),e._v(" "),r("h2",{attrs:{id:"uninstall-connected-registry"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uninstall-connected-registry"}},[e._v("#")]),e._v(" Uninstall Connected Registry")]),e._v(" "),r("ol",[r("li",[e._v('To simulate delete of all resources deployed in the helm release with name "connected-registry", run')])]),e._v(" "),r("p",[r("code",[e._v("helm uninstall connected-registry --dry-run")])]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[e._v('To delete all resources deployed in the helm release with name "connected-registry", run')])]),e._v(" "),r("p",[r("code",[e._v("helm uninstall connected-registry")])]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("Deactivate your connected registry resource before deploying it again.")])]),e._v(" "),r("p",[r("code",[e._v("az acr connected-registry deactivate -r contosoregistry -n myconnectedregistry")])])])}),[],!1,null,null,null);t.default=n.exports}}]);