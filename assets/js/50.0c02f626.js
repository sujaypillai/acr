(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{454:function(s,a,t){"use strict";t.r(a);var e=t(65),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"quick-docker-build-on-an-existing-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-docker-build-on-an-existing-registry"}},[s._v("#")]),s._v(" Quick docker build on an existing registry")]),s._v(" "),t("p",[s._v("The sample shows how to schedule a deployment which will perform a quick docker build on an existing registry from a source located in a GitHub repository. The tag of the image is derived from the "),t("code",[s._v("taskRunName")]),s._v(" provided during deployment.")]),s._v(" "),t("h2",{attrs:{id:"deploy-the-task"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-task"}},[s._v("#")]),s._v(" Deploy the Task")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("registry")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("az deployment group create "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -g mytaskrunrg "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --template-file azuredeploy.json "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --parameters azuredeploy.parameters.json "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --parameters "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("taskRunName")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mytaskrunwithidentity "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --query "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'properties.outputs.registry.value'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -o tsv"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("registry")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mytaskrunregistry\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("repository")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("helloworld-node\naz acr repository show-tags -n "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$registry")]),s._v(" --repository "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$repository")]),s._v(" --detail -o table\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);