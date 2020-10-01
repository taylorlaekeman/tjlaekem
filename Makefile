.PHONY: build, install, lint, lint-fix

install:
	npm install

build:
	npm run build

run:
	npm start

lint:
	npx eslint src --ext .ts,.tsx

lint-fix:
	npx eslint src --ext .ts,.tsx --fix
