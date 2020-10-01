.PHONY: build install lint lint-fix run

install:
	npm install

build:
	CI=false npm run build

run:
	npm start

lint:
	npx eslint src --ext .ts,.tsx

lint-fix:
	npx eslint src --ext .ts,.tsx --fix
