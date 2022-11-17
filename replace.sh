grep -r --include=\*.html "search_pattern" search_directory
ex) grep -r --include=\*.bpmn 172.30.13.17 ubot_bpmn

find search_directory/ -name "*.html" -exec sed -i "s/foo/bar/g" {} \;
ex) find ubot_bpmn/ -name "*.bpmn" -exec sed -i "s/172.30.13.17/172.30.13.15/g" {} \;
