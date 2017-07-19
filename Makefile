SHELL=/bin/bash
REPO=profile
BRANCH=master

upload:
	git add .
	git commit -m "naive"
	git push $(REPO) $(BRANCH)
